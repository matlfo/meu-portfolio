import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, BookOpen, Calendar } from 'lucide-react'

const educationItems = [
  {
    title: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade do Estado do Rio de Janeiro (UERJ)',
    period: '2025 - 2028 · Em andamento',
    description: 'Formação em desenvolvimento de software, lógica, sistemas e base técnica para evolução em tecnologia.',
    icon: GraduationCap,
    current: true
  },
  {
    title: 'Fundamentos de TI: Hardware e Software',
    institution: 'Fundação Bradesco',
    period: 'Curso complementar',
    description: 'Base prática em hardware, software, instalação, manutenção e diagnóstico de computadores.',
    icon: BookOpen,
    current: false
  }
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="educacao" className="experience education education--timeline" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Formação</span>
          <h2 className="section-title">Educação</h2>
        </motion.div>

        <div className="experience-timeline education-timeline">
          <div className="experience-line"></div>
          {educationItems.map((item, index) => {
            const fromLeft = index % 2 === 0
            return (
              <motion.div
                key={item.title}
                className={`experience-row ${fromLeft ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.14, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`experience-node ${item.current ? 'current' : ''}`}></div>
                <article className={`experience-card education-card--timeline ${item.current ? 'current' : ''}`}>
                  <div className="experience-header">
                    <div className="experience-icon-wrapper">
                      <item.icon size={24} />
                    </div>
                    <div className="experience-meta">
                      <h3 className="experience-job-title">{item.title}</h3>
                      <div className="experience-company-row">
                        <span className="experience-company">{item.institution}</span>
                      </div>
                      <div className="experience-period-wrapper">
                        <Calendar size={14} />
                        <span className="experience-period">{item.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="experience-description">{item.description}</p>
                </article>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
