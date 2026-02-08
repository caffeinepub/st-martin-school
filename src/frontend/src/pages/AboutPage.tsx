import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Award, Heart, Users, Target } from 'lucide-react';

const milestones = [
  { year: '1950', event: 'St Martin School founded with 50 students' },
  { year: '1975', event: 'Expanded campus with new science and arts facilities' },
  { year: '1995', event: 'Introduced advanced technology programs' },
  { year: '2010', event: 'Achieved national recognition for academic excellence' },
  { year: '2020', event: 'Launched innovative hybrid learning programs' },
  { year: '2025', event: 'Celebrating 75 years of educational excellence' },
];

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in all endeavors, academic and personal.',
  },
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We foster empathy, kindness, and respect for all members of our community.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We build strong relationships and support one another in growth and learning.',
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'We uphold honesty, responsibility, and ethical behavior in all we do.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">About St Martin School</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A legacy of excellence, a commitment to the future.
            </p>
          </div>
        </div>
      </section>

      {/* School Overview */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              Founded in 1950, St Martin School has been a cornerstone of educational excellence for over seven decades. What began as a small institution with a vision to provide quality education has grown into a thriving community of learners, educators, and families dedicated to academic achievement and personal growth.
            </p>
            <p>
              Our campus combines historic charm with modern facilities, creating an environment where tradition and innovation coexist harmoniously. We believe that education extends beyond textbooks and classrooms—it's about nurturing the whole child, developing critical thinking skills, and instilling values that will guide our students throughout their lives.
            </p>
            <p>
              Today, St Martin School serves hundreds of students from diverse backgrounds, united by a common commitment to learning, growth, and service. Our dedicated faculty and staff work tirelessly to create a supportive, challenging, and inspiring educational experience for every student who walks through our doors.
            </p>
          </div>
        </div>
      </section>

      <Separator className="container" />

      {/* Mission & Values */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Mission & Values</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Guiding principles that shape our educational philosophy and community culture.
          </p>
        </div>

        <Card className="mb-12 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 md:p-12">
            <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
            <p className="text-lg text-muted-foreground">
              To provide a transformative educational experience that empowers students to achieve academic excellence, develop strong character, and become compassionate leaders who contribute positively to their communities and the world.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator className="container" />

      {/* Leadership & Staff */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Leadership & Staff</h2>
          <Card>
            <CardContent className="p-8">
              <p className="mb-6 text-lg text-muted-foreground">
                Our dedicated team of educators, administrators, and support staff brings decades of combined experience and a shared passion for student success. Led by experienced educational leaders, our faculty members are committed to creating an engaging, supportive, and challenging learning environment.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Dr. Elizabeth Thompson</h3>
                  <p className="text-muted-foreground">Head of School</p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Mr. James Rodriguez</h3>
                  <p className="text-muted-foreground">Director of Academics</p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Ms. Sarah Chen</h3>
                  <p className="text-muted-foreground">Director of Student Life</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="container" />

      {/* Timeline */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Our Journey</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Key milestones in our history of educational excellence.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-border" />
                    )}
                  </div>
                  <Card className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-lg">{milestone.year}</CardTitle>
                      <CardDescription className="text-base">{milestone.event}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
