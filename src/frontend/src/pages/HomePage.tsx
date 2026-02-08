import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Award, Calendar, ArrowRight } from 'lucide-react';
import { newsEventsSeed } from '../content/newsEventsSeed';

const highlights = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Rigorous curriculum designed to challenge and inspire students at every level.',
  },
  {
    icon: Users,
    title: 'Community Focus',
    description: 'A supportive environment where every student is valued and encouraged to thrive.',
  },
  {
    icon: Award,
    title: 'Character Development',
    description: 'Building integrity, leadership, and compassion alongside academic achievement.',
  },
  {
    icon: Calendar,
    title: 'Rich Programs',
    description: 'Diverse extracurricular activities, sports, and clubs for well-rounded growth.',
  },
];

export default function HomePage() {
  const upcomingItems = newsEventsSeed.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/assets/generated/st-martin-pattern.dim_1024x1024.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="container relative py-16 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Welcome to
                  <span className="block text-primary">St Martin School</span>
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl">
                  Where tradition meets innovation. We cultivate curious minds, compassionate hearts, and confident leaders prepared for tomorrow's challenges.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <Link to="/admissions">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/contact">Schedule a Visit</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video overflow-hidden rounded-2xl border border-border/50 bg-muted shadow-2xl">
                <img
                  src="/assets/generated/st-martin-hero.dim_1600x900.png"
                  alt="St Martin School Campus"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Why Choose St Martin School</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Our commitment to excellence extends beyond the classroom, fostering growth in every aspect of student life.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{highlight.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* News & Events Preview */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Latest News & Events</h2>
              <p className="text-lg text-muted-foreground">Stay connected with our vibrant school community.</p>
            </div>
            <Button asChild variant="outline">
              <Link to="/news-events">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingItems.map((item) => (
              <Card key={item.id} className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant={item.category === 'News' ? 'default' : 'secondary'}>
                      {item.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3">{item.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container py-16 md:py-24">
        <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Join Our Community
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Discover how St Martin School can provide your child with an exceptional educational experience. Schedule a campus tour or learn more about our admissions process.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link to="/admissions">Learn About Admissions</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
