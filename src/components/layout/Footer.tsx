import Link from 'next/link';
import { Github, Twitter, Linkedin, Zap } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary/50 border-t mt-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-headline">Nkwabyte Hub</span>
          </Link>
          <p className="text-muted-foreground max-w-md">
            Driving innovation through AI consulting, rapid MVP development, and transformative tech education. Let's build the future together.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 font-headline">Talk to Us</h3>
          <p className="text-muted-foreground mb-6">Have a project in mind or a question for us? Fill out the form below and we'll get back to you.</p>
          <ContactForm />
        </div>
      </div>
      <div className="bg-secondary/70 py-4">
          <div className="container text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nkwabyte Hub. All Rights Reserved.
          </div>
      </div>
    </footer>
  );
}
