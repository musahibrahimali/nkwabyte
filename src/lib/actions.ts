'use server';

import { z } from 'zod';
import { enhanceCaseStudy as enhanceCaseStudyFlow } from '@/ai/flows/enhance-case-study';
import { nkwabyteChat } from '@/ai/flows/nkwabyte-chat-flow';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just log the data.
  console.log('Contact form submitted:');
  console.log(validatedFields.data);

  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    errors: {},
  };
}


const enhancerFormSchema = z.object({
    description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
});

export async function enhanceCaseStudyAction(prevState: any, formData: FormData) {
    const validatedFields = enhancerFormSchema.safeParse({
        description: formData.get('description'),
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            message: validatedFields.error.flatten().fieldErrors.description?.[0] || 'Invalid input.',
        };
    }

    try {
        const result = await enhanceCaseStudyFlow({ description: validatedFields.data.description });
        return {
            ...prevState,
            tools: result.toolsUsed,
            message: 'Successfully enhanced case study.',
        };
    } catch (error) {
        console.error(error);
        return {
            ...prevState,
            message: 'An error occurred while enhancing the case study. Please try again.',
        };
    }
}


const chatHistorySchema = z.array(
    z.object({
        role: z.enum(['user', 'model']),
        parts: z.array(z.object({ text: z.string() })),
    })
);

export async function askNkwabyteAssistant(prevState: any, formData: FormData) {
    const message = formData.get('message') as string;
    const historyString = formData.get('history') as string;

    if (!message || message.trim().length === 0) {
        return {
            ...prevState,
            error: "Please enter a message."
        };
    }

    let history = [];
    try {
        const parsedHistory = JSON.parse(historyString);
        const validatedHistory = chatHistorySchema.safeParse(parsedHistory);
        if (validatedHistory.success) {
            history = validatedHistory.data;
        } else {
             console.error("Invalid history format", validatedHistory.error);
        }
    } catch (e) {
        console.error("Failed to parse history", e);
    }
    
    try {
        const result = await nkwabyteChat({ history, message });
        
        const newHistory = [
            ...history,
            { role: 'user', parts: [{ text: message }] },
            { role: 'model', parts: [{ text: result.response }] },
        ];

        return {
            history: newHistory,
            error: null,
        }

    } catch (error) {
        console.error(error);
        return {
            ...prevState,
            error: 'Sorry, I am having trouble connecting. Please try again later.',
        };
    }
}
