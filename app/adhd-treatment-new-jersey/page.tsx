import NewJerseyTreatmentPage, { type PageData } from "../components/nj-treatment-shared";

const data: PageData = {
  "title": "ADHD Treatment in New Jersey",
  "subtitle": "Support for teens, adults, and families with thoughtful ADHD assessment and individualized treatment.",
  "eyebrow": "Individualized mental health care",
  "sections": [
    {
      "title": "Understanding ADHD",
      "text": "ADHD can affect attention, organization, motivation, emotional regulation, school, work, and relationships. Our approach begins with listening to how these challenges show up in everyday life."
    },
    {
      "title": "ADHD Diagnosis That Connects the Dots",
      "text": "A careful assessment considers attention, behavior, executive functioning, mood, sleep, school or work performance, and personal history. When additional testing is appropriate, we discuss the next steps together."
    },
    {
      "title": "Support Through Different Stages of Life",
      "text": "Teenagers may struggle with school demands, organization, or strong emotions. College students and adults may experience persistent overwhelm, missed deadlines, and difficulty balancing responsibilities. Treatment should fit each person’s life."
    },
    {
      "title": "Individualized ADHD Treatment",
      "text": "Depending on clinical needs and available services, treatment may involve medication management, cognitive behavioral strategies, executive-function support, emotional regulation skills, and coordination with families or schools."
    },
    {
      "title": "Beyond Focus",
      "text": "ADHD is not simply about paying attention. A useful treatment plan also considers confidence, relationships, coping skills, and the everyday systems that help people thrive."
    }
  ],
  "highlights": [
    "Attention and executive-function assessment",
    "Medication management when appropriate",
    "Skills for organization and emotional regulation",
    "Family and school collaboration when appropriate"
  ],
  "faqs": [
    {
      "question": "Who can seek an ADHD evaluation?",
      "answer": "The practice serves adolescents and adults ages 12 and older. Please contact the office to confirm eligibility and available services."
    },
    {
      "question": "What happens at the first visit?",
      "answer": "Your clinician discusses symptoms, medical and mental health history, and goals before recommending next steps."
    }
  ]
};

export default function Page() {
  return <NewJerseyTreatmentPage data={data} />;
}
