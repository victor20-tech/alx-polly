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

const dummyPolls = [
  {
    id: "1",
    question: "What is your favorite color?",
    description: "Help us decide on a new theme for the app!",
    options: ["Red", "Blue", "Green", "Yellow"],
  },
  {
    id: "2",
    question: "Which framework do you prefer for frontend development?",
    description: "Tell us your go-to framework for building user interfaces.",
    options: ["React", "Angular", "Vue", "Svelte"],
  },
  {
    id: "3",
    question: "What is the best time for a weekly team meeting?",
    description: "Vote on the most convenient time for our sync-up.",
    options: ["Monday Morning", "Tuesday Afternoon", "Wednesday Lunch", "Friday End-of-Day"],
  },
];

export default function PollsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Polls</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyPolls.map((poll) => (
          <Card key={poll.id}>
            <CardHeader>
              <CardTitle>{poll.question}</CardTitle>
              <CardDescription>{poll.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Options: {poll.options.join(", ")}</p>
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
