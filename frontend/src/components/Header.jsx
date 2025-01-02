import { Link } from 'react-router-dom'
import { Film } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Film className="w-8 h-8 text-purple-500" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            MovieParty
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full transition-colors">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors">
              Sign Up
            </button>
          </Link>
          <Link to="/create-room">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors">
              Create Room
            </button>
          </Link>
        </div>
      </div>
    </header>
  )
}

