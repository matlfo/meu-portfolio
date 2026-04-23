import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle } from 'lucide-react'

const experiences = [
  {
    title: 'Estagiário de Suporte em TI',
    company: 'Instituto Dara',
    location: 'Rio de Janeiro, RJ',
    period: 'Fev 2026 - Atual',
    description: 'Suporte técnico a usuários, manutenção de hardware e software e apoio na melhoria dos fluxos internos com uma pegada mais prática e organizada.',
    achievements: [
      'Atendimento e suporte a usuários, presencialmente e de forma remota',
      'Montagem, manutenção e diagnóstico de computadores',
      'Formatação e instalação de sistemas operacionais e programas',
      'Apoio na organização de processos e documentação técnica',
      'Exploração de soluções com IA para produtividade e automação'
    ],
    icon: Briefcase,
    current: true
  },
  {
    title: 'Suporte e Manutenção de Computadores',
    company: 'Experiência prática',
    location: 'Rio de Janeiro, RJ',
    period: 'Projetos e atendimentos pontuais',
    description: 'Atuação prática com manutenção preventiva e corretiva, instalação e configuração de computadores e softwares.',
    achievements: [
      'Montagem e desmontagem de PCs',
      'Diagnóstico de falhas de hardware e software',
      'Manutenção preventiva e corretiva',
      'Instalação e configuração de sistemas'
    ],
    icon: Briefcase,
    current: false
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="experiencia" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span className="section-eyebrow">Carreira</motion.span>
          <motion.h2 className="section-title">Trajetória Profissional</motion.h2>
        </motion.div>

        <div className="experience-timeline">
          <div className="experience-line"></div>
          {experiences.map((exp, index) => {
            const fromLeft = index % 2 === 0
            return (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                className={`experience-row ${fromLeft ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className={`experience-node ${exp.current ? 'current' : ''}`}></div>
                <motion.article
                  className={`experience-card ${exp.current ? 'current' : ''}`}
                  whileHover={{ y: -6 }}
                >
                  <div className="experience-header">
                    <div className="experience-icon-wrapper">
                      <exp.icon size={24} />
                    </div>
                    <div className="experience-meta">
                      <h3 className="experience-job-title">{exp.title}</h3>
                      <div className="experience-company-row">
                        <span className="experience-company">{exp.company}</span>
                        <span className="experience-divider">•</span>
                        <span className="experience-location">{exp.location}</span>
                      </div>
                      <div className="experience-period-wrapper">
                        <Calendar size={14} />
                        <span className="experience-period">{exp.period}</span>
                        {exp.current && (
                          <span className="current-badge">
                            <CheckCircle size={12} />
                            Atual
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="achievement-item">
                        <CheckCircle size={16} className="achievement-icon" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
