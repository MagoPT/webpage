import { type PageProps } from "$fresh/server.ts";
import AppBar from "../islands/AppBar.tsx";
import { Icon } from "@iconify-icon/react";

function MetaTags(
  { credentials, url }: { credentials: { name: string }; url: string },
) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>
        ${credentials.name} - Junior DevOps Engineer | Full Portfolio
      </title>
      <meta
        name="title"
        content={`${credentials.name} - Junior DevOps Engineer | Full Portfolio`}
      />
      <meta
        name="description"
        content={`Explore ${credentials.name}'s portfolio showcasing a diverse range of cloud technologies experience. Specializing in devOps with expertise in Terraform, Ansbile, Sonarqube, and more. Discover how I can bring your web vision to life.`}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}`} />
      <meta
        property="og:title"
        content={`${credentials.name} - Junior DevOps Engineer | Full Portfolio`}
      />
      <meta
        property="og:description"
        content={`Explore ${credentials.name}'s portfolio showcasing a diverse range of cloud technologies experience. Specializing in devOps with expertise in Terraform, Ansbile, Sonarqube, and more. Discover how I can bring your web vision to life.`}
      />
      <meta
        property="og:image"
        content={`${url}meta-image.webp`}
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${url}`} />
      <meta
        property="twitter:title"
        content={`${credentials.name} - Junior DevOps Engineer | Full Portfolio`}
      />
      <meta
        property="twitter:description"
        content={`Explore ${credentials.name}'s portfolio showcasing a diverse range of cloud technologies experience. Specializing in devOps with expertise in Terraform, Ansbile, Sonarqube, and more. Discover how I can bring your web vision to life.`}
      />
      <meta
        property="twitter:image"
        content={`${url}meta-image.webp`}
      />

      {/* Meta Tags Generated with https://metatags.io */}
    </>
  );
}

export default function App({ Component }: PageProps) {

  const credentials = {
    name: "Duarte Cruz",
  };

  const url = "https://dmcc.pt/";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <MetaTags credentials={credentials} url={url} />
        <title>DevOps Portfolio | {credentials.name}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="min-h-screen flex flex-col max-w-screen-xl mx-auto">
        <header>
          <AppBar />
        </header>
        <main>
          <Component />
        </main>
        <footer class="mt-auto footer w-auto m-2 p-4 bg-neutral text-neutral-content rounded-lg">
          <aside>
            <span>Proudly implemented by Duarte Cruz 🔧</span>
            <span>MIT licensed with ❤️ by Michael</span>
            <span>
              3D Art by{" "}
              <a
                class="underline"
                href="https://sketchfab.com/KJLOYH"
                target="_blank"
              >
                Valery Kharitonov
              </a>
            </span>
          </aside>
        </footer>
      </body>
    </html>
  );
}
