'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Zap } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/courses', label: 'Courses' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/enhancer', label: 'Case Study Enhancer' },
];

export default function Header() {
  const pathname = usePathname();

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn('flex items-center gap-4 lg:gap-6', className)}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'transition-colors hover:text-primary',
            pathname === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg font-headline">Nkwabyte Hub</span>
        </Link>

        <div className="flex-1 hidden md:flex">
          <NavLinks />
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button asChild>
            <Link href="#contact">Talk to Us</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/" className="mr-6 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <span className="font-bold text-lg font-headline">Nkwabyte Hub</span>
                </Link>
                <NavLinks className="flex-col items-start text-lg" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
