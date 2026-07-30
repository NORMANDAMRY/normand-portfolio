export interface Experience {
  company: string
  role: string
  location: string
  period: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Consurv Technic Sdn Bhd (M)',
    role: 'IT Engineer',
    location: 'Kuala Lumpur, Malaysia',
    period: 'February 2026 – July 2026',
    highlights: [
      'Developed a fully bilingual (English/Arabic) corporate website (consurv.sa) with full RTL support and 90+ Lighthouse scores.',
      'Designed and built HRApp — a cross-platform HR mobile app using Kotlin Multiplatform with 11+ modules, QR check-in, and offline sync.',
      'Built KrakenAi, a multi-provider AI assistant integrating 6+ LLM providers with RAG pipeline, achieving 95%+ retrieval accuracy.',
      'Created RFQ Manager — a procurement desktop app with Kanban board, PDF export, and Windows installer deployment to 4 workstations.',
      'Led deployment of 30+ laptops for Petrosains, generating RM20,000+ profit through hardware supply and on-site support.',
      'Automated hardware inventory collection using PowerShell scripts, reducing manual documentation time by 80%.',
      'Conducted network site visits, documenting 60+ IT assets across multiple locations.',
      'Participated in RFQ and tender preparation, vendor sourcing, and technical specification comparisons.',
    ],
  },
]
