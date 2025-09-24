export type PollOption = {
  id: string;
  label: string;
  votes: number;
};

export type Poll = {
  id: string;
  question: string;
  type: "single-choice" | "multiple-choice";
  options: PollOption[];
  createdAt: Date;
  createdByUserId?: string;
};


