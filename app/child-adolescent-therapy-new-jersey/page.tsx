import NewJerseyTreatmentPage, { type PageData } from "../nj-treatment-shared";

const data: PageData = {
  "title": "Child & Teen Therapy in New Jersey",
  "subtitle": "Supportive psychiatric and behavioral health care for adolescents and their families.",
  "eyebrow": "Individualized mental health care",
  "sections": [
    {
      "title": "When Your Child Needs Support",
      "text": "Changes in mood, school attendance, friendships, sleep, behavior, or daily functioning can signal a need for additional support. A compassionate evaluation can help families understand what is happening."
    },
    {
      "title": "Care for Adolescents Ages 12 and Older",
      "text": "The practice describes care for adolescents ages 12 and older. Concerns may include anxiety, depression, ADHD, emotional regulation, trauma, school stress, and transitions in identity or relationships."
    },
    {
      "title": "Behavioral and Emotional Support",
      "text": "Depending on needs and clinician qualifications, treatment planning can draw on behavioral approaches, cognitive behavioral strategies, coping skills, family collaboration, and psychiatric medication management."
    },
    {
      "title": "Working With Parents and Caregivers",
      "text": "Parents and caregivers can play an important role in treatment while adolescents also need privacy, respect, and space to build trust. We discuss appropriate involvement and confidentiality during care."
    },
    {
      "title": "What to Expect",
      "text": "An initial appointment explores current concerns, relevant history, functioning at home and school, and treatment goals. Together, families and clinicians discuss a practical next step."
    }
  ],
  "highlights": [
    "School stress and avoidance",
    "Mood changes and irritability",
    "Anxiety and emotional regulation",
    "Attention and behavioral concerns"
  ],
  "faqs": [
    {
      "question": "Do you treat children younger than 12?",
      "answer": "The practice’s general eligibility is ages 12 and older. The original site mentioned younger children on a case-by-case basis; confirm availability directly before advertising it."
    },
    {
      "question": "Can parents participate?",
      "answer": "Family participation can be discussed based on clinical needs, the adolescent’s age, and privacy requirements."
    }
  ]
};

export default function Page() {
  return <NewJerseyTreatmentPage data={data} />;
}
