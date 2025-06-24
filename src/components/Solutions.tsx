import { solutions } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Solutions() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Solutions</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            From strategic consulting to hands-on development, we provide the expertise to make your project a success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.title} className="text-center group hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-8 h-8" />
                </div>
                <CardTitle className="font-headline text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
