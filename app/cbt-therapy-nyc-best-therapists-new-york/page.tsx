import type { Metadata } from "next";
import NYCTreatmentPage, { type PageContent } from "../components/nyc-treatment-shared";

export const metadata: Metadata = { title: "Cognitive Behavioral Therapy (CBT) in NYC | Transcending Psychiatry", description: "Cognitive behavioral therapy is an evidence-based approach that helps people notice unhelpful thought and behavior patterns, test alternative responses, an" };

const content: PageContent = {
  "title": "Cognitive Behavioral Therapy (CBT) in NYC",
  "eyebrow": "Practical tools for thoughts, feelings, and behaviors",
  "intro": "Cognitive behavioral therapy is an evidence-based approach that helps people notice unhelpful thought and behavior patterns, test alternative responses, and practice skills in everyday situations.",
  "slug": "cbt-therapy-nyc-best-therapists-new-york",
  "sections": [
    {
      "heading": "What is CBT?",
      "body": "CBT explores how thoughts, emotions, physical sensations, and actions influence one another. Sessions often focus on specific goals and practical exercises that can be used outside appointments."
    },
    {
      "heading": "Concerns CBT may address",
      "points": [
        "Anxiety, panic, and persistent worry",
        "Depression and avoidance",
        "Stress and difficult life transitions",
        "Social anxiety and self-critical thinking",
        "Some trauma-related and obsessive-compulsive symptoms, with appropriate specialized methods"
      ]
    },
    {
      "heading": "How the process works",
      "points": [
        "Discuss the concerns affecting your day-to-day life",
        "Identify patterns that maintain distress",
        "Practice more balanced thinking and useful behaviors",
        "Review what helps and refine strategies over time"
      ]
    },
    {
      "heading": "Tools you may learn",
      "body": "Depending on your goals, treatment may involve thought records, cognitive restructuring, behavioral activation, graded exposure, problem-solving, and between-session practice. Specialized protocols are used when clinically indicated."
    },
    {
      "heading": "Collaborative, individualized care",
      "body": "CBT is not about forcing positive thinking. It is about examining assumptions, understanding reactions, and developing skills that are realistic for your circumstances."
    },
    {
      "heading": "NYC in-person and virtual options",
      "body": "Ask about the availability of CBT-informed services in New York City and telehealth across New York. The provider can discuss whether CBT or another approach best fits your needs."
    }
  ],
  "faqs": [
    {
      "question": "How long does CBT take?",
      "answer": "Length varies by goals, condition, severity, and individual response. Your clinician can discuss a suitable plan."
    },
    {
      "question": "Does CBT involve homework?",
      "answer": "It often includes optional or agreed-upon practice between sessions to help apply skills in daily life."
    },
    {
      "question": "Is CBT only for anxiety?",
      "answer": "No. CBT approaches are used for several concerns, including depression and stress, with adaptations for specific conditions."
    },
    {
      "question": "Can CBT be provided online?",
      "answer": "Some CBT approaches can be delivered through telehealth when appropriate and available."
    }
  ]
};

export default function Page() { return <NYCTreatmentPage content={content} />; }
