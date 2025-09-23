import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/page-header";
import { EmptyPollsIllustration } from "@/components/illustrations/empty-state";

// Placeholder static polls list until data layer is added
const polls = [
  { id: "1", question: "Which frontend framework do you prefer in 2025?", optionsCount: 4 },
  { id: "2", question: "Tabs or spaces?", optionsCount: 2 },
];

export default function PollsIndexPage() {
  return (
    <>
      <PageHeader title="Browse polls" description="Discover what's trending and vote on topics that matter." />
      <div className="grid gap-6 md:grid-cols-2 mt-6">
      {polls.length === 0 ? (
        <div className="col-span-full text-center py-16">
          <EmptyPollsIllustration />
          <h3 className="text-lg font-semibold text-foreground mb-2">No polls yet</h3>
          <p className="text-sm text-muted-foreground mb-4">Be the first to create a poll and start collecting opinions.</p>
          <Link href="/polls/new">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:opacity-90 h-10 px-4">
              Create the first poll
            </button>
          </Link>
        </div>
      ) : polls.map((poll) => (
        <Link key={poll.id} href={`/polls/${poll.id}`} className="group">
          <Card className="h-full transition-all group-hover:shadow-md group-hover:translate-y-[-2px]">
            <CardHeader>
              <CardTitle className="line-clamp-2">{poll.question}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Badge variant="secondary">{poll.optionsCount} options</Badge>
                <span className="text-muted-foreground">•</span>
                <span>Just now</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-sm text-muted-foreground">View details →</span>
            </CardContent>
          </Card>
        </Link>
      ))}
      </div>
    </>
  );
}


