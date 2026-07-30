import { useRef, useEffect } from 'react'

interface Node {
  label: string
  x: number
  y: number
  connections: number[]
  appearFrame: number
  pulse?: boolean
}

const nodes: Node[] = [
  { label: 'NORMAND\nAMRY', x: 50, y: 50, connections: [1, 2, 3, 4], appearFrame: 0, pulse: true },
  { label: 'Networking', x: 20, y: 25, connections: [5, 6, 7], appearFrame: 60 },
  { label: 'Backend', x: 72, y: 22, connections: [8, 9], appearFrame: 80 },
  { label: 'Frontend', x: 75, y: 72, connections: [10, 11], appearFrame: 100 },
  { label: 'DevOps', x: 15, y: 78, connections: [12, 13], appearFrame: 120 },
  { label: 'VLAN / OSPF', x: 5, y: 10, connections: [], appearFrame: 160 },
  { label: 'DHCP / NAT', x: 18, y: 8, connections: [], appearFrame: 180 },
  { label: 'Packet Tracer', x: 32, y: 15, connections: [], appearFrame: 200 },
  { label: 'FastAPI', x: 82, y: 10, connections: [], appearFrame: 220 },
  { label: 'PostgreSQL', x: 88, y: 25, connections: [], appearFrame: 240 },
  { label: 'React / TS', x: 88, y: 72, connections: [], appearFrame: 260 },
  { label: 'Kotlin / CMP', x: 80, y: 85, connections: [], appearFrame: 280 },
  { label: 'Docker', x: 12, y: 88, connections: [], appearFrame: 300 },
  { label: 'Linux / CI/CD', x: 5, y: 78, connections: [], appearFrame: 320 },
]

const colors = [
  '#a855f7', '#c084fc', '#7c3aed', '#8b5cf6',
  '#ec4899', '#f472b6', '#06b6d4', '#22d3ee',
]

interface Packet {
  from: number
  to: number
  progress: number
  speed: number
}

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')!
    let frame = 0
    let packets: Packet[] = []
    const spawnedConnections = new Set<string>()

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const getPos = (node: Node, w: number, h: number) => ({
      x: (node.x / 100) * w,
      y: (node.y / 100) * h,
    })

    const spawnPackets = (fromIdx: number, toIdx: number) => {
      const key = `${fromIdx}-${toIdx}`
      if (spawnedConnections.has(key)) return
      spawnedConnections.add(key)
      for (let i = 0; i < 5; i++) {
        packets.push({
          from: fromIdx,
          to: toIdx,
          progress: i * 0.15,
          speed: 0.008 + Math.random() * 0.012,
        })
      }
    }

    const animate = () => {
      frame++
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      // Background
      ctx.fillStyle = '#0a0a0f'
      ctx.fillRect(0, 0, w, h)

      // Grid
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.04)'
      ctx.lineWidth = 1
      for (let x = 0; x <= w; x += 60) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, h)
        ctx.stroke()
      }
      for (let y = 0; y <= h; y += 60) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(w, y)
        ctx.stroke()
      }

      const visibleNodes = nodes.filter((n) => frame >= n.appearFrame)

      // Draw connections
      for (const node of visibleNodes) {
        const idx = nodes.indexOf(node)
        const from = getPos(node, w, h)
        for (const connIdx of node.connections) {
          if (frame < nodes[connIdx].appearFrame) continue
          const to = getPos(nodes[connIdx], w, h)
          const alpha = Math.min(1, (frame - Math.max(node.appearFrame, nodes[connIdx].appearFrame)) / 40)

          // Line
          const grad = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
          grad.addColorStop(0, `rgba(168, 85, 247, ${alpha * 0.3})`)
          grad.addColorStop(0.5, `rgba(192, 132, 252, ${alpha * 0.6})`)
          grad.addColorStop(1, `rgba(168, 85, 247, ${alpha * 0.3})`)
          ctx.strokeStyle = grad
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.moveTo(from.x, from.y)
          ctx.lineTo(to.x, to.y)
          ctx.stroke()

          // Spawn packets when connection appears
          if (frame === nodes[connIdx].appearFrame + 5) {
            spawnPackets(idx, connIdx)
          }
        }
      }

      // Update & draw packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const pkt = packets[i]
        pkt.progress += pkt.speed
        if (pkt.progress > 1) {
          packets.splice(i, 1)
          continue
        }
        const from = getPos(nodes[pkt.from], w, h)
        const to = getPos(nodes[pkt.to], w, h)
        const t = pkt.progress
        const x = from.x + (to.x - from.x) * t
        const y = from.y + (to.y - from.y) * t
        const alpha = Math.sin(t * Math.PI) * 0.9

        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(236, 72, 153, ${alpha})`
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(236, 72, 153, ${alpha * 0.15})`
        ctx.fill()
      }

      // Draw nodes
      for (const node of visibleNodes) {
        const idx = nodes.indexOf(node)
        const pos = getPos(node, w, h)
        const appearProg = Math.min(1, (frame - node.appearFrame) / 30)
        const scale = appearProg
        const color = colors[idx % colors.length]

        // Outer glow
        const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 45)
        grad.addColorStop(0, `${color}33`)
        grad.addColorStop(1, `${color}00`)
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 45 * scale, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // Node circle
        const radius = (node.pulse ? 18 : 11) * scale
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = '#0a0a0f'
        ctx.fill()
        ctx.strokeStyle = color
        ctx.lineWidth = 2
        ctx.stroke()

        // Pulse ring on center
        if (node.pulse) {
          const ring = (frame * 0.025) % 1
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, 20 + ring * 35, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.3 * (1 - ring)})`
          ctx.lineWidth = 1.5
          ctx.stroke()
        }

        // Label
        const labelAlpha = Math.min(1, (frame - node.appearFrame - 10) / 20)
        ctx.textAlign = 'center'
        ctx.font = node.pulse ? 'bold 13px Inter, system-ui, sans-serif' : '11px Inter, system-ui, sans-serif'
        ctx.fillStyle = `rgba(241, 245, 249, ${labelAlpha})`
        const lines = node.label.split('\n')
        const labelY = pos.y + radius + (node.pulse ? 24 : 18)
        lines.forEach((l, i) => {
          ctx.fillText(l, pos.x, labelY + i * (node.pulse ? 16 : 14))
        })
      }

      // Status message
      if (frame > 340) {
        const msgAlpha = Math.min(1, (frame - 340) / 40)
        ctx.textAlign = 'center'
        ctx.font = '15px monospace'
        ctx.fillStyle = `rgba(168, 85, 247, ${msgAlpha})`
        ctx.fillText('◆ System Ready. Welcome, Normand Amry.', w / 2, h - 90)

        ctx.font = '12px monospace'
        ctx.fillStyle = `rgba(148, 163, 184, ${msgAlpha * 0.6})`
        ctx.fillText('normand.dev — all systems operational', w / 2, h - 66)

        if (frame > 360 && Math.sin(frame * 0.12) > 0) {
          ctx.fillStyle = `rgba(192, 132, 252, ${msgAlpha})`
          ctx.fillText('▌', w / 2 + 290, h - 90)
        }
      }

      // Fade out
      if (frame > 420) {
        const fadeAlpha = Math.min(1, (frame - 420) / 50)
        ctx.fillStyle = `rgba(10, 10, 15, ${fadeAlpha})`
        ctx.fillRect(0, 0, w, h)
        if (fadeAlpha >= 1) {
          onFinish()
          return
        }
      }

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [onFinish])

  return (
    <div className="fixed inset-0 z-[100] bg-[#f8fafc] dark:bg-[#0a0a0f]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
