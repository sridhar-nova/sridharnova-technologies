"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import {
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Globe2,
  ShoppingBag,
  LayoutDashboard,
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Layers3,
  Zap,
  ShieldCheck,
  Search,
  Check,
  Sparkles,
  Workflow,
  Database,
  Server,
  MonitorSmartphone,
  Rocket,
  Settings2,
  Cpu,
  Terminal,
  Boxes,
  Gauge,
  Network,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* =========================================
   SERVICE DATA
========================================= */

const services: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  features: string[];
}[] = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Create a strong digital presence with thoughtfully designed websites that communicate your brand, engage visitors, and support your business goals.",
    icon: Globe2,
    category: "Digital Presence",
    features: [
      "Business & corporate websites",
      "Custom UI/UX design",
      "Responsive development",
      "Website redesign",
      "Performance-focused builds",
    ],
  },
  {
    number: "02",
    title: "E-commerce Development",
    description:
      "Build an online shopping experience that makes discovering products, placing orders, and managing your store simple and seamless.",
    icon: ShoppingBag,
    category: "Online Commerce",
    features: [
      "Custom online stores",
      "Product & category management",
      "Payment gateway integration",
      "Cart & checkout experience",
      "Order management",
    ],
  },
  {
    number: "03",
    title: "Custom Dashboard Development",
    description:
      "Bring your business operations into one place with intuitive dashboards designed to simplify management and improve visibility.",
    icon: LayoutDashboard,
    category: "Business Management",
    features: [
      "Admin & management dashboards",
      "Customer management",
      "Product & inventory systems",
      "Reports & analytics",
      "Role-based access",
    ],
  },
  {
    number: "04",
    title: "Web Application Development",
    description:
      "Turn your ideas and business workflows into practical web applications built around the way your organisation works.",
    icon: Code2,
    category: "Custom Solutions",
    features: [
      "Custom business applications",
      "API development & integration",
      "Database-driven platforms",
      "Third-party integrations",
      "Scalable architecture",
    ],
  },
  {
    number: "05",
    title: "Mobile App Development",
    description:
      "Connect with customers and teams on the go through useful, intuitive mobile applications built for everyday needs.",
    icon: Smartphone,
    category: "Mobile Experience",
    features: [
      "Android & iOS applications",
      "Cross-platform development",
      "Business utility applications",
      "API & backend integration",
      "App improvements & support",
    ],
  },
  {
    number: "06",
    title: "Cloud, Hosting & Support",
    description:
      "Launch and maintain your digital products with dependable hosting, cloud configuration, deployment, and technical support.",
    icon: Cloud,
    category: "Infrastructure",
    features: [
      "Cloud deployment",
      "AWS configuration",
      "Domain & SSL setup",
      "Website migration",
      "Maintenance & support",
    ],
  },
];

/* =========================================
   PROCESS DATA
========================================= */

const processSteps = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the vision",
    description:
      "We begin by understanding your business, audience, challenges, and project goals. This helps us define what success should look like.",
    icon: Search,
    details: [
      "Requirement discussion",
      "Business understanding",
      "Project objectives",
    ],
  },
  {
    number: "02",
    title: "Plan & Design",
    subtitle: "Shape the experience",
    description:
      "We map the structure, user journey, features, and visual direction before moving into development.",
    icon: Palette,
    details: ["Project roadmap", "UI/UX planning", "Solution architecture"],
  },
  {
    number: "03",
    title: "Develop & Test",
    subtitle: "Bring it to life",
    description:
      "Our team builds the solution, connects the required systems, and tests its functionality across relevant devices and scenarios.",
    icon: Code2,
    details: ["Frontend & backend", "Integrations", "Quality testing"],
  },
  {
    number: "04",
    title: "Launch & Support",
    subtitle: "Move forward confidently",
    description:
      "We help prepare your solution for launch and can continue supporting improvements, maintenance, and future requirements.",
    icon: Rocket,
    details: ["Deployment", "Launch assistance", "Ongoing improvements"],
  },
];

/* =========================================
   TECHNOLOGY DATA
========================================= */

const technologyGroups = [
  {
    number: "01",
    title: "Frontend Development",
    subtitle: "Creating engaging digital experiences",
    icon: MonitorSmartphone,
    description:
      "Modern, responsive interfaces with a focus on usability, performance, and visual quality.",
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "HeroUI",
      "Angular",
      "Ionic",
      "jQuery",
      "AJAX",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    subtitle: "Building powerful application logic",
    icon: Terminal,
    description:
      "Reliable application backends, APIs, integrations, and business logic.",
    technologies: ["Python", "FastAPI", "Laravel", "Node.js", "PHP"],
  },
  {
    number: "03",
    title: "CMS & E-commerce",
    subtitle: "Managing content and online business",
    icon: ShoppingBag,
    description:
      "Flexible content platforms and commerce solutions for managing digital operations.",
    technologies: ["Magento", "WordPress", "WooCommerce", "Strapi", "Odoo"],
  },
  {
    number: "04",
    title: "Database Technologies",
    subtitle: "Organising and managing business data",
    icon: Database,
    description:
      "Structured and flexible data solutions for applications, reporting, and operations.",
    technologies: ["PostgreSQL", "MySQL", "SQL", "MongoDB"],
  },
  {
    number: "05",
    title: "Cloud & Infrastructure",
    subtitle: "Deploying and maintaining digital products",
    icon: Cloud,
    description:
      "Cloud infrastructure and hosting foundations to support reliable digital experiences.",
    technologies: ["AWS"],
  },
];

const allTechnologies = technologyGroups.flatMap((group) => group.technologies);

const capabilities = [
  {
    icon: Workflow,
    title: "A clear process",
    description:
      "Structured planning and communication keep every project aligned with its goals.",
  },
  {
    icon: Layers3,
    title: "Built around your needs",
    description:
      "We shape each solution around your requirements instead of forcing a one-size-fits-all approach.",
  },
  {
    icon: Zap,
    title: "Thoughtful execution",
    description:
      "We pay attention to usability, performance, responsiveness, and the details that matter.",
  },
  {
    icon: ShieldCheck,
    title: "Support beyond launch",
    description:
      "We can continue helping with maintenance, improvements, and evolving technical needs.",
  },
];

/* =========================================
   REUSABLE COMPONENTS
========================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-[#B08C4D]" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A08049]">
        {children}
      </span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  firstLine,
  secondLine,
  description,
}: {
  eyebrow: string;
  firstLine: string;
  secondLine: string;
  description?: string;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-5xl font-medium leading-[1.02] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
          {firstLine}
          <br />
          <span className="font-serif font-normal italic text-[#A08049]">
            {secondLine}
          </span>
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.15}>
          <p className="max-w-xl text-sm leading-8 text-[#68665F] dark:text-[#B7B5AF] lg:ml-auto">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* =========================================
   TECHNOLOGY CARD
========================================= */

function TechnologyCard({
  group,
  index,
}: {
  group: (typeof technologyGroups)[number];
  index: number;
}) {
  const Icon = group.icon;

  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="group relative h-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#292D34] p-7 sm:p-9"
      >
        {/* Animated background glow */}
        <motion.div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C6A66B]/[0.07] blur-[70px]"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />

        <div className="relative">
          <div className="flex items-start justify-between">
            <motion.div
              whileHover={{ rotate: -10, scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C6A66B]/35 bg-[#C6A66B]/[0.08] text-[#D7BC8B]"
            >
              <Icon size={24} strokeWidth={1.5} />
            </motion.div>

            <span className="font-serif text-2xl italic text-[#C6A66B]/50">
              {group.number}
            </span>
          </div>

          <div className="mt-9">
            <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-[#C6A66B]">
              {group.subtitle}
            </p>

            <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-white! sm:text-[1.7rem]">
              {group.title}
            </h3>

            <p className="mt-3 max-w-md text-xs leading-7 text-white/45">
              {group.description}
            </p>
          </div>

          <div className="my-7 h-px bg-white/10" />

          <div className="flex flex-wrap gap-2">
            {group.technologies.map((technology, techIndex) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08 + techIndex * 0.045,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                className="cursor-default rounded-lg border border-white/10 bg-white/[0.045] px-3.5 py-2.5 text-[10px] font-medium tracking-wide text-white/75 transition-colors duration-300 hover:border-[#C6A66B]/60 hover:bg-[#C6A66B]/10 hover:text-[#E6D2AB]"
              >
                {technology}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/30">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6A66B]" />
            Our technology toolkit
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

/* =========================================
   MAIN PAGE
========================================= */

export default function ServicesPage() {
  const servicesSliderRef = useRef<HTMLDivElement>(null);

  const scrollServices = (direction: -1 | 1) => {
    const slider = servicesSliderRef.current;
    if (!slider) return;
    const firstCard = slider.querySelector<HTMLElement>("[data-service-card]");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 360;
    slider.scrollBy({ left: direction * (cardWidth + 20), behavior: "smooth" });
  };

  useEffect(() => {
    const slider = servicesSliderRef.current;
    if (!slider) return;

    let isPaused = false;

    const autoSlide = window.setInterval(() => {
      if (isPaused) return;

      const firstCard = slider.querySelector<HTMLElement>("[data-service-card]");
      if (!firstCard) return;

      const step = firstCard.getBoundingClientRect().width + 20;
      const loopPoint = slider.scrollWidth / 2;
      const nextPosition = slider.scrollLeft + step;

      if (nextPosition >= loopPoint) {
        slider.scrollBy({ left: step, behavior: "smooth" });
        window.setTimeout(() => {
          if (slider.scrollLeft >= loopPoint - 8) {
            slider.scrollLeft -= loopPoint;
          }
        }, 600);
      } else {
        slider.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 5000);

    const pause = () => { isPaused = true; };
    const resume = () => { isPaused = false; };

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", resume);
    slider.addEventListener("focusin", pause);
    slider.addEventListener("focusout", resume);
    slider.addEventListener("touchstart", pause, { passive: true });
    slider.addEventListener("touchend", resume, { passive: true });

    return () => {
      window.clearInterval(autoSlide);
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", resume);
      slider.removeEventListener("focusin", pause);
      slider.removeEventListener("focusout", resume);
      slider.removeEventListener("touchstart", pause);
      slider.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F1EA] text-[#17191E] dark:bg-[#17191E] dark:text-[#F4F1EA]">
      <Navbar />

      {/* =====================================
          HERO
      ===================================== */}

      <section className="relative px-5 pb-28 pt-36 sm:px-8 sm:pt-44 lg:px-12 lg:pb-36">
        <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#C6A66B]/10 blur-[110px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[300px] w-[300px] rounded-full bg-[#B08C4D]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Reveal>
                <Eyebrow>What we bring to the table</Eyebrow>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-[clamp(3.5rem,8.5vw,8.4rem)] font-medium leading-[0.9] tracking-[-0.075em]">
                  Digital
                  <br />
                  solutions,
                  <br />
                  <span className="font-serif font-normal italic text-[#A08049]">
                    made meaningful.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-col gap-7 sm:flex-row sm:items-center">
                  <p className="max-w-lg text-sm leading-8 text-[#68665F] dark:text-[#B7B5AF] sm:text-base">
                    We combine thoughtful design and practical technology to
                    create digital experiences that help businesses work
                    smarter, connect better, and grow with confidence.
                  </p>

                  <Link
                    href="#services"
                    className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-[#B08C4D]/50 px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#B08C4D] hover:text-white"
                  >
                    Explore services
                    <ArrowDown
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-y-1"
                    />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Animated hero visual */}
            <Reveal
              delay={0.2}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="relative aspect-[0.92] overflow-hidden rounded-[2rem] bg-[#202329] p-7 text-white sm:p-10">
                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#C6A66B]/20" />
                <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#C6A66B]/20" />
                <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#B08C4D]/10 blur-[80px]" />

                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase tracking-[0.28em] text-white/50">
                      The SridharNova approach
                    </span>
                    <Sparkles size={18} className="text-[#C6A66B]" />
                  </div>

                  <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 rounded-full border border-dashed border-[#C6A66B]/40"
                    />
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 24,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-7 rounded-full border border-[#C6A66B]/25"
                    />

                    <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#C6A66B]/50 bg-[#2B2F36] shadow-[0_0_60px_rgba(198,166,107,0.12)]">
                      <Image
                        src="/images/monogram.png"
                        alt="SridharNova Technologies"
                        fill
                        priority
                        sizes="200px"
                        className="object-contain"
                      />
                    </div>

                    {[
                      { icon: Palette, position: "left-0 top-14" },
                      { icon: Code2, position: "right-0 top-14" },
                      { icon: Database, position: "bottom-1 left-12" },
                      { icon: Rocket, position: "bottom-1 right-12" },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <motion.div
                          key={index}
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 3 + index * 0.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`absolute flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A66B]/30 bg-[#30343C] text-[#D7BC8B] ${item.position}`}
                        >
                          <Icon size={18} strokeWidth={1.5} />
                        </motion.div>
                      );
                    })}
                  </div>

                  <div>
                    <p className="font-serif text-2xl italic text-[#D7BC8B]!">
                      Design. Develop. Deliver.
                    </p>
                    <div className="mt-5 flex items-end justify-end border-t border-white/15 pt-4">
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#D7BC8B]">
                        Built with purpose
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#B08C4D]/25 bg-[#F4F1EA] px-5 py-4 shadow-xl dark:bg-[#292D34] sm:block"
              >
                <span className="block text-[8px] uppercase tracking-[0.2em] text-[#A08049]">
                  Our focus
                </span>
                <span className="mt-1 block text-sm font-medium">
                  Your business goals
                </span>
              </motion.div>
            </Reveal>
          </div>

          <div className="mt-24 flex items-center justify-between border-t border-[#17191E]/15 pt-5 dark:border-white/15">
            <span className="text-[9px] uppercase tracking-[0.24em] text-[#77756F] dark:text-[#A5A39D]">
              Strategy · Design · Development
            </span>
            <span className="text-[9px] uppercase tracking-[0.24em] text-[#77756F] dark:text-[#A5A39D]">
              Scroll to explore
            </span>
          </div>
        </div>
      </section>

      {/* =====================================
          SERVICES
      ===================================== */}

      <section
        id="services"
        className="bg-[#EAE5DA] px-5 py-24 dark:bg-[#202329] sm:px-8 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="What we do"
            firstLine="Solutions for"
            secondLine="every next step."
            description="From building your first digital presence to developing a connected business platform, our services are designed to solve real challenges and create room for what comes next."
          />

          <div className="mt-16 flex items-center justify-between gap-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#77756F] dark:text-[#A5A39D]">
              Explore our services <span className="ml-3 text-[#A08049]">01 — 06</span>
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous services"
                onClick={() => scrollServices(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B08C4D]/35 text-[#A08049] transition-all duration-300 hover:border-[#B08C4D] hover:bg-[#B08C4D] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08C4D]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next services"
                onClick={() => scrollServices(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B08C4D]/35 text-[#A08049] transition-all duration-300 hover:border-[#B08C4D] hover:bg-[#B08C4D] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08C4D]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={servicesSliderRef}
            className="services-slider mt-7 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-6"
            aria-label="Our services"
          >
            {[...services, ...services].map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal
                  key={`${service.number}-${index}`}
                  delay={(index % services.length) * 0.06}
                  className="w-[min(88vw,410px)] shrink-0 snap-start md:w-[calc((100%-1.25rem)/2)] xl:w-[calc((100%-2.5rem)/3)]"
                >
                  <motion.article
                    data-service-card
                    whileHover={{ y: -9 }}
                    transition={{ duration: 0.35 }}
                    className="group flex h-full min-h-[430px] flex-col rounded-[1.5rem] border border-[#17191E]/10 bg-[#F4F1EA] p-7 transition-colors duration-300 hover:border-[#B08C4D]/60 dark:border-white/10 dark:bg-[#17191E] sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <motion.div
                        whileHover={{ rotate: -10, scale: 1.08 }}
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B08C4D]/40 text-[#A08049] transition-colors duration-300 group-hover:bg-[#B08C4D] group-hover:text-white"
                      >
                        <Icon size={23} strokeWidth={1.5} />
                      </motion.div>
                      <span className="font-serif text-xl italic text-[#A08049]/70">
                        {service.number}
                      </span>
                    </div>
                    <div className="mt-9">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#A08049]">
                        {service.category}
                      </span>
                      <h3 className="mt-3 max-w-sm text-2xl font-medium leading-tight tracking-[-0.045em]">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#6B6963] dark:text-[#AAA8A2]">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-7 space-y-3 border-t border-[#17191E]/10 pt-6 dark:border-white/10">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-xs text-[#55544F] dark:text-[#C2C0BA]"
                        >
                          <Check size={13} className="shrink-0 text-[#A08049]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="mt-auto flex items-center gap-2 pt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A08049]"
                    >
                      Discuss this service
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </Link>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>

          <style jsx>{`
            .services-slider {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .services-slider::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>

      {/* =====================================
          WORK PROCESS
      ===================================== */}

      <section
        id="our-process"
        className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12 lg:py-36"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#C6A66B]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="Our work process"
            firstLine="From first conversation"
            secondLine="to final delivery."
            description="Great results come from a clear process. We keep you involved at every important stage, from understanding the idea to launching and improving the finished solution."
          />

          <div className="relative mt-24">
            <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-[#B08C4D]/20 md:block" />

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.7, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
              className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-[#B08C4D] md:block"
            />

            <div className="space-y-5">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Reveal key={step.number} delay={index * 0.1}>
                    <motion.article
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.3 }}
                      className="group relative grid gap-7 rounded-[1.5rem] border border-[#17191E]/10 bg-white/35 p-7 dark:border-white/10 dark:bg-white/[0.025] sm:p-9 md:grid-cols-[90px_0.8fr_1.2fr] md:items-center md:gap-10 md:pl-12"
                    >
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#B08C4D]/50 bg-[#F4F1EA] text-[#A08049] transition-all duration-300 group-hover:bg-[#B08C4D] group-hover:text-white dark:bg-[#202329]">
                        <Icon size={19} strokeWidth={1.5} />
                      </div>

                      <div>
                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#A08049]">
                          Step {step.number}
                        </span>

                        <h3 className="mt-2 text-3xl font-medium tracking-[-0.05em]">
                          {step.title}
                        </h3>

                        <p className="mt-2 font-serif text-base italic text-[#A08049]">
                          {step.subtitle}
                        </p>
                      </div>

                      <div>
                        <p className="max-w-xl text-sm leading-7 text-[#68665F] dark:text-[#B7B5AF]">
                          {step.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {step.details.map((detail) => (
                            <span
                              key={detail}
                              className="rounded-full border border-[#B08C4D]/25 px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-[#777168] dark:text-[#C1BDB4]"
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>

                      <span className="pointer-events-none absolute right-8 top-7 hidden font-serif text-6xl italic text-[#B08C4D]/10 transition-colors duration-300 group-hover:text-[#B08C4D]/25 md:block">
                        {step.number}
                      </span>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-[#202329] p-7 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
              <div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C6A66B]">
                  Collaboration at every stage
                </span>
                <p className="mt-2 text-lg font-medium">
                  Your vision stays at the centre of the process.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D7BC8B]"
              >
                Start a project
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================
          TECHNOLOGY SHOWCASE
      ===================================== */}

      <section
        id="technologies"
        className="relative overflow-hidden bg-[#17191E] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-36"
      >
        {/* Ambient background */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#B08C4D]/10 blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B08C4D]/10 blur-[130px]"
        />

        <div className="relative mx-auto max-w-[1400px]">
          {/* Heading */}
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <Reveal>
              <Eyebrow>Technology & expertise</Eyebrow>

              <h2 className="text-5xl font-medium leading-[1.02] tracking-[-0.065em] sm:text-6xl lg:text-7xl text-white!">
                The tools behind
                <br />
                our
                <span className="font-serif font-normal italic text-[#C6A66B]">
                  {" "}
                  solutions.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-xl text-sm leading-8 text-white/60 lg:ml-auto">
                Our technology stack brings together modern frontend frameworks,
                powerful backend platforms, content management systems,
                databases, and cloud infrastructure. We select the right
                combination for each project.
              </p>
            </Reveal>
          </div>

          {/* Animated marquee */}
          <div className="relative mt-20 overflow-hidden border-y border-white/10 py-5">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max items-center gap-5"
            >
              {[...allTechnologies, ...allTechnologies].map(
                (technology, index) => (
                  <div
                    key={`${technology}-${index}`}
                    className="flex items-center gap-5"
                  >
                    <span className="whitespace-nowrap font-serif text-lg italic text-white/65">
                      {technology}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C6A66B]" />
                  </div>
                ),
              )}
            </motion.div>
          </div>

          {/* Category cards */}
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {technologyGroups.map((group, index) => (
              <TechnologyCard key={group.number} group={group} index={index} />
            ))}
          </div>

          {/* Floating technology statement */}
          <Reveal delay={0.3}>
            <div className="relative mt-16 overflow-hidden rounded-[1.7rem] border border-[#C6A66B]/20 bg-gradient-to-r from-[#292D34] via-[#252930] to-[#292D34] p-8 sm:p-12">
              <div className="absolute right-0 top-0 h-full w-1/2 bg-[#C6A66B]/[0.035] blur-3xl" />

              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3">
                    <Sparkles size={17} className="text-[#C6A66B]" />
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C6A66B]">
                      Our technology philosophy
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-medium tracking-[-0.05em] sm:text-4xl text-white!">
                    Technology should serve
                    <br />
                    <span className="font-serif italic font-normal text-[#D7BC8B]">
                      your business, not complicate it.
                    </span>
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 lg:max-w-[390px] lg:justify-end">
                  {[
                    "Flexible solutions",
                    "Scalable architecture",
                    "Modern development",
                    "Connected systems",
                  ].map((label, index) => (
                    <motion.span
                      key={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="rounded-full border border-[#C6A66B]/25 px-4 py-3 text-[9px] uppercase tracking-[0.14em] text-white/65"
                    >
                      {label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================
          WHY CHOOSE US
      ===================================== */}

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            eyebrow="The difference"
            firstLine="Technology with"
            secondLine="a human approach."
            description="We believe the best digital solutions come from understanding the people who use them. Our approach combines clear communication, considered design, and practical engineering."
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="h-full rounded-[1.4rem] border border-[#17191E]/10 p-7 dark:border-white/10 sm:p-8"
                  >
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-fit text-[#A08049]"
                    >
                      <Icon size={25} strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="mt-8 text-xl font-medium tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#68665F] dark:text-[#AAA8A2]">
                      {item.description}
                    </p>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
