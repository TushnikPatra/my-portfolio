"use client";

import { useRef, useState } from "react";
import type { ReactNode } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [captcha, setCaptcha] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captcha) {
      setStatus("Please verify that you are not a robot ❌");
      return;
    }

    if (!formRef.current) return;

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("Message sent successfully ✅");
      formRef.current.reset();
      setCaptcha(null);
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-20 bg-black text-white">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-purple-500">Get In Touch</h2>
        <p className="text-gray-400 mt-3">
          Let’s discuss opportunities, collaborations, or just connect!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <InfoBox label="Email" value={process.env.NEXT_PUBLIC_EMAIL!} />
            <InfoBox label="Phone" value={process.env.NEXT_PUBLIC_PHONE!} />
            <InfoBox label="Location" value={process.env.NEXT_PUBLIC_LOCATION!} />
          </div>

          <div className="mt-10">
            <p className="text-sm text-gray-400 mb-3">Connect with me</p>
            <div className="flex gap-4">
              <SocialLink href={process.env.NEXT_PUBLIC_GITHUB_URL!} label="GitHub" icon={GitHubIcon} />
              <SocialLink href={process.env.NEXT_PUBLIC_LINKEDIN_URL!} label="LinkedIn" icon={LinkedInIcon} />
              <SocialLink href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} label="Email" icon={MailIcon} />
            </div>
          </div>
        </div>

        {/* RIGHT */}
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

            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              theme="dark"
              onChange={(value) => setCaptcha(value)}
            />

            <button
              type="submit"
              disabled={loading || !captcha}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p className="text-sm text-center mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- HELPERS ---------- */

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
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        {icon}
      </svg>
    </a>
  );
}

/* ---------- ICON PATHS ---------- */

const GitHubIcon = <path d="M12 0C5.37 0 0 5.37 0 12..." />;
const LinkedInIcon = <path d="M20.447 20.452H17.21..." />;
const MailIcon = <path d="M12 13.065L.25 6.5V18..." />;
