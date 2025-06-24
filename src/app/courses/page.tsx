'use client';

import { useState } from 'react';
import { courses as allCourses } from '@/lib/data';
import type { Course } from '@/lib/types';
import CourseCard from '@/components/CourseCard';
import CourseFilters from '@/components/CourseFilters';

export default function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(allCourses);

  const handleFilterChange = (filters: { category: string; level: string; format: string }) => {
    let tempCourses = allCourses;

    if (filters.category !== 'all') {
      tempCourses = tempCourses.filter((course) => course.category === filters.category);
    }
    if (filters.level !== 'all') {
      tempCourses = tempCourses.filter((course) => course.level === filters.level);
    }
    if (filters.format !== 'all') {
        tempCourses = tempCourses.filter((course) => course.format === filters.format);
    }

    setFilteredCourses(tempCourses);
  };

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Our Courses</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Expand your skills with our expert-led courses in AI, web development, and data science.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <CourseFilters onFilterChange={handleFilterChange} />
        </aside>
        <main className="md:col-span-3">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-card rounded-lg">
                <h3 className="text-2xl font-semibold font-headline">No Courses Found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
