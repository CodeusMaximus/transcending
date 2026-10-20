import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Section = {
    title: string;
    paragraphs: string[];
};

type LegalPageProps = {
    eyebrow: string;
    title: string;
    description: string;
    sections: Section[];
};

export default function LegalPage({
    eyebrow,
    title,
    description,
    sections,
}: LegalPageProps) {
    return (
        <main className="min-h-screen bg-[#faf9f7] text-[#292929]">
            <div className="mx-auto max-w-[1000px] px-6 pb-24 pt-36 sm:px-10">
                <Link
                    href="/"
                    className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#e96825] hover:underline"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#e96825]">
                    {eyebrow}
                </p>

                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
                    {title}
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
                    {description}
                </p>

                <div className="mt-12 space-y-10 border-t border-gray-200 pt-12">
                    {sections.map((section) => (
                        <section key={section.title}>
                            <h2 className="mb-4 text-xl font-semibold">
                                {section.title}
                            </h2>

                            <div className="space-y-4">
                                {section.paragraphs.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-[15px] leading-8 text-gray-600"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}