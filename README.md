# Polling App with QR Code Sharing

## 📌 Project Title & Description
**Project Title:** Polling App with QR Code Sharing  

**Description:**  
This project is a full-stack web application that allows users to create, manage, and share polls. Registered users can create polls with multiple options, which then generate a unique, shareable link and a corresponding QR code. Other users, both registered and anonymous, can access these polls via the link or QR code to cast their votes. The application displays voting results in real time.  

This application is built for individuals or groups who need a quick and easy way to gather opinions or make decisions. It provides a practical, modern solution for polling by integrating QR code technology for seamless sharing, especially across mobile devices.  

The primary goal within the **"AI for Developers"** program is to gain hands-on experience using AI tools throughout the entire software development lifecycle—from planning and coding to testing and deployment.  

---

## 🛠️ Tech Stack
- **Framework:** Next.js (App Router)  
- **Language:** TypeScript  
- **Database & Authentication:** Supabase (Database, Supabase Auth, Real-time updates)  
- **Styling:** Tailwind CSS + shadcn/ui components  
- **Deployment:** Vercel  
- **Version Control:** Git and GitHub  

**AI Development Tools:**  
- **AI-Native IDEs:** Cursor, Zed, Trae (coding assistance, refactoring, debugging)  
- **AI Chatbots:** ChatGPT, Gemini (architectural brainstorming, planning, test ideas)  
- **CLI Agents:** Gemini CLI (scaffolding features, handling configurations)  
- **Code Review Tools:** CodeRabbit (AI-powered code reviews, commit messages/summaries)  

---

## 🧠 AI Integration Strategy
AI is used as a collaborative partner to enhance productivity, improve code quality, and streamline the development process. The approach combines inline completions for flow state and chat interfaces for strategic planning.  

### Code Generation
- **Architectural Brainstorming & Scaffolding:** Use AI chat assistants to design high-level architecture, data models (Polls, Votes, Users), and API routes.  
- **Feature Scaffolding:** Use AI-native IDEs or Gemini CLI to scaffold boilerplate for new features (e.g., authentication flow).  
- **Component Logic:** Inline AI suggestions for smaller logic blocks, functions, and UI components to reduce context switching.  

### Testing
- **Generating Test Cases:** AI chat tools generate unit and integration test ideas.  
- **Writing Test Code:** AI in IDE helps write test boilerplate, mocks, and setup for long-term maintainability.  

### Documentation
- **Docstrings & Inline Comments:** AI generates clear explanations for functions and complex logic.  
- **Commit Messages:** Tools like CodeRabbit create semantic commit messages that summarize intent and changes.  
- **README Maintenance:** AI assists in keeping README updated with setup instructions and reflections on AI usage.  

### Context-Aware Techniques
- **Project Rule Files:** `.trae` file defines tech stack, patterns (Server Actions for mutations), and coding conventions.  
- **API/Schema Awareness:** Supabase schema shared with AI to generate type-safe functions and API route handlers.  
- **File & Diff Context:** Use symbolic references (e.g., `@file`) or `git diff` with AI for focused debugging and refactoring.
