import { Film, Users, Palette, Lock } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Film className="w-12 h-12 text-purple-500" />}
            title="Watch Together"
            description="Synchronize movies with friends and chat in real-time."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-green-500" />}
            title="Public & Private Rooms"
            description="Create open rooms or invite-only spaces for your movie nights."
          />
          <FeatureCard
            icon={<Palette className="w-12 h-12 text-pink-500" />}
            title="Customizable Themes"
            description="Personalize your room with various themes and styles."
          />
          <FeatureCard
            icon={<Lock className="w-12 h-12 text-yellow-500" />}
            title="Secure & Private"
            description="Your data and conversations are always protected."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

