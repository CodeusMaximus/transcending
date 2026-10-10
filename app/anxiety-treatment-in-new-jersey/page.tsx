import NewJerseyTreatmentPage, { type PageData } from "../components/nj-treatment-shared";

const data: PageData = {
  "title": "Personalized Anxiety Treatment in New Jersey",
  "subtitle": "Compassionate, individualized support for worry, panic, avoidance, and anxiety-related distress.",
  "eyebrow": "Individualized mental health care",
  "sections": [
    {
      "title": "When Anxiety Takes Up Too Much Space",
      "text": "Anxiety can show up as racing thoughts, sleep difficulties, persistent worry, avoidance, physical tension, and trouble concentrating. Support is available even when symptoms do not look like a panic attack."
    },
    {
      "title": "Different Forms of Anxiety",
      "text": "Concerns may include generalized anxiety, social anxiety, panic symptoms, phobias, health-related worry, and anxiety associated with stressful life events."
    },
    {
      "title": "Personalized Treatment Options",
      "text": "Care may include cognitive behavioral techniques, grounding and mindfulness, exposure-based strategies when appropriate, psychiatric evaluation, and medication management based on clinical needs."
    },
    {
      "title": "Your Story Comes First",
      "text": "Treatment should reflect your circumstances, strengths, goals, and preferences. Your clinician can work with you to identify patterns and practical strategies."
    },
    {
      "title": "Getting Started",
      "text": "An initial consultation or evaluation can clarify symptoms, discuss treatment options, and help you plan a path forward."
    }
  ],
  "highlights": [
    "Generalized anxiety and excessive worry",
    "Social and performance anxiety",
    "Panic symptoms",
    "Phobias and avoidance",
    "Stress-related anxiety"
  ],
  "faqs": [
    {
      "question": "How do I know whether anxiety therapy is right for me?",
      "answer": "When worry or anxiety interferes with sleep, concentration, relationships, or everyday activities, talking with a clinician can be a helpful next step."
    },
    {
      "question": "Can I attend anxiety therapy virtually?",
      "answer": "The practice describes secure telehealth options for New Jersey patients. Ask the office about current availability and eligibility."
    },
    {
      "question": "Do you accept health insurance?",
      "answer": "The practice works with insurance plans, but acceptance and coverage vary. Contact the office for a benefits check."
    },
    {
      "question": "How quickly can I get an appointment?",
      "answer": "The original page mentions openings within a week, but scheduling changes. Contact the office for current appointment availability."
    }
  ]
};

export default function Page() {
  return <NewJerseyTreatmentPage data={data} />;
}
