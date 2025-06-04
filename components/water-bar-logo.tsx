"use client"

import { useRef, useEffect } from "react"

interface WaterBarLogoProps {
  width?: number
  height?: number
  className?: string
}

export function WaterBarLogo({ width = 400, height = 400, className = "" }: WaterBarLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for crisp rendering
    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    
    // Scale the context to match the actual display size
    ctx.scale(dpr, dpr)
    
    // Set actual display size in CSS pixels
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    let outerHue = 175  // Cyan-blue base color for outer triangle
    let innerHue = 185  // Slightly different starting color for inner triangle
    let time = 0
    let animationId: number

    const drawLogo = () => {
      const centerX = width / 2
      const centerY = height / 2
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Draw neon tube triangle shape
      const drawTriangle = () => {
        const triangleSize = width * 0.35
        const tubeThickness = triangleSize * 0.06
        const tubeGap = triangleSize * 0.1 // Much larger gap to match brand images
        
        // Set shadow properties for glow effect
        ctx.shadowColor = `hsla(${outerHue + 70}, 100%, 70%, 0.9)`
        ctx.shadowBlur = 25
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        
        // Define triangle points
        const topPoint = { x: centerX, y: centerY - triangleSize * 0.8 }
        const bottomLeftPoint = { x: centerX - triangleSize * 0.75, y: centerY + triangleSize * 0.4 }
        const bottomRightPoint = { x: centerX + triangleSize * 0.75, y: centerY + triangleSize * 0.4 }
        
        // OUTER TRIANGLE - OUTER STROKE
        // Create outer tube gradient
        const outerGradient = ctx.createLinearGradient(
          centerX, centerY - triangleSize, 
          centerX, centerY + triangleSize
        )
        outerGradient.addColorStop(0, `hsla(${outerHue + 60}, 100%, 75%, 0.95)`) // More yellowish at top
        outerGradient.addColorStop(1, `hsla(${outerHue + 90}, 100%, 65%, 0.95)`) // More greenish at bottom
        
        // Draw outer triangle's outer stroke
        ctx.lineWidth = tubeThickness
        ctx.strokeStyle = outerGradient
        
        ctx.beginPath()
        ctx.moveTo(topPoint.x, topPoint.y)
        ctx.lineTo(bottomLeftPoint.x, bottomLeftPoint.y)
        ctx.lineTo(bottomRightPoint.x, bottomRightPoint.y)
        ctx.closePath()
        ctx.stroke()
        
        // OUTER TRIANGLE - INNER HIGHLIGHT
        // Create outer triangle's inner highlight gradient (brighter)
        const outerHighlightGradient = ctx.createLinearGradient(
          centerX, centerY - triangleSize, 
          centerX, centerY + triangleSize
        )
        outerHighlightGradient.addColorStop(0, `hsla(${outerHue + 60}, 100%, 90%, 0.95)`) // Brighter highlight
        outerHighlightGradient.addColorStop(1, `hsla(${outerHue + 90}, 100%, 80%, 0.95)`)
        
        // Calculate slightly smaller triangle for the highlight
        // (creating the inner edge of the outer triangle tube)
        const highlightOffset = tubeThickness * 0.3
        
        const outerHighlightTop = {
          x: topPoint.x,
          y: topPoint.y + highlightOffset * 0.8
        }
        
        const outerHighlightBottomLeft = {
          x: bottomLeftPoint.x + highlightOffset * 0.7,
          y: bottomLeftPoint.y - highlightOffset * 0.4
        }
        
        const outerHighlightBottomRight = {
          x: bottomRightPoint.x - highlightOffset * 0.7,
          y: bottomRightPoint.y - highlightOffset * 0.4
        }
        
        // Draw outer triangle's inner highlight stroke
        ctx.lineWidth = tubeThickness * 0.5
        ctx.strokeStyle = outerHighlightGradient
        
        ctx.beginPath()
        ctx.moveTo(outerHighlightTop.x, outerHighlightTop.y)
        ctx.lineTo(outerHighlightBottomLeft.x, outerHighlightBottomLeft.y)
        ctx.lineTo(outerHighlightBottomRight.x, outerHighlightBottomRight.y)
        ctx.closePath()
        ctx.stroke()
        
        // Calculate points for inner triangle (significantly smaller due to larger gap)
        const inset = tubeGap + tubeThickness * 0.2
        
        // Scale factor for inner triangle (percentage of the outer triangle size)
        const innerScale = 0.65
        
        // Use the same center point for both triangles
        // Calculate inner triangle points based on scaled version of outer triangle
        const innerTopPoint = {
          x: centerX,
          y: centerY - (triangleSize * innerScale) * 0.8
        }
        
        const innerBottomLeftPoint = {
          x: centerX - (triangleSize * innerScale) * 0.75,
          y: centerY + (triangleSize * innerScale) * 0.4
        }
        
        const innerBottomRightPoint = {
          x: centerX + (triangleSize * innerScale) * 0.75,
          y: centerY + (triangleSize * innerScale) * 0.4
        }
        
        // INNER TRIANGLE - OUTER STROKE
        // Create inner triangle's outer tube gradient
        const innerGradient = ctx.createLinearGradient(
          centerX, centerY - triangleSize * innerScale, 
          centerX, centerY + triangleSize * innerScale
        )
        innerGradient.addColorStop(0, `hsla(${innerHue + 60}, 100%, 80%, 0.95)`) 
        innerGradient.addColorStop(1, `hsla(${innerHue + 90}, 100%, 70%, 0.95)`)
        
        // Draw inner triangle's outer stroke
        ctx.lineWidth = tubeThickness * 0.6
        ctx.strokeStyle = innerGradient
        
        ctx.beginPath()
        ctx.moveTo(innerTopPoint.x, innerTopPoint.y)
        ctx.lineTo(innerBottomLeftPoint.x, innerBottomLeftPoint.y)
        ctx.lineTo(innerBottomRightPoint.x, innerBottomRightPoint.y)
        ctx.closePath()
        ctx.stroke()

        // INNER TRIANGLE - INNER HIGHLIGHT
        // Create inner triangle's inner highlight gradient (even brighter)
        const innerHighlightGradient = ctx.createLinearGradient(
          centerX, centerY - triangleSize * innerScale, 
          centerX, centerY + triangleSize * innerScale
        )
        innerHighlightGradient.addColorStop(0, `hsla(${innerHue + 60}, 100%, 95%, 0.95)`) // Brightest highlight
        innerHighlightGradient.addColorStop(1, `hsla(${innerHue + 90}, 100%, 85%, 0.95)`)
        
        // Calculate slightly smaller triangle for the inner highlight
        const innerHighlightOffset = tubeThickness * 0.2
        
        const innerHighlightTop = {
          x: innerTopPoint.x,
          y: innerTopPoint.y + innerHighlightOffset * 0.8
        }
        
        const innerHighlightBottomLeft = {
          x: innerBottomLeftPoint.x + innerHighlightOffset * 0.7,
          y: innerBottomLeftPoint.y - innerHighlightOffset * 0.4
        }
        
        const innerHighlightBottomRight = {
          x: innerBottomRightPoint.x - innerHighlightOffset * 0.7,
          y: innerBottomRightPoint.y - innerHighlightOffset * 0.4
        }
        
        // Draw inner triangle's inner highlight stroke
        ctx.lineWidth = tubeThickness * 0.3
        ctx.strokeStyle = innerHighlightGradient
        
        ctx.beginPath()
        ctx.moveTo(innerHighlightTop.x, innerHighlightTop.y)
        ctx.lineTo(innerHighlightBottomLeft.x, innerHighlightBottomLeft.y)
        ctx.lineTo(innerHighlightBottomRight.x, innerHighlightBottomRight.y)
        ctx.closePath()
        ctx.stroke()
        
        // Add extra bright spots at corners
        const addBrightSpot = (x: number, y: number, size: number) => {
          const spotGradient = ctx.createRadialGradient(
            x, y, 0,
            x, y, size
          )
          spotGradient.addColorStop(0, `hsla(${outerHue + 60}, 100%, 95%, 0.9)`)
          spotGradient.addColorStop(1, `hsla(${outerHue + 60}, 100%, 95%, 0)`)
          
          ctx.fillStyle = spotGradient
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fill()
        }
        
        // Add bright spots at each corner
        addBrightSpot(topPoint.x, topPoint.y, tubeThickness * 0.8)
        addBrightSpot(bottomLeftPoint.x, bottomLeftPoint.y, tubeThickness * 0.8)
        addBrightSpot(bottomRightPoint.x, bottomRightPoint.y, tubeThickness * 0.8)
      }
      
      // Draw text "THE WATER BAR" with tagline
      const drawText = () => {
        // Main text
        const fontSize = width * 0.09
        ctx.font = `bold ${fontSize}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        
        // Text shadow/glow
        ctx.shadowColor = `hsla(${outerHue}, 100%, 70%, 0.9)`
        ctx.shadowBlur = 15
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        
        // Create gradient fill for main text
        const gradient = ctx.createLinearGradient(
          centerX - width * 0.25, centerY, 
          centerX + width * 0.25, centerY
        )
        gradient.addColorStop(0, `hsla(${outerHue}, 100%, 80%, 1)`)
        gradient.addColorStop(0.5, `hsla(${outerHue + 15}, 100%, 90%, 1)`)
        gradient.addColorStop(1, `hsla(${outerHue + 30}, 100%, 80%, 1)`)
        
        ctx.fillStyle = gradient
        ctx.fillText("THE WATER BAR", centerX, centerY + width * 0.25) // Moved up
        
        // Tagline text
        const tagFontSize = width * 0.04
        ctx.font = `${tagFontSize}px sans-serif`
        
        // Create gradient fill for tagline
        const tagGradient = ctx.createLinearGradient(
          centerX - width * 0.2, centerY, 
          centerX + width * 0.2, centerY
        )
        tagGradient.addColorStop(0, `hsla(${innerHue + 60}, 100%, 75%, 0.9)`)
        tagGradient.addColorStop(1, `hsla(${innerHue + 90}, 100%, 75%, 0.9)`)
        
        ctx.fillStyle = tagGradient
        ctx.shadowBlur = 8
        // Repositioned tagline to ensure it's not cut off
        ctx.fillText("EXPERIENCE HIGHDRATION", centerX, centerY + width * 0.32)
      }

      // Draw glowing particles
      const drawParticles = () => {
        for (let i = 0; i < 15; i++) {
          const angle = (i / 15) * Math.PI * 2 + time
          const distance = width * 0.25 + Math.sin(time * 2 + i) * width * 0.05
          const x = centerX + Math.cos(angle) * distance
          const y = centerY + Math.sin(angle) * distance

          ctx.beginPath()
          ctx.arc(x, y, width * 0.005 + Math.sin(time + i) * width * 0.003, 0, Math.PI * 2)
          ctx.fillStyle = `hsla(${(outerHue + i * 10) % 360}, 100%, 80%, ${0.4 + Math.sin(time + i) * 0.2})`
          ctx.shadowColor = `hsla(${(outerHue + i * 10) % 360}, 100%, 70%, 0.8)`
          ctx.shadowBlur = width * 0.02
          ctx.fill()
        }
      }

      // Draw pulsing outer glow
      const drawGlow = () => {
        ctx.beginPath()
        ctx.arc(centerX, centerY, width * 0.25 + Math.sin(time * 1.5) * width * 0.03, 0, Math.PI * 2)
        const glowGradient = ctx.createRadialGradient(
          centerX, centerY, 0, 
          centerX, centerY, width * 0.38
        )
        glowGradient.addColorStop(0, `hsla(${outerHue}, 100%, 70%, ${0.08 + Math.sin(time) * 0.05})`)
        glowGradient.addColorStop(1, `hsla(${outerHue}, 100%, 70%, 0)`)
        ctx.fillStyle = glowGradient
        ctx.fill()
      }

      // Execute all drawing functions
      drawGlow()
      drawParticles()
      drawTriangle()
      drawText()

      // Update animation parameters with different rates for more interesting color cycling
      outerHue = (outerHue + 0.2) % 360
      innerHue = (innerHue + 0.25) % 360 // Slightly faster cycle for inner triangle
      time += 0.02
      
      // Request next frame
      animationId = requestAnimationFrame(drawLogo)
    }

    // Start animation
    drawLogo()

    // Cleanup on unmount
    return () => {
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [width, height])

  return <canvas ref={canvasRef} className={className} />
}
