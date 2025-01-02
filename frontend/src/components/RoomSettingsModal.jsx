import { X, Edit2, Palette, Eye, Shield, ChevronRight, Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Switch } from './ui/switch'

export default function RoomSettingsModal({ roomName, onClose }) {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-purple-950/95 rounded-lg w-full max-w-xl p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Room Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          {/* Avatar Section */}
          <button className="w-full bg-purple-900/50 hover:bg-purple-900/70 p-4 rounded-lg flex items-center justify-between text-white transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6">👤</div>
              <span>Avatar</span>
            </div>
            <div className="flex items-center space-x-3">
              <Switch
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-purple-600"
              />
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </button>

          {/* Room Name Section */}
          <button className="w-full bg-purple-900/50 hover:bg-purple-900/70 p-4 rounded-lg flex items-center justify-between text-white transition-colors">
            <div className="flex items-center space-x-3">
              <Edit2 className="w-6 h-6" />
              <span>Room name</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-sm truncate max-w-[200px]">
                {roomName}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </button>

          {/* Appearance Section */}
          <button className="w-full bg-purple-900/50 hover:bg-purple-900/70 p-4 rounded-lg flex items-center justify-between text-white transition-colors">
            <div className="flex items-center space-x-3">
              <Palette className="w-6 h-6" />
              <span>Appearance</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          {/* Visibility Section */}
          <button className="w-full bg-purple-900/50 hover:bg-purple-900/70 p-4 rounded-lg flex items-center justify-between text-white transition-colors">
            <div className="flex items-center space-x-3">
              <Eye className="w-6 h-6" />
              <span>Visibility</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-400">Private</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </button>

          {/* Security Section */}
          <button className="w-full bg-purple-900/50 hover:bg-purple-900/70 p-4 rounded-lg flex items-center justify-between text-white transition-colors">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6" />
              <span>Security</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  )
}

