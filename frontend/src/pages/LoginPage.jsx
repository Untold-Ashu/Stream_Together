import LoginForm from '../components/LoginForm'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center px-4">
      <Link to="/" className="absolute top-4 left-4 text-white hover:text-purple-400 transition-colors flex items-center">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Home
      </Link>
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Login to MovieParty</h1>
        <LoginForm />
        <p className="mt-4 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-400 hover:text-purple-300">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

