import NewJerseyTreatmentPage, { type PageData } from "../components/nj-treatment-shared";

const data: PageData = {
  "title": "Depression Treatment in New Jersey",
  "subtitle": "Individualized support for depression, mood changes, and challenges affecting everyday life.",
  "eyebrow": "Individualized mental health care",
  "sections": [
    {
      "title": "Understanding Depression",
      "text": "Depression may involve persistent low mood, loss of interest, changes in sleep or appetite, low energy, difficulty concentrating, and feelings of hopelessness. Symptoms can differ from person to person."
    },
    {
      "title": "A Thoughtful First Step",
      "text": "A comprehensive psychiatric evaluation can explore your symptoms, medical and psychiatric history, daily functioning, and treatment goals."
    },
    {
      "title": "Treatment That Fits Your Needs",
      "text": "Depending on clinical assessment, options may include psychotherapy, medication management, lifestyle considerations, and ongoing follow-up."
    },
    {
      "title": "Support Over Time",
      "text": "Treatment is a collaborative process. Regular check-ins help assess benefits, side effects when medications are used, and whether the plan needs adjustment."
    }
  ],
  "highlights": [
    "Psychiatric evaluation",
    "Medication management when appropriate",
    "Psychotherapy and coping strategies",
    "Ongoing progress reviews"
  ],
  "faqs": [
    {
      "question": "Is depression treatable?",
      "answer": "Many evidence-based treatments are available. Your clinician can help assess which options may be appropriate for you."
    }
  ]
};

export default function Page() {
  return <NewJerseyTreatmentPage data={data} />;
}
