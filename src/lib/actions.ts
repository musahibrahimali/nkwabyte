'use server';

import { z } from 'zod';
import { enhanceCaseStudy as enhanceCaseStudyFlow } from '@/ai/flows/enhance-case-study';

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
