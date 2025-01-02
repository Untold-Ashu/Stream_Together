import { useParams } from 'react-router-dom'
import RoomComponent from '../components/RoomComponent'

export default function RoomPage() {
  const { id } = useParams()
  return <RoomComponent roomId={id} />
}

