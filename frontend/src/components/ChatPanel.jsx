import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Video, Mic, Users, Image, Smile, MessageSquare } from 'lucide-react'
import { cn } from '../lib/utils'

export default function ChatPanel({ isOpen, onClose, onToggle }) {
  const [message, setMessage] = useState('')
  const [participantCount] = useState(1)

  return (
    <>
      <button
        onClick={onToggle}
        className="fixed right-4 bottom-4 z-50 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
      <div 
        className={cn(
          "fixed right-0 top-0 bottom-0 w-80 bg-purple-950/95 transform transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4">
          <div className="text-sm text-gray-400 mb-4">Room menu</div>
          
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700 mb-4"
          >
            <Users className="w-4 h-4 mr-2" />
            Invite friends
          </Button>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <Button 
              variant="secondary" 
              className="w-full bg-purple-800/50 hover:bg-purple-700/50"
            >
              <Video className="w-4 h-4" />
            </Button>
            <Button 
              variant="secondary"
              className="w-full bg-purple-800/50 hover:bg-purple-700/50"
            >
              <Mic className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between py-2 border-t border-purple-800">
            <button className="text-purple-400 hover:text-purple-300">
              💬
            </button>
            <div className="flex items-center space-x-1 text-purple-400">
              <Users className="w-4 h-4" />
              <span>{participantCount}</span>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto px-4">
          {/* Chat messages would go here */}
        </div>

        {/* Input Area */}
        <div className="p-4 mt-auto border-t border-purple-800">
          <div className="flex items-center space-x-2">
            <div className="flex-1 flex items-center bg-purple-900/50 rounded-lg px-3 py-2">
              <span className="text-gray-400 text-lg">Aa</span>
              <div className="ml-auto flex items-center space-x-2">
                <button className="text-purple-400 hover:text-purple-300">
                  <Image className="w-5 h-5" />
                </button>
                <button className="text-purple-400 hover:text-purple-300">
                  <Smile className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

