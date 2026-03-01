import { Card, CardContent } from '@/components/ui/card';
import AppointmentForm from '@/components/AppointmentForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - DentalCare',
  description: 'Get in touch with DentalCare. Schedule an appointment, ask questions, or visit our clinic. We are here to help you achieve your best smile.',
};

export default function ContactUs() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-dental-blue-light via-white to-dental-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're here to answer your questions and help you schedule your appointment. Reach out today and take the first step towards a healthier smile.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-dental-blue-light rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-dental-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">Visit Us</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          123 Dental Street<br />
                          Medical District<br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-dental-blue-light rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-dental-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">Call Us</h3>
                        <a
                          href="tel:+1234567890"
                          className="text-dental-teal hover:text-dental-teal-dark transition-colors text-lg"
                        >
                          (123) 456-7890
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-dental-blue-light rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-dental-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">Email Us</h3>
                        <a
                          href="mailto:info@dentalcare.com"
                          className="text-dental-teal hover:text-dental-teal-dark transition-colors"
                        >
                          info@dentalcare.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-dental-blue-light rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-dental-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-2">Office Hours</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dental-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Find Us</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-96">
            <div className="w-full h-full bg-gradient-to-br from-dental-blue-light to-dental-gray-light flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-dental-teal mx-auto mb-4" />
                <p className="text-xl font-semibold text-foreground">Map Location</p>
                <p className="text-muted-foreground mt-2">123 Dental Street, Medical District</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Have Questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our friendly team is ready to help. Whether you're a new patient or have been with us for years, we're here to provide the information and care you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-3 bg-dental-teal hover:bg-dental-teal-dark text-white font-semibold rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a
              href="mailto:info@dentalcare.com"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-dental-teal text-dental-teal hover:bg-dental-blue-light font-semibold rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
