"use client";

import { BulletCard, CardGrid, PageFooter, PageHero, Reveal, Section, Steps } from "../components/service-page-shared";

export default function PsychiatricEvaluationPage() {
  return <main className="overflow-hidden bg-white">
    <PageHero eyebrow="Transcending Psychiatry · New York & New Jersey" title="Comprehensive Psychiatric" highlight="Evaluations" description="A thoughtful, structured evaluation can help clarify what you're experiencing and guide an individualized treatment plan. Learn what the process involves and what to expect." />
    <Section eyebrow="A clearer understanding" title="What is a comprehensive psychiatric evaluation?">
      <Reveal><p className="max-w-4xl text-lg leading-9 text-[#6d6661]">A comprehensive psychiatric evaluation explores your emotional well-being, symptoms, medical and mental health history, daily functioning, and personal circumstances. It goes beyond a brief symptom checklist to help a qualified clinician understand possible diagnoses, identify concerns, and recommend appropriate next steps. Not every evaluation results in a diagnosis or medication prescription.</p></Reveal>
    </Section>
    <Section eyebrow="The assessment" title="What your evaluation may include" tinted>
      <CardGrid items={[
        { title: "Psychiatric and medical history", text: "Discussion of previous diagnoses, treatments, current medications, physical health concerns, and relevant family history." },
        { title: "Current symptoms", text: "Review of when symptoms began, their intensity, patterns, triggers, and effects on relationships, school, work, or everyday activities." },
        { title: "Screening and testing", text: "Questionnaires or standardized screening tools may help assess mood, anxiety, attention, cognition, or other areas when clinically appropriate." },
        { title: "Physical health considerations", text: "Medical symptoms and possible physical contributors may be reviewed. A physical exam or laboratory testing may be recommended or coordinated if indicated." },
        { title: "Safety assessment", text: "The clinician may ask about immediate safety concerns, including thoughts of self-harm or harm to others, to determine appropriate support." },
        { title: "Personal and cultural context", text: "Life events, family circumstances, cultural background, environmental stressors, and personal strengths help inform the clinical picture." },
      ]} />
    </Section>
    <Section eyebrow="What to expect" title="The evaluation process, step by step">
      <Steps items={[
        { title: "Initial consultation", text: "Share your concerns, current symptoms, goals, and questions in a supportive setting." },
        { title: "Detailed clinical interview", text: "Review relevant psychiatric, medical, social, family, and treatment history." },
        { title: "Additional screening", text: "Complete any clinically appropriate questionnaires or assessments that can help clarify symptoms." },
        { title: "Clinical formulation", text: "Your provider considers the available information, possible diagnoses, and other factors affecting well-being." },
        { title: "Treatment recommendations", text: "Discuss options that may include psychotherapy, medication, further evaluation, referrals, or other supports." },
      ]} />
    </Section>
    <Section eyebrow="Why it matters" title="Benefits of a thorough evaluation" tinted>
      <CardGrid items={[
        { title: "Greater diagnostic clarity", text: "A careful assessment can help distinguish overlapping symptoms and reduce the risk of overlooking relevant concerns." },
        { title: "A whole-person perspective", text: "Medical history, relationships, lifestyle, culture, and environmental stressors can all influence mental health." },
        { title: "More informed treatment", text: "Recommendations can be tailored to your symptoms, needs, preferences, and circumstances." },
        { title: "Earlier identification", text: "Recognizing concerns sooner may help people access support before symptoms create greater disruption." },
      ]} columns={2} />
    </Section>
    <Section eyebrow="Areas of assessment" title="Conditions an evaluation may explore">
      <div className="grid gap-6 lg:grid-cols-2">
        <BulletCard title="Mental health concerns" bullets={["Depression and bipolar disorders", "Generalized anxiety, panic, and related disorders", "Schizophrenia and other psychotic disorders", "Obsessive-compulsive disorder and PTSD"]} />
        <BulletCard title="Other concerns that may be identified" intro="An evaluation can also identify issues that require additional assessment or referral; identification does not necessarily mean the practice offers specialty treatment for every condition." bullets={["Personality-related symptoms and difficulties", "Substance use concerns", "Eating-related concerns", "Other behavioral, emotional, or cognitive difficulties"]} />
      </div>
    </Section>
    <Section eyebrow="Common questions" title="When should you seek an evaluation?" tinted>
      <div className="grid gap-6 lg:grid-cols-2">
        <BulletCard title="Signs it may be time to talk" bullets={["Emotional distress that persists or worsens", "Difficulty functioning at school, work, home, or in relationships", "Significant changes in mood, sleep, behavior, or concentration", "Symptoms that interfere with quality of life"]} />
        <BulletCard title="How long does a psychiatric evaluation take?" intro="Appointment length depends on the complexity of your history and symptoms, the clinician's approach, and whether additional testing is needed. Ask the practice for its current appointment length when scheduling." bullets={["Some assessments are completed in one visit", "More complex concerns may require follow-up", "You can ask questions and share concerns throughout the process"]} />
      </div>
      <Reveal className="mt-8"><p className="max-w-4xl text-sm leading-7 text-[#756b65]">If someone is in immediate danger or at risk of harming themselves or another person, seek emergency assistance rather than waiting for a routine evaluation. In the U.S., call 911 for an emergency or 988 for suicide and crisis support.</p></Reveal>
    </Section>
    <Section eyebrow="Supportive care" title="A respectful and collaborative experience">
      <Reveal><p className="max-w-4xl text-lg leading-9 text-[#6d6661]">At Transcending Psychiatry, evaluations are intended to create space for your experiences, questions, and goals. A qualified psychiatric nurse practitioner can help explore what may be contributing to symptoms and discuss reasonable next steps with you. The process should be informed by clinical judgment, respect for your circumstances, and shared decision-making.</p></Reveal>
    </Section>
    <PageFooter current="/psychiatric-evaluation" />
  </main>;
}
