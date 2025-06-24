import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Course } from '@/lib/types';
import Link from 'next/link';
import { Button } from './ui/button';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
            <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
                data-ai-hint={course.dataAiHint}
            />
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start gap-2 mb-2">
                <CardTitle className="font-headline text-xl flex-1">{course.title}</CardTitle>
                <Badge variant="secondary">{course.category}</Badge>
            </div>
            <div className="flex gap-2">
                <Badge variant="outline">{course.level}</Badge>
                <Badge variant="outline">{course.format}</Badge>
            </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{course.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="secondary">
            <Link href="#">Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
