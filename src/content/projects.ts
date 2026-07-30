export interface Project {
  title: string
  description: string
  longDescription: string
  tech: string[]
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'networking' | 'embedded'
  image?: string
  images?: string[]
  links: { label: string; url: string }[]
  date: string
}

export const projects: Project[] = [
  {
    title: 'J.A.R.V.I.S. — AI Voice Assistant',
    description: 'Locally-run AI voice assistant with wake word detection, TTS/STT, and multi-skill support.',
    longDescription: 'J.A.R.V.I.S. (Just A Rather Very Intelligent System) is a full-featured, locally-run AI voice assistant inspired by Iron Man. Built with Python, it features wake word detection ("Hey Jarvis"), speech-to-text via Whisper, custom Jarvis-voiced text-to-speech via Piper TTS, and an LLM-powered brain using the OpenCode API. Includes skills for web search, email, file operations, computer control, stock market analysis, and code assistance. Features both voice and web dashboard interfaces with Win+J hotkey support.',
    tech: ['Python', 'FastAPI', 'Whisper', 'Piper TTS', 'OpenCode LLM', 'WebSocket', 'PyAutoGUI'],
    category: 'ai',
    links: [
      { label: 'GitHub', url: 'https://github.com/NORMANDAMRY/JARVIS' },
    ],
    date: 'July 2026',
  },
  {
    title: 'KrakenAi — Multi-Provider AI Assistant',
    description: 'ChatGPT-style AI assistant with 6+ LLM providers, vision analysis, and RAG pipeline.',
    longDescription: 'Designed and built a multi-provider LLM API gateway with FastAPI, supporting 6+ AI providers with unified request handling, rate limiting, and automatic failover. Built a RAG pipeline using ChromaDB with 95%+ retrieval accuracy. Deployed 3 serverless functions on Supabase Edge Functions with validation, error handling, and caching (reduced response time by 35%). Implemented real-time streaming via WebSocket and SSE, achieving sub-second first-token latency.',
    tech: ['React', 'TypeScript', 'FastAPI', 'Supabase', 'ChromaDB', 'Vercel', 'WebSocket'],
    category: 'ai',
    links: [
      { label: 'GitHub', url: 'https://github.com/NORMANDAMRY' },
    ],
    date: 'March 2026',
  },
  {
    title: 'HRApp — Cross Platform HR Mobile App',
    description: 'Production HR app with 11+ modules, offline sync, and QR code check-in.',
    longDescription: 'Developed 11+ modules for a production HR mobile app including Attendance (QR check-in), Leave Management, Medical Claims, Employee Directory, and Business Card Sharing. Implemented Supabase backend with PostgreSQL, JWT auth, real-time subscriptions, and offline sync with Room DB. Optimized performance: cold start reduced by 30%, UI jank by 60%, APK size by 15MB.',
    tech: ['Kotlin', 'Jetpack Compose', 'Supabase', 'PostgreSQL', 'Room DB', 'Material 3'],
    category: 'mobile',
    links: [
      { label: 'GitHub', url: 'https://github.com/NORMANDAMRY' },
    ],
    date: 'April 2026',
  },
  {
    title: 'Consurv Saudi — Corporate Website',
    description: 'Bilingual B2B corporate website with full RTL support.',
    longDescription: 'Built a fully bilingual (English/Arabic) B2B corporate website with full RTL support across 11 responsive sections using React 18, TypeScript, and Tailwind CSS. Achieved 90+ Lighthouse scores across performance, accessibility, best practices, and SEO. Sections include Hero, About, Expertise, Solutions, Portfolio, and Saudi Deployment.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'web',
    links: [
      { label: 'Live Site', url: 'https://consurv.sa' },
    ],
    date: 'May 2026',
  },
  {
    title: 'RFQ Manager — Procurement Desktop App',
    description: 'Full procurement workflow tool with Kanban board and PDF export.',
    longDescription: 'Built a complete procurement workflow tool with JWT authentication (bcrypt), vendor management, and multi-step RFQ wizard using Electron, React 19, and SQLite. Implemented Kanban drag-and-drop board, side-by-side quote comparison, and PDF/Excel report export with auto-numbering. Deployed to 4 company workstations via Windows installer.',
    tech: ['Electron', 'React', 'TypeScript', 'SQLite', 'Vite'],
    category: 'desktop',
    links: [
      { label: 'GitHub', url: 'https://github.com/NORMANDAMRY' },
    ],
    date: 'June 2026',
  },
  {
    title: 'CCTV Installation — MH Life Manjung',
    description: 'Led CCTV installation and structured cable management for commercial facility.',
    longDescription: 'Led a team for CCTV installation and structured cable management at a commercial facility. Performed site survey, camera placement, and DVR/NVR configuration. Managed structured cabling and ensured proper network connectivity for all cameras.\n\nThis was my FYP for my Diploma in Networking Technology. The project covered the full installation lifecycle: site surveying, camera placement planning, drilling and mounting, cable routing and termination, DVR/NVR setup, and system testing.',
    tech: ['DVR/NVR', 'CCTV', 'Structured Cabling', 'Site Survey', 'Networking'],
    category: 'networking',
    image: '/images/cctv-1.png',
    images: ['/images/cctv-1.png', '/images/cctv-2.png', '/images/cctv-3.png', '/images/cctv-4.png', '/images/cctv-5.png'],
    links: [],
    date: 'November 2025',
  },
  {
    title: 'Smart Following Robot',
    description: 'Autonomous mobile robot that detects and tracks targets using ultrasonic sensors and servo-driven visual scanning.',
    longDescription: 'An autonomous mobile robotic platform built as a practical project for a Microprocessors and Microcontrollers course. The robot uses real-time sensor feedback and closed-loop control to detect, track, and dynamically follow a target object while maintaining a safe distance.\n\n- Autonomous object following via ultrasonic distance measurements\n- Pan-and-tilt visual tracking with servo-driven sensor head for expanded field of view\n- Differential drive motion control with multi-wheel chassis\n\nHardware: Arduino MCU, HC-SR04 ultrasonic sensor, micro servo motor, DC gear motors with motor driver, custom 3D-printed mounting brackets\n\nFirmware: Embedded C/C++ control logic handling concurrent sensor polling, servo positioning, and motor actuation. Real-time conditional algorithms translate distance inputs into directional adjustments. PWM speed regulation governs motor velocity based on proximity.',
    tech: ['Arduino', 'C/C++', 'Ultrasonic Sensors', 'Servo Motors', 'PWM Control', '3D Printing'],
    category: 'embedded',
    image: '/images/robot-1.png',
    images: ['/images/robot-1.png', '/images/robot-2.png', '/images/robot-3.png'],
    links: [
      { label: 'GitHub', url: 'https://github.com/NORMANDAMRY' },
    ],
    date: 'May 2025',
  },
]
