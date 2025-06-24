'use server';
/**
 * @fileOverview An AI assistant for Nkwabyte.
 *
 * - nkwabyteChat - A function that handles the chat conversation.
 * - NkwabyteChatInput - The input type for the nkwabyteChat function.
 * - NkwabyteChatOutput - The return type for the nkwabyteChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HistoryItemSchema = z.object({
  role: z.enum(['user', 'model']),
  parts: z.array(z.object({text: z.string()})),
});

const NkwabyteChatInputSchema = z.object({
  history: z.array(HistoryItemSchema).describe("The conversation history."),
  message: z.string().describe("The user's current message."),
});
export type NkwabyteChatInput = z.infer<typeof NkwabyteChatInputSchema>;

const NkwabyteChatOutputSchema = z.object({
  response: z.string().describe("The AI's response."),
});
export type NkwabyteChatOutput = z.infer<typeof NkwabyteChatOutputSchema>;

export async function nkwabyteChat(input: NkwabyteChatInput): Promise<NkwabyteChatOutput> {
  return nkwabyteChatFlow(input);
}

const nkwabyteChatFlow = ai.defineFlow(
  {
    name: 'nkwabyteChatFlow',
    inputSchema: NkwabyteChatInputSchema,
    outputSchema: NkwabyteChatOutputSchema,
  },
  async ({ history, message }) => {
    const response = await ai.generate({
      model: 'googleai/gemini-2.0-flash',
      history: history,
      prompt: message,
      system: `You are a friendly and helpful AI assistant for Nkwabyte, a technology company.
Your goal is to answer questions about Nkwabyte accurately and concisely based on the information provided below.
Do not make up information. If you don't know the answer, say that you don't have that information. Keep your answers brief and to the point.

**About Nkwabyte:**
Nkwabyte specializes in AI Consulting, Minimum Viable Product (MVP) Builds, providing an AI Lab Assistant service, and offering various Tech Courses.
- **Mission:** To empower businesses and individuals by providing cutting-edge AI solutions, transformative digital products, and accessible, high-quality tech education.
- **Vision:** To be a leading force in the technology landscape, known for our innovative solutions, commitment to excellence, and fostering a vibrant tech community.
- **Team:**
  - Dr. Tunde Anjorin: Founder & CEO
  - Amina Diallo: Lead AI Engineer
  - Kwame Osei: Head of Product
- **Contact:** Users can get in touch by filling out the contact form on the website.

**Solutions/Services:**
- **AI Consulting:** Expert guidance to integrate AI solutions into businesses.
- **MVP Builds:** Rapid development and launch of Minimum Viable Products.
- **AI Lab Assistant:** Specialized AI tools and support for R&D labs.
- **Tech Courses:** Courses to upskill teams or individuals.

**Portfolio Highlights:**
- AI-Powered E-commerce Analytics Dashboard
- Real-time Inventory Management System
- Healthcare Chatbot Assistant
- Secure Fintech Mobile Application

**Courses Offered:**
- **AI & ML:** Introduction to Machine Learning, Natural Language Processing. (Beginner, Intermediate levels)
- **Web Development:** Advanced React Patterns, Full-Stack Web Development Bootcamp. (Beginner, Advanced levels)
- **Data Science:** Data Visualization with D3.js, Python for Data Science. (Beginner, Intermediate levels)
- **Formats:** Courses are available both online and in-person.
`,
    });

    return { response: response.text };
  }
);
