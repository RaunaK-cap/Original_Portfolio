"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ExternalLink, ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";

const GithubIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.26c3.1-.3 6.4-1.5 6.4-6.9a5.1 5.1 0 0 0-1.4-3.6 5.1 5.1 0 0 0-.1-3.5s-1.1-.3-3.6 1.4a12.5 12.5 0 0 0-6.7 0C6.1 2.5 5 2.8 5 2.8a5.1 5.1 0 0 0-.1 3.5 5.1 5.1 0 0 0-1.4 3.6c0 5.4 3.3 6.6 6.4 6.9a4.8 4.8 0 0 0-1 3.26v4" />
  </svg>
);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const textReveal: Variants = {
  hidden: { opacity: 0, y: 25, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { type: "spring", bounce: 0, duration: 0.95 } 
  },
};

/* =========================================
   DATA CONFIGURATION
   Modify these arrays to change your portfolio content!
   ========================================= */

// REPLACE: Update your Work Experience here
const EXPERIENCE_DATA = [
  {
    company: "Freelance",
    role: "Freelance Software Engineer",
    duration: "Jan 2026 - Present",
    logoFallback: "FR",
    logo: "https://cdn.simpleicons.org/fiverr/1DBF73",
    description: "Built the scalable backend for a web agency, developed a modern landing page for another, shipped an AI automation system using n8n for a client.",
  },
  {
    company: "Hacktoberfest",
    role: "Full Stack Engineer",
    duration: "Sep 2025 - Oct 2025",
    logoFallback: "HF",
    logo: "https://cdn.simpleicons.org/hacktoberfest/0069FF",
    description: "Contributed to multiple open-source repositories and gained hands-on experience with collaborative development.",
  },
];

// REPLACE: Update your Education here
const EDUCATION_DATA = [
  {
    institution: "Dummy University",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2023 - 2027",
    logoFallback: "UN",
  },
];

// REPLACE: Update your Skills here
const SKILLS_DATA = [
  // --- Infrastructure & Automation ---
  { name: "AWS", icon: "amazonaws/232F3E" },
  { name: "Docker", icon: "docker/2496ED" },
  { name: "CI/CD", icon: "githubactions/2088FF" },
  { name: "Kubernetes", icon: "kubernetes/326CE5" },
  
  // --- AI & Ecosystem ---
  { name: "MCP", icon: "json/FFA500" },
  { name: "AI Agents", icon: "openai/412991" },
  { name: "Cursor", icon: "cursor/000000" },
  { name: "VS Code", icon: "visualstudiocode/007ACC" },
  { name: "Antigravity", icon: "googlegemini/8E75B2" },
  
  // --- Databases & Streaming ---
  { name: "Redis", icon: "redis/DC382D" },
  { name: "Kafka", icon: "apachekafka/231F20" },
  { name: "WebSocket", icon: "socketdotio/ffffff" },
  { name: "gRPC", icon: "grpc/244C5A" },

  // --- Languages & Frontend ---
  { name: "Rust", icon: "rust/000000" },
  { name: "JavaScript", icon: "javascript/F7DF1E" },
  { name: "TypeScript", icon: "typescript/3178C6" },
  { name: "React", icon: "react/61DAFB" },
  { name: "Next.js", icon: "nextdotjs/000000" }, 
  { name: "TailwindCSS", icon: "tailwindcss/06B6D4" }, 

  // --- Backend & APIs ---
  { name: "Node.js", icon: "nodedotjs/339933" },
  { name: "Express.js", icon: "express/000000" },
  { name: "Better Auth", icon: "betterauth/000000" }, 
  { name: "Zod", icon: "zod/3068B7" },
  { name: "Langchain", icon: "langchain/000000" }, 
  
  // --- Databases & ORMs ---
  { name: "PostgreSQL", icon: "postgresql/4169E1" },
  { name: "MongoDB", icon: "mongodb/47A248" },
  { name: "NeonDB", icon: "neon/00E599" },
  { name: "Prisma", icon: "prisma/5A67D8" },

  // --- Tools & Others ---
  { name: "Turborepo", icon: "turborepo/EF4444" },
  { name: "Git/GitHub", icon: "git/F05032" },
  { name: "Postman", icon: "postman/FF6C37" },
];

// Pre-defined exact color themes for projects to ensure Tailwind successfully compiles the classes.
// You can add more like "purple" or "orange" by following this pattern!
const PROJECT_THEMES: Record<string, any> = {
  green: {
    cardHover: "group-hover:border-green-500/40 group-hover:bg-green-500/[0.02]",
    imgHover: "group-hover:border-green-500/30",
    textHover: "group-hover:text-green-500",
    badgeHover: "group-hover:border-green-500/40 group-hover:text-green-500",
    dotHover: "group-hover:bg-green-500",
    tagHover: "group-hover:border-green-500/30 group-hover:text-green-600 dark:group-hover:text-green-400"
  },
  blue: {
    cardHover: "group-hover:border-blue-500/40 group-hover:bg-blue-500/[0.02]",
    imgHover: "group-hover:border-blue-500/30",
    textHover: "group-hover:text-blue-500",
    badgeHover: "group-hover:border-blue-500/40 group-hover:text-blue-500",
    dotHover: "group-hover:bg-blue-500",
    tagHover: "group-hover:border-blue-500/30 group-hover:text-blue-600 dark:group-hover:text-blue-400"
  },
  orange: {
    cardHover: "group-hover:border-orange-500/40 group-hover:bg-orange-500/[0.02]",
    imgHover: "group-hover:border-orange-500/30",
    textHover: "group-hover:text-orange-500",
    badgeHover: "group-hover:border-orange-500/40 group-hover:text-orange-500",
    dotHover: "group-hover:bg-orange-500",
    tagHover: "group-hover:border-orange-500/30 group-hover:text-orange-600 dark:group-hover:text-orange-400"
  },
  purple: {
    cardHover: "group-hover:border-purple-500/40 group-hover:bg-purple-500/[0.02]",
    imgHover: "group-hover:border-purple-500/30",
    textHover: "group-hover:text-purple-500",
    badgeHover: "group-hover:border-purple-500/40 group-hover:text-purple-500",
    dotHover: "group-hover:bg-purple-500",
    tagHover: "group-hover:border-purple-500/30 group-hover:text-purple-600 dark:group-hover:text-purple-400"
  }
};

// REPLACE: Update your Projects here
// Pick a theme from PROJECT_THEMES above for the `colorTheme`
const PROJECTS_DATA = [
  {
    title: "CrawlyMinds",
    description: <>Developed an AI-powered platform called <strong>CrawlyMinds</strong> that allows users to enter any website link  and instantly get an AI-generated summary of its key points.</>,
    features: [
      <>Integrated <strong>LangChain</strong> to process and split website content into smaller chunks.</>,
      <>Converted content into vector embeddings using <strong>OpenAI's Embedding API</strong>.</>,
      <>Stored vector data in <strong>Convex DB</strong> for efficient retrieval and <strong>PostgreSQL + Prisma ORM</strong> for auth.</>,
      <>Implemented a <strong>RAG (Retrieval-Augmented Generation)</strong> system for direct data chatting.</>,
      <>Built a clean chat interface using <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Shadcn UI</strong>.</>,
      <>Planned future expansion to support <strong>chat with PDFs</strong> using the same RAG architecture.</>
    ],
    tags: ["Next.js", "LangChain", "OpenAI", "Prisma", "ConvexDB" , "RAG"],
    link: "https://crawlyminds.vercel.app",
    github: "https://github.com/RaunaK-cap/CrawlyMinds",
    colorTheme: "green"
  },
  {
    title: "PatchMind",
    description: <>Built <strong>PatchMind</strong>, a developer-focused app to store and recall solved coding errors.</>,
    features: [
      <>Integrated <strong>AI assistant</strong> for explanations and debugging insights.</>,
      <>Developed full-stack architecture using <strong>Next.js API routes</strong> for smooth data flow.</>,
      <>Used secure authentication with <strong>Better Auth</strong> and <strong>PostgreSQL</strong> via <strong>Prisma ORM</strong>.</>
    ],
    tags: ["Next.js", "Better Auth", "Prisma", "PostgreSQL"],
    link: "https://patchmind.vercel.app",
    github: "https://github.com/RaunaK-cap/Patchmind",
    colorTheme: "blue"
  },
  {
    title: "Quick Chat App",
    description: <>Developed a real-time chat app using <strong>WebSockets</strong> where messages vanish automatically — no database required.</>,
    features: [
      <>Developed a 10-15 minute real-time communication system using <strong>WebSockets</strong>.</>,
      <>Frontend built with <strong>React + Tailwind</strong>; backend uses simple <strong>HTTPS</strong> and websockets.</>,
      <>Focused on speed and privacy: no persistent storage for messages.</>
    ],
    tags: ["React.js", "WebSockets", "Tailwind", "Axios"],
    link: "https://quick-chat-app-three.vercel.app",
    github: "https://github.com/RaunaK-cap/Chat-app",
    colorTheme: "orange"
  }
];

function ProjectCard({ project, theme, index }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <div className={`relative flex flex-col w-full border border-dashed border-gray-200 dark:border-white/[0.1] bg-gray-50/50 dark:bg-transparent p-6 md:p-7 transition-all duration-300 rounded-sm hover:-translate-y-1 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-gray-800 dark:shadow-none dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.01)] ${theme?.cardHover}`}>
        
        {/* Title */}
        <h3 className={`text-lg md:text-[19px] font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300 ${theme?.textHover}`}>
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-[13px] text-gray-600 dark:text-[#a1a1aa] mb-6 leading-relaxed pr-4">
          {project.description}
        </p>

        {/* Expanded Content using Framer Motion physics */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1, transition: { type: "spring", stiffness: 400, damping: 30 } }}
              exit={{ height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeOut" } }}
              className="overflow-hidden flex flex-col"
            >
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
                }}
                className="mb-6 pt-1"
              >
                {project.features && project.features.length > 0 && (
                  <div className="flex flex-col gap-4 mb-6">
                    {project.features.map((feature: any, idx: number) => (
                      <motion.p 
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }} 
                        key={idx} className="text-xs text-gray-600 dark:text-[#94a3b8] leading-relaxed"
                      >
                        {feature}
                      </motion.p>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags - Now always visible outside 'Know More' */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2.5 mb-6 mt-4">
            {project.tags.map((tech: string) => (
              <div key={tech} className="px-2.5 py-1 text-[12px]   rounded-md border border-gray-200 dark:border-white/[0.1] text-gray-700 dark:text-gray-400 transition-colors duration-300 group-hover:border-gray-300 dark:group-hover:border-white/20">
                {tech}
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto">
          {/* Know More Toggle */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 dark:text-[#71717a] dark:hover:text-gray-300 transition-colors"
          >
            {isExpanded ? 'Know Less' : 'Know More'}
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          {/* Action Links */}
          <div className="flex items-center gap-5">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13.5px] text-gray-500 hover:text-gray-900 dark:text-[#71717a] dark:hover:text-gray-300 transition-colors group/link">
                <GithubIcon className="w-4 h-4 transition-transform group-hover/link:-translate-y-1" strokeWidth={1.5} /> Repo
              </a>
            )}
            <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-[13.5px] font-medium text-gray-500 hover:text-gray-900 dark:text-[#71717a] dark:hover:text-[#e4e4e7] transition-colors group/link">
              Visit <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" strokeWidth={1.5} />
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export function Portfolio() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Safe data pipeline slices
  const displayedProjects = showAllProjects ? PROJECTS_DATA : PROJECTS_DATA.slice(0, 3);

  if (!mounted) return null;

  return (
    <motion.div 
      key={resolvedTheme}
      initial={{ opacity: 0.9, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-start w-full max-w-2xl mx-auto space-y-24 px-6 md:px-4 pb-28 md:pb-20 pt-16 md:pt-10"
    >
      
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
      <motion.section 
        initial="hidden" animate="visible" variants={staggerContainer}
        className="w-full flex flex-col gap-6"
      >
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row items-start justify-between gap-2 sm:gap-4 md:gap-6 w-full">
            {/* Headline and Subtitle */}
            <div className="flex flex-col gap-2 pt-2 md:pt-4 min-w-0">
              <motion.h1 variants={textReveal} className="flex flex-col md:gap-3 text-[32px] sm:text-4xl md:text-5xl font-bold tracking-none leading-tight">
                <span>Hi,</span>
                <span className="flex flex-wrap items-center gap-x-1.5 sm:gap-x-2">
                  <span>I'm Raunak<span className="hidden md:inline-block ml-2">👋</span></span>
                </span>
              </motion.h1>
              <motion.p variants={textReveal} className="flex flex-col gap-1 text-gray-400 dark:text-gray-400 tracking-none pr-1 sm:pr-2">
                <span className="text-xs sm:text-base">20 • AI Full Stack Engineer / DevOps</span>
              </motion.p>
            </div>

            {/* Profile Image Column (Right side) */}
          <motion.div variants={textReveal} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 shrink-0 overflow-hidden border border-gray-200/50 dark:border-gray-800/50 rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.05)] bg-white dark:bg-[#0a0a0a] group hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.08)] transition-all duration-500">
            {/* REPLACE: Add your actual photo to the 'public' folder and name it 'profile.jpg' 
                Alternatively, paste the full URL of the uploaded image here! */}
            <img 
              src="/profile.jpeg" 
              alt="Raunak" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=R&background=random&size=200" }}
            />
          </motion.div>
          </div>

          {/* Bottom Row: Full Width Bio & Badge */}
          <div className="flex flex-col gap-6 w-full">
            {/* Structured Highlight Bio */}
            <div className="flex flex-col gap-4 text-gray-500 dark:text-gray-300 text-sm  leading-relaxed w-full">
              <motion.p variants={textReveal}>
                I build <span className="text-orange-600 dark:text-orange-200/90 font-medium">full-stack applications</span>. Passionate about creating projects that make a <span className="text-orange-600 dark:text-orange-200/90 font-medium">real-world impact</span>. I focus on clean code and user experience.
              </motion.p>
              
              <motion.div variants={textReveal} className="flex items-center gap-2 flex-wrap">
                Previously interned at 
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800/80 text-gray-900 dark:text-white text-xs font-medium border border-gray-200 dark:border-gray-700">
                   <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                   Dummy Startup
                </span> 
                building AI infrastructure.
              </motion.div>

              <motion.p variants={textReveal}>
                I work with <strong className="text-gray-900 dark:text-white font-medium">Next.js</strong> and <strong className="text-gray-900 dark:text-white font-medium">Rust</strong> most days, using <strong className="text-gray-900 dark:text-white font-medium">TypeScript</strong> for type safety. I enjoy building things that look good and perform well.
              </motion.p>

              <motion.p variants={textReveal}>
                Open to <strong className="text-gray-900 dark:text-white font-medium">collaborations</strong> and <strong className="text-gray-900 dark:text-white font-medium">opportunities</strong>. Feel free to reach out!
              </motion.p>
            </div>

            {/* Available For Hire Badge */}
            <motion.div variants={textReveal} className="group flex items-center gap-2 px-2.5 py-1.5 md:px-4 md:py-1.5 bg-gray-100/50 dark:bg-[#111111]/80 w-fit rounded-full border border-gray-200 dark:border-white/10 hover:border-green-500/30 dark:hover:border-green-500/30 transition-colors cursor-default shadow-sm">
              <div className="relative flex h-2 w-2 md:h-2.5 md:w-2.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 duration-1000"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-2 md:w-2 bg-green-600 dark:bg-green-500"></span>
              </div>
              <span className="text-[12px] md:text-[13px] font-medium text-gray-700 dark:text-gray-300">Available for new projects</span>
            </motion.div>

          </div>
          
        </div>
      </motion.section>


      {/* 2. WORK EXPERIENCE */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
        variants={staggerContainer}
        className="w-full"
      >
        <motion.h2 variants={textReveal} className="text-xl md:text-2xl font-bold mb-10 tracking-tight text-gray-900 dark:text-white">Work Experience</motion.h2>
        
        <div className="relative flex flex-col gap-10 pl-2 md:pl-0">
          {/* The Pipeline Line layered underneath the nodes */}
          <div className="absolute left-7 md:left-5 top-2 bottom-2 w-[1px] bg-gray-200 dark:bg-white/[0.08] z-0" />
          
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex gap-5 md:gap-6 w-full relative z-10"
            >
              {/* Badge Node */}
              <div className="flex-shrink-0 relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white/5 dark:bg-white/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Avatar className="w-10 h-10 md:w-11 md:h-11 border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#0c0c0c] flex items-center justify-center transition-all duration-300 group-hover:border-gray-300 dark:group-hover:border-white/20 shadow-sm relative z-10">
                   {(exp as any).logo && <AvatarImage src={(exp as any).logo} alt={exp.company} className="object-contain p-2" />}
                   <AvatarFallback className="text-[11px] md:text-xs font-medium text-gray-600 dark:text-gray-400 bg-transparent">{exp.logoFallback}</AvatarFallback>
                </Avatar>
              </div>

              {/* Content Node */}
              <div className="flex flex-col w-full gap-2 mt-0.5 md:mt-1">
                <div className="flex flex-col md:flex-row md:items-start justify-between w-full gap-1 md:gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[15px] md:text-sm font-bold tracking-tight text-gray-900 dark:text-gray-100 transition-colors">{exp.company}</h3>
                    <p className="text-[12px] text-gray-500 dark:text-[#a1a1aa]">{exp.role}</p>
                  </div>
                  <span className="text-[13px] md:text-[13.5px] font-medium text-gray-400 dark:text-[#71717a] mt-1 md:mt-0">{exp.duration}</span>
                </div>
                
                {/* Optional Expanded Description */}
                {(exp as any).description && (
                  <p className="text-xs tracking-wide text-gray-600 dark:text-[#94a3b8] leading-relaxed max-w-xl mt-1.5">
                    {(exp as any).description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>




      {/* 3. PROJECTS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full flex flex-col items-center"
      >
        <motion.div variants={textReveal}>
          <Badge variant="outline" className="mb-4 bg-gray-900 text-white dark:bg-white dark:text-black border-none px-3 py-1 font-medium">My Projects</Badge>
        </motion.div>
        <motion.h2 variants={textReveal} className="text-3xl font-bold mb-4 text-center tracking-tight">Check out my latest work</motion.h2>
        <motion.p variants={textReveal} className="text-gray-600 dark:text-gray-400 mb-10 text-center text-xs max-w-xl">
          I've worked on a variety of projects. Here are a few of them.
        </motion.p>
        
        <motion.div layout className="flex flex-col gap-6 w-full mt-4 mb-4">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => {
              const theme = PROJECT_THEMES[project.colorTheme] || PROJECT_THEMES.green;
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard project={project} theme={theme} index={index} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {PROJECTS_DATA.length > 3 && (
          <div className="w-full flex justify-center mt-6 mb-8">
             <button 
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="flex items-center gap-2 text-[14px] text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-200 transition-colors"
             >
               {showAllProjects ? 'Show Less' : 'More Projects'} 
               <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`} />
             </button>

          </div>
        )}
      </motion.section>

        {/* 4. SKILLS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
        variants={fastStaggerContainer}
        className="w-full"
      >
        <motion.h2 variants={textReveal} className="text-xl font-bold mb-6 tracking-tight">Skills & Tools</motion.h2>
        <div className="flex flex-wrap gap-2.5">
          {SKILLS_DATA.map((skill) => (
            <motion.div 
              variants={textReveal}
              key={skill.name} 
              className="group flex items-center gap-1.5 bg-[#f8f9fa] dark:bg-[#111111]/90 hover:bg-white dark:hover:bg-[#1a1a1a] text-gray-700 dark:text-[#EAEAEA] border border-gray-200/80 dark:border-white/[0.06] px-2.5 py-1 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            >
              <img 
                src={`https://cdn.simpleicons.org/${skill.icon}`} 
                alt={skill.name} 
                className="w-3 h-3 object-contain opacity-90 drop-shadow-sm transition-transform duration-300 group-hover:scale-110" 
                onError={(e) => e.currentTarget.style.display = 'none'} 
              />
              <span className="text-[11.5px] font-medium tracking-tight">{skill.name}</span>
            </motion.div>
          ))}
        </div>
        <div>
           <p className="mt-10 text-xs text-gray-300 dark:text-gray-400"> doesn't matter! she got someone else , however her smile was beautifull </p>
        </div>
      </motion.section>

      {/* 5. GITHUB ACTIVITY */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full flex flex-col pt-0 md:pt-4"
      >
        <motion.h2 variants={textReveal} className="text-xl font-bold mb-6 tracking-none">GitHub Activity</motion.h2>
        {/* Hide scrollbar structure securely but allow x-scroll for heavy mobile viewing */}
        <div className="w-full bg-[#f8f9fa] dark:bg-[#111111]/80 border border-gray-200/80 dark:border-white/[0.06] rounded-[14px] p-4 md:p-6 shadow-sm flex justify-center relative overflow-hidden">
          <div className="overflow-x-auto w-full flex justify-start md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <img 
              src="https://ghchart.rshah.org/10b981/RaunaK-cap" 
              alt="GitHub Contributions" 
              className="min-w-[750px] w-full max-w-[900px] opacity-90 transition-opacity duration-300 pointer-events-none dark:invert-[0.9] dark:hue-rotate-[180deg] dark:saturate-150 dark:brightness-[1.1] dark:contrast-125 dark:opacity-80 dark:hover:opacity-100"
              style={{
                clipPath: "inset(18px 0 0 0)",
                marginTop: "-12px",
                marginBottom: "-6px"
              }}
            />
          </div>
        </div>
      </motion.section>

      
      {/* 6. CONTACT CTA */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full flex flex-col items-center mt-12 text-center"
      >
        <motion.div variants={textReveal}>
          <Badge variant="outline" className="mb-4 bg-gray-900 text-white dark:bg-white dark:text-black border-none px-3 py-1 font-medium">
            Freelance & Collaboration
          </Badge>
        </motion.div>
        <motion.h2 variants={textReveal} className="text-xl md:text-4xl font-bold mb-6 tracking-tight max-w-md">Ready to Build Something Great?</motion.h2>
        <motion.p variants={textReveal} className="text-gray-600 dark:text-gray-400 text-sm md:text-md mb-7 max-w-xl">
          I'm available for freelance projects, consulting, and collaborations. Whether you need a web app, front-end magic, 
          or full-stack development, let's discuss how I can help bring your vision to life.
        </motion.p>
        <motion.div variants={textReveal} className="flex items-center gap-4">
          <Button variant="default" className="rounded-full">Book a Free Consultation</Button>
          <Button variant="outline" className="rounded-full">Send an Email</Button>
        </motion.div>
      </motion.section>

    </motion.div>
  );
}
