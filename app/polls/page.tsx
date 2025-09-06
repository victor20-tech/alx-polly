import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function PollsPage() {
  const supabase = createClient();

  const { data: polls, error } = await supabase
    .from("polls")
    .select("id, question, description, options(id, text)");

  if (error) {
    console.error("Error fetching polls:", error);
    return <p>Error loading polls.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Polls</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {polls?.map((poll) => (
          <Card key={poll.id}>
            <CardHeader>
              <CardTitle>{poll.question}</CardTitle>
              <CardDescription>{poll.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Options: {poll.options.map((option: any) => option.text).join(", ")}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/polls/${poll.id}`} passHref>
                <Button>View Poll</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
