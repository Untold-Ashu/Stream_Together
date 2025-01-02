import { useState } from 'react'
import { Palette } from 'lucide-react'

const themes = [
  { name: 'Midnight', primary: 'bg-purple-600', secondary: 'bg-indigo-600' },
  { name: 'Sunset', primary: 'bg-orange-500', secondary: 'bg-pink-500' },
  { name: 'Forest', primary: 'bg-green-600', secondary: 'bg-teal-600' },
  { name: 'Ocean', primary: 'bg-blue-600', secondary: 'bg-cyan-600' },
]

export default function Customization() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0])

  return (
    <section id="customize" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Customize Your Experience</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 max-w-md">
            <h3 className="text-2xl font-semibold mb-4">Choose Your Theme</h3>
            <div className="grid grid-cols-2 gap-4">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  className={`p-4 rounded-lg flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 ${
                    selectedTheme.name === theme.name ? 'ring-2 ring-white' : ''
                  }`}
                  onClick={() => setSelectedTheme(theme)}
                >
                  <div className={`w-6 h-6 rounded-full ${theme.primary}`}></div>
                  <div className={`w-6 h-6 rounded-full ${theme.secondary}`}></div>
                  <span>{theme.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <div
              className={`p-6 rounded-lg shadow-lg ${selectedTheme.primary} bg-opacity-20 border-2 ${selectedTheme.primary} border-opacity-50`}
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Palette className="w-6 h-6 mr-2" />
                Preview: {selectedTheme.name}
              </h3>
              <p className="mb-4">This is how your room will look with the selected theme.</p>
              <div className={`w-full h-32 rounded-lg ${selectedTheme.secondary} bg-opacity-50 flex items-center justify-center`}>
                <span className="text-xl font-semibold">Your Movie Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

