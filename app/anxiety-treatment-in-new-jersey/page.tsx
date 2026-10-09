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
      "question": "How do I know if I should seek treatment?",
      "answer": "If worry, fear, or physical anxiety symptoms interfere with sleep, work, school, relationships, or daily life, a professional assessment may help."
    },
    {
      "question": "Is virtual care available?",
      "answer": "Telehealth may be available to eligible New Jersey patients. Confirm appointment options with the practice."
    },
    {
      "question": "Do you accept insurance?",
      "answer": "Insurance acceptance and coverage depend on the plan and service. Ask the office to verify your benefits."
    }
  ]
};

export default function Page() {
  return <NewJerseyTreatmentPage data={data} />;
}
