import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Layers, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { 
      name: 'Sobre', 
      href: '#sobre',
      dropdown: [
        { name: 'Nossa História', href: '#historia' },
        { name: 'Missão e Visão', href: '#missao' },
        { name: 'Equipe', href: '#equipe' }
      ]
    },
    { 
      name: 'Serviços', 
      href: '#servicos',
      dropdown: [
        { name: 'Drenagem', href: '#drenagem' },
        { name: 'Geossintéticos', href: '#geossinteticos' },
        { name: 'Consultoria', href: '#consultoria' },
        { name: 'Projetos', href: '#projetos' }
      ]
    },
    { name: 'Contato', href: '#contato' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-primary-600' : 'bg-white/20 backdrop-blur-sm'}`}>
              <Layers className={`h-8 w-8 ${isScrolled ? 'text-white' : 'text-primary-600'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Geobras
              </span>
              <span className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Geossintéticos
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className={`flex items-center space-x-1 text-base font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary-600' 
                      : 'text-white hover:text-accent-300'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
                
                {item.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: activeDropdown === item.name ? 1 : 0,
                      y: activeDropdown === item.name ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                    className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border ${
                      activeDropdown === item.name ? 'block' : 'hidden'
                    }`}
                  >
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300 first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn-primary ${
                isScrolled 
                  ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                  : 'bg-white text-primary-600 hover:bg-gray-100'
              }`}
            >
              Solicitar Orçamento
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white rounded-lg shadow-xl mt-2"
        >
          <nav className="py-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() => item.dropdown && toggleDropdown(item.name)}
                  className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-300"
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>
                
                {item.dropdown && activeDropdown === item.name && (
                  <div className="bg-gray-50">
                    {item.dropdown.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className="block px-10 py-2 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-6 pt-4">
              <a
                href="#contato"
                className="btn-primary w-full text-center block"
              >
                Solicitar Orçamento
              </a>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}