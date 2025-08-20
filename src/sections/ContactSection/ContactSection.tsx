import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

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
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section>
      <div
        id="contact-section"
        className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <SectionTitle title="Contact Me" />

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Form */}
          <div data-aos="fade-up">
            <div className="relative">
              {/* Form Card */}
              <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl sm:rounded-2xl sm:shadow-2xl dark:border-slate-700 dark:bg-slate-900">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="mb-6 sm:mb-8">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                      Send me a message
                    </h3>
                    <p className="text-sm text-gray-600 sm:text-base dark:text-gray-400">
                      I'll get back to you within 24 hours
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
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
                          className={`w-full rounded-lg border-2 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none sm:rounded-xl sm:px-4 sm:py-3 sm:text-base dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                            errors.name
                              ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                              : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
                          }`}
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-red-500 sm:text-sm">
                            <AlertCircle className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
                            <span>{errors.name}</span>
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
                          className={`w-full rounded-lg border-2 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none sm:rounded-xl sm:px-4 sm:py-3 sm:text-base dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                            errors.email
                              ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                              : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 flex items-center gap-1 text-xs text-red-500 sm:text-sm">
                            <AlertCircle className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
                            <span>{errors.email}</span>
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
                        className={`w-full rounded-lg border-2 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none sm:rounded-xl sm:px-4 sm:py-3 sm:text-base dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                          errors.subject
                            ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                            : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
                        }`}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500 sm:text-sm">
                          <AlertCircle className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
                          <span>{errors.subject}</span>
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
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full resize-none rounded-lg border-2 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-500 transition-all duration-300 focus:ring-2 focus:outline-none sm:rounded-xl sm:px-4 sm:py-3 sm:text-base dark:bg-slate-800 dark:text-white dark:placeholder-gray-400 ${
                          errors.message
                            ? "border-red-400 focus:border-red-500 focus:ring-red-500/20"
                            : "border-gray-300 focus:border-blue-400 focus:ring-blue-400/20 dark:border-slate-600 dark:focus:border-green-400 dark:focus:ring-green-400/20"
                        }`}
                        placeholder="Tell me about your project or just say hello..."
                      />
                      {errors.message && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-red-500 sm:text-sm">
                          <AlertCircle className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group/btn inline-flex w-full items-center justify-center rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-400/25 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:px-8 sm:py-4 sm:text-base dark:bg-green-400 dark:hover:bg-green-500"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-gray-900 border-t-transparent sm:h-5 sm:w-5"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12 sm:h-5 sm:w-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="flex items-start gap-2 rounded-lg bg-green-100 p-3 text-green-800 sm:rounded-xl sm:p-4 dark:bg-green-900/30 dark:text-green-400">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                        <span className="text-xs sm:text-sm">
                          Message sent successfully! I'll get back to you soon.
                        </span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-start gap-2 rounded-lg bg-red-100 p-3 text-red-800 sm:rounded-xl sm:p-4 dark:bg-red-900/30 dark:text-red-400">
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                        <span className="text-xs sm:text-sm">
                          Failed to send message. Please try again or contact me
                          directly.
                        </span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
