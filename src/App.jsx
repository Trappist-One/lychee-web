import {RouterProvider} from 'react-router-dom'
import router from './routes'

function App() {
  return (
    <div className='overflow-y-scroll no-scrollbar h-screen w-full min-w-full'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
