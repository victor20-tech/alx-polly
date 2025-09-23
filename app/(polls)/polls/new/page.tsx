"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/page-header";

export default function NewPollPage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string>("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire to server action or API route to create poll
  }

  return (
    <>
      <PageHeader title="New poll" description="Write a question and provide one option per line." />
      <Card className="mt-6">
        <CardContent>
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="question">Question</Label>
              <Input id="question" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="What's your question?" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="options">Options</Label>
              <Textarea id="options" value={options} onChange={(e) => setOptions(e.target.value)} placeholder={"React\nVue\nSvelte"} required />
            </div>
            <Button type="submit">Create poll</Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">Server actions and validation coming soon.</CardFooter>
      </Card>
    </>
  );
}


