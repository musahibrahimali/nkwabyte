'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { enhanceCaseStudyAction } from '@/lib/actions';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Lightbulb } from 'lucide-react';

const initialState = {
  message: '',
  tools: [],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Enhancing...' : 'Enhance Case Study'}
    </Button>
  );
}

export default function EnhancerForm() {
  const [state, formAction] = useActionState(enhanceCaseStudyAction, initialState);

  return (
    <Card>
      <form action={formAction}>
        <CardHeader>
          <CardTitle className="font-headline">Enhance Your Case Study</CardTitle>
          <CardDescription>Enter a short description below.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description">Case Study Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="e.g., 'Built a scalable e-commerce platform with real-time inventory management and a personalized recommendation engine...'"
              rows={5}
              required
            />
            {state?.message && state.tools.length === 0 && (
              <p className="text-sm text-destructive">{state.message}</p>
            )}
          </div>

          {state.tools.length > 0 && (
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h4 className="font-semibold font-headline">Suggested Tools Used:</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {state.tools.map((tool: string) => (
                  <Badge key={tool} variant="secondary" className="text-base px-3 py-1">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
    </Card>
  );
}
