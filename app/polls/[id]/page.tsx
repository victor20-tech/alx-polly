import { createClient } from "@/lib/supabase/server";
import { notFound, redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { revalidatePath } from "next/cache";

interface PollPageProps {
  params: { id: string };
}

export default async function PollPage({ params }: PollPageProps) {
  const supabase = createClient();
  const { id } = params;

  const { data: poll, error: pollError } = await supabase
    .from("polls")
    .select("*, options(*)")
    .eq("id", id)
    .single();

  if (pollError || !poll) {
    notFound();
  }

  const { data: votes, error: votesError } = await supabase
    .from("votes")
    .select("option_id, count")
    .eq("poll_id", id); // This will fetch all votes for options belonging to this poll

  if (votesError) {
    console.error("Error fetching votes:", votesError);
  }

  const totalVotes = votes?.reduce((sum, vote) => sum + vote.count, 0) || 0;

  const handleVote = async (formData: FormData) => {
    "use server";

    const option_id = formData.get("option_id") as string;

    if (!option_id) {
      return;
    }

    const supabaseServer = createClient();
    const { data: userData, error: userError } = await supabaseServer.auth.getUser();

    if (userError || !userData?.user) {
      redirect("/auth/login");
    }

    const user_id = userData.user.id;

    const { data: existingVote, error: existingVoteError } = await supabaseServer
      .from("votes")
      .select("id")
      .eq("option_id", option_id)
      .eq("user_id", user_id)
      .single();

    if (existingVoteError && existingVoteError.code !== "PGRST116") { // PGRST116 is 'No rows found'
      console.error("Error checking existing vote:", existingVoteError);
      return;
    }

    if (existingVote) {
      // User already voted for this option, consider un-voting or showing a message
      console.log("User already voted for this option.");
      // For now, we'll just revalidate and not allow double voting
    } else {
      const { error: insertError } = await supabaseServer.from("votes").insert({
        option_id,
        user_id,
        poll_id: id, // Ensure poll_id is also stored if needed for RLS or other queries
      });

      if (insertError) {
        console.error("Error inserting vote:", insertError);
      }
    }
    revalidatePath(`/polls/${id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{poll.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{poll.description}</p>
          <h3 className="text-lg font-semibold mb-4">Options:</h3>
          <div className="space-y-4">
            {poll.options.map((option: any) => {
              const optionVotes = votes?.find((v) => v.option_id === option.id)?.count || 0;
              const percentage = totalVotes > 0 ? (optionVotes / totalVotes) * 100 : 0;
              return (
                <div key={option.id} className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <Label>{option.text}</Label>
                    <span className="text-sm text-gray-500">{optionVotes} votes ({percentage.toFixed(1)}%)</span>
                  </div>
                  <Progress value={percentage} className="w-full" />
                </div>
              );
            })}
          </div>
          <form action={handleVote} className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold">Cast Your Vote:</h3>
            <RadioGroup name="option_id" required>
              {poll.options.map((option: any) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id}>{option.text}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button type="submit" className="w-full">Vote</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
