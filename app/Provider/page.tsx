
import Image from "next/image";

export default function ProviderPage() {
    return (
        <main className="min-h-screen bg-[#faf8f5]">
            <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
                <div>
                    <p className="mb-5 text-sm font-semibold uppercase tracking-widest text-orange-600">
                        Transcending Psychiatry
                    </p>

                    <h1 className="font-serif text-5xl font-semibold leading-tight text-gray-900 md:text-7xl">
                        Meet Your
                        <span className="block text-orange-600">
                            Provider
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
                        Meet Joe. At Transcending Psychiatry, we
                        believe in compassionate, personalized mental
                        health care that puts your well-being first.
                    </p>

                    <p className="mt-5 text-gray-500">
                        Our provider page is being updated.
                        Please check back soon.
                    </p>

                    <a
                        href="/"
                        className="mt-9 inline-block rounded-full bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
                    >
                        Return Home
                    </a>
                </div>

                <div className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl bg-orange-100 shadow-2xl">
                    <Image
                        src="/images/joe.png"
                        alt="Joe - Transcending Psychiatry"
                        fill
                        priority
                        sizes="(max-width: 1024px) 90vw, 500px"
                        className="object-cover object-top"
                    />
                </div>
            </section>
        </main>
    );
}
