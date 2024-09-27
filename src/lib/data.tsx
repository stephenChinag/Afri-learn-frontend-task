import { title } from "process";

export let role = "admin";

export const menuItems = [
  {
    title: "Test configuration",
    items: [
      {
        icon: "/basic-settings.svg",
        label: "Basic Settings",
        href: "/admin/basic-serring",
      },
      {
        icon: "/question-manager.svg",
        label: "Question Manager",
        href: "/admin/question-manager",
      },
      {
        icon: "/question-settings.svg",
        label: "Question Setting",
        href: "/admin/question",
      },
      {
        icon: "/test-start-page.svg",
        label: "Test Start Page",
        href: "/admin/test-start",
      },
      {
        icon: "/time-settings.svg",
        label: "Time Settings",
        href: "/admin/time-settings",
      },
      {
        icon: "/grading.svg",
        label: "Grading And Summary",
        href: "/admin/grading",
      },
    ],
  },
  {
    title: "Test progress and results",
    items: [
      {
        icon: "/test-results.svg",
        label: "Test Results",
        href: "/admin/test-results",
      },
      {
        icon: "/test-sheet.svg",
        label: "Test Sheets Review",
        href: "/admin/test-sheet",
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
