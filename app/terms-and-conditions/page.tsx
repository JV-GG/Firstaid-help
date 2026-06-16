"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, AlertTriangle, Scale, BookOpen, Eye } from "lucide-react";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export default function TermsAndConditionsPage() {
  const blurIn = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 15 },
    visible: { 
      filter: "blur(0px)", 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <div className="min-h-screen bg-base-dark flex flex-col justify-between pb-24 md:pb-8 relative">
      
      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto w-full px-6 py-6 md:py-10">
        
        {/* Navigation Breadcrumb */}
        <BreadcrumbNav items={[{ label: "Terms & Conditions" }]} />

        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-accent-teal mb-8 group transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
          BACK TO EMERGENCY TAXONOMY
        </Link>

        {/* Page Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={blurIn}
          className="p-6 md:p-8 rounded-3xl glass-premium relative overflow-hidden mb-10"
        >
          {/* Decorative Glow */}
          <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none bg-accent-teal" />

          <div className="flex items-center gap-4 relative z-10">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-lg shrink-0 text-accent-teal">
              <Shield className="w-9 h-9" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold font-display text-text-primary tracking-wide uppercase leading-tight">
                TERMS & CONDITIONS
              </h1>
              <p className="text-xs font-mono text-text-muted mt-2 tracking-wider">
                LAST REVISED: JUNE 16, 2026 | PROTOCOL VERSION 2.4.0
              </p>
            </div>
          </div>
        </motion.div>

        {/* Legal Sections */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 relative z-10"
        >
          
          {/* 1. Critical Warning */}
          <motion.section variants={sectionVariants} className="p-6 rounded-2xl bg-severe-red/5 border border-severe-red/20 backdrop-blur-md">
            <div className="flex items-center gap-2 text-severe-red font-display font-bold text-sm uppercase tracking-wide mb-3">
              <AlertTriangle className="w-5 h-5 text-severe-red animate-pulse" />
              <span>Critical Emergency Notice</span>
            </div>
            <p className="text-xs md:text-sm text-text-primary leading-relaxed">
              THIS PLATFORM IS NOT AN EMERGENCY RESPONSE DISPATCH SYSTEM. If you are experiencing a life-threatening medical emergency or require immediate professional rescue assistance, please dial <strong>999</strong> or your local emergency response service immediately. Do not delay professional help due to information read on this website.
            </p>
          </motion.section>

          {/* 2. Medical Disclaimer */}
          <motion.section variants={sectionVariants} className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
            <div className="flex items-center gap-2 text-text-primary font-display font-bold text-sm uppercase tracking-wide mb-3 border-b border-white/5 pb-2">
              <Scale className="w-4 h-4 text-accent-teal" />
              <span>1. Medical Information Disclaimer</span>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-text-muted leading-relaxed font-sans font-medium">
              <p>
                All instructions, recovery timelines, classifications, guidelines, and interactive AI responses found on this First Aid Guide platform (the &quot;Service&quot;) are compiled from standard emergency training materials. However, they are provided on an &quot;AS IS&quot; basis for educational and reference purposes only.
              </p>
              <p>
                We make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any medical advice, technique, or protocol presented herein. Action should only be administered by trained individuals when safe to do so.
              </p>
            </div>
          </motion.section>

          {/* 3. Illustration & Pictures Disclaimer */}
          <motion.section variants={sectionVariants} className="p-6 rounded-2xl bg-accent-teal/5 border border-accent-teal/20 backdrop-blur-md relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-28 h-28 bg-accent-teal/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-2 text-accent-teal font-display font-bold text-sm uppercase tracking-wide mb-3 border-b border-accent-teal/20 pb-2 relative z-10">
              <Eye className="w-4 h-4 text-accent-teal" />
              <span>2. Visual Materials &amp; Illustration Disclaimer</span>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-text-primary leading-relaxed font-sans relative z-10">
              <p className="font-bold text-glow-teal text-text-primary uppercase tracking-wide">
                ⚠️ All Pictures &amp; Diagrams are for Illustration Purposes Only:
              </p>
              <p className="text-text-muted font-medium">
                Any photographs, neon outlines, interactive SVGs, digital drawings, or visual step guides presented on the Service are provided <strong>strictly for illustration purposes only</strong>. 
              </p>
              <p className="text-text-muted font-medium">
                Human anatomy, clinical environments, medical equipment, and precise physical rescue configurations vary significantly between real-world cases. These pictures are generalized visual aids designed to explain abstract concepts and should not be relied upon as exact representations of physical procedures or techniques. Always prioritize verbal commands or clinical training instructions.
              </p>
            </div>
          </motion.section>

          {/* 4. Limitation of Liability */}
          <motion.section variants={sectionVariants} className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
            <div className="flex items-center gap-2 text-text-primary font-display font-bold text-sm uppercase tracking-wide mb-3 border-b border-white/5 pb-2">
              <BookOpen className="w-4 h-4 text-accent-teal" />
              <span>3. Limitation of Liability</span>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-text-muted leading-relaxed font-sans font-medium">
              <p>
                To the maximum extent permitted by applicable law, in no event shall the authors, developers, or content contributors of this Service be liable for any direct, indirect, special, incidental, consequential, or punitive damages (including, but not limited to, personal injury, wrongful death, loss of life, or errors in treatment) arising out of or in any way connected with the use or performance of this Service, its medical guides, or its AI chatbot assistant.
              </p>
              <p>
                By accessing and utilizing these emergency taxonomies and resources, you explicitly acknowledge and agree that your actions are taken at your own risk and discretion.
              </p>
            </div>
          </motion.section>

          {/* 5. User Responsibilities */}
          <motion.section variants={sectionVariants} className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
            <div className="flex items-center gap-2 text-text-primary font-display font-bold text-sm uppercase tracking-wide mb-3 border-b border-white/5 pb-2">
              <Shield className="w-4 h-4 text-accent-teal" />
              <span>4. User Agreement and Responsibilities</span>
            </div>
            <div className="space-y-3 text-xs md:text-sm text-text-muted leading-relaxed font-sans font-medium">
              <p>
                By using our first aid resource, you represent that you will act in good faith and comply with your local Good Samaritan laws when administering emergency assistance. You are encouraged to seek professional certified training from institutions such as the Red Cross or the American Heart Association.
              </p>
            </div>
          </motion.section>

        </motion.div>
      </div>

    </div>
  );
}
