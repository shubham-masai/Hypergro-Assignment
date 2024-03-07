import Navbar from './components/Navbar'
import AllRoutes from './components/AllRoutes'

const App: React.FC = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className='sm:px-16 px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
          <AllRoutes/>
        </div>
      </div>
    </div>
  )
}

export default App