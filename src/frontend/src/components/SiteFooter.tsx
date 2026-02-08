import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/news-events', label: 'News & Events' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/st-martin-crest.dim_512x512.png"
                alt="St Martin School Crest"
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold">St Martin School</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Nurturing minds, building character, inspiring excellence since our founding.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Education Lane</p>
              <p>Academic City, ST 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@stmartinschool.edu</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © 2026. Built with <Heart className="h-4 w-4 fill-primary text-primary" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
