import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Lightbulb, Rocket, Users, Zap, Award } from 'lucide-react'

const differentials = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    text: 'Resolvo problemas reais com tecnologia de forma prática e eficiente, sempre pensando no impacto final.'
  },
  {
    icon: Lightbulb,
    title: 'Aprendizado Contínuo',
    text: 'Capacidade de aprender e aplicar novos conhecimentos rapidamente, transformando teoria em prática.'
  },
  {
    icon: Rocket,
    title: 'IA em Projetos Pessoais',
    text: 'Exploro ferramentas de IA no tempo livre para automatizar tarefas e multiplicar produtividade.'
  },
  {
    icon: Users,
    title: 'Colaboração',
    text: 'Comunicação clara e trabalho em equipe para alcançar objetivos compartilhados.'
  },
  {
    icon: Zap,
    title: 'Proatividade',
    text: 'Antecipo necessidades e busco constantemente melhorar processos e soluções.'
  },
  {
    icon: Award,
    title: 'Qualidade Técnica',
    text: 'Compromisso com código limpo, documentação adequada e soluções bem estruturadas.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="section-header">
            <span className="section-eyebrow">Sobre Mim</span>
            <h2 className="section-title">
              Quem sou eu
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="about-text">
            Trabalho como <strong>Estagiário de Suporte de TI no Instituto Dara</strong>,
            onde sou responsável pelo <strong>atendimento a usuários</strong>, manutenção de
            hardware e software, e resolução de problemas técnicos do dia a dia.
          </motion.p>

          <motion.p variants={itemVariants} className="about-text">
            Fora do trabalho, estudo e aplico <strong>inteligência artificial</strong> em
            projetos pessoais. Tenho como diferencial a capacidade de aprender rapidamente
            e transformar conhecimento em soluções práticas.
          </motion.p>

          <div className="differentials-grid">
            {differentials.map((diff, index) => (
              <motion.div
                key={diff.title}
                className="differential-card"
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.2 + index * 0.05 }}
                whileHover={{ y: -4, borderColor: 'rgba(99, 102, 241, 0.4)' }}
              >
                <div className="differential-icon">
                  <diff.icon size={22} />
                </div>
                <h3 className="differential-title">{diff.title}</h3>
                <p className="differential-text">{diff.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
