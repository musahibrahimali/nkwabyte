import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  {
    title: 'AI-Powered E-commerce Analytics',
    description: 'Developed a comprehensive analytics dashboard for an e-commerce client, providing deep insights into customer behavior and sales trends.',
    tags: ['AI & ML', 'Data Science', 'Next.js'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'analytics dashboard',
    link: '#',
  },
  {
    title: 'Real-time Inventory Management System',
    description: 'Built a scalable inventory system that synchronizes across multiple warehouses in real-time, reducing stockouts and overstock situations.',
    tags: ['Web Development', 'React', 'Firebase'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'warehouse inventory',
    link: '#',
  },
  {
    title: 'Healthcare Chatbot Assistant',
    description: 'Created an intelligent chatbot to assist patients with scheduling appointments and answering frequently asked questions, improving clinic efficiency.',
    tags: ['AI & ML', 'Chatbot', 'NLP'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chatbot conversation',
    link: '#',
  },
    {
    title: 'Fintech Mobile Application',
    description: 'Designed and developed a secure mobile banking app with features like peer-to-peer payments, budgeting tools, and investment tracking.',
    tags: ['Web Development', 'Mobile App', 'Fintech'],
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'mobile banking',
    link: '#',
  },
];

export default function PortfolioPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
          Our Work
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We take pride in the solutions we've built. Explore some of our featured projects that showcase our expertise and commitment to excellence.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {portfolioItems.map((item) => (
          <Card key={item.title} className="group overflow-hidden flex flex-col">
             <div className="relative h-64 w-full">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    data-ai-hint={item.dataAiHint}
                />
             </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
            <div className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto">
                    <Link href={item.link} className="font-semibold">
                        View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
