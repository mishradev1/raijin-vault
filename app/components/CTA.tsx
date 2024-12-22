'use client'

import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-white"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Supercharge Your Student Life?</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Join thousands of students who are already benefiting from our AI-powered tools.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 rounded-full text-xl font-semibold hover:bg-blue-100 transition-colors">
          Get Started for Free
        </button>
      </motion.div>
    </section>
  )
}

