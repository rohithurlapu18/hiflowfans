import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'

import Home from '../pages/Home/Home'
import AboutUs from '../pages/AboutUs/AboutUs'
import Products from '../pages/Products/Products'
import Services from '../pages/Services/Services'
import Industries from '../pages/Industries/Industries'
import ClientProfile from '../pages/ClientProfile/ClientProfile'
import TechnicalSupport from '../pages/TechnicalSupport/TechnicalSupport'
import Gallery from '../pages/Gallery/Gallery'
import Quality from '../pages/Quality/Quality'
import ContactUs from '../pages/ContactUs/ContactUs'
import RequestQuote from '../pages/RequestQuote/RequestQuote'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/industries' element={<Industries />} />
        <Route path='/client-profile' element={<ClientProfile />} />
        <Route path='/technical-support' element={<TechnicalSupport />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/quality' element={<Quality />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/request-quote' element={<RequestQuote />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default AppRoutes