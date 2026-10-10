import NewJerseyTreatmentPage, { type PageData } from "../components/nj-treatment-shared";

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
      "question": "How should I explain therapy to my child?",
      "answer": "Use age-appropriate language. You might explain that therapy is a place to talk, play, and learn ways to understand feelings and handle difficult moments."
    },
    {
      "question": "What is pediatric mental health therapy?",
      "answer": "It is mental health care adapted to a young person’s developmental, emotional, and social needs, sometimes using art, play, stories, and conversation."
    },
    {
      "question": "How long will my child need therapy?",
      "answer": "There is no fixed timeline. Goals and progress are reviewed over time, and some children need shorter support while others benefit from ongoing sessions."
    },
    {
      "question": "Do you involve families in treatment?",
      "answer": "Family participation can be an important part of care. Parent guidance, family meetings, and shared strategies may be recommended."
    },
    {
      "question": "What signs suggest a child could benefit from therapy?",
      "answer": "Changes in mood, friendships, school performance, sleep, appetite, or behavior may warrant a conversation with a qualified clinician."
    },
    {
      "question": "What happens at a child's first session?",
      "answer": "The initial visit typically explores concerns, history, strengths, and goals. Caregivers may be involved depending on the child's age and clinical needs."
    },
    {
      "question": "Can therapy help with school stress and social anxiety?",
      "answer": "Therapy can help young people develop coping strategies for academic pressure, peer relationships, and anxiety in social situations."
    },
    {
      "question": "Will parents attend therapy sessions?",
      "answer": "Caregiver involvement depends on the child's age, needs, privacy, and treatment goals. Your clinician can explain how communication and confidentiality will work."
    },
    {
      "question": "How many months does child or teen therapy usually last?",
      "answer": "Duration is individualized. Some goals can be addressed in a shorter period, while other concerns may call for several months of treatment."
    },
    {
      "question": "Can therapy address anger, defiance, or other behavioral difficulties?",
      "answer": "Yes. Treatment may help children identify feelings, practice emotional regulation, and find safer, more effective ways to respond."
    }
  ]
};

export default function Page() {
  return <NewJerseyTreatmentPage data={data} />;
}
