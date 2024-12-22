'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaBolt, FaStar, FaCloud, FaCheckCircle } from 'react-icons/fa'

const FloatingShape = ({ Icon, className }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
  >
    <Icon className="text-4xl opacity-20" />
  </motion.div>
)

const BackgroundPattern = ({ color }) => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
)

interface FeatureSectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse: boolean
  benefits: string[]
}

export default function FeatureSection({ title, description, imageSrc, imageAlt, reverse, benefits }: FeatureSectionProps) {
  const bgColor = reverse ? 'bg-purple-50' : 'bg-blue-50'
  const textColor = reverse ? 'text-purple-600' : 'text-blue-600'
  const buttonBgColor = reverse ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'
  const patternColor = reverse ? 'rgba(147, 51, 234, 0.1)' : 'rgba(59, 130, 246, 0.1)'

  return (
    <section className={`relative min-h-screen flex items-center justify-center px-4 ${bgColor} overflow-hidden`}>
      <BackgroundPattern color={patternColor} />
      
      <FloatingShape Icon={FaBolt} className={`top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 ${textColor}`} />
      <FloatingShape Icon={FaStar} className={`top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2 ${textColor}`} />
      <FloatingShape Icon={FaCloud} className={`bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2 ${textColor}`} />
      <FloatingShape Icon={FaBolt} className={`bottom-1/3 right-1/3 transform translate-x-1/2 translate-y-1/2 ${textColor}`} />

      <div className={`container mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center z-10 gap-12`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 bg-white bg-opacity-90 p-8 rounded-lg shadow-xl"
        >
          <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>{title}</h2>
          <p className="text-xl mb-6 text-gray-700">{description}</p>
          <ul className="mb-8">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center mb-2"
              >
                <FaCheckCircle className={`mr-2 ${textColor}`} />
                <span className="text-gray-700">{benefit}</span>
              </motion.li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full text-white font-semibold ${buttonBgColor} transition duration-300`}
          >
            Try it now
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="relative">
            <Image src={imageSrc} alt={imageAlt} width={500} height={500} className="w-full h-auto rounded-xl shadow-lg" />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg ${textColor}`}
            >
              <span className="text-2xl font-bold">100+</span>
              <span className="block text-sm">Rands Available</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}