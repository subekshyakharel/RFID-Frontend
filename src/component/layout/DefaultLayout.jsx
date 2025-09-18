import { Outlet } from 'react-router-dom'

const DefaultLayout = ({children}) => {
  return (
    <>


     <main className='main'>
        <Outlet/>
     </main>


    </>
  )
}

export default DefaultLayout