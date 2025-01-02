import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function RoomDemo() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  return (
    <section id="rooms" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience Our Rooms</h2>
        <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <div className="flex justify-between items-center p-4 bg-gray-800">
            <span className="text-lg font-semibold">Movie Night with Friends</span>
            <button
              onClick={() => setIsDarkTheme(!isDarkTheme)}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
            >
              {isDarkTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <div className={`p-6 ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-100 text-gray-900'}`}>
            <div className="aspect-video bg-gray-800 rounded-lg mb-4"></div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Now Playing: Interstellar</h3>
                <p className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-700'}`}>
                  Join the discussion about this mind-bending space odyssey!
                </p>
              </div>
              <div className="w-1-3 bg-gray-800 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-white">Chat</h4>
                <div className="space-y-2">
                  <ChatMessage name="Alice" message="This movie is amazing!" />
                  <ChatMessage name="Bob" message="The visuals are stunning!" />
                  <ChatMessage name="Charlie" message="I'm confused, but in a good way." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChatMessage({ name, message }) {
  return (
    <div className="bg-gray-700 rounded p-2">
      <span className="font-semibold text-purple-400">{name}: </span>
      <span className="text-gray-300">{message}</span>
    </div>
  )
}

