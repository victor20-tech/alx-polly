import { notFound } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Poll } from "@/lib/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

type PageProps = { params: { id: string } };

// Placeholder data fetch
function getPollById(id: string): Poll | undefined {
  const data: Record<string, Poll> = {
    "1": { id: "1", question: "Which frontend framework do you prefer in 2025?", type: "single-choice", options: [{ id: "1", label: "React", votes: 0 }, { id: "2", label: "Vue", votes: 0 }, { id: "3", label: "Svelte", votes: 0 }, { id: "4", label: "Solid", votes: 0 }], createdAt: new Date() },
    "2": { id: "2", question: "Tabs or spaces?", type: "single-choice", options: [{ id: "5", label: "Tabs", votes: 0 }, { id: "6", label: "Spaces", votes: 0 }], createdAt: new Date() },
    "3": { id: "3", question: "Which programming languages do you use?", type: "multiple-choice", options: [{ id: "7", label: "JavaScript", votes: 0 }, { id: "8", label: "Python", votes: 0 }, { id: "9", label: "TypeScript", votes: 0 }, { id: "10", label: "Go", votes: 0 }], createdAt: new Date() },
  };
  return data[id];
}

export default function PollDetailPage({ params }: PageProps) {
  const poll = getPollById(params.id);
  if (!poll) return notFound();

  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSingleChoiceChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleMultipleChoiceChange = (optionId: string, checked: boolean) => {
    setSelectedOptions((prev) =>
      checked ? [...prev, optionId] : prev.filter((id) => id !== optionId)
    );
  };

  const handleSubmit = () => {
    if (poll.type === "single-choice") {
      if (selectedOption) {
        console.log("Submitting single choice vote:", selectedOption);
        // TODO: Implement actual vote submission for single choice
        setShowResults(true);
      } else {
        console.log("Please select an option.");
      }
    } else if (poll.type === "multiple-choice") {
      if (selectedOptions.length > 0) {
        console.log("Submitting multiple choice vote:", selectedOptions);
        // TODO: Implement actual vote submission for multiple choice
        setShowResults(true);
      } else {
        console.log("Please select at least one option.");
      }
    } else {
      console.log("No option selected.");
    }
  };

  return (
    <>
      <PageHeader
        title="Poll"
        description={poll.type === "single-choice" ? "Pick one option below." : "Pick one or more options below."}
      />
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>{poll.question}</CardTitle>
        </CardHeader>
        <CardContent>
          {showResults ? (
            <div className="grid gap-3">
              {poll.options.map((opt) => (
                <div key={opt.id} className="flex items-center justify-between">
                  <span>{opt.label}</span>
                  <span>{opt.votes} votes</span>
                </div>
              ))}
            </div>
          ) : poll.type === "single-choice" ? (
            <RadioGroup onValueChange={handleSingleChoiceChange} value={selectedOption}>
              <div className="grid gap-3">
                {poll.options.map((opt) => (
                  <div key={opt.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={opt.id} id={opt.id} />
                    <label htmlFor={opt.id}>{opt.label}</label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          ) : (
            <div className="grid gap-3">
              {poll.options.map((opt) => (
                <div key={opt.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={opt.id}
                    checked={selectedOptions.includes(opt.id)}
                    onCheckedChange={(checked) =>
                      handleMultipleChoiceChange(opt.id, checked as boolean)
                    }
                  />
                  <label htmlFor={opt.id}>{opt.label}</label>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          {!showResults && (
            <Button onClick={handleSubmit}>
              Submit vote
            </Button>
          )}
        </CardFooter>
      </Card>
    </>
  );
}


