import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  showPhoneButton?: boolean;
}

export default function CTASection({
  title,
  description,
  primaryButtonText = 'Book Appointment',
  primaryButtonHref = '/contact-us',
  showPhoneButton = true,
}: CTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-dental-teal to-dental-teal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={primaryButtonHref}>
            <Button size="lg" className="bg-white text-dental-teal hover:bg-slate-50 px-8">
              {primaryButtonText}
            </Button>
          </Link>
          {showPhoneButton && (
            <a href="tel:+1234567890">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <Phone className="w-4 h-4 mr-2" />
                Call Us Now
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
