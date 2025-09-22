import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import HeroPollingIllustration from "@/components/illustrations/hero-polling";
import { FastCreationIcon, ClearResultsIcon, ShareAnywhereIcon, PollIcon } from "@/components/illustrations/feature-icons";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="container py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight">Create polls. Get answers fast.</h1>
            <p className="mt-3 text-muted-foreground max-w-2xl">ALX Polly lets you create and share polls in seconds. Collect opinions and make decisions with confidence.</p>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              <Link href="/polls/new"><Button>Create a poll</Button></Link>
              <Link href="/polls"><Button variant="ghost">Browse polls</Button></Link>
            </div>
            <div className="mt-6 text-xs text-muted-foreground">No sign up required to browse</div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <HeroPollingIllustration />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent">
                  <FastCreationIcon />
                </span>
                <CardTitle className="text-xl">Fast creation</CardTitle>
              </div>
              <CardDescription>Write a question, add options, share the link.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Start getting votes in seconds with an intuitive, minimal form.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent">
                  <ClearResultsIcon />
                </span>
                <CardTitle className="text-xl">Clear results</CardTitle>
              </div>
              <CardDescription>Readable charts and real-time updates.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">See which options lead at a glance with accessible colors.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent">
                  <ShareAnywhereIcon />
                </span>
                <CardTitle className="text-xl">Share anywhere</CardTitle>
              </div>
              <CardDescription>Copy links, embed, or share on social.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Reach your audience where they are—no friction.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Badge variant="secondary">1</Badge>
              <CardTitle className="text-xl">Create</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Add your question and options. Optional sign in to save.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge variant="secondary">2</Badge>
              <CardTitle className="text-xl">Share</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Share the link with your team, class, or community.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Badge variant="secondary">3</Badge>
              <CardTitle className="text-xl">Decide</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Watch votes in real time and pick the best option.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent polls preview (placeholder) */}
      <section className="container py-10">
        <h2 className="text-xl font-semibold">Trending now</h2>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
          {[{ id: "1", q: "Which frontend framework do you prefer in 2025?", c: 4 }, { id: "2", q: "Tabs or spaces?", c: 2 }].map((p) => (
            <Link key={p.id} href={`/polls/${p.id}`} className="group">
              <Card className="h-full transition-all group-hover:shadow-md group-hover:translate-y-[-2px]">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-md bg-secondary">
                      <PollIcon />
                    </span>
                    <CardTitle className="line-clamp-2">{p.q}</CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Badge variant="secondary">{p.c} options</Badge>
                    <span className="text-muted-foreground">•</span>
                    <span>Just now</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-muted-foreground">View poll →</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/polls"><Button variant="ghost">Browse all polls</Button></Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-14">
        <h2 className="text-xl font-semibold text-center">What users say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {["Made team decisions twice as fast.", "So simple my class used it in minutes.", "Exactly the polling UX we needed."].map((quote, i) => (
            <Card key={i} className="h-full">
              <CardContent className="p-6">
                <p className="text-sm">“{quote}”</p>
                <p className="mt-4 text-xs text-muted-foreground">— User {i + 1}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container py-14">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Get product updates</CardTitle>
            <CardDescription>Join the list for new features and tips.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input type="email" placeholder="you@example.com" className="sm:max-w-xs" required />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </CardContent>
        </Card>
      </section>
      </main>
  );
}
