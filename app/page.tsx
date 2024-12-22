import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-200">
      <Hero />
      <FeatureSection
        title="Talk with PDF"
        description="Interact with your PDF documents using AI. Ask questions, get summaries, and extract key information effortlessly."
        imageSrc="/pdf-chat.png"
        imageAlt="Talk with PDF Illustration"
        reverse={false}
        benefits={[
          "Instant answers from your documents",
          "Summarize lengthy PDFs in seconds",
          "Extract key information with ease",
          "Improve study efficiency and comprehension"
        ]}
      />
      <FeatureSection
        title="AI Resume Builder"
        description="Create professional resumes tailored to your skills and experience with the power of AI. Stand out from the crowd and land your dream job."
        imageSrc="/placeholder.svg?height=500&width=500&text=AI+Resume+Builder"
        imageAlt="AI Resume Builder Illustration"
        reverse={true}
        benefits={[
          "Tailored resumes for specific job roles",
          "AI-powered content suggestions",
          "Professional templates and designs",
          "Increase your chances of landing interviews"
        ]}
      />

    </main>
  )
}

