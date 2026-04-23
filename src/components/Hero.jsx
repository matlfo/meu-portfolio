import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight, Github, MapPin, Sparkles } from 'lucide-react'
import foto from '../assets/foto-matheus.jpg'

const floatingBadges = [
  { label: 'Suporte de TI', className: 'badge-one' },
  { label: 'IA aplicada', className: 'badge-two' },
  { label: 'Automação', className: 'badge-three' }
]

export default function Hero() {
  return (
    <section id="inicio" className="hero hero-awwwards">
      <div className="hero-bg-gradient" />
      <div className="hero-noise" />
      <motion.div
        className="hero-orb hero-orb--one"
        animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero-orb hero-orb--two"
        animate={{ x: [0, -15, 10, 0], y: [0, 18, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container hero-container hero-container--clean">
        <motion.div
          className="hero-content hero-content--clean"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <Sparkles size={14} />
            <span>Portfólio pessoal</span>
          </motion.div>

          <motion.h1
            className="hero-title hero-title--clean"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="title-name">Matheus Araujo</span>
            <span className="title-role">Suporte de TI, automação e IA aplicada</span>
          </motion.h1>

          <motion.p
            className="hero-description hero-description--clean"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
          >
            Atuo com suporte técnico, manutenção de hardware e software e resolução
            de problemas reais. Também exploro automação e inteligência artificial
            para construir soluções úteis, rápidas e bem executadas.
          </motion.p>

          <motion.div
            className="hero-meta-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <span className="hero-meta-pill"><MapPin size={14} /> Rio de Janeiro, RJ</span>
            <span className="hero-meta-pill hero-meta-pill--status">Disponível para aprender e construir</span>
          </motion.div>

          <motion.div
            className="hero-actions hero-actions--clean"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a className="btn btn-primary" href="#projetos">
              <span>Ver projetos</span>
              <ArrowDownRight size={18} />
            </a>
            <a
              className="btn btn-secondary"
              href="https://github.com/matlfo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper hero-image-wrapper--clean"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="hero-image-container hero-image-container--clean"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero-image-glow hero-image-glow--clean" />
            <img src={foto} alt="Matheus Araujo" className="hero-image hero-image--clean" />
            <div className="hero-image-frame hero-image-frame--clean" />
            {floatingBadges.map((item, index) => (
              <motion.div
                key={item.label}
                className={`hero-floating-badge ${item.className}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.45 + index * 0.08 },
                  scale: { duration: 0.5, delay: 0.45 + index * 0.08 },
                  y: { duration: 3.2 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }
                }}
              >
                {item.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
