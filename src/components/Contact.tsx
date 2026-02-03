"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha"; // ✅ CAPTCHA IMPORT

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // ✅ CAPTCHA STATE
  const [captcha, setCaptcha] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ CAPTCHA CHECK (IMPORTANT)
    if (!captcha) {
      setStatus("Please verify that you are not a robot.");
      return;
    }

    if (!formRef.current) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_gxds9zb",      // SERVICE_ID
        "template_47onju6",     // TEMPLATE_ID
        formRef.current,
        "A6pI2PtCYUAKU00vF"     // PUBLIC_KEY
      );

      setStatus("Message sent successfully ✅");
      formRef.current.reset();
      setCaptcha(null); // reset captcha after success
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-20 bg-black text-white">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-purple-500">Get In Touch</h2>
        <p className="text-gray-400 mt-3">
          Let’s discuss opportunities, collaborations, or just connect!
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-16">
        {/* LEFT — Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <InfoBox label="Email" value="tushnikpatra674@gmail.com" />
            <InfoBox label="Phone" value="+91 7003893402" />
            <InfoBox label="Location" value="Kolkata, West Bengal, India" />
          </div>

          {/* Social Links */}
          <div className="mt-10">
            <p className="text-sm text-gray-400 mb-3">Connect with me</p>

            <div className="flex gap-4">
              <SocialLink
                href="https://github.com/tushnikpatra"
                label="GitHub"
                icon={
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.04c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.096.81 2.22v3.286c0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                }
              />

              <SocialLink
                href="https://www.linkedin.com/in/tushnik-patra"
                label="LinkedIn"
                icon={
                  <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.004V9h3.112v1.561h.045c.434-.82 1.494-1.684 3.073-1.684 3.286 0 3.89 2.164 3.89 4.977v6.598zM5.337 7.433c-1.003 0-1.816-.813-1.816-1.816 0-1.003.813-1.816 1.816-1.816 1.003 0 1.816.813 1.816 1.816 0 1.003-.813 1.816-1.816 1.816zM6.956 20.452H3.719V9h3.237v11.452z" />
                }
              />

              <SocialLink
                href="mailto:tushnikpatra674@gmail.com"
                label="Email"
                icon={<path d="M12 13.065L.25 6.5V18c0 .825.675 1.5 1.5 1.5h20.5c.825 0 1.5-.675 1.5-1.5V6.5L12 13.065zM12 11L23.5 4.5H.5L12 11z" />}
              />
            </div>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="border border-gray-800 rounded-2xl p-8 bg-gradient-to-br from-black to-gray-900">
          <h3 className="text-xl font-semibold mb-6">Send me a message</h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your Name" className="input" />
              <input name="email" type="email" required placeholder="Your Email" className="input" />
            </div>

            <input name="subject" required placeholder="Subject" className="input w-full" />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              className="input w-full resize-none"
            />

            {/* ✅ CAPTCHA UI */}
            <ReCAPTCHA
              sitekey="6LfAR18sAAAAAK1EoSgoxOa7lk_JuMFxQ9E11ZBR"
              theme="dark"
              onChange={(value: string | null) => setCaptcha(value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-sm text-center text-gray-300 mt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helper Components ---------- */

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-gray-800 rounded-xl p-5 bg-gradient-to-br from-black to-gray-900">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-gray-200">{value}</p>
    </div>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-icon"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        {icon}
      </svg>
    </a>
  );
}
