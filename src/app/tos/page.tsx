import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "../assets/images/galoore-logo-white.svg";

interface SectionProps {
  title: string;
  content: string;
}

const Section = ({ title, content }: SectionProps) => (
  <div className="mb-8 border-b border-dark-border/30 pb-6 last:border-0 last:pb-0">
    <h3 className="text-brand-primary text-base font-extrabold mb-3 uppercase tracking-wider">
      {title}
    </h3>
    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
      {content}
    </p>
  </div>
);

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-dark-bg text-slate-100 bg-grid-pattern relative flex flex-col justify-between">
      
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Header */}
      <header className="w-full h-20 border-b border-dark-border/60 bg-dark-bg/85 backdrop-blur-md sticky top-0 left-0 right-0 z-50">
        <div className="max-w-4xl mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoWhite}
              alt="Galoore Logo"
              width={120}
              height={30}
              priority
              className="h-7.5 w-auto"
            />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-dark-text-muted hover:text-brand-primary transition"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-dark-border/80 shadow-2xl relative overflow-hidden">
          
          {/* Subtle green line accent at top of card */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-primary to-emerald-400"></div>

          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Terms of Service
            </h1>
            <div className="text-xs text-dark-text-muted mt-2 font-semibold flex items-center gap-2">
              <span>Last Updated: May 17, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40"></span>
              <span className="text-brand-primary">Official Release</span>
            </div>
          </div>

          <div className="flex flex-col">
            <Section
              title="1. Acceptance of Terms"
              content="By downloading or using the Galoore app or visiting our website, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using our services."
            />

            <Section
              title="2. The Service"
              content="Galoore is a messaging and Real-Time location sharing platform. We provide encrypted chat services, voice calls, and a location-based discovery map. We reserve the right to modify or terminate the service for any reason, without notice, at any time."
            />

            <Section
              title="3. User Responsibilities"
              content="You are responsible for keeping your device and access to the app secure. You agree not to use the app for any illegal purposes, harassment, or to distribute harmful content. You must be at least 18 years old to use the location and discovery features of the app."
            />

            <Section
              title="4. User-Generated Content & Zero Tolerance"
              content="Galoore has ZERO TOLERANCE for objectionable content or abusive behavior. By using the service, you agree not to upload, post, transmit, or share any content that is illegal, obscene, sexually explicit involving minors, harassing, hateful, threatening, violent, defamatory, or otherwise objectionable.\n\nYou are solely responsible for the content you create, share, and interact with on the platform. You agree to respect other users, follow community standards, and refrain from impersonation, spam, or any conduct that disrupts the service."
            />

            <Section
              title="5. Moderation, Reporting & Blocking"
              content="We provide in-app and web-based reporting features to flag users or content and to block other users at any time. Reports are reviewed by our moderation team. Where warranted, we will remove offending content and/or suspend or terminate the responsible account within 24 hours of receiving the report.\n\nWe may, at our sole discretion and without prior notice, remove any content and suspend or permanently ban any user who violates these Terms or whose behavior we deem harmful to the community. Moderation decisions are final."
            />

            <Section
              title="6. Subscriptions and Payments"
              content="Certain features require a paid subscription. Payments are processed securely through the Apple App Store (via RevenueCat) or Stripe. Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. All sales are final and non-refundable except where required by law."
            />

            <Section
              title="7. Virtual Currency (Coins)"
              content="Galoore offers a virtual currency called 'Coins' that can be purchased through the app. Coins have no real-world monetary value and cannot be redeemed for cash or other property. Coins are non-transferable and expire upon account termination. We reserve the right to manage, regulate, and control Coins at our sole discretion."
            />

            <Section
              title="8. Intellectual Property"
              content="Galoore and its original content, features, and functionality are and will remain the exclusive property of Galoore and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent."
            />

            <Section
              title="9. Limitation of Liability"
              content="In no event shall Galoore, nor its directors, employees, or partners, be liable for any indirect, incidental, special, or consequential damages resulting from your use of the service."
            />

            <Section
              title="10. Termination"
              content="We may terminate or suspend your account or your access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
            />

            <Section
              title="11. Contact Us"
              content="If you have any questions or concerns about these Terms of Service, please contact our support team at info@galoore.app."
            />
          </div>

          <div className="mt-12 pt-8 border-t border-dark-border/60 flex justify-center">
            <Link
              href="/"
              className="bg-brand-primary hover:bg-brand-primary-hover text-slate-950 font-bold text-sm px-8 py-3.5 rounded-full transition shadow-lg shadow-brand-primary/10"
            >
              I Accept & Understand
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-dark-border/40 py-8 bg-[#090d16]/50">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-text-muted">
          <span>&copy; 2026 Galoore. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-brand-primary transition">Home</Link>
            <Link href="/privacy" className="hover:text-brand-primary transition">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
