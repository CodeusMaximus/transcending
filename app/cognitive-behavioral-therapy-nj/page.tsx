import NewJerseyTreatmentPage, { type PageData } from "../components/nj-treatment-shared";

const data: PageData = {
  "title": "Cognitive Behavioral Therapy in New Jersey",
  "subtitle": "Practical, evidence-based tools for understanding the connection between thoughts, emotions, and behavior.",
  "eyebrow": "Individualized mental health care",
  "sections": [
    {
      "title": "Real Conversations, Practical Change",
      "text": "Cognitive Behavioral Therapy (CBT) is a structured approach that helps people identify unhelpful thinking patterns, recognize behavior cycles, and develop healthier responses."
    },
    {
      "title": "What CBT Can Address",
      "text": "CBT is commonly used for anxiety, depression, stress, and a range of other concerns. Specific treatment approaches differ by diagnosis, including specialized approaches for OCD and trauma."
    },
    {
      "title": "What Happens in a CBT Session",
      "text": "You might revisit a stressful situation, identify the thoughts and emotions involved, and work with your clinician to test a more balanced perspective or practice a new behavior."
    },
    {
      "title": "Techniques Used in CBT",
      "text": "Common tools include cognitive restructuring, behavioral activation, problem-solving, gradual exposure when clinically appropriate, grounding skills, and between-session practice."
    },
    {
      "title": "A Collaborative Process",
      "text": "Treatment begins with understanding your goals, identifying patterns, choosing practical strategies, and reviewing what helps over time. Your care plan should reflect your individual circumstances."
    }
  ],
  "highlights": [
    "Cognitive restructuring",
    "Behavioral activation",
    "Problem-solving and coping skills",
    "Mindfulness and grounding",
    "Goal-setting and between-session practice"
  ],
  "faqs": [
    {
      "question": "How long does CBT last?",
      "answer": "Length varies with symptoms, goals, and treatment plan. Some courses are time-limited, while others require additional sessions."
    },
    {
      "question": "Can CBT be provided by telehealth?",
      "answer": "Telehealth may be available for eligible New Jersey patients. Confirm current service availability when booking."
    },
    {
      "question": "Is CBT covered by insurance?",
      "answer": "Coverage varies by plan and clinician. Contact the practice to verify benefits and availability."
    }
  ]
};

export default function Page() {
  return <NewJerseyTreatmentPage data={data} />;
}
