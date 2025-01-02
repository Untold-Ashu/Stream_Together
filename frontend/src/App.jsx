import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CreateRoomPage from './pages/CreateRoomPage'
import RoomPage from './pages/RoomPage'
import VirtualRoomPage from './pages/VirtualRoomPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/create-room" element={<CreateRoomPage />} />
      <Route path="/room/:id" element={<RoomPage />} />
      <Route path="/room/:id/virtual" element={<VirtualRoomPage />} />
    </Routes>
  )
}

export default App

