import React from 'react'
import { motion } from 'framer-motion'
import { 
  Layers, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowUp,
  ExternalLink
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    empresa: [
      { name: 'Sobre Nós', href: '#sobre' },
      { name: 'Nossa História', href: '#historia' },
      { name: 'Missão e Visão', href: '#missao' },
      { name: 'Equipe', href: '#equipe' }
    ],
    servicos: [
      { name: 'Drenagem', href: '#drenagem' },
      { name: 'Geossintéticos', href: '#geossinteticos' },
      { name: 'Consultoria', href: '#consultoria' },
      { name: 'Projetos', href: '#projetos' }
    ],
    contato: [
      { 
        name: '+55 (44) 99104-0774', 
        href: 'tel:+5544991040774',
        icon: Phone
      },
      { 
        name: 'ffbrunoff@yahoo.com.br', 
        href: 'mailto:ffbrunoff@yahoo.com.br',
        icon: Mail
      },
      { 
        name: 'Padre Lebret 801 G05 Bloco 03', 
        href: '#',
        icon: MapPin
      }
    ]
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="pt-16 pb-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 mb-6"
              >
                <div className="p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl">
                  <Layers className="h-8 w-8 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Geobras</span>
                  <span className="text-sm text-gray-300">Geossintéticos</span>
                </div>
              </motion.div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Especialistas em soluções de geossintéticos e drenagem, oferecendo 
                qualidade e inovação para projetos de engenharia civil e ambiental.
              </p>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-2 text-gray-400"
              >
                <Clock className="w-4 h-4" />
                <span className="text-sm">Seg - Sex: 8h às 18h</span>
              </motion.div>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300 hover:text-accent-400 transition-colors duration-300 block"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Serviços</h3>
              <ul className="space-y-3">
                {footerLinks.servicos.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300 hover:text-accent-400 transition-colors duration-300 block"
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
              <ul className="space-y-4">
                {footerLinks.contato.map((contact, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <motion.a
                      href={contact.href}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center space-x-3 text-gray-300 hover:text-accent-400 transition-colors duration-300"
                    >
                      <contact.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{contact.name}</span>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
              >
                <motion.a
                  href="#contato"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Solicitar Orçamento</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Geobras. Todos os direitos reservados.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Criado com</span>
                <motion.a
                  href="https://papum.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="italic text-accent-400 hover:text-accent-300 transition-colors duration-300"
                >
                  Papum
                </motion.a>
              </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ 
                scale: 1.1,
                rotate: 360
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}