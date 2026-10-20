import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
    title: "Notice of Privacy Practices | Transcending Psychiatry",
    description:
        "Information about medical privacy and patient rights at Transcending Psychiatry.",
};

export default function NoticePage() {
    return (
        <LegalPage
            eyebrow="Patient Privacy"
            title="Notice of Privacy Practices"
            description="Transcending Psychiatry LLC is committed to respecting patient privacy and protecting health information in accordance with applicable law."
            sections={[
                {
                    title: "About This Notice",
                    paragraphs: [
                        "This page is reserved for the practice's official Notice of Privacy Practices. The final notice will describe how protected health information may be used and disclosed, patient privacy rights, the practice's responsibilities, and how to submit privacy questions or complaints.",
                    ],
                },
                {
                    title: "Request the Official Notice",
                    paragraphs: [
                        "For a copy of the practice's current Notice of Privacy Practices or questions about patient privacy, please contact Transcending Psychiatry LLC at (646) 580-1030.",
                    ],
                },
            ]}
        />
    );
}