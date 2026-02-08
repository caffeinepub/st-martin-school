import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const applicationSteps = [
  {
    step: 1,
    title: 'Submit Inquiry Form',
    description: 'Complete our online inquiry form to express your interest and receive information about St Martin School.',
  },
  {
    step: 2,
    title: 'Schedule a Visit',
    description: 'Tour our campus, meet our faculty, and experience our community firsthand.',
  },
  {
    step: 3,
    title: 'Complete Application',
    description: 'Submit the formal application along with required documents and application fee.',
  },
  {
    step: 4,
    title: 'Student Assessment',
    description: 'Students participate in age-appropriate assessments and interviews.',
  },
  {
    step: 5,
    title: 'Review & Decision',
    description: 'Our admissions committee reviews applications and notifies families of decisions.',
  },
  {
    step: 6,
    title: 'Enrollment',
    description: 'Accept your offer, complete enrollment paperwork, and prepare for the school year!',
  },
];

const requirements = [
  'Completed application form',
  'Birth certificate or proof of age',
  'Previous school records and transcripts',
  'Immunization records',
  'Two letters of recommendation',
  'Student essay or writing sample (grades 6+)',
  'Parent statement',
  'Application fee',
];

const faqs = [
  {
    question: 'What is the application deadline?',
    answer: 'We accept applications on a rolling basis, but priority consideration is given to applications received by February 1st for the following school year. We encourage families to apply early as spaces are limited.',
  },
  {
    question: 'What are the tuition and fees?',
    answer: 'Tuition varies by grade level. Elementary school tuition ranges from $15,000-$18,000 annually, middle school from $18,000-$21,000, and high school from $21,000-$24,000. Additional fees for activities, materials, and technology are approximately $1,500-$2,000 per year. Financial aid is available for qualifying families.',
  },
  {
    question: 'Do you offer financial aid?',
    answer: 'Yes, St Martin School is committed to making our education accessible to qualified students regardless of financial circumstances. We offer need-based financial aid and merit scholarships. Families must complete a financial aid application and provide supporting documentation. Approximately 30% of our students receive some form of financial assistance.',
  },
  {
    question: 'What is the student-to-teacher ratio?',
    answer: 'We maintain small class sizes to ensure personalized attention. Our average student-to-teacher ratio is 12:1 in elementary school, 14:1 in middle school, and 15:1 in high school. This allows our teachers to know each student well and tailor instruction to individual needs.',
  },
  {
    question: 'Can we schedule a campus tour?',
    answer: 'Absolutely! We encourage prospective families to visit our campus. Tours are available on weekday mornings and select Saturdays. You can schedule a tour through our contact page or by calling our admissions office at (555) 123-4567.',
  },
  {
    question: 'What makes St Martin School different?',
    answer: 'St Martin School combines academic rigor with character development in a supportive community environment. Our experienced faculty, small class sizes, comprehensive curriculum, and commitment to the whole child set us apart. We emphasize critical thinking, creativity, and leadership while fostering values of integrity, compassion, and service.',
  },
];

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Admissions</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Begin your journey with St Martin School. We look forward to welcoming your family.
            </p>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">How to Apply</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Follow these steps to complete your application to St Martin School.
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-6">
          {applicationSteps.map((item) => (
            <Card key={item.step} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/contact">
              Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Application Requirements</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Please prepare the following materials for your application.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardContent className="p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-base">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Tuition & Financial Aid</h2>
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Tuition Overview</h3>
                  <p className="text-muted-foreground">
                    Tuition at St Martin School covers comprehensive educational programming, including core academics, arts, athletics, technology, and most extracurricular activities. Tuition rates vary by grade level and are reviewed annually.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Financial Aid</h3>
                  <p className="text-muted-foreground">
                    We believe that a St Martin School education should be accessible to all qualified students. Our financial aid program provides need-based assistance to families who demonstrate financial need. Awards are determined based on family circumstances and available funds.
                  </p>
                </div>
                <div className="pt-4">
                  <Button asChild variant="outline">
                    <Link to="/contact">Request Detailed Tuition Information</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Find answers to common questions about admissions and enrollment.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="rounded-lg border bg-card px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-16 md:py-24">
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Join Our Community?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We're here to answer your questions and guide you through the admissions process. Contact us today to learn more or schedule a campus visit.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Contact Admissions</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
