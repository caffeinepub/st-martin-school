import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { newsEventsSeed } from '../content/newsEventsSeed';

type FilterType = 'All' | 'News' | 'Event';

export default function NewsEventsPage() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredItems = newsEventsSeed.filter((item) => {
    if (filter === 'All') return true;
    return item.category === filter;
  });

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">News & Events</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Stay informed about the latest happenings in our school community.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Content */}
      <section className="container py-16 md:py-24">
        <div className="mb-8 flex justify-center">
          <Tabs value={filter} onValueChange={(value) => setFilter(value as FilterType)}>
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="News">News</TabsTrigger>
              <TabsTrigger value="Event">Events</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {filteredItems.map((item) => (
            <Collapsible
              key={item.id}
              open={expandedId === item.id}
              onOpenChange={(open) => setExpandedId(open ? item.id : null)}
            >
              <Card className="transition-shadow hover:shadow-lg">
                <CollapsibleTrigger className="w-full text-left">
                  <CardHeader>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <Badge variant={item.category === 'News' ? 'default' : 'secondary'}>
                        {item.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                          expandedId === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <CardDescription className="text-base">{item.excerpt}</CardDescription>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="border-t pt-6">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {item.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}

          {filteredItems.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-lg text-muted-foreground">No items found for this filter.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}
