import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMessage = { role: "assistant" | "user"; text: string };

const answers = [
  {
    keywords: ["spotium mobile", "spotium app", "spotium"],
    answer: "Spotium is a B2B sales intelligence product for discovering companies and decision-makers, enriching business data, and AI-assisted research. The resume also describes a cross-platform mobile companion built with Angular, Ionic, and Capacitor. The web platform uses Angular, NestJS, MongoDB, Redis, Apollo GraphQL, OpenAI, and third-party enrichment APIs.",
  },
  {
    keywords: ["staffos", "workforce", "payroll platform"],
    answer: "StaffOS is a workforce management and payroll platform. The resume lists employee administration, payroll cycles, payroll items, payslips, reporting, and organization-specific workflows. Its listed stack is Angular, TypeScript, NestJS, Node.js, Prisma, and PostgreSQL.",
  },
  {
    keywords: ["rizmart", "e-commerce", "ecommerce", "shopping"],
    answer: "RizMart is an online retail platform focused on bags and everyday accessories. The resume describes product catalogues, category browsing, NestJS/Node.js REST APIs, MongoDB, Cloudinary media uploads, and deployment using Render and Cloudflare. Its listed stack also includes Next.js and TypeScript.",
  },
  {
    keywords: ["devkitly", "developer tools", "utilities"],
    answer: "DevKitly is a browser-based developer tools project with 60+ utilities for JSON, encoding, QR codes, PDFs, image processing, and data conversion. It uses React, Vite, TypeScript, and Tailwind CSS.",
  },
  {
    keywords: ["outilsimple", "french tools", "france-first", "productivity tools"],
    answer: "OutilSimple is a French-language productivity tools platform with 15 utilities, 20 structured routes, and a France-focused SEO approach. It is built with React, Vite, TypeScript, and Tailwind CSS.",
  },
  {
    keywords: ["insight desk", "insights desk", "payroll cms", "payroll management cms"],
    answer: "The Insight Desk project is a custom payroll management CMS for an expert network and market research organization. The resume describes payroll workflows, REST API integration, MongoDB records, data migration and validation, and deployment using Cloudify. Listed technologies include TypeScript, Next.js, Node.js, REST APIs, and MongoDB.",
  },
  {
    keywords: ["resume analyzer", "resume analysis", "ai resume"],
    answer: "The AI Resume Analyzer is described in the resume as a final-year project. It has a React frontend, NestJS and Node.js backend APIs, and MongoDB storage for user information and resume records. The resume describes automated resume evaluation and feedback as its purpose.",
  },
  {
    keywords: ["naqtech", "naq tech"],
    answer: "NaqTech IT Solution is listed in the resume as an IT company showcase website built with React, Vite, TypeScript, and Tailwind CSS. The resume describes responsive navigation, structured content, and reusable UI components.",
  },
  {
    keywords: ["payroll"],
    answer: "There are two payroll-related projects described in the portfolio materials: StaffOS is a workforce management and payroll platform for employee/payroll workflows; The Insight Desk project is a custom payroll CMS and includes payroll data migration. Ask about either project by name for its details.",
  },
  {
    keywords: ["what projects", "what project", "list projects", "his projects", "projects has", "portfolio projects", "project list", "all projects", "projects", "project"],
    answer: "The Projects page features StaffOS Workforce & Payroll, Spotium Sales Intelligence and its mobile app, RizMart, DevKitly, OutilSimple, The Insight Desk Payroll CMS, a Task & Reminder App, AI Resume Analyzer, NaqTech IT Solution, Agroanimal Impex, Developer Portfolio, Rizt Tech Solution, and Investor Landing Page. The CV does not give a separate product name for the task and reminder app, so it is labeled descriptively.",
  },
  {
    keywords: ["what does rizwan do", "who is rizwan", "about rizwan", "tell me about rizwan", "what does he do"],
    answer: "Muhammad Rizwan is a Full Stack Software Engineer based in Lahore, Pakistan. He builds web and mobile products, SaaS platforms, e-commerce experiences, and business systems. His listed stack includes Angular, React, Node.js, NestJS, MongoDB, and PostgreSQL.",
  },
  {
    keywords: ["experience", "work", "job", "career", "tech crusades", "codings first", "skill evokers", "freelance"],
    answer: "The About page lists Rizwan as a Software Engineer at Tech Crusades (June 2025–present), a MERN Stack Web Developer at Codings First (July–October 2024), a Web Developer Intern at Skill Evokers (March–June 2024), and a Freelance Frontend Developer (June 2023–February 2024). At Tech Crusades, the resume describes work on SaaS and business applications using Angular, React, TypeScript, Node.js, and NestJS.",
  },
  {
    keywords: ["skill", "stack", "technology", "technologies", "programming", "language", "database"],
    answer: "The About page lists Angular, React, Next.js, Ionic, TypeScript, JavaScript, Tailwind CSS, PrimeNG, Node.js, NestJS, Express, REST APIs, Apollo GraphQL, MongoDB, PostgreSQL, Redis, Supabase, Prisma, Git, Docker, Cloudinary, Vercel, and Render. The resume also lists Bootstrap, Mongoose, Heroku, and Xcode.",
  },
  {
    keywords: ["education", "university", "degree", "study", "student", "iub"],
    answer: "Muhammad Rizwan is pursuing a BS in Software Engineering at The Islamia University of Bahawalpur (IUB), from December 2022 to January 2027.",
  },
  {
    keywords: ["contact", "email", "phone", "hire", "reach", "location", "where", "get in touch"],
    answer: "You can reach Muhammad Rizwan at muhammad.rizwan.razzaq56@gmail.com or +92 306 6592403. He is based in Lahore, Pakistan. The Contact page also has a message form.",
  },
  {
    keywords: ["service", "services", "offer", "what can", "build for", "development service", "web development", "website", "web app", "optimize"],
    answer: "The Services page lists full-stack web development, frontend development with React and Next.js, backend APIs with Node.js and databases, UI/UX implementation, website optimization for performance and SEO, and custom web applications. It also lists REST/GraphQL, authentication, accessibility, responsive design, and cloud deployment among the service benefits.",
  },
  {
    keywords: ["agroanimal", "rizt tech", "developer portfolio", "investor landing"],
    answer: "These are frontend projects featured on the Projects page: Agroanimal Impex (business website), Rizt Tech Solution (company website), Developer Portfolio, and Investor Landing Page. Their cards show the listed technologies and available live or GitHub links.",
  },
];

const fallback = "I can answer questions about Rizwan's experience, skills, education, services, contact details, and projects such as Spotium, StaffOS, RizMart, DevKitly, and OutilSimple. What would you like to know?";
const suggestedQuestions = [
  "What projects has Rizwan built?",
  "Which technologies does he use?",
  "How can I contact him?",
];

function getAnswer(question: string) {
  const normalized = question.toLowerCase().replace(/[^a-z0-9+#.\s-]/g, " ").replace(/\s+/g, " ").trim();
  const best = answers
    .map((entry) => ({
      ...entry,
      score: entry.keywords.reduce((score, keyword) => {
        const normalizedKeyword = keyword.toLowerCase();
        return score + (normalized.includes(normalizedKeyword) ? normalizedKeyword.length * normalizedKeyword.split(" ").length : 0);
      }, 0),
    }))
    .sort((a, b) => b.score - a.score)[0];

  return best && best.score > 0 ? best.answer : fallback;
}

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "assistant", text: "Hi! Ask me about Rizwan's skills, experience, services, or projects." },
  ]);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const askQuestion = (text: string) => {
    if (!text) return;

    setMessages((current) => [
      ...current,
      { role: "user", text },
      { role: "assistant", text: getAnswer(text) },
    ]);
    setQuestion("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    askQuestion(question.trim());
  };

  return (
    <>
      {isOpen && (
        <section
          aria-label="Portfolio chatbot"
          className="fixed bottom-40 right-4 z-[60] flex h-[min(30rem,calc(100dvh-12rem))] w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl sm:right-6"
        >
          <header className="flex items-center justify-between bg-primary px-4 py-3 text-primary-foreground">
            <div>
              <h2 className="font-semibold">Portfolio Assistant</h2>
              <p className="text-xs opacity-85">Ask about Muhammad Rizwan</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 transition-colors hover:bg-white/15"
            >
              <X size={18} />
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-background p-4" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto rounded-br-sm bg-primary text-primary-foreground"
                    : "rounded-bl-sm border border-border bg-card text-card-foreground"
                }`}
              >
                {message.text}
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestedQuestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => askQuestion(suggestion)}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-left text-xs text-foreground transition-colors hover:bg-primary/10"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            <div ref={messageEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-border bg-card p-3">
            <label className="sr-only" htmlFor="portfolio-chat-question">Your question</label>
            <input
              id="portfolio-chat-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask a question..."
              className="min-w-0 flex-1 rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button
              type="submit"
              disabled={!question.trim()}
              aria-label="Send question"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={17} />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close portfolio assistant" : "Ask the portfolio assistant"}
        aria-expanded={isOpen}
        className="fixed bottom-24 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        {isOpen ? <X size={21} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
};

export default PortfolioChatbot;
