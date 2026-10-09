import type { Metadata } from "next";
import NYCTreatmentPage, { type PageContent } from "../nyc-treatment-shared";

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
      "question": "Can depression improve with therapy alone?",
      "answer": "For some people, psychotherapy may be an appropriate option. Treatment choices depend on the individual and the severity and course of symptoms."
    },
    {
      "question": "Will I need medication?",
      "answer": "Not necessarily. Your clinician can review options with you and explain potential benefits, risks, and alternatives."
    },
    {
      "question": "Can I receive care online?",
      "answer": "Telehealth may be available when clinically appropriate; confirm availability with the practice."
    }
  ]
};

export default function Page() { return <NYCTreatmentPage content={content} />; }
