import type { Metadata } from "next";
import NYCTreatmentPage, { type PageContent } from "../components/nyc-treatment-shared";

export const metadata: Metadata = { title: "Child & Adolescent Therapy in New York City | Transcending Psychiatry", description: "Child and adolescent mental health care begins with listening. We explore the concerns affecting home, school, friendships, and family life, then work coll" };

const content: PageContent = {
  "title": "Child & Adolescent Therapy in New York City",
  "eyebrow": "Warm, practical support for children, teens, and caregivers",
  "intro": "Child and adolescent mental health care begins with listening. We explore the concerns affecting home, school, friendships, and family life, then work collaboratively toward realistic goals.",
  "slug": "child-adolescent-therapy-nyc",
  "sections": [
    {
      "heading": "A gentle starting point",
      "body": "You do not need to have every answer before reaching out. Share what mornings, school, homework, friendships, and bedtime have been like. An initial conversation can help identify priorities and appropriate next steps."
    },
    {
      "heading": "What we can explore",
      "points": [
        "School avoidance, academic stress, and attention difficulties",
        "Anxiety, mood changes, irritability, and emotional regulation",
        "Friendship challenges, identity questions, grief, and family transitions",
        "Sleep difficulties and behavioral concerns"
      ]
    },
    {
      "heading": "Support tailored to developmental needs",
      "body": "Care for adolescents should reflect their age, preferences, and level of independence. Depending on clinical fit, sessions may use conversation, visual tools, skills practice, and caregiver involvement. For younger children, please confirm availability and appropriateness with the practice."
    },
    {
      "heading": "A collaborative process",
      "points": [
        "Initial assessment of concerns, history, strengths, and goals",
        "Age-appropriate treatment planning and coping skills",
        "Parent or caregiver guidance when appropriate",
        "Coordination with schools or other professionals only with appropriate consent"
      ]
    },
    {
      "heading": "Privacy and trust",
      "body": "Teen privacy is respected within applicable laws and safety requirements. Caregivers are involved in ways that support treatment, while urgent safety concerns are handled appropriately."
    },
    {
      "heading": "In-person and telehealth options",
      "body": "Ask about available NYC office visits and New York telehealth appointments. Format and eligibility depend on the patient’s age, clinical needs, and provider availability."
    }
  ],
  "faqs": [
    {
      "question": "How do you describe therapy to a child?",
      "answer": "Explain it in friendly terms: a supportive place to explore feelings, play or draw, and learn practical skills that can be used at home and school."
    },
    {
      "question": "How often will my child attend sessions?",
      "answer": "Weekly visits may be a starting point. Frequency can change as needs, progress, and family schedules evolve."
    },
    {
      "question": "Can you work with my child's school?",
      "answer": "The original page describes school coordination with appropriate consent, focused on practical strategies that educators can use."
    },
    {
      "question": "What if my teenager is reluctant to attend?",
      "answer": "The approach emphasizes choice, privacy, and goals that matter to the teen, while maintaining appropriate safety practices."
    },
    {
      "question": "When might we notice improvement?",
      "answer": "Some families notice small changes within the first several weeks, but progress varies and should not be guaranteed."
    },
    {
      "question": "Do parents receive guidance during treatment?",
      "answer": "Yes. The original page describes parent coaching with routines, language, and strategies to practice between sessions."
    },
    {
      "question": "What if my child does not want to talk?",
      "answer": "Sessions can begin with age-appropriate activities such as drawing, play, or movement. Building trust comes before expecting disclosure."
    },
    {
      "question": "Can both parents or other caregivers join?",
      "answer": "Caregiver involvement may be possible and can help align routines and communication. Ask the clinician about consent and participation."
    },
    {
      "question": "Do you support neurodivergent children?",
      "answer": "The original page describes adapting strategies to different sensory, attention, and learning needs, including ADHD and autism-related presentations. Confirm current services and age eligibility."
    }
  ]
};

export default function Page() { return <NYCTreatmentPage content={content} />; }
