"use client";

import { BulletCard, CardGrid, PageFooter, PageHero, Reveal, Section, Steps } from "../components/service-page-shared";

export default function MedicationManagementPage() {
  return <main className="overflow-hidden bg-white">
    <PageHero eyebrow="Transcending Psychiatry · New York & New Jersey" title="Psychiatric Medication" highlight="Management" description="Understand the benefits, process, medication options, and ongoing support involved in psychiatric medication management. Thoughtful, collaborative care tailored to your needs." />
    <Section eyebrow="An individualized approach" title="What is psychiatric medication management?">
      <Reveal><p className="max-w-4xl text-lg leading-9 text-[#6d6661]">Psychiatric medication management is the process of evaluating symptoms, considering whether medication is appropriate, prescribing when indicated, and monitoring treatment over time. At Transcending Psychiatry, care is guided by your medical history, preferences, goals, and response to treatment. Medication may be used alongside psychotherapy and other supports as part of a whole-person treatment plan.</p></Reveal>
    </Section>
    <Section eyebrow="Where care begins" title="A comprehensive assessment comes first" tinted>
      <CardGrid items={[
        { title: "Initial diagnosis", text: "A detailed clinical interview explores your symptoms, history, daily functioning, and treatment goals. Standardized screening tools may support clinical assessment when appropriate." },
        { title: "Medical and family history", text: "We review relevant medical conditions, current medications, possible interactions, family history, and factors that may influence treatment response." },
        { title: "Collaborative planning", text: "Your concerns, preferences, routines, and cultural background help shape an individualized plan. Questions and shared decision-making are encouraged." },
      ]} />
    </Section>
    <Section eyebrow="Understanding treatment" title="Common types of psychiatric medications">
      <CardGrid items={[
        { title: "Antidepressants", text: "May be prescribed for depression and some anxiety disorders. Examples include SSRIs such as fluoxetine and sertraline, and SNRIs such as venlafaxine." },
        { title: "Antipsychotics", text: "May be used for schizophrenia, bipolar disorder, and certain other conditions. Examples include haloperidol and olanzapine." },
        { title: "Mood stabilizers", text: "May help manage episodes of mania or mood instability in bipolar disorder. Examples include lithium and valproate." },
        { title: "Anxiolytics", text: "Some medications may relieve anxiety symptoms. Options have different benefits and risks; benzodiazepines such as lorazepam require particular care because of dependence and sedation risks." },
        { title: "Stimulants", text: "May be prescribed for ADHD following an appropriate assessment. Methylphenidate is one example; suitability and monitoring depend on individual circumstances." },
        { title: "How medications work", text: "Different medicines affect brain signaling pathways, including serotonin, dopamine, and norepinephrine. Effects vary by medication and person; finding the right treatment may take time." },
      ]} />
    </Section>
    <Section eyebrow="Continuity of care" title="Monitoring, follow-up, and adjustments" tinted>
      <Steps items={[
        { title: "Review your response", text: "Follow-up visits assess symptom changes, daily functioning, treatment goals, and whether medication is helping." },
        { title: "Address side effects", text: "Your provider reviews tolerability, possible interactions, and safety concerns, and may adjust the dose or consider alternatives when clinically appropriate." },
        { title: "Support consistency", text: "Practical strategies such as simpler schedules, reminders, and clear instructions can help you follow an agreed treatment plan." },
      ]} />
      <Reveal className="mt-8"><p className="max-w-4xl leading-8 text-[#6d6661]">The length and frequency of appointments vary according to your needs. Initial assessments are generally more detailed than routine follow-ups. Do not stop or change prescribed medication without discussing it with your treating clinician.</p></Reveal>
    </Section>
    <Section eyebrow="Care is a partnership" title="The role of your psychiatric provider">
      <div className="grid gap-6 lg:grid-cols-2">
        <BulletCard title="Clinical guidance" intro="Psychiatrists and qualified psychiatric nurse practitioners can assess symptoms, discuss medication options, and monitor treatment within their scope of practice." bullets={["Review diagnosis and treatment goals", "Explain potential benefits, risks, and alternatives", "Monitor effectiveness, side effects, and safety", "Adjust treatment based on ongoing assessment"]} />
        <BulletCard title="Patient empowerment" intro="Your experience and preferences matter throughout treatment." bullets={["Ask questions about medication and expected effects", "Report side effects or changes in symptoms", "Discuss barriers such as cost, stigma, or scheduling", "Participate in shared decisions about next steps"]} />
      </div>
    </Section>
    <Section eyebrow="Whole-person wellness" title="Medication and psychotherapy can work together" tinted>
      <Reveal><p className="max-w-4xl text-lg leading-9 text-[#6d6661]">Medication may reduce symptoms for some people, while psychotherapy can help build coping skills, examine thought patterns, and address emotional and behavioral challenges. For conditions such as depression, anxiety, and PTSD, a combination of treatments may be appropriate depending on the person and clinical situation.</p></Reveal>
    </Section>
    <Section eyebrow="Modern options" title="Access, innovation, and practical considerations">
      <CardGrid items={[
        { title: "Telehealth appointments", text: "Virtual follow-ups may improve convenience and access when clinically appropriate and permitted by applicable state and prescribing rules." },
        { title: "Pharmacogenetic testing", text: "In selected cases, genetic testing may provide information about how the body processes certain medications, but it cannot reliably predict which treatment will work best." },
        { title: "Cost and accessibility", text: "Discuss insurance coverage, affordability, and access concerns with the practice so available options can be considered." },
      ]} />
    </Section>
    <PageFooter current="/medication-management" />
  </main>;
}
