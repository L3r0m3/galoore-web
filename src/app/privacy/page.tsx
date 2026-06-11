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

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <div className="text-xs text-dark-text-muted mt-2 font-semibold flex items-center gap-2">
              <span>Last Updated: February 19, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/40"></span>
              <span className="text-brand-primary">Official Release</span>
            </div>
          </div>

          <div className="flex flex-col">
            <Section
              title="1. Information We Collect"
              content="Galoore collects the minimal information necessary to provide our services. This includes your phone number for authentication, your profile name, and an optional profile picture. We do not store your address book contacts on our servers; any contact matching is performed locally and ephemerally on your device."
            />

            <Section
              title="2. Location Data"
              content="When using our location-based discovery map, we collect your location coordinates. To ensure absolute privacy, you can choose between 'Precise' location and 'Approximate' location. Approximate location automatically applies a 500m to 1000m offset to your coordinate markers, so your exact residence or address is never revealed to others. This location data is processed ephemerally and is not used for tracking your historic routes."
            />

            <Section
              title="3. Messaging Privacy"
              content="All text, media, voice notes, and calls are fully protected by end-to-end encryption. This architecture guarantees that only you and your intended recipient hold the cryptographic keys required to decrypt and view the chats. Galoore, network providers, and third-party companies cannot inspect or intercept your private conversations."
            />

            <Section
              title="4. Transaction Data"
              content="If you purchase virtual Coins or subscribe to creator tiers, payment transactions are routed securely through our partners: Apple App Store (via RevenueCat) and Stripe. We do not receive, store, or process your credit card numbers on our servers. The payment history, coin package transactions, and subscriber states are cached solely to manage account privileges."
            />

            <Section
              title="5. Third-Party Services"
              content="Galoore utilizes select cloud infrastructure partners to maintain secure and scalable services:\n- Supabase: Secure cloud data storage and authentication systems.\n- Stripe & RevenueCat: PCI-compliant billing and app store purchase synchronization.\n- Agora: Encrypted peer-to-peer real-time audio and video communication channels.\nThese partners are only supplied with the specific data required to deliver their respective service functions."
            />

            <Section
              title="6. Data Retention"
              content="We retain your account profile and contents only while your account is active. You can execute full account teardown using the account settings at any time. When deleted, all profiles, messages, virtual coins transaction history, and assets will be purged permanently from our database."
            />

            <Section
              title="7. Your Rights"
              content="You have full rights to request access to, download, or delete your data under standard GDPR, CCPA, and global privacy frameworks. Feel free to contact our support team at info@galoore.app if you have any questions or queries regarding personal data privacy."
            />
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-dark-border/40 py-8 bg-[#090d16]/50">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-dark-text-muted">
          <span>&copy; 2026 Galoore. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-brand-primary transition">Home</Link>
            <Link href="/tos" className="hover:text-brand-primary transition">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
