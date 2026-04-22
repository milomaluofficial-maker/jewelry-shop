import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import CustomOrder from './components/CustomOrder'
import About from './components/About'
import Footer from './components/Footer'
import Cart from './components/Cart'

export default function Home() {
  return (
    <>
      <Navbar />
      <Cart />
      <main>
        <Hero />
        <ProductShowcase />
        <CustomOrder />
        <About />
      </main>
      <Footer />
    </>
  )
}
