import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Solutions />
      <Testimonials />
    </div>
  );
}
