import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-2">
            We're proud to have partnered with amazing companies.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
            <Card className="bg-card shadow-lg">
                <CardContent className="p-8">
                    <blockquote className="text-lg text-center text-foreground italic border-l-4 border-primary pl-6">
                    "The AI solutions developed by Nkwabyte Hub have revolutionized our data analysis pipeline, delivering insights we never thought possible. Their expertise is unmatched."
                    </blockquote>
                    <div className="flex items-center justify-center mt-6">
                        <Avatar>
                            <AvatarImage src="https://placehold.co/40x40.png" alt="GEET Consult" data-ai-hint="company logo" />
                            <AvatarFallback>GC</AvatarFallback>
                        </Avatar>
                        <div className="ml-4">
                            <p className="font-semibold">Dr. Amina Touray</p>
                            <p className="text-sm text-muted-foreground">Lead Researcher, GEET Consult</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
