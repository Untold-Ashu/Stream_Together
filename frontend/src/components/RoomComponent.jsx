import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Plus, Bell, Settings, Users, MessageSquare, Mic, Video, Monitor, Search } from 'lucide-react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Input } from './ui/input'

export default function RoomComponent({ roomId }) {
  const navigate = useNavigate()
  const [showCreateRoom, setShowCreateRoom] = useState(false)
  const [virtualMode, setVirtualMode] = useState(false)

  return (
    <div className="h-screen bg-[#0a0118] flex">
      {/* Left Sidebar */}
      <div className="w-16 bg-purple-900/50 border-r border-purple-800/50 flex flex-col items-center py-4">
        <Button variant="ghost" className="rounded-full p-2 mb-4">
          <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="w-8 h-8" />
        </Button>
        <Button variant="ghost" className="rounded-full p-2">
          <Bell className="w-5 h-5 text-gray-300" />
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="h-14 bg-purple-900/30 border-b border-purple-800/50 flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <Input
              placeholder="Search"
              className="w-64 bg-purple-900/50 border-purple-700"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Users className="w-5 h-5" />
            </Button>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Room Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Create Room Button */}
            <Button
              onClick={() => setShowCreateRoom(true)}
              className="mb-4 bg-purple-700 hover:bg-purple-600 text-white"
            >
              <Plus className="w-4 h-4 mr-2" /> Create a room
            </Button>

            {/* Virtual Room Mode */}
            <div className="bg-purple-900/30 rounded-lg p-8 text-center mb-8">
              <Button
                onClick={() => navigate(`/room/${roomId}/virtual`)}
                className="bg-purple-700 hover:bg-purple-600 text-white"
              >
                <Monitor className="w-4 h-4 mr-2" />
                Enter Virtual Room
              </Button>
            </div>

            {/* Activity Cards */}
            <div className="grid grid-cols-3 gap-6">
              <ActivityCard
                icon="▶️"
                title="Watch party"
                onClick={() => console.log('Watch party')}
              />
              <ActivityCard
                icon="🎮"
                title="Games"
                onClick={() => console.log('Games')}
              />
              <ActivityCard
                icon="🎉"
                title="Other Activities"
                onClick={() => console.log('Other activities')}
              />
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="h-16 bg-purple-900/30 border-t border-purple-800/50 px-4 flex items-center">
          <Input
            placeholder="Type a message..."
            className="flex-1 bg-purple-900/50 border-purple-700"
          />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 bg-purple-900/50 border-l border-purple-800/50 p-4">
        <Button className="w-full mb-4 bg-purple-700 hover:bg-purple-600 text-white">
          Invite friends
        </Button>

        <div className="flex justify-center space-x-2 mb-6">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Video className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mic className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-2">
          <ParticipantVideo
            name="User 1"
            avatarUrl="/placeholder.svg?height=160&width=160"
          />
          <ParticipantVideo
            name="User 2"
            avatarUrl="/placeholder.svg?height=160&width=160"
          />
        </div>
      </div>
    </div>
  )
}

function ActivityCard({ icon, title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-purple-900/30 hover:bg-purple-800/40 rounded-lg p-6 text-center transition-colors"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-white font-medium">{title}</div>
    </button>
  )
}

function ParticipantVideo({ name, avatarUrl }) {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden bg-purple-900/30">
      <img
        src={avatarUrl}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
        <span className="text-sm text-white">{name}</span>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Mic className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

