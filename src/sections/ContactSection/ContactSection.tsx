import type React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "elhamdaouimar1@gmail.com",
      href: "mailto:elhamdaouimar1@gmail.com",
      color: "text-blue-500 dark:text-green-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/elhamdaouimarouane",
      href: "https://linkedin.com/in/elhamdaouimarouane",
      color: "text-blue-600 dark:text-green-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Casablanca, Morocco",
      href: "https://maps.google.com/?q=Casablanca,Morocco",
      color: "text-cyan-500 dark:text-emerald-400",
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(), // optional: time display
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <SectionTitle title="Contact Me" />

        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 50,
              ease: "easeInOut",
              delay: 0.1,
            }}
          >
            <div className="relative">
              {/* Form Card */}
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      Send me a message
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      I'll get back to you within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full rounded-xl border-2 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                            errors.name
                              ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                              : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 flex items-center gap-1 text-sm text-red-500">
                            <AlertCircle className="h-4 w-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full rounded-xl border-2 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                            errors.email
                              ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                              : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 flex items-center gap-1 text-sm text-red-500">
                            <AlertCircle className="h-4 w-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full rounded-xl border-2 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                          errors.subject
                            ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                            : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
                        }`}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="mt-1 flex items-center gap-1 text-sm text-red-500">
                          <AlertCircle className="h-4 w-4" />
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full resize-none rounded-xl border-2 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                          errors.message
                            ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                            : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
                        }`}
                        placeholder="Tell me about your project or just say hello..."
                      />
                      {errors.message && (
                        <p className="mt-1 flex items-center gap-1 text-sm text-red-500">
                          <AlertCircle className="h-4 w-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group/btn inline-flex w-full items-center justify-center rounded-full bg-blue-400 px-8 py-4 font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/25 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 dark:bg-green-400 dark:hover:bg-green-500"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-gray-900 border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5 transition-transform duration-300 group-hover/btn:rotate-12" />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="flex items-center gap-2 rounded-xl bg-green-100 p-4 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        <CheckCircle className="h-5 w-5" />
                        <span>
                          Message sent successfully! I'll get back to you soon.
                        </span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center gap-2 rounded-xl bg-red-100 p-4 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                        <AlertCircle className="h-5 w-5" />
                        <span>
                          Failed to send message. Please try again or contact me
                          directly.
                        </span>
                      </div>
                    )}
                  </form>
                </div>

                {/* Decorative gradient */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400/5 to-cyan-500/5 dark:from-green-400/5 dark:to-emerald-500/5"></div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 50,
              ease: "easeInOut",
              delay: 0.2,
            }}
          >
            {/* Contact Information */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl dark:border-slate-700 dark:bg-slate-900">
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Get in touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-slate-800"
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 transition-transform duration-300 group-hover:scale-110 dark:from-green-900/30 dark:to-emerald-900/30`}
                    >
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {info.label}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-500 dark:text-white dark:group-hover:text-green-400">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="rounded-2xl border border-blue-200/50 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 dark:border-green-400/20 dark:from-green-900/20 dark:to-emerald-900/20">
              <div className="mb-3 flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Available for work
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I'm currently available for freelance projects and full-time
                opportunities. Let's discuss how we can work together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
