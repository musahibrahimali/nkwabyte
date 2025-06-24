import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="bg-secondary/30">
        <div className="container py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
                Your Vision, <span className="text-primary">Amplified by AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                We blend cutting-edge AI with expert development to bring your ideas to life, from initial concept to market-ready product.
            </p>
            <div className="flex justify-center gap-4">
                <Button size="lg" asChild>
                    <Link href="#contact">Talk to Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="/courses">Explore Courses</Link>
                </Button>
            </div>
        </div>
    </section>
  );
}
