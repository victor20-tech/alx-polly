"use server";

import { Poll, PollOption } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { createServerSideClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export async function createPoll(formData: FormData) {
  const question = formData.get("question")?.toString();
  const pollType = formData.get("pollType")?.toString() as
    | "single-choice"
    | "multiple-choice";
  const options = formData.getAll("options").map((option) => option.toString());

  // Consolidate validation
  const trimmedQuestion = question?.trim();
  const trimmedOptions = options.map(opt => opt.trim()).filter(Boolean);
  const uniqueOptions = new Set(trimmedOptions);
  
  if (!trimmedQuestion) {
    redirect("/error?type=validation&field=question");
  }
  
  if (!pollType) {
    redirect("/error?type=validation&field=pollType");
  }
  
  if (trimmedOptions.length < 2) {
    redirect("/error?type=validation&field=options");
  }
  
  if (uniqueOptions.size !== trimmedOptions.length) {
    redirect("/error?type=validation&field=duplicateOptions");
  }

  const supabase = createServerSideClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/signin");
  }

  const { data: poll, error: pollError } = await supabase
    .from("polls")
    .insert({
      question,
      type: pollType,
      created_by_user_id: user.id,
    })
    .select()
    .single();

  if (pollError || !poll) {
    console.error("Error creating poll:", pollError);
    redirect("/error");
  }

  const pollOptions = options.map((option) => ({
    poll_id: poll.id,
    label: option,
  }));

  const { error: optionsError } = await supabase
    .from("poll_options")
    .insert(pollOptions);

  if (optionsError) {
    console.error("Error creating poll options:", optionsError);
    redirect("/error");
  }

  revalidatePath("/polls");
  redirect(`/polls/${poll.id}`);
}