"use client";

import React from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ExternalLink, ArrowUpRight } from "lucide-react";

const fadeInUp = {
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
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Rust", 
  "Express.js", "PostgreSQL", "MongoDB", "Docker" , "AWS"
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
    <div className="flex flex-col items-start w-full max-w-2xl mx-auto space-y-24 px-4 pb-20 pt-10">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        className="w-full flex flex-col gap-6"
      >
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-6 w-full">
          <div>
            {/* REPLACE: Update your hero headline */}
            <h1 className="flex flex-col gap-3 text-4xl md:text-5xl font-bold tracking-tight mb-3">
              <span>Hi</span>
              <span>I'm Raunak 👋</span>
            </h1>
            {/* REPLACE: Update your subheader/role */}
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-sm">
              20 / AI - Full Stack Developer / DevOps  - building, learning, and sharing on the web.
            </p>
          </div>
          <div className="w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden border border-gray-200/50 dark:border-gray-800/50 rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.05)] bg-white dark:bg-[#0a0a0a] group hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.08)] transition-all duration-500">
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

        {/* Available For Hire Badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100/50 dark:bg-gray-800/50 w-fit rounded-sm border border-gray-200 dark:border-gray-700">
          <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available - Open to new projects and contracts </span>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 mt-6">TL:DR</h2>
          {/* REPLACE: Write your actual 'About Me' bio here */}
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            I'm a full-stack developer currently building scalable decentralized applications. With experience across multiple startups, 
            I love turning ideas into products that bridge humans and technology. Beyond coding, I enjoy experimenting, sharing, 
            and contributing to the developer ecosystem.
          </p>
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


      {/* 3. EDUCATION
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
        className="w-full"
      >
        <h2 className="text-xl font-bold mb-6">Education</h2>
        {EDUCATION_DATA.map((edu, index) => (
          <div key={index} className="flex gap-4 items-center mb-6 last:mb-0">
            <Avatar className="w-10 h-10 border border-gray-200 dark:border-gray-700 bg-gray-50 flex items-center justify-center">
               <AvatarFallback className="text-xs">{edu.logoFallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-2">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{edu.institution}</h3>
                <p className="text-sm text-gray-500">{edu.degree}</p>
              </div>
              <span className="text-sm text-gray-400">{edu.duration}</span>
            </div>
          </div>
        ))}
      </motion.section> */}

      
      {/* 4. SKILLS */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} 
        className="w-full"
      >
        <h2 className="text-xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {SKILLS_DATA.map((skill) => (
            <Badge key={skill} variant="outline" className="bg-gray-50 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-100 border border-gray-200 dark:border-gray-700 px-3 py-2 text-xs ">
              {skill}
            </Badge>
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
