import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Target, Zap } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Tunde Anjorin',
    role: 'Founder & CEO',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man portrait',
    bio: 'A visionary leader with a passion for leveraging AI to solve complex problems and drive business growth.',
  },
  {
    name: 'Amina Diallo',
    role: 'Lead AI Engineer',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'woman portrait',
    bio: 'Expert in machine learning and natural language processing, turning innovative ideas into reality.',
  },
  {
    name: 'Kwame Osei',
    role: 'Head of Product',
    image: 'https://placehold.co/100x100.png',
    dataAiHint: 'man smiling',
    bio: 'Dedicated to creating intuitive and impactful products that delight users and deliver value.',
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
          About Nkwabyte Hub
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          We are a team of passionate innovators, developers, and strategists dedicated to building the future of technology, one solution at a time.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
        <div>
          <Image
            src="https://placehold.co/600x400.png"
            alt="Our team working"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            data-ai-hint="team collaboration"
          />
        </div>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-headline">Our Mission</h3>
              <p className="text-muted-foreground mt-2">
                To empower businesses and individuals by providing cutting-edge AI solutions, transformative digital products, and accessible, high-quality tech education. We strive to be a catalyst for innovation and growth in the tech ecosystem.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-headline">Our Vision</h3>
              <p className="text-muted-foreground mt-2">
                To be a leading force in the technology landscape, known for our innovative solutions, commitment to excellence, and our role in fostering a vibrant community of tech enthusiasts and professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            The brilliant minds behind Nkwabyte Hub.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-secondary">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-xl mb-1">{member.name}</CardTitle>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
