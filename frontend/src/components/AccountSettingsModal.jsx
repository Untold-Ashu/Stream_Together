import { X, Camera, User, Mail, Heart, Lock } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export default function AccountSettingsModal({ user, onClose, onLogout }) {
  const [displayName, setDisplayName] = useState(user?.displayName || '')
  const [email, setEmail] = useState(user?.email || '')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handlePasswordChange = (e) => {
    e.preventDefault()
    // Handle password change logic here
    console.log('Changing password:', { currentPassword, newPassword, confirmPassword })
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-purple-950/95 rounded-lg w-full max-w-xl p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-2">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user?.avatarUrl} />
              <AvatarFallback>
                {user?.displayName?.charAt(0) || '?'}
              </AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>
          <h3 className="text-xl font-bold text-white">{user?.displayName}</h3>
          <p className="text-gray-400">@{user?.username}</p>
        </div>

        <div className="space-y-4">
          {/* Avatar Section */}
          <button className="w-full bg-purple-900/50 hover:bg-purple-900/70 p-4 rounded-lg flex items-center justify-between text-white transition-colors">
            <div className="flex items-center space-x-3">
              <Camera className="w-6 h-6" />
              <span>Avatar</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-purple-800 flex items-center justify-center">
              😊
            </div>
          </button>

          {/* Display Name Section */}
          <button className="w-full bg-purple-900/50 hover:bg-purple-900/70 p-4 rounded-lg flex items-center justify-between text-white transition-colors">
            <div className="flex items-center space-x-3">
              <User className="w-6 h-6" />
              <span>Display name</span>
            </div>
            <span className="text-gray-400">{displayName}</span>
          </button>

          {/* Email Section */}
          <button className="w-full bg-purple-900/50 hover:bg-purple-900/70 p-4 rounded-lg flex items-center justify-between text-white transition-colors">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6" />
              <span>Email</span>
            </div>
            <span className="text-gray-400 text-sm truncate max-w-[200px]">
              {email}
            </span>
          </button>

          {/* Password Change Section */}
          <div className="w-full bg-purple-900/50 p-4 rounded-lg space-y-3">
            <div className="flex items-center space-x-3 mb-2">
              <Lock className="w-6 h-6 text-white" />
              <span className="text-white">Change Password</span>
            </div>
            <Input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="bg-purple-900/50 border-purple-800"
            />
            <Input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="bg-purple-900/50 border-purple-800"
            />
            <Input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-purple-900/50 border-purple-800"
            />
            <Button 
              onClick={handlePasswordChange}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              Change Password
            </Button>
          </div>

          {/* Premium Section */}
          <button className="w-full bg-purple-900/50 hover:bg-purple-900/70 p-4 rounded-lg flex items-center justify-between text-white transition-colors">
            <div className="flex items-center space-x-3">
              <Heart className="w-6 h-6 text-red-500" />
              <span>Kosmi Premium</span>
            </div>
          </button>

          {/* Logout Button */}
          <Button 
            onClick={onLogout}
            className="w-full bg-red-600 hover:bg-red-700 text-white"
          >
            Log out
          </Button>
        </div>
      </div>
    </div>
  )
}

