"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ExternalLink, ArrowUpRight } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

/* =========================================
   DATA CONFIGURATION
   Modify these arrays to change your portfolio content!
   ========================================= */

// REPLACE: Update your Work Experience here
const EXPERIENCE_DATA = [
  {
    company: "Dummy Company Corp",
    role: "Full Stack Developer",
    duration: "Feb 2024 - Present",
    logoFallback: "CO",
  },
  {
    company: "Stealth Startup",
    role: "Frontend Intern",
    duration: "Aug 2023 - Jan 2024",
    logoFallback: "SU",
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
  { name: "TailwindCSS", icon: "tailwindcss/06B6D4" },
  { name: "JavaScript", icon: "javascript/F7DF1E" },
  { name: "TypeScript", icon: "typescript/3178C6" },
  { name: "React", icon: "react/61DAFB" },
  { name: "Next.js", icon: "nextdotjs/ffffff" }, 
  { name: "Node.js", icon: "nodedotjs/339933" },
  { name: "Express.js", icon: "express/ffffff" },
  { name: "MongoDB", icon: "mongodb/47A248" },
  { name: "Prisma", icon: "prisma/5A67D8" },
  { name: "PostgreSQL", icon: "postgresql/4169E1" },
  { name: "NeonDB", icon: "neon/00E599" },
  { name: "NextAuth", icon: "linux/9333EA" }, 
  { name: "Zod", icon: "zod/3068B7" },
  { name: "Zustand", icon: "react/7F5A3E" }, 
  { name: "Redis", icon: "redis/DC382D" },
  { name: "Docker", icon: "docker/2496ED" },
  { name: "WebSocket", icon: "socketdotio/ffffff" }, 
  { name: "CI/CD", icon: "githubactions/2088FF" },
  { name: "Turborepo", icon: "turborepo/EF4444" },
  { name: "Langchain", icon: "langchain/ffffff" }, 
  { name: "MCP", icon: "json/FFA500" }, 
  { name: "Postman", icon: "postman/FF6C37" },
  { name: "Git", icon: "git/F05032" },
  { name: "VS Code", icon: "visualstudiocode/007ACC" },
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
  }
};

// REPLACE: Update your Projects here
// Pick a theme from PROJECT_THEMES above for the `colorTheme`
const PROJECTS_DATA = [
  {
    title: "Nexra",
    status: "active",
    date: "2024 — present",
    description: "AI thinking partner for solo founders. Challenges assumptions, pokes holes in ideas, and pushes back — instead of validating everything you say.",
    tags: ["Next.js", "FastAPI", "GPT-4.1-mini", "PostgreSQL", "SSE Streaming"],
    link: "#",
    colorTheme: "green"
  },
  {
    title: "Aura Protocol",
    status: "beta",
    date: "2023 — 2024",
    description: "Fast. Efficient. Revolutionary. Experience the future of blockchain with Aura - where speed meets innovation.",
    tags: ["Next.js", "TypeScript", "Solidity", "Avalanche"],
    link: "#",
    colorTheme: "blue"
  },{
    title: "Aura Protocol",
    status: "beta",
    date: "2023 — 2024",
    description: "Fast. Efficient. Revolutionary. Experience the future of blockchain with Aura - where speed meets innovation.",
    tags: ["Next.js", "TypeScript", "Solidity", "Avalanche"],
    link: "#",
    colorTheme: "blue"
  }
];

export function Portfolio() {
  return (
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto space-y-24 px-6 md:px-4 pb-28 md:pb-20 pt-16 md:pt-10">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
        className="w-full flex flex-col gap-6"
      >
        <div className="flex flex-col gap-6 w-full">
          
          {/* Top Row: Headline (Left) + Image (Right) */}
          <div className="flex flex-row items-start justify-between gap-4 md:gap-6 w-full">
            {/* Headline and Subtitle */}
            <div className="flex flex-col gap-2 pt-2 md:pt-4">
              <h1 className="flex flex-col md:gap-3 text-[32px] sm:text-4xl md:text-5xl font-bold tracking-tight">
                <span>Hi,</span>
                <span>I'm Raunak 👋 </span>
              </h1>
              <p className="flex flex-col gap-1 text-gray-400 dark:text-gray-400 text-md  tracking-none pr-2">
                <span className="">20 • AI Full Stack Engineer / DevOps</span>
              </p>
            </div>

            {/* Profile Image Column (Right side) */}
          <div className="w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28 shrink-0 overflow-hidden border border-gray-200/50 dark:border-gray-800/50 rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.05)] bg-white dark:bg-[#0a0a0a] group hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.08)] transition-all duration-500">
            {/* REPLACE: Add your actual photo to the 'public' folder and name it 'profile.jpg' 
                Alternatively, paste the full URL of the uploaded image here! */}
            <img 
              src="/profile.jpeg" 
              alt="Raunak" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=R&background=random&size=200" }}
            />
          </div>
          </div>

          {/* Bottom Row: Full Width Bio & Badge */}
          <div className="flex flex-col gap-6 w-full">
            {/* Structured Highlight Bio */}
            <div className="flex flex-col gap-4 text-gray-500 dark:text-gray-300 text-sm  leading-relaxed w-full">
              <p>
                I build <span className="text-orange-600 dark:text-orange-200/90 font-medium">full-stack applications</span>. Passionate about creating projects that make a <span className="text-orange-600 dark:text-orange-200/90 font-medium">real-world impact</span>. I focus on clean code and user experience.
              </p>
              
              <div className="flex items-center gap-2 flex-wrap">
                Previously interned at 
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800/80 text-gray-900 dark:text-white text-xs font-medium border border-gray-200 dark:border-gray-700">
                   <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                   Dummy Startup
                </span> 
                building AI infrastructure.
              </div>

              <p>
                I work with <strong className="text-gray-900 dark:text-white font-medium">Next.js</strong> and <strong className="text-gray-900 dark:text-white font-medium">Rust</strong> most days, using <strong className="text-gray-900 dark:text-white font-medium">TypeScript</strong> for type safety. I enjoy building things that look good and perform well.
              </p>

              <p>
                Open to <strong className="text-gray-900 dark:text-white font-medium">collaborations</strong> and <strong className="text-gray-900 dark:text-white font-medium">opportunities</strong>. Feel free to reach out!
              </p>
            </div>

            {/* Available For Hire Badge */}
            <div className="flex items-center gap-1.5 md:gap-2 px-2 py-1 md:px-4 md:py-1 bg-gray-100/50 dark:bg-gray-800/50 w-fit rounded-sm border border-gray-200 dark:border-gray-700">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-700 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">Available - Open to new projects and contracts </span>
            </div>

          </div>
          
        </div>
      </motion.section>


      {/* 2. WORK EXPERIENCE */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
        className="w-full"
      >
        <h2 className="text-xl font-bold mb-6">Work Experience</h2>
        <div className="flex flex-col gap-6">
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={index} className="flex gap-4">
              <Avatar className="w-10 h-10 border border-gray-200 dark:border-gray-700 bg-gray-50 flex items-center justify-center">
                 <AvatarFallback className="text-xs">{exp.logoFallback}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{exp.company}</h3>
                  <p className="text-sm text-gray-500">{exp.role}</p>
                </div>
                <span className="text-sm text-gray-400">{exp.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>


      
      {/* 4. SKILLS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
        className="w-full"
      >
        <h2 className="text-xl font-bold  mb-6  tracking-tight">Skills & Tools</h2>
        <div className="flex flex-wrap gap-2.5">
          {SKILLS_DATA.map((skill) => (
            <div key={skill.name} className="flex items-center gap-2.5 bg-gray-100/80 dark:bg-[#111111]/90 hover:dark:bg-[#1a1a1a] text-gray-800 dark:text-[#EAEAEA] border border-gray-200/60 dark:border-white/[0.06] px-3.5 py-1.5 rounded-lg transition-colors cursor-default shadow-sm">
              <img 
                src={`https://cdn.simpleicons.org/${skill.icon}`} 
                alt={skill.name} 
                className="w-4 h-4 object-contain opacity-90 drop-shadow-sm" 
                onError={(e) => e.currentTarget.style.display = 'none'} 
              />
              <span className="text-xs ">{skill.name}</span>
            </div>
          ))}
        </div>
        <div>
           <p className="mt-10 text-xs text-gray-300 dark:text-gray-400"> doesn't matter! she got someone else , however her smile was beautifull </p>
        </div>
      </motion.section>


      {/* 5. PROJECTS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="w-full flex flex-col items-center"
      >
        <Badge variant="outline" className="mb-4 bg-gray-900 text-white dark:bg-white dark:text-black border-none px-3 py-1 font-medium">My Projects</Badge>
        <h2 className="text-3xl font-bold mb-4 text-center tracking-tight">Check out my latest work</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center text-xs max-w-xl">
          I've worked on a variety of projects. Here are a few of my favorites.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-4">
          {PROJECTS_DATA.map((project, index) => {
            const theme = PROJECT_THEMES[project.colorTheme] || PROJECT_THEMES.green;
            
            return (
              <a key={index} href={project.link} target="_blank" rel="noreferrer" className="group block">
                <Card className={`flex flex-col h-full overflow-hidden border border-gray-200 dark:border-gray-800/80 bg-white dark:bg-[#0a0a0a] shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl ${theme.cardHover}`}>
                  {/* Project Image Placeholder */}
                  <div className={`w-full h-48 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800/80 flex items-center justify-center text-gray-400 transition-colors duration-300 shrink-0 ${theme.imgHover}`}>
                    <span className="text-sm font-medium">Project Image Placeholder</span>
                  </div>
                  
                  <CardContent className=" flex-grow flex flex-col">
                    {/* Header row: Title + Badge + Arrow */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className={`text-xl font-semibold text-gray-900 dark:text-yellow-100 transition-colors duration-300 ${theme.textHover}`}>
                          {project.title}
                        </h3>
                        {/* Status Badge */}
                        <Badge variant="outline" className={`h-5 gap-1.5 rounded border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 transition-colors duration-300 ${theme.badgeHover}`}>
                          <div className={`w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 transition-colors duration-300 ${theme.dotHover}`} />
                          {project.status}
                        </Badge>
                      </div>
                      <ArrowUpRight className={`w-5 h-5 text-gray-400 transition-colors duration-300 ${theme.textHover}`} />
                    </div>

                    {/* Date */}
                    <div className="text-sm text-gray-500 dark:text-gray-600 mb-5">{project.date}</div>

                    {/* Description */}
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tech => (
                        <Badge key={tech} variant="outline" className={`rounded-md border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-300 ${theme.tagHover}`}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>
      </motion.section>

      
      {/* 6. CONTACT CTA */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="w-full flex flex-col items-center mt-12 text-center"
      >
        <Badge variant="outline" className="mb-4 bg-gray-900 text-white dark:bg-white dark:text-black border-none px-3 py-1 font-medium">
          Freelance & Collaboration
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight max-w-md">Ready to Build Something Great?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
          I'm available for freelance projects, consulting, and collaborations. Whether you need a web app, front-end magic, 
          or full-stack development, let's discuss how I can help bring your vision to life.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="default" className="rounded-full">Book a Free Consultation</Button>
          <Button variant="outline" className="rounded-full">Send an Email</Button>
        </div>
      </motion.section>

    </div>
  );
}
