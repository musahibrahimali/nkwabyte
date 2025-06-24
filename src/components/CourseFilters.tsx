'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CourseFiltersProps {
  onFilterChange: (filters: { category: string; level: string; format: string }) => void;
}

const categories = ['All', 'AI & ML', 'Web Development', 'Data Science'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const formats = ['All', 'Online', 'In-person'];

export default function CourseFilters({ onFilterChange }: CourseFiltersProps) {
  const [category, setCategory] = useState('all');
  const [level, setLevel] = useState('all');
  const [format, setFormat] = useState('all');

  useEffect(() => {
    onFilterChange({ category, level, format });
  }, [category, level, format, onFilterChange]);

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle className="font-headline">Filter Courses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={(value) => setCategory(value)}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat.toLowerCase()}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="level">Level</Label>
           <Select value={level} onValueChange={(value) => setLevel(value)}>
            <SelectTrigger id="level">
              <SelectValue placeholder="Select Level" />
            </SelectTrigger>
            <SelectContent>
              {levels.map((lvl) => (
                <SelectItem key={lvl} value={lvl.toLowerCase()}>
                  {lvl}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="format">Format</Label>
          <Select value={format} onValueChange={(value) => setFormat(value)}>
            <SelectTrigger id="format">
              <SelectValue placeholder="Select Format" />
            </SelectTrigger>
            <SelectContent>
              {formats.map((fmt) => (
                <SelectItem key={fmt} value={fmt.toLowerCase()}>
                  {fmt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
