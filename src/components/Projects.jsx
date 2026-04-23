import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Github, ExternalLink, Code2, Globe, Terminal } from 'lucide-react'

const projects = [
  {
    name: 'Tradutor',
    description: 'Aplicação de tradução de textos com interface moderna e suporte a múltiplos idiomas.',
    tags: ['React', 'API', 'Tradução'],
    github: 'https://github.com/matlfo/tradutor-web',
    demo: null,
    icon: Globe
  },
  {
    name: 'Portfólio',
    description: 'Meu portfólio pessoal desenvolvido com React e Framer Motion, com animações fluidas e design moderno.',
    tags: ['React', 'Framer Motion', 'Vite'],
    github: 'https://github.com/matlfo/meu-portfolio',
    demo: 'https://matlfo.github.io/meu-portfolio/',
    icon: Code2
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projetos" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span variants={itemVariants} className="section-eyebrow">
            Portfólio
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            Projetos em Destaque
          </motion.h2>
          <motion.p variants={itemVariants} className="section-description">
            Alguns dos meus trabalhos e experimentos. Cada projeto representa
            um passo na minha jornada de aprendizado e construção.
          </motion.p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(99, 102, 241, 0.4)' }}
            >
              <div className="project-header">
                <div className="project-icon">
                  <project.icon size={24} />
                </div>
                <div className="project-links">
                  <span className="project-link-icon" title="Ver no GitHub">
                    <Github size={18} />
                  </span>
                  {project.demo && (
                    <span className="project-link-icon" title="Ver demo">
                      <ExternalLink size={18} />
                    </span>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="projects-more">
          <a
            href="https://github.com/matlfo"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-more-link"
          >
            <Github size={18} />
            <span>Ver mais projetos no GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
