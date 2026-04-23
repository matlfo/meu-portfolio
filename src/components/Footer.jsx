import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/matlfo' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/matheus-araujo-bb595b380/' },
  { name: 'Email', icon: Mail, href: 'mailto:matheusaraujomoreirapinto1@gmail.com' },
]

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">MA.</span>
            <p className="footer-tagline">IA Aplicada & Automação</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          <p className="footer-copyright">
            © 2025 Matheus Araujo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
