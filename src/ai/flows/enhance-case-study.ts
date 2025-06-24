'use server';

/**
 * @fileOverview This file defines a Genkit flow to enhance case studies with relevant tools using GenAI.
 *
 * - enhanceCaseStudy - A function that enhances a case study by suggesting relevant tools used based on a short description.
 * - EnhanceCaseStudyInput - The input type for the enhanceCaseStudy function.
 * - EnhanceCaseStudyOutput - The return type for the enhanceCaseStudy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceCaseStudyInputSchema = z.object({
  description: z
    .string()
    .describe('A short description of the case study.'),
});
export type EnhanceCaseStudyInput = z.infer<typeof EnhanceCaseStudyInputSchema>;

const EnhanceCaseStudyOutputSchema = z.object({
  toolsUsed: z
    .array(z.string())
    .describe('A list of relevant tools used in the case study.'),
});
export type EnhanceCaseStudyOutput = z.infer<typeof EnhanceCaseStudyOutputSchema>;

export async function enhanceCaseStudy(input: EnhanceCaseStudyInput): Promise<EnhanceCaseStudyOutput> {
  return enhanceCaseStudyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceCaseStudyPrompt',
  input: {schema: EnhanceCaseStudyInputSchema},
  output: {schema: EnhanceCaseStudyOutputSchema},
  prompt: `You are an expert in identifying relevant tools used in case studies.
  Based on the following description, suggest one or two relevant tools that were likely used in the case study.
  Return the tools as a JSON array of strings.

  Description: {{{description}}}
  `,
});

const enhanceCaseStudyFlow = ai.defineFlow(
  {
    name: 'enhanceCaseStudyFlow',
    inputSchema: EnhanceCaseStudyInputSchema,
    outputSchema: EnhanceCaseStudyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
