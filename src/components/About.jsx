import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Eye, Award, Zap, Shield, Globe, CheckCircle } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '15+', label: 'Anos de Experiência', icon: Award },
    { number: '500+', label: 'Projetos Realizados', icon: CheckCircle },
    { number: '100+', label: 'Clientes Satisfeitos', icon: Users },
    { number: '50+', label: 'Cidades Atendidas', icon: Globe }
  ]

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Fornecer soluções inovadoras e sustentáveis em geossintéticos e drenagem, garantindo a máxima qualidade e eficiência em cada projeto, contribuindo para o desenvolvimento da infraestrutura nacional.'
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser reconhecida como a empresa líder em soluções geotécnicas no Brasil, sendo referência em inovação, qualidade e sustentabilidade no setor de engenharia civil e ambiental.'
    },
    {
      icon: Shield,
      title: 'Valores',
      description: 'Comprometimento com a excelência, integridade em todas as relações, responsabilidade ambiental, inovação constante e foco total na satisfação do cliente.'
    }
  ]

  const expertise = [
    {
      icon: Zap,
      title: 'Tecnologia Avançada',
      description: 'Utilizamos as mais modernas tecnologias em geossintéticos, garantindo soluções eficientes e duradouras para projetos de grande complexidade.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Nossa equipe é formada por engenheiros e técnicos altamente qualificados, com vasta experiência em projetos de drenagem e geotecnia.'
    },
    {
      icon: Award,
      title: 'Certificações',
      description: 'Possuímos todas as certificações necessárias e trabalhamos com produtos que atendem aos mais rigorosos padrões de qualidade internacional.'
    },
    {
      icon: Globe,
      title: 'Abrangência Nacional',
      description: 'Atendemos projetos em todo o território nacional, levando nossa expertise e qualidade para qualquer região do Brasil.'
    }
  ]

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-r from-accent-200 to-primary-200 rounded-full opacity-20 blur-xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-gradient-to-r from-primary-600 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Sobre a Geobras
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Excelência em{' '}
            <span className="text-gradient">Geossintéticos</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Há mais de uma década, a Geobras tem sido pioneira em soluções inovadoras para 
            drenagem e geotecnia. Nossa expertise transforma desafios complexos em soluções 
            sustentáveis e eficientes.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-4 mx-auto"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, type: "spring" }}
                className="text-4xl font-bold text-primary-600 mb-2"
              >
                {stat.number}
              </motion.div>
              
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="card p-8 text-center h-full flex flex-col"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl flex items-center justify-center mb-6 mx-auto"
              >
                <value.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="flex items-start space-x-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center"
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-12 text-white">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Pronto para o próximo projeto?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
            >
              Entre em contato conosco e descubra como podemos transformar seu projeto 
              com nossas soluções especializadas em geossintéticos.
            </motion.p>
            
            <motion.a
              href="#contato"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-xl"
            >
              Fale Conosco
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}