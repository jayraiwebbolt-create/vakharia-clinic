import { Card, CardContent } from '@/components/ui/card';
import CTASection from '@/components/CTASection';
import { Award, Heart, Users, Target, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - DentalCare',
  description: 'Learn about our experienced team, modern facilities, and commitment to providing exceptional dental care with a personal touch.',
};

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-dental-blue-light via-white to-dental-gray-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About DentalCare
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Where advanced dentistry meets compassionate care to create beautiful, healthy smiles that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded over 15 years ago, DentalCare has grown from a small practice to a comprehensive dental healthcare center, serving thousands of satisfied patients. Our journey has always been guided by one simple principle: putting our patients first.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that quality dental care should be accessible, comfortable, and tailored to each individual. That's why we've invested in the latest technology, continued education, and creating a warm, welcoming environment where you can feel at ease.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <div className="text-4xl font-bold text-dental-teal mb-2">15+</div>
                  <p className="text-muted-foreground">Years of Excellence</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-dental-teal mb-2">5000+</div>
                  <p className="text-muted-foreground">Happy Patients</p>
                </div>
              </div>
            </div>

            <div className="bg-dental-blue-light rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-16 h-16 text-dental-teal" />
                </div>
                <p className="text-xl font-semibold text-foreground">Caring for Smiles Since 2009</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dental-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by our core values, we strive to make a positive impact on every smile we treat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-dental-blue-light rounded-full flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-dental-teal" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional dental care that combines advanced technology, clinical expertise, and genuine compassion. We are committed to improving oral health, restoring confidence, and creating beautiful smiles that enhance the quality of life for every patient we serve.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-dental-blue-light rounded-full flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-dental-teal" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted dental care provider in our community, setting the standard for excellence in patient care, innovation, and professional integrity. We envision a future where everyone has access to world-class dental treatment in a comfortable, welcoming environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Patients Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're more than just a dental clinic. We're your partners in achieving optimal oral health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Experienced Team',
                description: 'Our dentists have decades of combined experience and stay current with the latest advancements in dental care.',
              },
              {
                icon: Award,
                title: 'Advanced Technology',
                description: 'We use state-of-the-art equipment and techniques to ensure precise, comfortable, and effective treatments.',
              },
              {
                icon: Heart,
                title: 'Patient-Centered Approach',
                description: 'We listen to your concerns, explain all options, and work with you to create a personalized treatment plan.',
              },
              {
                icon: CheckCircle2,
                title: 'Comprehensive Care',
                description: 'From preventive care to complex procedures, we offer a full range of services under one roof.',
              },
              {
                icon: Shield,
                title: 'Safety & Hygiene',
                description: 'We maintain the highest standards of sterilization and infection control to keep you safe.',
              },
              {
                icon: Sparkles,
                title: 'Comfortable Environment',
                description: 'Our modern, welcoming facilities are designed to make your visit as pleasant as possible.',
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md bg-white group hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-dental-blue-light rounded-full flex items-center justify-center mb-4 group-hover:bg-dental-teal transition-colors">
                    <feature.icon className="w-6 h-6 text-dental-teal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-dental-blue-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Commitment to You
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: 'Transparent Communication',
                description: 'We explain every procedure in detail and answer all your questions before any treatment begins.',
              },
              {
                title: 'Personalized Treatment Plans',
                description: 'No two smiles are alike. We create customized treatment plans that address your unique needs and goals.',
              },
              {
                title: 'Comfortable Experience',
                description: 'From our friendly staff to our modern amenities, we ensure every visit is as comfortable as possible.',
              },
              {
                title: 'Ongoing Support',
                description: 'Our relationship doesn\'t end when you leave the chair. We provide continuous care and support for your oral health journey.',
              },
            ].map((commitment, index) => (
              <div key={index} className="flex gap-4 bg-white p-6 rounded-xl shadow-md">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-dental-teal mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{commitment.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{commitment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the DentalCare Difference"
        description="Join thousands of satisfied patients who trust us with their smiles. Schedule your appointment today."
      />
    </div>
  );
}
