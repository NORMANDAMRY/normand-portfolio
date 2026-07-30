export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend & API',
    items: ['Python (FastAPI)', 'REST APIs', 'WebSocket', 'JWT/OAuth', 'Supabase Edge Functions', 'Rate Limiting', 'RAG Pipelines'],
  },
  {
    category: 'Frontend & Mobile',
    items: ['React 18/19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Kotlin Multiplatform', 'Jetpack Compose', 'Material 3', 'Electron'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'SQLite', 'Room DB', 'ChromaDB (Vector DB)', 'Supabase (Auth, Realtime)'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Supabase', 'Vercel', 'CI/CD Pipelines', 'Git/GitHub', 'Docker'],
  },
  {
    category: 'Networking',
    items: ['VLAN', 'Inter-VLAN Routing', 'OSPF', 'Static Routing', 'DHCP', 'NAT', 'ACL', 'Cisco Packet Tracer'],
  },
  {
    category: 'System Admin',
    items: ['Linux/Fedora', 'Windows Server', 'PowerShell (WMI/CIM)', 'Hardware Deployment'],
  },
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Kotlin', 'C/C++', 'PowerShell', 'Shell Scripting'],
  },
]
