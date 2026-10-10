import type { Metadata } from "next";
import NYCTreatmentPage, { type PageContent } from "../components/nyc-treatment-shared";

export const metadata: Metadata = { title: "Individual Therapy in New York City | Transcending Psychiatry", description: "When anxiety, low mood, stress, or a difficult transition starts to affect everyday life, individual therapy can create space to understand what is happeni" };

const content: PageContent = {
  "title": "Individual Therapy in New York City",
  "eyebrow": "Human-first care for the demands of real life",
  "intro": "When anxiety, low mood, stress, or a difficult transition starts to affect everyday life, individual therapy can create space to understand what is happening and develop practical ways forward.",
  "slug": "individual-therapy-nyc",
  "sections": [
    {
      "heading": "Care for different stages of life",
      "points": [
        "Teens navigating school, identity, and social pressure",
        "Young adults facing relationships, work, and major transitions",
        "Parents and caregivers balancing competing responsibilities",
        "Adults coping with grief, burnout, changing roles, or persistent stress"
      ]
    },
    {
      "heading": "What brings people to therapy?",
      "points": [
        "Anxiety, worry, and panic",
        "Depression, loss of motivation, and low mood",
        "Trauma-related distress and difficult memories",
        "Attention challenges, stress, insomnia, and life transitions",
        "Relationships, boundaries, and self-esteem"
      ]
    },
    {
      "heading": "An approach built around you",
      "body": "Treatment starts with understanding your concerns, priorities, and history. Together, you and your provider can discuss goals, possible therapeutic approaches, and how to recognize progress."
    },
    {
      "heading": "Therapeutic approaches",
      "body": "Depending on the clinician and your needs, care may draw on cognitive behavioral strategies, interpersonal work, mindfulness, trauma-informed principles, and other evidence-informed methods. Medication management can be discussed when clinically appropriate."
    },
    {
      "heading": "What to expect",
      "points": [
        "An initial conversation about symptoms, history, and goals",
        "A collaborative plan tailored to your needs",
        "Practical skills and reflection between appointments when helpful",
        "Periodic check-ins to review progress and adjust the plan"
      ]
    },
    {
      "heading": "NYC appointments and telehealth",
      "body": "Ask about available New York City in-person visits and telehealth throughout New York. Appointment duration, scheduling, and service availability should be confirmed directly with the practice."
    }
  ],
  "faqs": [
    {
      "question": "Do I need a diagnosis before starting?",
      "answer": "No. An evaluation can help clarify what you are experiencing and which services may be useful."
    },
    {
      "question": "Is telehealth an option?",
      "answer": "Ask the practice about current telehealth availability and whether it is appropriate for your situation."
    },
    {
      "question": "How often are sessions?",
      "answer": "Frequency is individualized based on goals, symptoms, and provider recommendations."
    }
  ]
};

export default function Page() { return <NYCTreatmentPage content={content} />; }
