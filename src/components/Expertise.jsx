import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Zap, BarChart3, Code, Wrench, RefreshCcw } from 'lucide-react'

const expertiseAreas = [
  {
    icon: Brain,
    title: 'IA Aplicada',
    description: 'Prompt engineering, automação com IA e integração de ferramentas em workflows.',
    color: '#8b5cf6'
  },
  {
    icon: Zap,
    title: 'Automação',
    description: 'Fluxos digitais que eliminam trabalho repetitivo e aumentam produtividade.',
    color: '#f59e0b'
  },
  {
    icon: BarChart3,
    title: 'Dashboards',
    description: 'Visualização de dados e painéis para tomada de decisão estratégica.',
    color: '#06b6d4'
  },
  {
    icon: Code,
    title: 'Front-end',
    description: 'Desenvolvimento web com IA, prototipagem rápida e soluções sob demanda.',
    color: '#22c55e'
  },
  {
    icon: Wrench,
    title: 'Suporte & Infra',
    description: 'Hardware, software e atendimento com foco em resolução de problemas.',
    color: '#f97316'
  },
  {
    icon: RefreshCcw,
    title: 'Aprendizado',
    description: 'Atualização constante para entrega de valor real com novas tecnologias.',
    color: '#ec4899'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
}

export default function Expertise() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="expertise" className="expertise" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span variants={itemVariants} className="section-eyebrow">
            Expertise
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            Competências
          </motion.h2>
          <motion.p variants={itemVariants} className="section-description">
            Combino conhecimento técnico com uso estratégico de IA
            para entregar soluções práticas e eficientes.
          </motion.p>
        </motion.div>

        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <motion.article
              key={area.title}
              className="expertise-card"
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.08 + 0.15,
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{
                y: -6,
                borderColor: area.color,
                boxShadow: `0 16px 32px ${area.color}20`
              }}
            >
              <div
                className="expertise-icon"
                style={{
                  background: `${area.color}15`,
                  borderColor: area.color
                }}
              >
                <area.icon size={22} style={{ color: area.color }} />
              </div>
              <h3 className="expertise-title">{area.title}</h3>
              <p className="expertise-description">{area.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
