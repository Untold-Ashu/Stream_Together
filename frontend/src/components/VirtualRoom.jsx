import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from './ui/button'
import { Slider } from './ui/slider'
import { Settings, Video, Users, MessageSquare, Mic, Music, Upload, Monitor, LogOut } from 'lucide-react'
import { Input } from './ui/input'
import RoomSettingsModal from './RoomSettingsModal'
import AccountSettingsModal from './AccountSettingsModal'
import UserMenu from './UserMenu'
import ChatPanel from './ChatPanel'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useToast } from "./ui/use-toast"

// Mock user data - replace with real data in production
const mockUser = {
  displayName: "ashugoswami224",
  username: "ashugoswami224",
  email: "mipahop743@rust...",
  avatarUrl: "/placeholder.svg?height=32&width=32"
}

const defaultStyle = {
  wallColor: 'bg-purple-900',
  accentColor: 'bg-pink-500',
  sofaColor: 'bg-red-600',
  speakerStyle: 'rounded-lg'
}

export default function VirtualRoom() {
  const navigate = useNavigate()
  const { id: roomId } = useParams()
  const { toast } = useToast()
  const [showRoomSettings, setShowRoomSettings] = useState(false)
  const [showAccountSettings, setShowAccountSettings] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [roomStyle, setRoomStyle] = useState(defaultStyle)
  const [ambientLight, setAmbientLight] = useState(70)
  const [videoSource, setVideoSource] = useState(null)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/login')
  }

  const handleCustomize = () => {
    if (!isSubscribed) {
      toast({
        title: "Subscription Required",
        description: "Please subscribe to customize room themes.",
        variant: "destructive",
      })
      return
    }
    setShowRoomSettings(true)
  }

  const handleSubscribe = () => {
    // Here you would typically handle the subscription process
    setIsSubscribed(true)
    toast({
      title: "Subscribed!",
      description: "You now have access to all premium features.",
    })
  }

  const handleSelectTheme = (newStyle) => {
    setRoomStyle({ ...roomStyle, ...newStyle })
    setShowRoomSettings(false)
  }

  return (
    <div className="h-screen bg-black flex">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="h-14 bg-purple-900/30 border-b border-purple-800/50 flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg?height=32&width=32" alt="Logo" className="w-8 h-8" />
            <span className="text-purple-300">Virtual Room</span>
          </div>
          <div className="flex items-center space-x-4">
            <UserMenu 
              user={mockUser}
              onOpenAccountSettings={() => setShowAccountSettings(true)}
              onOpenAppSettings={() => {}}
              onLogout={handleLogout}
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings className="w-5 h-5 text-purple-300" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-purple-950/95 border-purple-800">
                <DropdownMenuItem 
                  className="flex items-center space-x-2 text-gray-200 focus:text-white focus:bg-purple-900/50"
                  onClick={() => setShowRoomSettings(true)}
                >
                  <Settings className="w-4 h-4" />
                  <span>Room Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="flex items-center space-x-2 text-gray-200 focus:text-white focus:bg-purple-900/50"
                  onClick={() => navigate(`/room/${roomId}`)}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Leave Room</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Virtual Room Content */}
        <div className="flex-1 relative overflow-hidden">
          {/* Room Container */}
          <div 
            className={`w-full h-full relative perspective-1000 ${roomStyle.wallColor} transition-colors duration-500`}
          >
            {/* Ambient Lighting Effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent"
              style={{ opacity: ambientLight / 100 }}
            />

            {/* Left Wall */}
            <div className="absolute left-0 top-0 h-full w-1/6 bg-gradient-to-r from-black/30 to-transparent transform -skew-x-12" />

            {/* Right Wall */}
            <div className="absolute right-0 top-0 h-full w-1/6 bg-gradient-to-l from-black/30 to-transparent transform skew-x-12" />

            {/* TV Screen */}
            <div className="absolute top-[10%] left-[15%] right-[15%] h-[50%] bg-black rounded-lg shadow-2xl overflow-hidden">
              {videoSource ? (
                <video
                  className="w-full h-full object-cover"
                  src={videoSource}
                  controls
                  autoPlay
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                  <div className="text-center space-y-4">
                    <Monitor className="w-12 h-12 mx-auto text-gray-600" />
                    <Button 
                      onClick={() => document.getElementById('video-upload').click()}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Load a video
                    </Button>
                    <input
                      id="video-upload"
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          setVideoSource(URL.createObjectURL(file))
                        }
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sofa */}
            <div className={`absolute bottom-[15%] left-[25%] right-[25%] h-[20%] ${roomStyle.sofaColor} rounded-t-full shadow-2xl transition-colors duration-500`}>
              <div className="absolute inset-x-[10%] top-[10%] h-[20%] bg-black/20 rounded-full blur-sm" />
            </div>

            {/* Speakers */}
            <div className="absolute bottom-[20%] left-[10%] w-[8%] h-[40%] flex flex-col justify-between">
              <div className={`w-full h-[45%] ${roomStyle.accentColor} ${roomStyle.speakerStyle} shadow-lg transition-all duration-500`} />
              <div className={`w-full h-[45%] ${roomStyle.accentColor} ${roomStyle.speakerStyle} shadow-lg transition-all duration-500`} />
            </div>
            <div className="absolute bottom-[20%] right-[10%] w-[8%] h-[40%] flex flex-col justify-between">
              <div className={`w-full h-[45%] ${roomStyle.accentColor} ${roomStyle.speakerStyle} shadow-lg transition-all duration-500`} />
              <div className={`w-full h-[45%] ${roomStyle.accentColor} ${roomStyle.speakerStyle} shadow-lg transition-all duration-500`} />
            </div>
          </div>

          {/* Room Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-purple-300">
                <span>Ambient Light</span>
                <Slider
                  value={[ambientLight]}
                  onValueChange={([value]) => setAmbientLight(value)}
                  max={100}
                  step={1}
                  className="w-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Panel */}
      <ChatPanel isOpen={showChat} onToggle={() => setShowChat(!showChat)} />

      {/* Modals */}
      {showRoomSettings && (
        <RoomSettingsModal
          roomName="ashugoswami224's room"
          onClose={() => setShowRoomSettings(false)}
          onSelectTheme={handleSelectTheme}
        />
      )}
      {showAccountSettings && (
        <AccountSettingsModal
          user={mockUser}
          onClose={() => setShowAccountSettings(false)}
          onLogout={handleLogout}
        />
      )}
    </div>
  )
}

