import React from 'react'
import { motion } from 'framer-motion'
import { 
  Droplets, 
  Layers, 
  Settings, 
  FileText, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Wrench,
  MapPin,
  Clock,
  Users
} from 'lucide-react'

export default function Services() {
  const mainServices = [
    {
      icon: Droplets,
      title: 'Sistemas de Drenagem',
      description: 'Soluções completas para drenagem urbana, rodoviária e industrial com geossintéticos de alta performance.',
      features: [
        'Drenagem de águas pluviais',
        'Sistemas de infiltração',
        'Drenagem de fundações',
        'Controle de erosão'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Layers,
      title: 'Geossintéticos Técnicos',
      description: 'Fornecimento e instalação de geomembranas, geotêxteis e geocompostos para diversas aplicações.',
      features: [
        'Geomembranas PEAD',
        'Geotêxteis não tecidos',
        'Geocompostos drenantes',
        'Mantas bentoníticas'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Settings,
      title: 'Consultoria Especializada',
      description: 'Consultoria técnica em geotecnia e soluções personalizadas para projetos complexos.',
      features: [
        'Análise de solo',
        'Dimensionamento técnico',
        'Especificação de materiais',
        'Acompanhamento de obras'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Projetos Executivos',
      description: 'Desenvolvimento de projetos detalhados com memorial descritivo e especificações técnicas.',
      features: [
        'Projetos de drenagem',
        'Especificações técnicas',
        'Memorial de cálculo',
        'Desenhos executivos'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const additionalServices = [
    {
      icon: Wrench,
      title: 'Instalação e Manutenção',
      description: 'Equipe técnica especializada para instalação e manutenção de sistemas'
    },
    {
      icon: MapPin,
      title: 'Atendimento Nacional',
      description: 'Cobertura em todo território nacional com equipe própria'
    },
    {
      icon: Clock,
      title: 'Entregas Programadas',
      description: 'Cronograma de entregas respeitado com logística própria'
    },
    {
      icon: Users,
      title: 'Suporte Técnico',
      description: 'Acompanhamento técnico especializado em todas as etapas'
    }
  ]

  const benefits = [
    'Redução de custos operacionais',
    'Maior durabilidade das estruturas',
    'Sustentabilidade ambiental',
    'Facilidade de instalação',
    'Resistência a intempéries',
    'Conformidade com normas técnicas'
  ]

  return (
    <section id="servicos" className="section-padding bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-primary-200/30 to-accent-200/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-accent-200/30 to-primary-200/30 rounded-full blur-xl"
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
            Nossos Serviços
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Soluções{' '}
            <span className="text-gradient">Completas</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Oferecemos um portfólio completo de serviços especializados em geossintéticos 
            e drenagem, desde o projeto até a execução e manutenção.
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="card p-8 h-full flex flex-col group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:shadow-2xl transition-all duration-300`}
              >
                <service.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 mt-auto"
              >
                <span>Saiba Mais</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-4 mx-auto"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-accent-500 rounded-3xl p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Benefícios dos Nossos Serviços
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl opacity-90 mb-8"
              >
                Nossos serviços proporcionam vantagens significativas para seus projetos
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
                Solicitar Proposta
              </motion.a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <Shield className="w-5 h-5 text-accent-300 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Precisa de uma solução personalizada?
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Nossa equipe de especialistas está pronta para desenvolver a solução 
            ideal para o seu projeto específico.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Falar com Especialista
            </motion.a>
            
            <motion.a
              href="https://wa.me/5544991040774"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
            >
              WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}