'use client'

import { motion } from 'framer-motion'
import { FaBook, FaFileAlt, FaBolt, FaStar, FaCloud } from 'react-icons/fa'

const FloatingShape = ({ Icon, className }: { Icon: React.ElementType, className: string }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
  >
    <Icon className="text-4xl text-purple-400 opacity-50" />
  </motion.div>
)

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(107, 114, 128, 0.1)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
)

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      <BackgroundPattern />
      
      <FloatingShape Icon={FaBolt} className="top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />
      <FloatingShape Icon={FaStar} className="top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2" />
      <FloatingShape Icon={FaCloud} className="bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2" />
      <FloatingShape Icon={FaBolt} className="bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-white bg-opacity-90 p-16 rounded-[16px] shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[30px] md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Community Nexus 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-2xl"
        >
          Empowering students with AI-driven tools for academic success and career preparation
        </motion.p>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-md"
          >
            <FaBook className="text-5xl text-blue-600 mb-2" />
            <span className="text-lg font-semibold">Talk with PDF</span>
            <p className="mt-2 text-sm text-gray-600">Interact with your documents using AI</p>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center bg-purple-100 p-6 rounded-lg shadow-md"
          >
            <FaFileAlt className="text-5xl text-purple-600 mb-2" />
            <span className="text-lg font-semibold">AI Resume Builder</span>
            <p className="mt-2 text-sm text-gray-600">Create standout resumes with AI assistance</p>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}