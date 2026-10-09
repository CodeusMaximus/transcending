import type { Metadata } from "next";
import NYCTreatmentPage, { type PageContent } from "../nyc-treatment-shared";

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
      "question": "How do I explain therapy to my teen?",
      "answer": "Describe it as a private, supportive place to discuss challenges and learn useful skills, rather than a punishment."
    },
    {
      "question": "What if my child does not want to talk?",
      "answer": "A provider can begin by building rapport and adjusting the pace to the child’s comfort."
    },
    {
      "question": "Can parents participate?",
      "answer": "Caregiver participation may be recommended depending on age, goals, consent, and clinical needs."
    },
    {
      "question": "Do you coordinate with schools?",
      "answer": "Coordination may be possible with the appropriate written permissions."
    }
  ]
};

export default function Page() { return <NYCTreatmentPage content={content} />; }
