
import type { MetadataRoute } from "next";
import { connectToDatabase } from "./lib/mongodb";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SITE_URL = "https://www.transcendingpsychiatry.com";

const publicRoutes = [
    "/",
    "/Provider",
    "/blog",
    "/adhd-treatment-new-jersey",
    "/anxiety-treatment-in-new-jersey",
    "/cbt-therapy-nyc-best-therapists-new-york",
    "/child-adolescent-therapy-new-jersey",
    "/child-adolescent-therapy-nyc",
    "/cognitive-behavioral-therapy-nj",
    "/conditions-treated",
    "/depression-treatment-new-jersey",
    "/depression-treatment-nyc",
    "/individual-therapy-in-new-jersey",
    "/individual-therapy-nyc",
    "/medication-management",
    "/psychiatric-evaluation",
    "/services/medication-management",
    "/services/psychiatric-evaluation",
    "/services/psychopharmacology",
    "/services/telehealth",
];

interface BlogPost {
    _id: {
        toString(): string;
    };
    status: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    publishedAt?: Date | string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Public website pages
    const staticPages: MetadataRoute.Sitemap = publicRoutes.map(
        (route) => ({
            url: `${SITE_URL}${route}`,
            lastModified: new Date(),
            changeFrequency: route === "/" ? "weekly" : "monthly",
            priority: route === "/" ? 1 : 0.7,
        })
    );

    // Published blog articles
    let blogPages: MetadataRoute.Sitemap = [];

    try {
        const { db } = await connectToDatabase();

        const posts = await db
            .collection<BlogPost>("posts")
            .find({ status: "published" })
            .project<BlogPost>({
                _id: 1,
                status: 1,
                createdAt: 1,
                updatedAt: 1,
                publishedAt: 1,
            })
            .toArray();

        blogPages = posts.map((post) => {
            const id = String(post._id);

            const lastUpdated =
                post.updatedAt ??
                post.publishedAt ??
                post.createdAt;

            return {
                url: `${SITE_URL}/blog/${id}`,
                ...(lastUpdated
                    ? { lastModified: new Date(lastUpdated) }
                    : {}),
                changeFrequency: "weekly",
                priority: 0.6,
            };
        });
    } catch (error) {
        console.error("Sitemap MongoDB error:", error);
    }

    return [...staticPages, ...blogPages];
}
