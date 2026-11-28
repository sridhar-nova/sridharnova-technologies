"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Globe2,
  BriefcaseBusiness,
  Headphones,
  ShieldCheck,
  Lightbulb,
  Code2,
  Rocket,
  Plus,
  Minus,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  "Website Design & Development",
  "E-commerce Development",
  "Custom Dashboard Development",
  "Web Application Development",
  "Mobile App Development",
  "Cloud, Hosting & Support",
  "Website Redesign",
  "Other",
];

const budgets = [
  "Below ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹2,50,000",
  "₹2,50,000 – ₹5,00,000",
  "Above ₹5,00,000",
  "Not decided yet",
];

const faqs = [
  {
    question: "How do I get started with a project?",
    answer:
      "Simply submit the enquiry form with your project requirements. We will review your details and get in touch to understand your goals, discuss possible solutions, and plan the next steps.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. SridharNova Technologies welcomes projects from businesses across India and internationally. We can coordinate discussions remotely and work with your preferred communication schedule.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We can review your existing website, identify opportunities to improve its design, user experience, responsiveness, and performance, and develop a refreshed solution.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We can discuss ongoing maintenance, technical support, hosting, updates, and future improvements depending on your project requirements.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "The timeline depends on the project scope, features, content, and integrations. After understanding your requirements, we will provide a proposed timeline.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Tell us about your business, goals, challenges, and what you want to build.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Let's Discuss",
    description:
      "We connect with you to understand requirements and explore the right solution.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Start Building",
    description:
      "Once everything is aligned, we plan the project and move towards development.",
    icon: Rocket,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Frontend-only demonstration.
    // Connect this handler to your backend when it is ready.
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-[#E2DDD3] dark:border-white/10 bg-white dark:bg-[#2B3036] px-4 py-3.5 text-sm text-[#17191E] dark:text-[#F4F1EA] outline-none transition-all placeholder:text-[#777D82] dark:placeholder:text-white/35 focus:border-[#B08C4D] focus:ring-4 focus:ring-[#C6A66B]/10";

  return (
    <main className="overflow-hidden bg-[#F4F1EA] dark:bg-[#17191E] text-[#17191E] dark:text-[#F4F1EA]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#17191E] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C6A66B]/10 blur-[120px]" />
          <div className="absolute -bottom-48 left-0 h-[450px] w-[450px] rounded-full bg-[#B08C4D]/10 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "55px 55px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#C6A66B]/30 bg-[#C6A66B]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B]"
            >
              <Sparkles size={14} />
              Let&apos;s Start a Conversation
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl text-white! font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-7xl"
            >
              Let&apos;s Build Something
              <span className="mt-2 block bg-gradient-to-r from-[#C6A66B] via-[#C6A66B] to-[#B08C4D] bg-clip-text text-transparent">
                Great Together.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg"
            >
              Have an idea, a business challenge, or a project in mind?
              We&apos;d love to hear about it. Let&apos;s turn your vision into
              a meaningful digital experience.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <a
                href="#contact-form"
                className="group inline-flex items-center gap-3 rounded-full bg-[#C6A66B] px-7 py-4 text-sm font-semibold text-[#17191E] dark:text-[#F4F1EA] transition-all hover:-translate-y-1 hover:bg-[#C6A66B]"
              >
                Tell Us About Your Project
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="https://wa.me/919687730338"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all hover:border-[#C6A66B] hover:bg-white/5 dark:hover:bg-white/5"
              >
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3"
          >
            {[
              { icon: Headphones, label: "Direct Communication" },
              { icon: ShieldCheck, label: "Business-Focused Solutions" },
              { icon: Clock3, label: "Clear Project Discussions" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-center gap-3 text-sm text-white/60"
              >
                <item.icon size={18} className="text-[#C6A66B]" />
                {item.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact-form" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B08C4D]">
              Contact Our Team
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#17191E] dark:text-[#F4F1EA] md:text-5xl">
              Tell us what you&apos;re
              <span className="text-[#B08C4D]"> looking to create.</span>
            </h2>
            <p className="mt-5 leading-8 text-[#5B6066] dark:text-white/65">
              Share a few details about your project. The more we understand
              your requirements, the better we can explore the right solution.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
            {/* CONTACT DETAILS */}
            <motion.aside
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative overflow-hidden rounded-[28px] bg-[#343A40] dark:bg-[#292E34] p-7 text-white md:p-9"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#C6A66B]/15" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-[#C6A66B]/15" />

              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A66B]">
                  Get in Touch
                </span>
                <h3 className="mt-4 text-3xl text-white! font-semibold leading-tight">
                  We&apos;re here to help bring your ideas to life.
                </h3>
                <p className="mt-4 text-sm leading-7 text-white!">
                  Whether you need a new website, a custom application, or
                  technical support, let&apos;s discuss how we can help your
                  business move forward.
                </p>

                <div className="mt-10 space-y-7 mb-14">
                  <a
                    href="mailto:info@sridharnova.com"
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C6A66B]/25! bg-[#C6A66B]/10! text-[#C6A66B]! transition-colors group-hover:bg-[#C6A66B]! group-hover:text-[#17191E]! dark:text-[#F4F1EA]">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0 pt-1">
                      <p className="text-xs text-white!">Email Us</p>
                      <p className="mt-1 break-all text-sm font-medium text-white! transition-colors group-hover:text-[#C6A66B]">
                        info@sridharnova.com
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto mt-2 shrink-0 text-white!"
                    />
                  </a>

                  <a
                    href="https://wa.me/919687730338"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C6A66B]/25! bg-[#C6A66B]/10! text-[#C6A66B]! transition-colors group-hover:bg-[#C6A66B]! group-hover:text-[#17191E]! dark:text-[#F4F1EA]">
                      <Phone size={20} />
                    </div>
                    <div className="min-w-0 pt-1">
                      <p className="text-xs text-white!">WhatsApp</p>
                      <p className="mt-1 text-sm font-medium text-white! transition-colors group-hover:text-[#C6A66B]">
                        +91 96877 30338
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto mt-2 shrink-0 text-white!"
                    />
                  </a>

                  <a
                    href="tel:+919687730338"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C6A66B]/25! bg-[#C6A66B]/10! text-[#C6A66B]! transition-colors group-hover:bg-[#C6A66B]! group-hover:text-[#17191E]! dark:text-[#F4F1EA]">
                      <Phone size={20} />
                    </div>
                    <div className="min-w-0 pt-1">
                      <p className="text-xs text-white!">call</p>
                      <p className="mt-1 text-sm font-medium text-white! transition-colors group-hover:text-[#C6A66B]">
                        +91 6354903538
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto mt-2 shrink-0 text-white!"
                    />
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C6A66B]/25! bg-[#C6A66B]/10! text-[#C6A66B]! transition-colors group-hover:bg-[#C6A66B]! group-hover:text-[#17191E]! dark:text-[#F4F1EA]">
                      <MapPin size={20} />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs text-white!">Location</p>
                      <p className="mt-1 text-sm font-medium text-white!">
                        Ahmedabad, Gujarat, India
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto mt-2 shrink-0 text-white!"
                    />
                  </div>

                  <a
                    href="https://sridharnova.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm font-medium text-white!"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C6A66B]/25! bg-[#C6A66B]/10! text-[#C6A66B]! transition-colors group-hover:bg-[#C6A66B]! group-hover:text-[#17191E]! dark:text-[#F4F1EA]">
                        <Globe2 size={20} />
                      </div>
                      <div className="pt-1">
                        <p className="text-xs text-white!">Website</p>
                        www.sridharnova.com
                      </div>
                      <ArrowUpRight
                        size={16}
                        className="ml-auto mt-2 shrink-0 text-white!"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </motion.aside>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="rounded-[28px] border border-[#E2DDD3] dark:border-white/10 bg-white dark:bg-[#22262B] p-6 shadow-[0_15px_60px_rgba(32,34,40,0.045)] md:p-10"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-[#17191E] dark:text-[#F4F1EA]">
                    Project Enquiry
                  </h3>
                  <p className="mt-2 text-sm text-[#5B6066] dark:text-white/65">
                    Fill in the details below to get started.
                  </p>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#F4F1EA] dark:bg-[#17191E] text-[#B08C4D] sm:flex">
                  <BriefcaseBusiness size={22} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[480px] flex-col items-center justify-center text-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F4F1EA] dark:bg-[#17191E] text-[#B08C4D]">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="mt-7 text-2xl font-semibold text-[#17191E] dark:text-[#F4F1EA]">
                      Thank You!
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-[#5B6066] dark:text-white/65">
                      Your form demonstration was completed successfully.
                      Backend submission is not connected yet, so your
                      information has not been sent or stored.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#343A40] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#B08C4D]"
                    >
                      Submit Another Enquiry
                      <ArrowRight size={16} />
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#343A40] dark:text-[#F4F1EA]">
                          Full Name <span className="text-[#B08C4D]">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          minLength={2}
                          autoComplete="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#343A40] dark:text-[#F4F1EA]">
                          Email Address{" "}
                          <span className="text-[#B08C4D]">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#343A40] dark:text-[#F4F1EA]">
                          Phone Number <span className="text-[#B08C4D]">*</span>
                        </label>
                        <div className="flex gap-2">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            aria-label="Country calling code"
                            className="w-[105px] shrink-0 rounded-xl border border-[#E2DDD3] dark:border-white/10 bg-white dark:bg-[#2B3036] px-2 text-sm text-[#17191E] dark:text-[#F4F1EA] outline-none focus:border-[#B08C4D]"
                          >
                            <option value="+91">+91 IN</option>
                            <option value="+1">+1 US</option>
                            <option value="+44">+44 UK</option>
                            <option value="+61">+61 AU</option>
                            <option value="+971">+971 UAE</option>
                            <option value="+65">+65 SG</option>
                            <option value="+49">+49 DE</option>
                          </select>
                          <input
                            name="phone"
                            type="tel"
                            required
                            autoComplete="tel-national"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#343A40] dark:text-[#F4F1EA]">
                          Company Name
                        </label>
                        <input
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Your company (optional)"
                          value={formData.company}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#343A40] dark:text-[#F4F1EA]">
                          Service Required{" "}
                          <span className="text-[#B08C4D]">*</span>
                        </label>
                        <select
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#343A40] dark:text-[#F4F1EA]">
                          Estimated Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select your budget</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#343A40] dark:text-[#F4F1EA]">
                        Tell Us About Your Project{" "}
                        <span className="text-[#B08C4D]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        minLength={10}
                        rows={5}
                        placeholder="Describe your project, goals, required features, or any specific ideas..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-y`}
                      />
                    </div>

                    <div className="flex flex-col gap-4 border-t border-[#E2DDD3] dark:border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <p className="max-w-xs text-xs leading-6 text-[#686D72] dark:text-white/50">
                        By submitting this form, you agree to be contacted
                        regarding your enquiry.
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#343A40] px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#B08C4D]"
                      >
                        Submit Enquiry
                        <Send
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F4F1EA] dark:bg-[#17191E] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B08C4D]">
              Simple & Transparent
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#17191E] dark:text-[#F4F1EA] md:text-5xl">
              What Happens <span className="text-[#B08C4D]">Next?</span>
            </h2>
            <p className="mt-5 leading-8 text-[#5B6066] dark:text-white/65">
              Getting started with SridharNova is simple. Here&apos;s how we
              move from your first enquiry to a project discussion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group relative rounded-3xl border border-[#E2DDD3] dark:border-white/10 bg-white dark:bg-[#22262B] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(32,34,40,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F1EA] dark:bg-[#17191E] text-[#B08C4D] transition-colors group-hover:bg-[#343A40] group-hover:text-[#C6A66B]">
                    <step.icon size={25} />
                  </div>
                  <span className="text-4xl font-semibold text-[#E2DDD3] dark:text-white/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-[#17191E] dark:text-[#F4F1EA]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5B6066] dark:text-white/65">
                  {step.description}
                </p>
                {index !== 2 && (
                  <div className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-[#E2DDD3] dark:border-white/10 bg-white dark:bg-[#22262B] text-[#B08C4D] md:flex">
                    <ArrowRight size={15} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white dark:bg-[#1D2126] py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#B08C4D]">
              Frequently Asked Questions
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#17191E] dark:text-[#F4F1EA] md:text-5xl">
              Got Questions?
              <span className="block text-[#B08C4D]">
                We&apos;ve Got Answers.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-8 text-[#5B6066] dark:text-white/65">
              Here are a few things you might want to know before starting your
              project with us.
            </p>
            <a
              href="mailto:info@sridharnova.com"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#B08C4D] transition-all hover:gap-3"
            >
              Still have questions? Contact us
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="divide-y divide-[#E2DDD3] border-y border-[#E2DDD3] dark:border-white/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-5 text-left"
                >
                  <span className="text-base font-semibold text-[#17191E] dark:text-[#F4F1EA] transition-colors hover:text-[#B08C4D] md:text-lg">
                    {faq.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F4F1EA] dark:bg-[#17191E] text-[#B08C4D]">
                    {openFaq === index ? (
                      <Minus size={17} />
                    ) : (
                      <Plus size={17} />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pt-4 text-sm leading-7 text-[#5B6066] dark:text-white/65">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
