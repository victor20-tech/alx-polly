"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePollPage() {
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const validOptions = options.filter((option) => option.trim() !== "");
    if (validOptions.length < 2) {
      setError("Please provide at least two options for the poll.");
      setLoading(false);
      return;
    }

    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError || !userData?.user) {
        router.push("/auth/login"); // Redirect to login if not authenticated
        return;
      }

      const { data: pollData, error: pollError } = await supabase
        .from("polls")
        .insert({ question, description, created_by: userData.user.id })
        .select()
        .single();

      if (pollError || !pollData) {
        throw new Error(pollError?.message || "Failed to create poll.");
      }

      const optionsToInsert = validOptions.map((optionText) => ({
        poll_id: pollData.id,
        text: optionText,
      }));

      const { error: optionsError } = await supabase
        .from("options")
        .insert(optionsToInsert);

      if (optionsError) {
        throw new Error(optionsError.message || "Failed to create poll options.");
      }

      router.push("/polls");
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Create New Poll</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="question">Poll Question</Label>
          <Input
            id="question"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label>Options</Label>
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 mt-2">
              <Input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                required={index < 2} // Require at least two options
                className="flex-grow"
              />
              {options.length > 2 && (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => removeOption(index)}
                >
                  Remove
                </Button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" onClick={addOption} className="mt-4">
            Add Option
          </Button>
        </div>
        <Button type="submit" disabled={loading}>
          {loading ? "Creating Poll..." : "Create Poll"}
        </Button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </div>
  );
}
