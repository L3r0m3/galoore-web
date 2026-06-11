"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoWhite from "./assets/images/galoore-logo-white.svg";

export default function Home() {
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    {
      title: "Encrypted Chat",
      subtitle: "Secure & Ephemeral",
      color: "from-emerald-500/20 to-teal-500/20",
      icon: (
        <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      content: (
        <div className="flex flex-col h-full justify-between p-4 bg-[#0d131f] text-slate-100 font-sans">
          {/* Chat Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-slate-900 text-xs">
              JD
            </div>
            <div>
              <div className="font-semibold text-xs flex items-center gap-1.5">
                Jane Doe
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              </div>
              <div className="text-[10px] text-slate-400">End-to-End Encrypted</div>
            </div>
          </div>
          {/* Chat Messages */}
          <div className="flex-1 flex flex-col gap-2.5 py-4 overflow-y-auto justify-end text-[11px]">
            <div className="bg-[#182235] p-2.5 rounded-2xl rounded-tl-none self-start max-w-[80%] border border-slate-800/50">
              Did you subscribe to Sarah's premium channel? The new video is awesome!
            </div>
            <div className="bg-brand-primary text-slate-950 p-2.5 rounded-2xl rounded-tr-none self-end max-w-[80%] font-medium">
              Not yet, just buying some Coins in the wallet store!
            </div>
            <div className="bg-[#182235] p-2.5 rounded-2xl rounded-tl-none self-start max-w-[80%] border border-slate-800/50">
              Awesome, she has visibilities set as Free Preview or Subscribers-only. Coins are perfect for that.
            </div>
          </div>
          {/* Input Area */}
          <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
            <div className="flex-1 bg-[#182235] rounded-full px-3 py-1.5 text-[10px] text-slate-400 border border-slate-800">
              Type encrypted message...
            </div>
            <div className="w-7 h-7 rounded-full bg-brand-primary flex items-center justify-center text-slate-950">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Real-Time Map",
      subtitle: "Location & Discovery",
      color: "from-blue-500/20 to-indigo-500/20",
      icon: (
        <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      content: (
        <div className="flex flex-col h-full bg-[#0a0f1d] relative overflow-hidden p-4">
          {/* Map Header */}
          <div className="absolute top-4 left-4 right-4 z-10 flex justify-between gap-2">
            <div className="bg-[#131a26]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 text-[10px] font-semibold text-slate-200">
              Discovery Active
            </div>
            <div className="bg-[#131a26]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800 text-[10px] font-semibold text-brand-primary">
              Approximate Location
            </div>
          </div>
          {/* Map UI Grid */}
          <div className="absolute inset-0 bg-[#090d16] bg-grid-pattern opacity-60 flex items-center justify-center">
            {/* Pulsing user dot */}
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-primary/30 rounded-full animate-ping"></div>
              <div className="w-5 h-5 rounded-full bg-brand-primary border-4 border-[#0a0f1d] z-10 relative"></div>
            </div>
            {/* Nearby users */}
            <div className="absolute top-[35%] left-[25%] flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border-2 border-emerald-500 bg-[#0d131f] flex items-center justify-center text-[8px] text-slate-100">
                Alex
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1"></span>
            </div>
            <div className="absolute bottom-[30%] right-[20%] flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border-2 border-brand-primary bg-[#0d131f] flex items-center justify-center text-[8px] text-slate-100">
                Sarah
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1"></span>
            </div>
          </div>
          {/* Bottom Card */}
          <div className="absolute bottom-4 left-4 right-4 bg-[#131a26]/95 backdrop-blur-md p-3 rounded-2xl border border-slate-800">
            <div className="text-[11px] font-bold text-slate-100">People You Might Know</div>
            <div className="text-[9px] text-slate-400 mt-0.5">Found 2 matches in your approximate area</div>
          </div>
        </div>
      ),
    },
    {
      title: "Creator Channels",
      subtitle: "Paid Fan Pages",
      color: "from-pink-500/20 to-rose-500/20",
      icon: (
        <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      content: (
        <div className="flex flex-col h-full justify-between bg-[#0e1422] p-4 text-slate-100">
          {/* Channel Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center font-bold text-xs text-white">
                S
              </div>
              <div>
                <div className="font-semibold text-xs">Sarah's Life</div>
                <div className="text-[9px] text-slate-400">12.5k Subscribers</div>
              </div>
            </div>
            <span className="bg-brand-primary/20 text-brand-primary text-[9px] font-bold px-2 py-0.5 rounded-full border border-brand-primary/30">
              PRO TIER
            </span>
          </div>

          {/* Posts Feed */}
          <div className="flex-1 flex flex-col gap-3 py-3 overflow-y-auto text-[10px]">
            {/* Free Preview Post */}
            <div className="bg-[#161f32] p-2.5 rounded-xl border border-slate-800">
              <div className="flex justify-between text-[8px] text-slate-400 mb-1">
                <span>Free Preview</span>
                <span>2 hours ago</span>
              </div>
              <div className="text-slate-200">Just launched my new channel on Galoore! Excited to share behind the scenes posts.</div>
            </div>

            {/* Locked Post */}
            <div className="bg-[#161f32] p-2.5 rounded-xl border border-slate-800 relative overflow-hidden">
              <div className="flex justify-between text-[8px] text-slate-400 mb-1">
                <span className="text-brand-primary font-medium">Subscribers-only</span>
                <span>4 hours ago</span>
              </div>
              {/* Blurred simulated content */}
              <div className="filter blur-[4px] opacity-40 text-slate-300 pointer-events-none">
                Here is a sneak peek of the upcoming photo shoot in Rome! Make sure to lock it.
              </div>
              {/* Lock overlay */}
              <div className="absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center p-2 text-center">
                <svg className="w-5 h-5 text-brand-primary mb-1 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div className="text-[10px] font-bold text-slate-100">Locked Post</div>
                <div className="text-[8px] text-slate-400 mt-0.5">Subscribe to Sarah's Life</div>
                <button className="mt-1.5 bg-brand-primary hover:bg-brand-primary-hover text-slate-950 font-extrabold text-[8px] px-2.5 py-1 rounded-full uppercase tracking-wider transition">
                  Unlock for 15 Coins
                </button>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Coin Store",
      subtitle: "Virtual Wallet System",
      color: "from-amber-500/20 to-yellow-500/20",
      icon: (
        <svg className="w-6 h-6 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <div className="flex flex-col h-full bg-[#0a0f1d] p-4 text-slate-100 justify-between">
          <div>
            {/* Wallet Header */}
            <div className="flex justify-between items-center pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold text-slate-300">My Balance</span>
              <div className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="text-[10px] font-extrabold text-amber-400">120 Coins</span>
              </div>
            </div>

            {/* Coin Store Offerings */}
            <div className="flex flex-col gap-2 mt-3 text-[10px]">
              <div className="bg-[#131a26] p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-100">Starter Pack</div>
                  <div className="text-[8px] text-slate-400">Get 50 virtual coins</div>
                </div>
                <button className="bg-brand-primary text-slate-950 px-3 py-1 rounded-lg font-bold text-[9px]">
                  $0.99
                </button>
              </div>

              <div className="bg-[#131a26] p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-100">Popular Pack</div>
                  <div className="text-[8px] text-slate-400">Get 200 virtual coins</div>
                </div>
                <button className="bg-brand-primary text-slate-950 px-3 py-1 rounded-lg font-bold text-[9px]">
                  $2.99
                </button>
              </div>

              <div className="bg-[#131a26] p-2.5 rounded-xl border border-brand-primary/30 flex items-center justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-brand-primary text-slate-950 text-[6px] font-extrabold px-1.5 py-0.5 rounded-bl uppercase">
                  Best Value
                </div>
                <div>
                  <div className="font-bold text-slate-100">Whale Chest</div>
                  <div className="text-[8px] text-slate-400">Get 1000 virtual coins</div>
                </div>
                <button className="bg-brand-primary text-slate-950 px-3 py-1 rounded-lg font-bold text-[9px] z-10">
                  $9.99
                </button>
              </div>
            </div>
          </div>
          {/* Footer warning */}
          <div className="text-[8px] text-slate-500 text-center leading-relaxed">
            Coins are virtual currency only. Purchases are handled securely via Apple App Store / Stripe. Terms apply.
          </div>
        </div>
      ),
    },
  ];

  // Auto transition screens
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [screens.length]);

  return (
    <div className="flex flex-col min-h-screen bg-dark-bg text-slate-100 bg-grid-pattern relative">
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-primary/5 rounded-full filter blur-[150px] pointer-events-none"></div>

      {/* Header */}
      <header className="w-full h-20 border-b border-dark-border/60 bg-dark-bg/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 transition-all">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoWhite}
              alt="Galoore Logo"
              width={130}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-dark-text-muted">
            <a href="#features" className="hover:text-brand-primary transition">Features</a>
            <a href="#download" className="hover:text-brand-primary transition">Download</a>
            <Link href="/tos" className="hover:text-brand-primary transition">Terms</Link>
            <Link href="/privacy" className="hover:text-brand-primary transition">Privacy</Link>
          </nav>

          <div>
            <a
              href="#download"
              className="bg-brand-primary hover:bg-brand-primary-hover text-slate-950 font-bold text-xs px-5 py-2.5 rounded-full transition shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/25"
            >
              Get the App
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 px-6 max-w-7xl mx-auto w-full flex flex-col items-center">
        
        {/* Intro */}
        <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[70vh] py-10">
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left gap-6 animate-fade-in-up">
            
            {/* Tagline Badge */}
            <div className="self-center lg:self-start bg-brand-primary/10 border border-brand-primary/20 px-4 py-1.5 rounded-full text-brand-primary text-xs font-semibold uppercase tracking-wider">
              Real-time Social Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Connecting you to creators <br className="hidden sm:inline" />
              and chats in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-400">Real-Time</span>
            </h1>

            <p className="text-lg text-dark-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Galoore combines end-to-end encrypted messaging, interactive live location discovery maps, 
              and exclusive subscriber fan pages powered by virtual Coins. Download the mobile app and join the community.
            </p>

            {/* Download/Onboarding Widget */}
            <div id="download" className="mt-6 p-6 glass-panel rounded-3xl border border-dark-border/80 flex flex-col md:flex-row items-center gap-6 max-w-xl mx-auto lg:mx-0 self-center lg:self-start">
              
              <div className="flex-1 flex flex-col gap-4 w-full">
                <div className="text-sm font-extrabold text-white text-center md:text-left">
                  Download the Galoore Mobile App
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  
                  {/* Apple App Store Button */}
                  <a
                    href="https://apps.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#0d131f] hover:bg-[#151d2e] border border-slate-800 rounded-xl px-4 py-2.5 transition w-full justify-center group"
                  >
                    <svg className="w-6 h-6 text-slate-200 group-hover:text-brand-primary transition" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.63.73-1.18 1.87-1.03 2.98.66.08 1.83-.56 2.48-1.42z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] uppercase text-slate-400">Download on the</div>
                      <div className="text-xs font-bold text-white leading-tight">App Store</div>
                    </div>
                  </a>

                  {/* Google Play Store Button */}
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#0d131f] hover:bg-[#151d2e] border border-slate-800 rounded-xl px-4 py-2.5 transition w-full justify-center group"
                  >
                    <svg className="w-6 h-6 text-slate-200 group-hover:text-brand-primary transition" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 5.277L13.567 12 3 18.723v-13.446zM4.385 4.098l10.22 6.554L18.423 4.2H4.385zm14.869 1.115l-4.143 4.143 4.143 2.654 3.738-2.392-3.738-4.405zm-3.834 7.904l-11.035 7.078h14.038l-3.003-7.078z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[9px] uppercase text-slate-400">Get it on</div>
                      <div className="text-xs font-bold text-white leading-tight">Google Play</div>
                    </div>
                  </a>

                </div>
              </div>

              {/* QR Code Container */}
              <div className="hidden sm:flex flex-col items-center gap-2 p-3 bg-[#0d131f] rounded-2xl border border-slate-800 relative group">
                {/* SVG QR Code Illustration */}
                <svg className="w-20 h-20 text-slate-300" viewBox="0 0 100 100" fill="currentColor">
                  {/* Outer Frame */}
                  <path d="M0 0h30v10H10v20H0V0zm70 0h30v30H90V10H70V0zM0 70h10v20h20v10H0V70zm100 0v30H70v-10h20V70h10z" fill="#25D366" />
                  {/* QR Pixels Grid */}
                  <rect x="15" y="15" width="10" height="10" />
                  <rect x="15" y="30" width="10" height="10" />
                  <rect x="30" y="15" width="10" height="10" />
                  <rect x="75" y="15" width="10" height="10" />
                  <rect x="60" y="15" width="10" height="10" />
                  <rect x="75" y="30" width="10" height="10" />
                  <rect x="15" y="75" width="10" height="10" />
                  <rect x="30" y="75" width="10" height="10" />
                  <rect x="15" y="60" width="10" height="10" />
                  {/* Center Dot */}
                  <rect x="45" y="45" width="10" height="10" fill="#25D366" />
                  {/* Random pixels */}
                  <rect x="45" y="25" width="5" height="5" />
                  <rect x="35" y="45" width="5" height="5" />
                  <rect x="55" y="35" width="5" height="5" />
                  <rect x="65" y="55" width="5" height="5" />
                  <rect x="55" y="65" width="5" height="5" />
                  <rect x="45" y="75" width="5" height="5" />
                  <rect x="75" y="60" width="5" height="5" />
                  <rect x="60" y="75" width="5" height="5" />
                </svg>
                <div className="text-[9px] text-slate-400 text-center font-bold">Scan to install</div>
              </div>

            </div>

          </div>

          {/* Interactive Mobile Device Mockup */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center animate-fade-in">
            <div className="w-[300px] h-[600px] bg-slate-950 rounded-[48px] p-3 shadow-2xl border-[6px] border-slate-800 relative">
              {/* Speaker & Sensor */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-5 w-32 bg-slate-800 rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-slate-900 rounded-full"></div>
              </div>

              {/* Dynamic Screen View */}
              <div className="w-full h-full rounded-[38px] overflow-hidden border border-slate-900 relative">
                {screens[activeScreen].content}
              </div>

              {/* Home Indicator bar */}
              <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-700/60 rounded-full z-20"></div>
            </div>

            {/* Simulated slideshow controls */}
            <div className="flex gap-2.5 mt-6">
              {screens.map((screen, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreen(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeScreen === idx ? "bg-brand-primary w-6" : "bg-slate-700 hover:bg-slate-600"
                  }`}
                  aria-label={`Show ${screen.title}`}
                ></button>
              ))}
            </div>
            <div className="text-center mt-3 text-xs text-slate-400 font-bold">
              {screens[activeScreen].title} — {screens[activeScreen].subtitle}
            </div>
          </div>
        </section>

        {/* Features Highlights Grid */}
        <section id="features" className="w-full py-24 border-t border-dark-border/40 mt-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Engineered with privacy, built for interaction
            </h2>
            <p className="mt-4 text-base text-dark-text-muted max-w-2xl mx-auto">
              Everything in Galoore is designed to provide high-quality social interactions with ultimate user control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Feature 1 */}
            <div className="glass-panel p-6 rounded-2xl border border-dark-border/80 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-white text-lg">End-to-End Encryption</h3>
              <p className="text-sm text-dark-text-muted leading-relaxed">
                All messages and voice calls are protected by E2EE. Only you and the recipient can read or listen to them.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-6 rounded-2xl border border-dark-border/80 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-white text-lg">Approximate Discovery</h3>
              <p className="text-sm text-dark-text-muted leading-relaxed">
                Toggle approximate location to display a shifted visual marker (500m-1km offset) for security, keeping your address private.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-6 rounded-2xl border border-dark-border/80 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-white text-lg">Creator Fan Pages</h3>
              <p className="text-sm text-dark-text-muted leading-relaxed">
                Host subscription fan channels. Upload mixed feed updates: mark individual items as Free Previews or locks.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-panel p-6 rounded-2xl border border-dark-border/80 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-extrabold text-white text-lg">Zero-Tolerance Safety</h3>
              <p className="text-sm text-dark-text-muted leading-relaxed">
                Integrated EULA standards. Report & block abusers instantly. The moderation team acts within 24 hours of reports.
              </p>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full border-t border-dark-border/40 py-12 bg-[#090d16]/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoWhite}
              alt="Galoore Logo"
              width={110}
              height={27}
              className="h-7 w-auto"
            />
          </Link>

          <div className="text-xs text-dark-text-muted text-center md:text-left">
            &copy; 2026 Galoore. All rights reserved. End-to-end encrypted and localized. Support: <a href="mailto:info@galoore.app" className="hover:text-brand-primary underline transition">info@galoore.app</a>
          </div>

          <div className="flex gap-6 text-xs font-semibold text-dark-text-muted">
            <Link href="/tos" className="hover:text-brand-primary transition">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-brand-primary transition">Privacy Policy</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
