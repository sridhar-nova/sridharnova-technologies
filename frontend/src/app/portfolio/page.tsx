"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Monitor,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  services: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  status: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "01",
    title: "NsightBiz",
    subtitle: "Capital Improvement Planning Platform",
    category: "Web Application",
    year: "2026",
    description:
      "A comprehensive digital platform designed to simplify capital improvement planning, project management and administrative workflows.",
    services: ["Web Application", "Admin Dashboard", "API Development"],
    technologies: [
      "Next.js",
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "AWS",
    ],
    image: "/images/projects/nsightbiz-dashboard.png",
    imageAlt: "NsightBiz administration dashboard",
    status: "In Development",
    featured: true,
  },
  {
    id: "02",
    title: "Magento 2 Extensions",
    subtitle: "E-Commerce Custom Development",
    category: "E-Commerce",
    year: "2026",
    description:
      "Custom Magento functionality including product options, quick view, image optimization and streamlined shopping experiences.",
    services: [
      "Magento Development",
      "Custom Modules",
      "E-Commerce Integration",
    ],
    technologies: ["Magento 2", "PHP", "MySQL", "JavaScript", "jQuery"],
    image: "/images/projects/magento-extensions.png",
    imageAlt: "Magento e-commerce development preview",
    status: "Development Work",
  },
  {
    id: "03",
    title: "SridharNova Technologies",
    subtitle: "Corporate Digital Experience",
    category: "Web Development",
    year: "2026",
    description:
      "Our company website, designed to present our services, technology capabilities and digital solutions through a premium responsive experience.",
    services: ["Website Design", "Frontend Development", "Responsive UI"],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    image: "/images/projects/sridharnova-website.png",
    imageAlt: "SridharNova Technologies corporate website",
    status: "Company Website",
  },
];

const categories = [
  "All Projects",
  "Web Application",
  "E-Commerce",
  "Web Development",
];

const technologies = [
  "React.js",
  "Next.js",
  "Python",
  "FastAPI",
  "Magento",
  "Laravel",
  "WordPress",
  "PostgreSQL",
  "MySQL",
  "AWS",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "MongoDB",
  "Strapi",
  "Git",
  "GitHub",
  "Docker",
  "Supabase",
  "Vercel",
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function ProjectImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#e9e4da] dark:bg-[#25282d] ${className}`}
    >
      {!failed ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 65vw"
          className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.035]"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-5">
          <div className="w-full max-w-md overflow-hidden rounded-xl border border-[#d8d1c5] bg-white shadow-2xl dark:border-[#41454b] dark:bg-[#17191e]">
            <div className="flex items-center gap-2 border-b border-[#e2ddd3] px-4 py-3 dark:border-[#41454b]">
              <span className="h-2 w-2 rounded-full bg-[#c6a66b]" />
              <span className="h-2 w-2 rounded-full bg-[#b9b1a4]" />
              <span className="h-2 w-2 rounded-full bg-[#d8d1c5]" />
              <div className="ml-3 h-2 w-24 rounded-full bg-[#e2ddd3] dark:bg-[#343a40]" />
            </div>
            <div className="grid grid-cols-[65px_1fr]">
              <div className="min-h-44 space-y-4 bg-[#343a40] p-3">
                <div className="h-2 rounded bg-[#c6a66b]" />
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="h-1.5 rounded bg-white/25" />
                ))}
              </div>
              <div className="space-y-4 p-4">
                <div className="h-3 w-28 rounded bg-[#343a40] dark:bg-[#f4f1ea]" />
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-12 rounded bg-[#f4f1ea] dark:bg-[#343a40]"
                    />
                  ))}
                </div>
                <div className="flex h-16 items-end gap-2 rounded border border-[#e2ddd3] p-2 dark:border-[#41454b]">
                  {[40, 70, 55, 90, 65, 85].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t bg-[#c6a66b]"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17191e]/15 to-transparent" />
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="group grid overflow-hidden rounded-[28px] border border-[#e2ddd3] bg-white dark:border-[#343a40] dark:bg-[#202328] lg:grid-cols-[0.85fr_1.15fr]"
    >
      <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-[#c6a66b]/50 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a6a36] dark:text-[#c6a66b]">
            Featured Project
          </span>
          <span className="text-xs text-[#777d82] dark:text-[#a6a8a8]">
            {project.year}
          </span>
        </div>

        <div className="my-12">
          <p className="text-sm text-[#8a6a36] dark:text-[#c6a66b]">
            {project.subtitle}
          </p>
          <h3 className="mt-4 text-5xl font-semibold tracking-[-0.065em] sm:text-6xl">
            {project.title}
            <span className="text-[#c6a66b]">.</span>
          </h3>
          <p className="mt-6 max-w-lg text-sm leading-8 text-[#686d72] dark:text-[#b8b8b2]">
            {project.description}
          </p>
        </div>

        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777d82] dark:text-[#a6a8a8]">
            Services delivered
          </p>
          <div className="flex flex-wrap gap-2">
            {project.services.map((service) => (
              <span
                key={service}
                className="rounded-full bg-[#f4f1ea] px-3 py-2 text-[10px] font-medium text-[#50565b] dark:bg-[#343a40] dark:text-[#e1ddd4]"
              >
                {service}
              </span>
            ))}
          </div>

          <p className="mb-3 mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777d82] dark:text-[#a6a8a8]">
            Technology
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="text-xs font-medium text-[#8a6a36] dark:text-[#c6a66b]"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-[#8a6a36] dark:text-[#c6a66b]">
            <span>{project.status}</span>
            <Sparkles size={14} />
          </div>
        </div>
      </div>

      <div className="relative min-h-[330px] p-3 sm:p-5 lg:min-h-[580px]">
        <div className="relative h-full min-h-[310px] overflow-hidden rounded-[20px]">
          <ProjectImage
            src={project.image}
            alt={project.imageAlt}
            className="h-full min-h-[310px] w-full"
          />
        </div>
        <div className="pointer-events-none absolute bottom-9 right-9 flex h-12 w-12 items-center justify-center rounded-full bg-[#c6a66b] text-[#17191e] shadow-xl transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight size={22} />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-[22px] border border-[#e2ddd3] bg-white p-2 dark:border-[#343a40] dark:bg-[#202328]">
        <div className="relative h-[250px] overflow-hidden rounded-[16px] sm:h-[310px]">
          <ProjectImage
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full"
          />
        </div>
        <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#c6a66b] text-[#17191e] transition-all duration-300 group-hover:rotate-45">
          <ArrowUpRight size={19} />
        </div>
      </div>

      <div className="px-1 pb-4 pt-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8a6a36] dark:text-[#c6a66b]">
            {project.category}
          </span>
          <span className="text-xs text-[#777d82] dark:text-[#a6a8a8]">
            {project.year}
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#8a6a36] dark:group-hover:text-[#c6a66b]">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[#8a6a36] dark:text-[#c6a66b]">
          {project.subtitle}
        </p>
        <p className="mt-4 text-sm leading-7 text-[#686d72] dark:text-[#b8b8b2]">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium text-[#777d82] dark:text-[#b8b8b2]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const featured = projects.find((project) => project.featured)!;

  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          !project.featured &&
          (activeFilter === "All Projects" ||
            project.category === activeFilter),
      ),
    [activeFilter],
  );

  return (
    <main className="overflow-hidden bg-[#f4f1ea] text-[#17191e] transition-colors duration-500 dark:bg-[#17191e] dark:text-[#f4f1ea]">
      <Navbar />
      {/* HERO */}
      <section className="relative px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 lg:pt-44">
        <div className="pointer-events-none absolute right-[-100px] top-24 h-[400px] w-[400px] rounded-full bg-[#c6a66b]/15 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.13 } },
            }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#b08c4d]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8a6a36] dark:text-[#c6a66b]">
                Selected work / Our portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-9 max-w-5xl text-6xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-7xl lg:text-[108px]"
            >
              Built around
              <br />
              <span className="font-serif font-normal italic text-[#b08c4d]">
                possibilities.
              </span>
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-col justify-between gap-8 border-b border-[#d8d1c5] pb-10 dark:border-[#343a40] md:flex-row md:items-end"
            >
              <p className="max-w-lg text-base leading-8 text-[#686d72] dark:text-[#b8b8b2] sm:text-lg">
                We turn business challenges into thoughtful digital experiences.
                Explore selected projects, development work and solutions
                created with purpose.
              </p>
              <a
                href="#featured"
                className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-[#8a6a36] dark:text-[#c6a66b]"
              >
                Explore projects
                <ArrowDown size={17} />
              </a>
            </motion.div>
          </motion.div>

          <div className="mt-5 flex flex-wrap justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777d82] dark:text-[#a6a8a8]">
            <span>Strategy / Design / Development</span>
            <span>Ahmedabad, India</span>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="featured" className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a36] dark:text-[#c6a66b]">
                01 / Featured case study
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Selected for a closer look.
              </h2>
            </div>
            <Monitor className="hidden text-[#b08c4d] sm:block" size={26} />
          </div>
          <FeaturedProject project={featured} />
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="all-projects"
        className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a36] dark:text-[#c6a66b]">
              02 / Project collection
            </p>
            <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-6xl">
                Work shaped by
                <br />
                <span className="font-serif font-normal italic text-[#b08c4d]">
                  real business needs.
                </span>
              </h2>
              <p className="max-w-sm text-sm leading-7 text-[#686d72] dark:text-[#b8b8b2]">
                Explore our development capabilities across web platforms,
                e-commerce and custom business solutions.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 flex gap-2 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`shrink-0 rounded-full border px-5 py-3 text-xs font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "border-[#17191e] bg-[#17191e] text-white dark:border-[#c6a66b] dark:bg-[#c6a66b] dark:text-[#17191e]"
                    : "border-[#d8d1c5] text-[#686d72] hover:border-[#b08c4d] hover:text-[#8a6a36] dark:border-[#41454b] dark:text-[#b8b8b2] dark:hover:border-[#c6a66b] dark:hover:text-[#c6a66b]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="mt-8 grid gap-x-8 gap-y-12 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {visibleProjects.length === 0 && (
            <div className="py-20 text-center">
              <Layers3 className="mx-auto text-[#b08c4d]" size={30} />
              <p className="mt-4 text-sm text-[#686d72] dark:text-[#b8b8b2]">
                More projects will be added to this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-y border-[#343A40] bg-[#17191E] px-5 py-16 text-[#F4F1EA] sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A66B]">
                03 / Our technology
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#F4F1EA]! sm:text-4xl">
                The right tools.
                <br />
                <span className="font-serif font-normal italic text-[#C6A66B]">
                  The right solution.
                </span>
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {technologies.map((technology, index) => (
                <motion.span
                  key={technology}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.045 }}
                  className="rounded-full border border-[#41454B] bg-[#343A40] px-5 py-3 text-sm font-medium text-[#F4F1EA] transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A66B] hover:bg-[#C6A66B]/10 hover:text-[#C6A66B]"
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
