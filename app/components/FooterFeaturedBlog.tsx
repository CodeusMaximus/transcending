"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type BlogPost = {
    _id?: string;
    slug?: string;
    title: string;
    excerpt?: string;
    description?: string;
    category?: string;
    featuredImage?: string;
    coverImage?: string;
    image?: string;
    featured?: boolean;
    isFeatured?: boolean;
};

export default function FeaturedBlogTest() {
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFeaturedPost() {
            try {
                const response = await fetch("/api/get-posts");

                if (!response.ok) {
                    throw new Error("Unable to load blog posts");
                }

                const data = await response.json();

                const posts: BlogPost[] = Array.isArray(data)
                    ? data
                    : Array.isArray(data.posts)
                        ? data.posts
                        : [];

                const featured =
                    posts.find(
                        (item) =>
                            item.featured === true ||
                            item.isFeatured === true
                    ) ?? posts[0];

                setPost(featured ?? null);
            } catch (error) {
                console.error("Featured blog error:", error);
            } finally {
                setLoading(false);
            }
        }

        loadFeaturedPost();
    }, []);

    const imageUrl =
        post?.featuredImage ||
        post?.coverImage ||
        post?.image;

    const postUrl = post
        ? post.slug
            ? `/blog/${post.slug}`
            : post._id
                ? `/blog/${post._id}`
                : "/blog"
        : "/blog";

    return (
        <div className="min-w-0">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff9b58]">
                Featured Article
            </h3>

            {loading ? (
                <p className="mt-6 text-sm text-white/50">
                    Loading article...
                </p>
            ) : post ? (
                <Link
                    href={postUrl}
                    className="group mt-6 block overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.045] transition-all duration-300 hover:border-[#ff7426]/40"
                >
                    {imageUrl && (
                        <div className="h-[155px] overflow-hidden">
                            <img
                                src={imageUrl}
                                alt={post.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    )}

                    <div className="p-5">
                        {post.category && (
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ff9b58]">
                                {post.category}
                            </p>
                        )}

                        <h4 className="line-clamp-2 text-[16px] font-semibold leading-snug text-white">
                            {post.title}
                        </h4>

                        <p className="mt-3 line-clamp-3 text-[12px] leading-6 text-white/55">
                            {post.excerpt ||
                                post.description ||
                                "Explore our latest mental health insights."}
                        </p>

                        <span className="mt-5 inline-block text-[12px] font-semibold text-[#ff9b58]">
                            Read Article →
                        </span>
                    </div>
                </Link>
            ) : (
                <Link
                    href="/blog"
                    className="mt-6 inline-block text-sm text-[#ff9b58]"
                >
                    Explore Our Blog →
                </Link>
            )}
        </div>
    );
}