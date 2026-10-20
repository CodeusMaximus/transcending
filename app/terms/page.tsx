import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
    title: "Terms of Use | Transcending Psychiatry",
    description:
        "Terms and conditions for using the Transcending Psychiatry website.",
};

export default function TermsPage() {
    return (
        <LegalPage
            eyebrow="Website Information"
            title="Terms of Use"
            description="These Terms of Use describe the conditions governing access to and use of the Transcending Psychiatry LLC public website."
            sections={[
                {
                    title: "Purpose of This Website",
                    paragraphs: [
                        "The information on this website is provided for general educational and informational purposes and to help visitors learn about the practice and its services.",
                        "Website content does not constitute individualized medical advice, diagnosis, or treatment.",
                    ],
                },
                {
                    title: "No Provider-Patient Relationship",
                    paragraphs: [
                        "Browsing this website, sending a general inquiry, or requesting an appointment does not by itself establish a provider-patient relationship.",
                        "A clinical relationship is established only through the practice's applicable intake, acceptance, and clinical processes.",
                    ],
                },
                {
                    title: "Medical Emergencies",
                    paragraphs: [
                        "This website and its communication features are not intended for emergencies or crisis response.",
                        "If you are experiencing an immediate emergency, call 911. In the United States, you may call or text 988 for suicide and crisis support.",
                    ],
                },
                {
                    title: "Accuracy of Information",
                    paragraphs: [
                        "We strive to provide accurate and useful information. However, website content, service availability, insurance participation, and practice details may change.",
                        "Visitors should confirm relevant information directly with the practice before relying on it.",
                    ],
                },
                {
                    title: "Third-Party Links",
                    paragraphs: [
                        "The website may provide links to third-party services and resources. Transcending Psychiatry does not control the content or policies of independently operated websites.",
                    ],
                },
                {
                    title: "Intellectual Property",
                    paragraphs: [
                        "Unless otherwise indicated, original website text, graphics, branding, and other materials are owned by or licensed to their respective rights holders.",
                        "Unauthorized reproduction or commercial reuse may be restricted by applicable law.",
                    ],
                },
                {
                    title: "Acceptable Use",
                    paragraphs: [
                        "Visitors must not attempt to disrupt the website, gain unauthorized access to its systems, or use its features for unlawful or harmful purposes.",
                    ],
                },
                {
                    title: "Updates",
                    paragraphs: [
                        "These terms may be updated periodically. Continued use of the website after updates are posted is subject to applicable law.",
                    ],
                },
                {
                    title: "Contact",
                    paragraphs: [
                        "Questions about this website may be directed to Transcending Psychiatry LLC at (646) 580-1030.",
                    ],
                },
            ]}
        />
    );
}