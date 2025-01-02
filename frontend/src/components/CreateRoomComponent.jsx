import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { X, Globe, Lock, Users } from 'lucide-react'
import { Button } from '../components/ui/button'
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Label } from "../components/ui/label"
import { Switch } from "../components/ui/switch"

export default function CreateRoomComponent() {
  const [roomType, setRoomType] = useState('private')
  const [adminPermissions, setAdminPermissions] = useState(false)
  const navigate = useNavigate()

  const handleCreateRoom = () => {
    const roomId = Math.random().toString(36).substr(2, 9)
    console.log('Creating room:', { roomType, adminPermissions, roomId })
    navigate(`/room/${roomId}`)
  }

  return (
    <div className="min-h-screen bg-[#0a0118] flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md bg-gradient-to-b from-purple-900/90 to-indigo-900/90 rounded-2xl backdrop-blur-xl shadow-2xl p-6 relative"
      >
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-indigo-600 rounded-full p-4 shadow-lg">
          <Globe className="w-8 h-8 text-white" />
        </div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h1 className="text-3xl font-bold text-white mb-8 text-center mt-2">
          Create a Room
        </h1>

        <RadioGroup
          defaultValue={roomType}
          onValueChange={setRoomType}
          className="space-y-4 mb-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative rounded-xl p-4 cursor-pointer ${
              roomType === 'private'
                ? 'bg-purple-800/50 ring-2 ring-purple-400'
                : 'bg-purple-900/30 hover:bg-purple-800/40'
            }`}
          >
            <RadioGroupItem
              value="private"
              id="private"
              className="absolute right-4 top-4"
            />
            <Label htmlFor="private" className="cursor-pointer">
              <div className="flex items-start">
                <Lock className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Private</p>
                  <p className="text-gray-300 text-sm">
                    Not listed in the lobby. You can share a link to the room with your friends.
                    You can change this at any time.
                  </p>
                </div>
              </div>
            </Label>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative rounded-xl p-4 cursor-pointer ${
              roomType === 'public'
                ? 'bg-purple-800/50 ring-2 ring-purple-400'
                : 'bg-purple-900/30 hover:bg-purple-800/40'
            }`}
          >
            <RadioGroupItem
              value="public"
              id="public"
              className="absolute right-4 top-4"
            />
            <Label htmlFor="public" className="cursor-pointer">
              <div className="flex items-start">
                <Users className="w-5 h-5 text-purple-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white mb-1">Public</p>
                  <p className="text-gray-300 text-sm">
                    Listed in the lobby. People can request to join your room.
                    You can change this at any time.
                  </p>
                </div>
              </div>
            </Label>
          </motion.div>
        </RadioGroup>

        <div className="flex items-center justify-between py-4 px-1 mb-6">
          <Label htmlFor="admin-permissions" className="text-gray-300">
            Give new members admin permissions by default
          </Label>
          <Switch
            id="admin-permissions"
            checked={adminPermissions}
            onCheckedChange={setAdminPermissions}
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            onClick={handleCreateRoom}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-6 rounded-xl text-lg"
          >
            Create
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

