
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },

  // Permanent redirects from old Squarespace URLs
  async redirects() {
    return [
      // Medication management
      {
        source: "/psychiatric-medication-management",
        destination: "/medication-management",
        permanent: true,
      },

      // Contact
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },

      // Services
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },

      // About
      {
        source: "/about-us",
        destination: "/#about",
        permanent: true,
      },

      // Psychiatric evaluations
      {
        source: "/psychiatric-evaluations",
        destination: "/psychiatric-evaluation",
        permanent: true,
      },

      // Old depression blog
      // Remove this if restoring the article at its original slug.
      {
        source: "/blog/depression-treatment-new-jersey",
        destination: "/depression-treatment-new-jersey",
        permanent: true,
      },

      // Old anxiety medication vs therapy blog
      // Remove this if restoring the article at its original slug.
      {
        source: "/blog/medications-vs-therapy-anxiety-guide",
        destination: "/anxiety-treatment-in-new-jersey",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
