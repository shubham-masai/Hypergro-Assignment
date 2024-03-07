import { Route, Routes } from 'react-router-dom'
import Hero from '../Pages/Hero'
import Player from '../Pages/Player'

const AllRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path="/video/:id" element={<Player />} />
        </Routes>
    )
}
export default AllRoutes