import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Watch Movies Together, Anywhere
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Create private or public rooms, enjoy movies with friends, and customize your experience. It's movie night, reimagined.
        </p>
        <button 
          onClick={() => navigate('/create-room')}
          className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-3 rounded-full transition-colors inline-flex items-center space-x-2"
        >
          <span>Create a Room</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-16 flex justify-center">
        <MovieIllustration />
      </div>
    </section>
  )
}

function MovieIllustration() {
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/placeholder.svg?height=480&width=640"
      >
        <source src="/placeholder.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      <div className="absolute bottom-4 left-4 right-4 text-white text-center">
        <p className="text-lg font-semibold">Experience movie nights with friends, virtually!</p>
      </div>
    </div>
  )
}

