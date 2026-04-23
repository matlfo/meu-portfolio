import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Linkedin, Github } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'matheusaraujomoreirapinto1@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=matheusaraujomoreirapinto1@gmail.com',
    external: true
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Rio de Janeiro, RJ',
    href: null
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '(21) 99229-3845',
    href: 'https://wa.me/5521992293845',
    external: true
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Matheus Araujo',
    href: 'https://www.linkedin.com/in/matheus-araujo-bb595b380/',
    external: true
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@matlfo',
    href: 'https://github.com/matlfo',
    external: true
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

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contato" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span variants={itemVariants} className="section-eyebrow">
            Contato
          </motion.span>
          <motion.h2 variants={itemVariants} className="section-title">
            Vamos conversar?
          </motion.h2>
          <motion.p variants={itemVariants} className="contact-description">
            Estou disponível para oportunidades de estágio, projetos e networking.
            Entre em contato!
          </motion.p>
        </motion.div>

        <div className="contact-grid">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href || '#'}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className={`contact-card ${!item.href ? 'no-link' : ''}`}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.08 }}
              whileHover={item.href ? { y: -4, borderColor: 'rgba(99, 102, 241, 0.4)' } : {}}
            >
              <div className="contact-icon">
                <item.icon size={20} />
              </div>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
