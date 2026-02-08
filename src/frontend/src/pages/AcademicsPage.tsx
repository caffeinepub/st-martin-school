import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BookOpen, Microscope, Palette, Globe, Music, Calculator } from 'lucide-react';

const gradeLevels = [
  {
    title: 'Elementary School',
    grades: 'Grades K-5',
    description: 'Building strong foundations in literacy, numeracy, and social-emotional learning through engaging, hands-on activities.',
  },
  {
    title: 'Middle School',
    grades: 'Grades 6-8',
    description: 'Developing critical thinking and independence with a balanced curriculum that challenges and supports growing minds.',
  },
  {
    title: 'High School',
    grades: 'Grades 9-12',
    description: 'Preparing students for college and career success with rigorous coursework, AP options, and personalized guidance.',
  },
];

const subjects = [
  {
    icon: BookOpen,
    title: 'Language Arts',
    description: 'Comprehensive reading, writing, and communication skills development.',
  },
  {
    icon: Calculator,
    title: 'Mathematics',
    description: 'From foundational arithmetic to advanced calculus and statistics.',
  },
  {
    icon: Microscope,
    title: 'Sciences',
    description: 'Biology, chemistry, physics, and environmental science with lab experiences.',
  },
  {
    icon: Globe,
    title: 'Social Studies',
    description: 'History, geography, civics, and global perspectives.',
  },
  {
    icon: Palette,
    title: 'Arts',
    description: 'Visual arts, drama, and creative expression programs.',
  },
  {
    icon: Music,
    title: 'Music',
    description: 'Instrumental, vocal, and music theory instruction.',
  },
];

const extracurriculars = [
  'Debate Team',
  'Robotics Club',
  'Student Government',
  'Drama Productions',
  'Science Olympiad',
  'Math League',
  'Environmental Club',
  'Yearbook Committee',
  'Chess Club',
  'Community Service',
  'Athletics (Soccer, Basketball, Track, Swimming)',
  'Band & Orchestra',
];

export default function AcademicsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Academics</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              A comprehensive curriculum designed to inspire curiosity and foster excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Grade Levels & Programs</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Age-appropriate learning experiences from kindergarten through high school.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {gradeLevels.map((level, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{level.title}</CardTitle>
                <CardDescription className="text-base font-semibold text-primary">
                  {level.grades}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{level.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="container" />

      {/* Curriculum Overview */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Curriculum Overview</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A well-rounded education across core subjects and enrichment areas.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{subject.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{subject.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <h3 className="mb-4 text-2xl font-bold">Advanced Placement & Honors</h3>
            <p className="text-lg text-muted-foreground">
              High school students have access to Advanced Placement (AP) courses in multiple subjects, allowing them to earn college credit and challenge themselves with college-level material. Our honors program provides accelerated learning opportunities for motivated students across all grade levels.
            </p>
          </CardContent>
        </Card>
      </section>

      <Separator className="container" />

      {/* Extracurriculars */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Extracurriculars & Clubs</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Opportunities to explore interests, develop talents, and build lasting friendships.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <p className="mb-6 text-lg text-muted-foreground">
                  Beyond the classroom, St Martin School offers a vibrant array of extracurricular activities that allow students to pursue their passions, discover new interests, and develop leadership skills.
                </p>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {extracurriculars.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-md bg-muted/50 px-4 py-2"
                    >
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Facilities & Resources</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            State-of-the-art learning environments that support academic excellence.
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Modern Learning Spaces</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our campus features bright, technology-equipped classrooms designed for collaborative learning, science laboratories with the latest equipment, a comprehensive library and media center, dedicated art and music studios, and a fully equipped gymnasium and athletic fields.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every classroom is equipped with interactive displays and high-speed internet. Students have access to computer labs, tablets, and educational software that enhance learning across all subjects. Our technology curriculum ensures students develop digital literacy and 21st-century skills.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Library & Learning Commons</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our library serves as the heart of academic life, offering thousands of books, digital resources, quiet study areas, and collaborative workspaces. Professional librarians support research projects and foster a love of reading.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
