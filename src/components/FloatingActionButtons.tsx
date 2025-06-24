'use client';

import { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function FloatingActionButtons() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {showScrollToTop && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="rounded-full shadow-lg h-12 w-12 animate-in fade-in-0 zoom-in-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
      <Button asChild size="lg" className="rounded-full shadow-lg h-14 px-5">
        <Link href="#contact" className="flex items-center">
          <MessageSquare className="mr-2 h-5 w-5" />
          Chat with us
        </Link>
      </Button>
    </div>
  );
}
