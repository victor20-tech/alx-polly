"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/page-header";
import { createPoll } from "../_actions/poll";

export default function NewPollPage() {
  const [pollType, setPollType] = useState<"single-choice" | "multiple-choice">("single-choice");

  return (
    <>
      <PageHeader title="New poll" description="Write a question and provide one option per line." />
      <Card className="mt-6">
        <CardContent>
          <form className="grid gap-4" action={createPoll}>
            <div className="grid gap-2">
              <Label htmlFor="question">Question</Label>
              <Input id="question" name="question" placeholder="What's your question?" required />
            </div>
            <div className="grid gap-2">
              <Label>Poll Type</Label>
              <RadioGroup defaultValue="single-choice" onValueChange={(value: "single-choice" | "multiple-choice") => setPollType(value)} className="flex items-center gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single-choice" id="single-choice" />
                  <Label htmlFor="single-choice">Single choice</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="multiple-choice" id="multiple-choice" />
                  <Label htmlFor="multiple-choice">Multiple choice</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="options">Options</Label>
              <Textarea id="options" name="options" placeholder={"React\nVue\nSvelte"} required />
            </div>
            <input type="hidden" name="pollType" value={pollType} />
            <Button type="submit">Create poll</Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">Server actions and validation coming soon.</CardFooter>
      </Card>
    </>
  );
}


