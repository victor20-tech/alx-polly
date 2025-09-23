import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";

type PageProps = { params: { id: string } };

// Placeholder data fetch
function getPollById(id: string) {
  const data = {
    "1": { question: "Which frontend framework do you prefer in 2025?", options: ["React", "Vue", "Svelte", "Solid"] },
    "2": { question: "Tabs or spaces?", options: ["Tabs", "Spaces"] },
  } as Record<string, { question: string; options: string[] }>;
  return data[id];
}

export default function PollDetailPage({ params }: PageProps) {
  const poll = getPollById(params.id);
  if (!poll) return notFound();

  return (
    <>
      <PageHeader title="Poll" description="Pick one option below." />
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>{poll.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {poll.options.map((opt, idx) => (
              <Button key={idx} variant="secondary" className="justify-start">{opt}</Button>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit vote</Button>
        </CardFooter>
      </Card>
    </>
  );
}


