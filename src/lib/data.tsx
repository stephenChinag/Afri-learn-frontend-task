import { title } from "process";

export let role = "admin";

export const menuItems = [
  {
    title: "Test configuration",
    items: [
      {
        icon: "/basic-settings.svg",
        label: "Basic Settings",
        href: "#",
      },
      {
        icon: "/question-manager.svg",
        label: "Question Manager",
        href: "/admin/question-manager",
      },
      {
        icon: "/question-settings.svg",
        label: "Question Setting",
        href: "#",
      },
      {
        icon: "/test-start-page.svg",
        label: "Test Start Page",
        href: "#",
      },
      {
        icon: "/time-settings.svg",
        label: "Time Settings",
        href: "#",
      },
      {
        icon: "/grading.svg",
        label: "Grading And Summary",
        href: "#",
      },
    ],
  },
  {
    title: "Test progress and results",
    items: [
      {
        icon: "/test-results.svg",
        label: "Test Results",
        href: "#",
      },
      {
        icon: "/test-sheet.svg",
        label: "Test Sheets Review",
        href: "#",
      },
      {
        icon: "/statistics.svg",
        label: "Statistics",
        href: "/admin/statistic",
      },
    ],
  },
];

export const CardData = [{ title: "Sales", barValue: 100 }];
export const scoreData = [
  {
    topic: "Flowering Plants",
    percentage: 50,
    current: 15,
    total: 30,
    color: "#fef08a",
  }, // Yellow
  {
    topic: "Flowering Plants",
    percentage: 25,
    current: 8,
    total: 30,
    color: "#fbcfe8",
  }, // Pink
  {
    topic: "Flowering Plants",
    percentage: 50,
    current: 15,
    total: 30,
    color: "#bbf7d0",
  }, // Green
  {
    topic: "Flowering Plants",
    percentage: 10,
    current: 3,
    total: 30,
    color: "#a5f3fc",
  }, // Cyan
  {
    topic: "Flowering Plants",
    percentage: 100,
    current: 30,
    total: 30,
    color: "#fecaca",
  }, // Red
  {
    topic: "Flowering Plants",
    percentage: 10,
    current: 3,
    total: 30,
    color: "#a5f3fc",
  }, // Cyan
  {
    topic: "Flowering Plants",
    percentage: 100,
    current: 30,
    total: 30,
    color: "#fecaca",
  }, // Red
  {
    topic: "Flowering Plants",
    percentage: 10,
    current: 3,
    total: 30,
    color: "#a5f3fc",
  }, // Cyan
  {
    topic: "Flowering Plants",
    percentage: 100,
    current: 30,
    total: 30,
    color: "#fecaca",
  }, // Red
];

// Sample Data
export const sampleQuestions = [
  {
    id: 1,
    text: "This is a suspense novel about the main character who accidentally gets a notebook with the various tracks and plans of a mysterious figure. The main character starts to decipher the contents of the notebook and finds that it contains mysterious codes and riddles.",
    topic: "Farm tools",
    type: "Single choice",
    points: 1,
    options: [
      "Answer option 1",
      "Answer option 2",
      "Answer option 3",
      "Answer option 4",
    ],
    selectedOption: 0,
  },
];
