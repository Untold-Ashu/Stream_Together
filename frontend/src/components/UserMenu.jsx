import { Settings, LogOut, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function UserMenu({ user, onOpenAccountSettings, onOpenAppSettings, onLogout }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="focus:outline-none">
          <Avatar className="w-8 h-8 ring-2 ring-purple-500 hover:ring-purple-400 transition-colors">
            <AvatarImage src={user?.avatarUrl} />
            <AvatarFallback>{user?.displayName?.charAt(0) || '?'}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-purple-950/95 border-purple-800">
        <DropdownMenuItem 
          className="flex items-center space-x-2 text-gray-200 focus:text-white focus:bg-purple-900/50"
          onClick={onOpenAccountSettings}
        >
          <User className="w-4 h-4" />
          <span>Account Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center space-x-2 text-gray-200 focus:text-white focus:bg-purple-900/50"
          onClick={onOpenAppSettings}
        >
          <Settings className="w-4 h-4" />
          <span>App Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center space-x-2 text-gray-200 focus:text-white focus:bg-purple-900/50"
          onClick={onLogout}
        >
          <LogOut className="w-4 h-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

