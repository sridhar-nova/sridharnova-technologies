"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Eye,
  Heart,
  Lightbulb,
  Layers3,
  MessageCircle,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const capabilities = [
  "Website Design",
  "E-commerce",
  "Web Applications",
  "Business Dashboards",
  "Mobile Apps",
  "Cloud Solutions",
];

const principles = [
  {
    no: "01",
    icon: Target,
    title: "Purpose over complexity.",
    description:
      "We don't build technology just for the sake of it. Every solution begins with a real business need and a clear reason to exist.",
    label: "Business first",
  },
  {
    no: "02",
    icon: Palette,
    title: "Design with intention.",
    description:
      "We believe digital experiences should be visually distinctive, easy to navigate and thoughtfully designed around the people using them.",
    label: "Thoughtful experiences",
  },
  {
    no: "03",
    icon: Code2,
    title: "Built to move forward.",
    description:
      "We combine modern technology and practical engineering to build solutions that are dependable, adaptable and ready for what comes next.",
    label: "Future focused",
  },
  {
    no: "04",
    icon: Heart,
    title: "People make the difference.",
    description:
      "Strong partnerships are built through listening, transparency, collaboration and a genuine commitment to doing meaningful work.",
    label: "Human connection",
  },
];

const steps = [
  {
    no: "01",
    title: "Discover",
    headline: "We listen before we build.",
    description:
      "Understanding your business, audience, goals and challenges gives us the clarity to create the right solution.",
    icon: Lightbulb,
  },
  {
    no: "02",
    title: "Define",
    headline: "We turn ideas into direction.",
    description:
      "We map the experience, define priorities and shape a practical plan before development begins.",
    icon: Layers3,
  },
  {
    no: "03",
    title: "Develop",
    headline: "We bring the vision to life.",
    description:
      "Design and engineering come together to create responsive, functional and carefully crafted digital products.",
    icon: Code2,
  },
  {
    no: "04",
    title: "Deliver",
    headline: "We make progress real.",
    description:
      "We test, refine, launch and help you move forward with the next stage of your digital journey.",
    icon: Rocket,
  },
];

const teamMembers = [
  {
    number: "01",
    name: "Nidhi Badrakiya",
    role: "CEO",
    expertise: "Leadership & Business Strategy",
    initials: "NB",
    photo: "", // Add image path, e.g. "/images/team/nidhi.jpg"
  },
  {
    number: "02",
    name: "Krusha Patel",
    role: "Project Manager",
    expertise: "Laravel & Node.js",
    initials: "KP",
    photo: "",
  },
  {
    number: "03",
    name: "Shyam Kalariya",
    role: "Team Lead",
    expertise: "Python, Odoo & Magento",
    initials: "SK",
    photo: "",
  },
  {
    number: "04",
    name: "Yash Patadiya",
    role: "WordPress Developer",
    expertise: "WordPress Development",
    initials: "YP",
    photo: "",
  },
  {
    number: "05",
    name: "Bhavesh Panjwani",
    role: "Cloud & Hosting Expert",
    expertise: "Cloud Infrastructure & Hosting",
    initials: "BP",
    photo: "",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
  amount = 0.15,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8 bg-brand-gold" />
      <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-brand-gold sm:text-[10px]">
        {children}
      </span>
    </div>
  );
}

function Gold({ children }: { children: ReactNode }) {
  return (
    <span className="font-serif font-normal italic text-brand-gold">
      {children}
    </span>
  );
}

function Marquee() {
  const items = [...capabilities, ...capabilities];

  return (
    <div className="relative overflow-hidden border-y border-border py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center"
      >
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center">
            <span className="px-5 text-xs font-medium tracking-wide text-muted sm:px-8 sm:text-sm">
              {item}
            </span>
            <Sparkles size={13} className="text-brand-gold/70" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.13]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.45]);

  return (
    <section
      ref={ref}
      className="relative min-h-[90vh] overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44 lg:min-h-screen lg:pt-48"
    >
      <div className="pointer-events-none absolute -left-48 top-20 size-[500px] rounded-full bg-brand-gold/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 top-80 size-[400px] rounded-full bg-brand-gold/[0.04] blur-[140px]" />

      <div className="container-width relative">
        <Reveal>
          <Label>About SridharNova Technologies</Label>
        </Reveal>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-full text-[clamp(3rem,8.5vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]"
        >
          <span className="block">Technology</span>
          <span className="block whitespace-nowrap">
            with{" "}
            <span className="font-serif italic tracking-[-0.06em] text-brand-gold">
              purpose.
            </span>
          </span>
        </motion.h1>

        <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <Reveal delay={0.25}>
            <p className="max-w-[680px] text-base leading-8 text-muted sm:text-lg sm:leading-9">
              We transform ideas into meaningful digital experiences through
              thoughtful design, modern technology and a commitment to
              understanding what matters.
            </p>
          </Reveal>
          <Reveal delay={0.4} className="lg:justify-self-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-brand-gold px-6 py-3.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(176,140,77,0.25)]"
            >
              Let&apos;s build something
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-14 sm:mt-20">
          <div className="group relative">
            <div className="absolute -bottom-4 -right-4 h-[65%] w-[55%] rounded-[28px] border border-brand-gold/35 sm:-bottom-6 sm:-right-6 sm:rounded-[36px]" />
            <motion.div
              style={{ scale: imageScale, opacity: imageOpacity }}
              className="relative"
            >
              <div className="relative aspect-[16/9] min-h-[300px] overflow-hidden rounded-[24px] sm:min-h-[450px] sm:rounded-[36px] lg:min-h-[570px]">
                <Image
                  src="/images/team_3.png"
                  alt="SridharNova Technologies"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center transition-transform duration-1800 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#17191E]/80 via-[#17191E]/20 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-[#17191E]/65 via-transparent to-transparent" />
                <div className="absolute bottom-7 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 42 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-5 h-px bg-[#C6A66B]"
                  />
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#D9BD85]">
                    Our philosophy
                  </p>
                  <h2 className="mt-3 max-w-187.5 text-3xl font-semibold leading-tight tracking-tighter text-white! sm:text-5xl lg:text-6xl">
                    The future isn&apos;t
                    <br />
                    something we wait for.
                    <br />
                    <span className="font-serif font-normal italic text-[#D9BD85]">
                      It&apos;s something we create.
                    </span>
                  </h2>
                </div>
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute right-5 top-5 hidden rounded-full border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-xl sm:block"
                >
                  <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                    <Sparkles size={13} className="text-[#D9BD85]" />
                    Ideas into reality
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-8 flex items-center justify-between border-b border-border pb-5">
            <span className="text-[9px] uppercase tracking-[0.22em] text-muted">
              Design · Technology · Progress
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="flex items-center gap-2 text-brand-gold"
            >
              <span className="text-[9px] uppercase tracking-widest">
                Scroll to explore
              </span>
              <ArrowDown size={13} />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="container-width">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <Reveal>
              <Label>Our story</Label>
              <h2 className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-6xl">
                Built on ideas.
                <br />
                <Gold>Driven by</Gold>
                <br />
                possibilities.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-12 bg-brand-gold" />
                <span className="text-[9px] uppercase tracking-[0.25em] text-muted">
                  A digital solutions company
                </span>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <p className="text-xl font-medium leading-[1.55] tracking-[-0.03em] text-foreground sm:text-3xl">
                Every business has a vision. We believe the right technology
                can turn that vision into something tangible.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 space-y-5 text-sm leading-8 text-muted sm:text-base">
                <p>
                  SridharNova Technologies brings together creativity,
                  technology and business thinking to help businesses navigate
                  their digital journey.
                </p>
                <p>
                  We work across websites, e-commerce, web applications,
                  dashboards and mobile experiences. Our goal is to create
                  solutions that are not only visually refined but useful,
                  dependable and aligned with the way businesses actually work.
                </p>
                <p>
                  We approach every project with curiosity, care and a belief
                  that good technology should make things better — for the
                  business and for the people using it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="relative mt-12 overflow-hidden rounded-[24px] border border-border">
                <motion.div
                  style={{ y: imageY }}
                  className="relative aspect-[16/7] min-h-[190px]"
                >
                  <Image
                    src="/images/team_1.jfif"
                    alt="Creative collaboration and technology"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-[#17191E]/30" />
                </motion.div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between sm:bottom-6 sm:left-6 sm:right-6">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                    Thoughtfully designed
                  </span>
                  <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                    Purposefully built
                    <Sparkles size={12} className="text-[#D9BD85]" />
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-width">
        <Reveal>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <Label>Purpose & direction</Label>
              <h2 className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                What we stand for.
                <br />
                <Gold>Where we&apos;re going.</Gold>
              </h2>
            </div>
            <p className="max-w-[340px] text-sm leading-7 text-muted">
              A clear purpose keeps us focused. A strong vision keeps us moving.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative h-full overflow-hidden rounded-[30px] border border-border bg-surface p-8 sm:p-11"
            >
              <motion.div
                animate={{ x: [0, 35, 0], y: [0, -25, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-36 -top-36 size-80 rounded-full bg-brand-gold/[0.09] blur-[110px]"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-brand-gold/20 bg-brand-gold/10 text-brand-gold transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Target size={23} />
                  </div>
                  <span className="font-serif text-5xl italic text-brand-gold/30">01</span>
                </div>
                <p className="mt-10 text-[9px] font-semibold uppercase tracking-[0.26em] text-brand-gold">
                  Our mission
                </p>
                <h3 className="mt-4 max-w-[430px] text-3xl font-semibold leading-tight tracking-[-0.06em] sm:text-4xl">
                  Technology that creates meaningful progress.
                </h3>
                <p className="mt-6 max-w-[470px] text-sm leading-8 text-muted">
                  To deliver thoughtful, practical and dependable digital
                  solutions that help businesses solve challenges, improve
                  experiences and unlock new opportunities.
                </p>
                <div className="mt-10 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-muted">
                    Purpose in every project
                  </span>
                  <ArrowUpRight className="text-brand-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={17} />
                </div>
              </div>
            </motion.div>
          </Reveal>

          <Reveal delay={0.12}>
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative h-full overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#17191E] p-8 text-white sm:p-11"
            >
              <motion.div
                animate={{ scale: [1, 1.18, 1], opacity: [0.1, 0.24, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-28 -top-28 size-80 rounded-full bg-[#C6A66B] blur-[120px]"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-[#C6A66B]/20 bg-[#C6A66B]/10 text-[#C6A66B] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Eye size={23} />
                  </div>
                  <span className="font-serif text-5xl italic text-[#C6A66B]/30">02</span>
                </div>
                <p className="mt-10 text-[9px] font-semibold uppercase tracking-[0.26em] text-[#D9BD85]">
                  Our vision
                </p>
                <h3 className="mt-4 max-w-[430px] text-3xl font-semibold leading-tight tracking-[-0.06em] text-white! sm:text-4xl">
                  A future built on better possibilities.
                </h3>
                <p className="mt-6 max-w-[470px] text-sm leading-8 text-white/55">
                  To become a trusted digital partner for businesses by
                  continuously creating meaningful technology, exceptional
                  experiences and lasting value.
                </p>
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Progress without limits
                  </span>
                  <ArrowUpRight className="text-[#C6A66B] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={17} />
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/2 size-[400px] -translate-y-1/2 rounded-full bg-brand-gold/[0.04] blur-[130px]" />
      <div className="container-width relative">
        <Reveal>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div>
              <Label>Our philosophy</Label>
              <h2 className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                What matters
                <br />
                <Gold>in everything we do.</Gold>
              </h2>
            </div>
            <p className="max-w-[350px] text-sm leading-7 text-muted">
              These are not just principles on a page. They shape how we
              approach challenges, create solutions and work with our clients.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.no} delay={index * 0.07}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="group relative h-full overflow-hidden rounded-[26px] border border-border bg-surface p-7 sm:p-9"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="absolute inset-x-0 top-0 h-[2px] origin-left bg-brand-gold"
                  />
                  <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-brand-gold/[0.07] blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.12 }}
                      transition={{ duration: 0.3 }}
                      className="flex size-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold"
                    >
                      <Icon size={21} />
                    </motion.div>
                    <span className="font-serif text-4xl italic text-brand-gold/35">
                      {item.no}
                    </span>
                  </div>
                  <div className="relative mt-8">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
                      {item.label}
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.055em] sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-muted">
                      The SridharNova mindset
                    </span>
                    <ArrowUpRight size={16} className="text-brand-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-20 sm:py-28">
      <div className="container-width">
        <Reveal>
          <div className="relative overflow-hidden rounded-[34px] bg-[#17191E] p-8 text-white sm:rounded-[42px] sm:p-12 lg:p-16">
            <motion.div
              animate={{ x: [0, 80, 0], y: [0, 50, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-[#C6A66B]/10 blur-[150px]"
            />
            <div className="relative">
              <Label>Our process</Label>
              <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">
                <h2 className="text-4xl font-semibold leading-[0.96] tracking-[-0.075em] text-white! sm:text-6xl lg:text-7xl">
                  The journey from
                  <br />
                  <Gold>idea to impact.</Gold>
                </h2>
                <p className="max-w-[360px] text-sm leading-7 text-white/55">
                  Every project is different. Our process gives it the
                  structure and flexibility needed to turn ideas into
                  meaningful results.
                </p>
              </div>

              <div ref={ref} className="relative mt-16">
                <div className="absolute bottom-0 left-[22px] top-0 w-px bg-white/10 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[24px] lg:h-px lg:w-auto" />
                <motion.div
                  style={{ scaleY: lineScale }}
                  className="absolute bottom-0 left-[22px] top-0 w-px origin-top bg-[#C6A66B] lg:hidden"
                />
                <motion.div
                  style={{ scaleX: lineScale }}
                  className="absolute left-0 top-[24px] hidden h-px w-full origin-left bg-[#C6A66B] lg:block"
                />
                <div className="grid gap-5 lg:grid-cols-4 lg:gap-4">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.no}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: index * 0.15 }}
                        whileHover={{ y: -7 }}
                        className="group relative pl-14 lg:pl-0"
                      >
                        <div className="absolute left-[10px] top-[14px] z-10 flex size-6 items-center justify-center rounded-full border border-[#C6A66B]/50 bg-[#17191E] lg:relative lg:left-0 lg:top-0 lg:mb-8 lg:size-12">
                          <div className="size-2 rounded-full bg-[#C6A66B] transition-transform duration-300 group-hover:scale-150 lg:size-2.5" />
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-colors duration-500 group-hover:border-[#C6A66B]/35 group-hover:bg-white/[0.06] sm:p-6">
                          <div className="flex items-center justify-between">
                            <Icon size={19} className="text-[#C6A66B]" />
                            <span className="text-[9px] tracking-[0.2em] text-white/35">
                              STEP {step.no}
                            </span>
                          </div>
                          <h3 className="mt-6 text-xl font-semibold tracking-[-0.04em] text-white!">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-xs font-medium text-[#C6A66B]">
                            {step.headline}
                          </p>
                          <p className="mt-4 text-xs leading-6 text-white/50">
                            {step.description}
                          </p>
                          <div className="mt-6 h-px w-8 bg-[#C6A66B]/50 transition-all duration-500 group-hover:w-full" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 size-[400px] rounded-full bg-brand-gold/[0.05] blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[350px] rounded-full bg-brand-gold/[0.04] blur-[120px]" />

      <div className="container-width relative">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <Label>The people behind the possibilities</Label>
              <h2 className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-6xl lg:text-7xl">
                Meet the minds
                <br />
                <Gold>behind SridharNova.</Gold>
              </h2>
            </div>
            <p className="max-w-[380px] text-sm leading-7 text-muted">
              A team of creative thinkers, technical specialists and problem
              solvers, bringing different skills together to build meaningful
              digital experiences.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <Reveal key={member.number} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative h-full overflow-hidden rounded-[26px] border border-border bg-surface"
              >
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#22252B]">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
                      <div className="absolute -right-16 -top-16 size-48 rounded-full bg-[#C6A66B]/10 blur-[70px]" />
                      <div className="absolute -bottom-16 -left-16 size-48 rounded-full bg-[#C6A66B]/10 blur-[70px]" />
                      <div className="relative flex size-24 items-center justify-center rounded-full border border-[#C6A66B]/40 bg-[#C6A66B]/10 font-serif text-3xl italic text-[#D9BD85] transition-transform duration-500 group-hover:scale-110">
                        {member.initials}
                      </div>
                      <span className="relative mt-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/40">
                        Profile photo
                      </span>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17191E]/70 via-transparent to-transparent opacity-70" />
                  <span className="absolute left-5 top-5 font-serif text-3xl italic text-white/60">
                    {member.number}
                  </span>
                  <div className="absolute bottom-5 right-5 flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#C6A66B] group-hover:bg-[#C6A66B]">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="relative p-5 sm:p-6">
                  <div className="mb-4 h-px w-9 bg-brand-gold transition-all duration-500 group-hover:w-full" />
                  <h3 className="text-lg font-semibold leading-snug tracking-[-0.04em] text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-brand-gold">
                    {member.role}
                  </p>
                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
                      Expertise
                    </p>
                    <p className="mt-2 min-h-[40px] text-xs leading-6 text-muted">
                      {member.expertise}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.08 }}
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-brand-gold"
                />
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Users size={18} className="text-brand-gold" />
              <p className="text-xs font-medium text-muted">
                Different skills. One shared vision.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-xs font-semibold text-foreground transition-colors hover:text-brand-gold"
            >
              Build something with us
              <ArrowUpRight
                size={15}
                className="text-brand-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Collaboration() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-width">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <div className="group relative">
              <div className="absolute -bottom-5 -right-5 h-[75%] w-[75%] rounded-[32px] border border-brand-gold/35 sm:-bottom-7 sm:-right-7" />
              <div className="relative aspect-[4/4.3] overflow-hidden rounded-[28px] sm:rounded-[36px]">
                <Image
                  src="/images/team_2.jfif"
                  alt="SridharNova Technologies team collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1600ms] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17191E]/85 via-[#17191E]/10 to-transparent" />
                <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10">
                  <Label>Built through collaboration</Label>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.055em] text-white! sm:text-4xl">
                    Different perspectives.
                    <br />
                    Shared ambition.
                  </h3>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-8 rounded-2xl border border-border bg-surface p-4 shadow-xl sm:-left-6 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-foreground">
                      Collaboration matters
                    </p>
                    <p className="mt-1 text-[9px] text-muted">
                      Good ideas grow together
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute -right-4 top-8 hidden size-16 items-center justify-center rounded-full border border-brand-gold/30 bg-background sm:flex"
              >
                <Sparkles size={18} className="text-brand-gold" />
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Label>Working together</Label>
            <h2 className="mt-7 text-4xl font-semibold leading-[0.98] tracking-[-0.075em] sm:text-5xl lg:text-6xl">
              Your vision.
              <br />
              Our expertise.
              <br />
              <Gold>One shared journey.</Gold>
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-8 text-muted">
              <p>
                We believe the best digital experiences are created through
                genuine collaboration. We listen, ask questions, share ideas and
                work with you at every stage.
              </p>
              <p>
                Our focus is on making the process clear, keeping communication
                open and ensuring that what we build reflects your goals — not
                just a list of requirements.
              </p>
            </div>
            <div className="mt-9 space-y-4">
              {[
                "Transparent communication",
                "Solutions aligned with your goals",
                "A thoughtful process from start to launch",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                    <ShieldCheck size={14} />
                  </span>
                  <span className="text-xs font-medium text-foreground sm:text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-brand-gold"
            >
              Let&apos;s work together
              <ArrowUpRight
                size={17}
                className="text-brand-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-4 pb-24 pt-8 sm:px-6 sm:pb-32">
      <div className="container-width">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[34px] border border-brand-gold/20 bg-surface-secondary p-8 sm:rounded-[42px] sm:p-12 lg:p-16">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-brand-gold/10 blur-[150px]"
            />
            <motion.div
              animate={{ x: [0, 25, 0] }}
              transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-brand-gold/[0.06] blur-[130px]"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -right-20 top-1/2 hidden size-[380px] -translate-y-1/2 rounded-full border border-brand-gold/[0.12] lg:block"
            >
              <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-brand-gold/80" />
            </motion.div>
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Label>Let&apos;s create something meaningful</Label>
                <h2 className="mt-7 text-4xl font-semibold leading-[0.93] tracking-[-0.08em] sm:text-6xl lg:text-7xl">
                  Your next big idea
                  <br />
                  <Gold>starts here.</Gold>
                </h2>
                <p className="mt-7 max-w-[470px] text-sm leading-7 text-muted">
                  Have a project in mind, a challenge to solve or an idea
                  waiting to happen? Let&apos;s start a conversation.
                </p>
              </div>
              <Link
                href="https://wa.me/919687730338"
                className="group relative inline-flex w-fit items-center gap-3 overflow-hidden rounded-full bg-brand-gold px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(176,140,77,0.3)]"
              >
                <span className="absolute inset-0 translate-x-[-110%] bg-white/15 transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative">Start a conversation</span>
                <ArrowRight
                  size={17}
                  className="relative transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <StorySection />
      <MissionVision />
      <Philosophy />
      <Journey />
      <TeamSection />
      <Collaboration />
      <FinalCTA />
      <Footer />
    </main>
  );
}
