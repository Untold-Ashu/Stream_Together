import { useParams } from 'react-router-dom'
import VirtualRoom from '../components/VirtualRoom'

export default function VirtualRoomPage() {
  const { id } = useParams()
  return <VirtualRoom roomId={id} />
}

