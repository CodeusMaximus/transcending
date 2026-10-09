import NewJerseyTreatmentPage, { type PageData } from "../components/nj-treatment-shared";

const data: PageData = {
  "title": "Individual Therapy in New Jersey",
  "subtitle": "One-on-one support for navigating anxiety, depression, burnout, trauma, and life transitions.",
  "eyebrow": "Individualized mental health care",
  "sections": [
    {
      "title": "A Space to Be Heard",
      "text": "Individual therapy is a private, collaborative process built around your experiences, concerns, and goals. You do not need to be in crisis to ask for support."
    },
    {
      "title": "Why People Seek Therapy",
      "text": "Common reasons include overthinking, relationship difficulties, loneliness, caregiving stress, burnout, sleep problems, sadness, trauma, and major life changes."
    },
    {
      "title": "Approaches to Care",
      "text": "Depending on the clinician and your needs, therapy may draw on cognitive behavioral strategies, interpersonal work, mindfulness, trauma-informed approaches, and exploration of recurring patterns."
    },
    {
      "title": "How the Process Works",
      "text": "You reach out, discuss your concerns, meet with a clinician, and work together on goals and next steps. Session frequency and duration depend on your individual plan."
    },
    {
      "title": "In-Person and Virtual Options",
      "text": "The original site describes in-person appointments in New Jersey and telehealth across the state. Confirm the office address, clinician availability, and appointment type before scheduling."
    }
  ],
  "highlights": [
    "Anxiety and persistent stress",
    "Depression and low motivation",
    "Relationships and life transitions",
    "Trauma-informed support",
    "Self-esteem and emotional regulation"
  ],
  "faqs": [
    {
      "question": "Do I need a diagnosis to ask about therapy?",
      "answer": "No. You can contact the practice to discuss concerns and whether an evaluation or another service is appropriate."
    },
    {
      "question": "Is online care available?",
      "answer": "Telehealth is described as an option for eligible patients in New Jersey. Confirm availability when booking."
    }
  ]
};

export default function Page() {
  return <NewJerseyTreatmentPage data={data} />;
}
