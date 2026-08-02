import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingButtons from './FloatingButtons'
import ScrollToTop from './ScrollToTop'
import LoadingScreen from './LoadingScreen'
import Newsletter from '../ui/Newsletter'

export default function Layout() {
  return (
    <>
      <LoadingScreen />
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
      <FloatingButtons />
    </>
  )
}
