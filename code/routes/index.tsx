import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// preload icons
loadIcons([
  "majesticons:suitcase",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "logos:deno",
  "logos:vue",
  "vscode-icons:file-type-js-official",
  "vscode-icons:file-type-js-official",
  "logos:html-5",
  "logos:css-3",
  "logos:php",
  "logos:typescript-icon",
  "skill-icons:react-dark",
  "devicon:nextjs",
  "skill-icons:nuxtjs-dark",
  "logos:nestjs",
  "logos:fresh",
  "skill-icons:laravel-dark",
  "skill-icons:tailwindcss-dark",
  "devicon:nodejs",
  "vscode-icons:file-type-mongo",
  "logos:postgresql",
  "logos:mariadb-icon",
  "skill-icons:cassandra-light",
  "skill-icons:docker",
]);

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="max-w-sm mt-8">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              '"Hello, World!"',
              "I'm a devOps engineer.",
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-xl mt-4">
          I modernize, build and enable applications to be used on the cloud.
        </p>
      </div>
      <SpinningModel />
    </section>
  );
}

interface Value {
  title: string;
  description: string;
  image: string;
}

function Values() {
  const values: Value[] = [
    {
      title: "Focus on self-improvement",
      description:
        "I actively seek out new certifications and stay up-to-date with industry trends.",
      image: "/img/pexels-pixabay-159711.webp",
    },
    {
      title: "Cloud acessibility",
      description:
        "My goal is to simplify the cloud for everyone, regardless of their technical background.",
      image: "/img/pexels-picjumbo-com-55570-196644.webp",
    },
    {
      title: "Collaboration and Communication",
      description:
        "I excel in team environments and communicate effectively with stakeholders.",
      image: "/img/pexels-fauxels-3184418.webp",
    },
  ];

  return (
    <>
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        {values.map((value, i) => (
          <div
            class={"card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="w-full h-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "App/Cloud Support Associate",
      company: "Accenture Portugal", 
      timePeriod: "Mar 2024 - Current",
      location: "Lisbon, Portugal",
    },
    {
      title: "Trainee academy program",
      company: "Accenture Portugal", 
      timePeriod: "Oct 2023 - Mar 2024",
      location: "Lisbon, Portugal",
    },
    {
      title: "AI/ML Integration Engineer Internship",
      company: "EID, S.A.",
      timePeriod: "Mar 2023 - Jul 2023",
      location: "Charneca da Caparica, Portugal",
    },
  ];

  return (
    <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <>
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map(() => (
                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="majesticons:suitcase"
                    width="none"
                    height="none"
                  />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="tabler:calendar-filled"
                    width="none"
                    height="none"
                  />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="carbon:location-filled"
                    width="none"
                    height="none"
                  />
                  {experience.location}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary">Work Experience</h1>
    </section>
  );
}

interface Social {
  url: string;
  icon: string;
}

function Social() {
  const socials: Social[] = [
    { // GitHub
      url: "https://github.com/MagoPT",
      icon: "fa-brands:github",
    },
    { // LinkedIn
      url: "https://www.linkedin.com/in/duarte-cruz/",
      icon: "fa-brands:linkedin",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Networking
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {socials.map((social) => (
          <div class="card max-w-96" key={social.url}>
            <div class="card-body p-4">
              <h2 class="card-title">
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <Icon
                    class="w-16 h-16"
                    icon={social.icon}
                    width="none"
                    height="none"
                  />
                </a>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "PDF2Text",
      description:
        "This program aimed to automate the reading process of Guides used in e-Gar waste management system.",
      link: "https://github.com/MagoPT/PDF2TEXT",
      type: "Open Source",
      icon: "mdi:tree",
    },

  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Projects and Contributions
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {projects.map((project) => (
          <div class="card max-w-96">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={project.icon}
                  width="none"
                  height="none"
                />
                {project.title}
                <span class="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                class="btn btn-primary text-base-100"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const technologies = [
    "vscode-icons:file-type-java",
    "logos:python",
    "logos:google-cloud",
    "skill-icons:azure-dark",
    "skill-icons:docker",
    "skill-icons:terraform-light",
    "logos:ansible",
    "skill-icons:gitlab-dark",
    "devicon:sonarqube",
    "logos:jenkins",
  ];

  return (
    <section class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        {technologies.map((technology) => (
          <Icon
            class="w-8 h-8"
            icon={technology}
            width="none"
            height="none"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Projects />
      <Experience />
      <Social />
      <Technologies />
    </>
  );
}
