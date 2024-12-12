export interface Category {
  id: number;
  title: string;
  description: string[];
  question: string;
}

export const categories: Category[] = [
  {
    id: 0,
    title: "Teamwork",
    description: [
      "Excels at working with individuals and teams.",
      "Communicates well (talks good and listens too!).",
      "Shares responsibilities and Kudos when the team succeeds.",
    ],
    question: "How does your nominee exemplify excellent teamwork?",
  },
  {
    id: 1,
    title: "Most hardworking",
    description: [
      "Understands our high-priority objectives and works hard to make them happen.",
      "Shows top-notch ability to organize and manage small or large projects/groups.",
      "Is a leader, individually, within any team or group...leads by word and by example.",
    ],
    question: "What very special tasks or projects have you seen your nominee do?",
  },
  {
    id: 2,
    title: "Customer service",
    description: [
      "Focuses on discovering, then meeting, fellow employees' needs both on time and courteously.",
      "Consistently sets the example of providing excellent internal Customer Service at the same level as external service.",
      "Finds time to be involved in civic and voluntary work without complaining.",
    ],
    question: "In what ways is your nominee's customer service exemplary?",
  },
  {
    id: 3,
    title: "Time-keeper",
    description: [
      "Regularly reports for work on time.",
      "Delivers assignments on time and regularly beats deadlines for his/her assignments.",
      "Cautious of time when attending and during meetings.",
    ],
    question: "In what ways is your nominee's time keeping exemplary?",
  },
  {
    id: 4,
    title: "Well dressed",
    description: ["Regularly dresses well for work and is always presentable."],
    question: "In what ways is your nominee's dressing exemplary?",
  },

  {
    id: 5,
    title: "Employee of the Year",
    description: [
      "Has consistently demonstrated exceptional performance throughout the year.",
      "Shows leadership, dedication, and a strong commitment to the company’s goals.",
      "Has been an inspiration to colleagues and contributed significantly to team success.",
    ],
    question: "Why do you think this nominee deserves to be Employee of the Year?",
  }
];