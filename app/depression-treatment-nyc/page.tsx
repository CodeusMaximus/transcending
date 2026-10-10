import type { Metadata } from "next";
import NYCTreatmentPage, { type PageContent } from "../components/nyc-treatment-shared";

export const metadata: Metadata = { title: "Depression Treatment in NYC | Transcending Psychiatry", description: "Depression can affect sleep, energy, relationships, concentration, and the ability to enjoy things that once mattered. A thoughtful assessment can help ide" };

const content: PageContent = {
  "title": "Depression Treatment in NYC",
  "eyebrow": "Personalized support for mood, motivation, and everyday life",
  "intro": "Depression can affect sleep, energy, relationships, concentration, and the ability to enjoy things that once mattered. A thoughtful assessment can help identify options that fit your circumstances.",
  "slug": "depression-treatment-nyc",
  "sections": [
    {
      "heading": "Depression is more than feeling sad",
      "body": "Some people experience persistent low mood. Others notice loss of interest, exhaustion, irritability, difficulty concentrating, sleep changes, or a sense of hopelessness. Symptoms can vary, and other medical or mental health concerns may contribute."
    },
    {
      "heading": "Signs worth discussing",
      "points": [
        "Persistent sadness, emptiness, or irritability",
        "Less enjoyment in activities and relationships",
        "Changes in sleep, appetite, or energy",
        "Difficulty focusing or making decisions",
        "Withdrawal, guilt, or hopelessness"
      ]
    },
    {
      "heading": "What personalized care may include",
      "body": "A provider can review your symptoms, history, preferences, and treatment goals. Depending on clinical needs, options may include psychotherapy, medication management, practical coping strategies, and coordination with other healthcare professionals."
    },
    {
      "heading": "Therapy and medication decisions",
      "body": "Psychotherapy can help identify patterns and develop skills for daily life. Medication may be considered based on symptom severity, history, preferences, and a careful discussion of benefits and risks. No single treatment works for everyone."
    },
    {
      "heading": "Support at your pace",
      "body": "You do not need to wait until symptoms become severe to ask for an evaluation. Early discussion can help you understand what is happening and identify an appropriate level of care."
    },
    {
      "heading": "Care in New York City",
      "body": "Ask about in-person appointments in NYC and telehealth options for eligible New York patients. If you are in immediate danger or may harm yourself, call 911 or 988 rather than using a routine booking request."
    }
  ],
  "faqs": [
    {
      "question": "Can depression be treated while living in busy New York City?",
      "answer": "Yes. Treatment can be adapted to your circumstances, schedule, and needs. A clinician can help develop a practical plan."
    },
    {
      "question": "Is medication always necessary for depression?",
      "answer": "No. Psychotherapy and other supports may be appropriate for some people, while medication can be useful for others. The best approach depends on a clinical assessment."
    },
    {
      "question": "Can people make progress with depression while managing NYC stress?",
      "answer": "Many people benefit from evidence-based care and practical coping skills. Progress varies, and treatment can be adjusted as circumstances change."
    }
  ]
};

export default function Page() { return <NYCTreatmentPage content={content} />; }
