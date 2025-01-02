import { Film, Twitter, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <Film className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold">MovieParty</span>
            </div>
            <p className="mt-2 text-gray-400">Watch together, have fun together.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Twitter />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Facebook />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2023 MovieParty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

