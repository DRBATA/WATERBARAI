"use client"

import { useRef, useEffect } from "react"

export default function NeonTriangle({ size = 150 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    canvas.width = size
    canvas.height = size
    const opacity = 0.6
    const hueRef = { current: 180 }
    let animationId: number

    const drawInnerTriangles = (centerX: number, centerY: number, triangleSize: number, gradient: CanvasGradient) => {
      const topY = centerY - triangleSize
      const leftX = centerX - triangleSize * 0.866
      const rightX = centerX + triangleSize * 0.866
      const bottomY = centerY + triangleSize / 2

      ctx.beginPath()
      ctx.moveTo(leftX, bottomY)
      ctx.lineTo(rightX, bottomY)
      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.stroke()

      const midY = (topY + bottomY) / 2
      ctx.beginPath()
      ctx.moveTo(centerX, midY)
      ctx.lineTo(rightX, bottomY)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(centerX, midY)
      ctx.lineTo(leftX, bottomY)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(centerX, topY)
      ctx.lineTo(centerX, midY)
      ctx.stroke()
    }

    const drawTriangle = (hue: number) => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const triangleSize = size * 0.3 // Scale triangle size with canvas size

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.moveTo(centerX, centerY - triangleSize)
      ctx.lineTo(centerX - triangleSize * 0.866, centerY + triangleSize / 2)
      ctx.lineTo(centerX + triangleSize * 0.866, centerY + triangleSize / 2)
      ctx.closePath()

      const gradient = ctx.createLinearGradient(
        centerX - triangleSize,
        centerY - triangleSize,
        centerX + triangleSize,
        centerY + triangleSize,
      )
      gradient.addColorStop(0, `hsla(${hue}, 100%, 80%, ${opacity})`)
      gradient.addColorStop(0.5, `hsla(${(hue + 60) % 360}, 100%, 80%, ${opacity})`)
      gradient.addColorStop(1, `hsla(${(hue + 120) % 360}, 100%, 80%, ${opacity})`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 3
      ctx.shadowColor = `hsla(${hue}, 100%, 70%, 0.8)`
      ctx.shadowBlur = 15
      ctx.stroke()

      drawInnerTriangles(centerX, centerY, triangleSize, gradient)
    }

    function animate() {
      hueRef.current = (hueRef.current + 0.1) % 360
      drawTriangle(hueRef.current)
      animationId = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [size])

  return (
    <div style={{ width: size, height: size, margin: "0 auto" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
