import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
    title: "Privacy Policy | Transcending Psychiatry",
    description:
        "Learn how Transcending Psychiatry handles information collected through its website.",
};

export default function PrivacyPage() {
    return (
        <LegalPage
            eyebrow="Website Privacy"
            title="Privacy Policy"
            description="This Privacy Policy explains how Transcending Psychiatry LLC handles information associated with visits to our public website. It is separate from our HIPAA Notice of Privacy Practices, which addresses protected health information handled by the practice."
            sections={[
                {
                    title: "Information We Collect",
                    paragraphs: [
                        "When you visit our website, certain technical information may be processed, such as browser type, device information, pages visited, and general website usage information.",
                        "If you contact us through a website communication feature, we may receive the information you choose to provide. Patient inquiries may be directed to a separately hosted IntakeQ form.",
                    ],
                },
                {
                    title: "How We Use Information",
                    paragraphs: [
                        "Information may be used to operate and maintain the website, respond to inquiries, improve accessibility and functionality, and protect against unauthorized activity.",
                        "We do not use information submitted through patient-care channels for unrelated marketing without an appropriate legal basis or authorization.",
                    ],
                },
                {
                    title: "Third-Party Services",
                    paragraphs: [
                        "Our website may link to external platforms for patient inquiries, appointment-related services, and other practice functions. Those platforms may have their own privacy practices.",
                        "We encourage visitors to review the privacy information provided by any third-party service they use.",
                    ],
                },
                {
                    title: "Cookies and Website Technology",
                    paragraphs: [
                        "The website may use essential technical features necessary for operation, security, and performance. Any optional analytics, advertising, or tracking technologies should be disclosed here if implemented.",
                    ],
                },
                {
                    title: "Information Security",
                    paragraphs: [
                        "We take reasonable measures to protect information handled through our website. However, no internet transmission or electronic system can be guaranteed completely secure.",
                        "Please do not submit sensitive medical details through ordinary email or general website communication channels.",
                    ],
                },
                {
                    title: "Your Choices",
                    paragraphs: [
                        "You may contact the practice with questions about information you have voluntarily provided through the website. Requests involving medical records or protected health information are addressed under applicable healthcare privacy requirements.",
                    ],
                },
                {
                    title: "Changes to This Policy",
                    paragraphs: [
                        "We may revise this policy as our website, services, or legal obligations change. Updates will be posted on this page with an appropriate effective date.",
                    ],
                },
                {
                    title: "Contact",
                    paragraphs: [
                        "Transcending Psychiatry LLC, 3600 Route 66, Suite 150, Neptune, NJ 07753. Telephone: (646) 580-1030.",
                    ],
                },
            ]}
        />
    );
}