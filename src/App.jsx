import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage';
import Footer from './Components/Footer';
import Driver from './profile/Driver';
import Students from './profile/Students';
import AboutPage from './Components/Aboutus';
import SafetyFeatures from './Components/Safety';
import LiveTracking from './Components/LiveTracking';
import Blog from './Components/Blog';
import Careers from './Components/Careers';
import HelpCentre from './Components/Help';
import ContactUs from './Components/Contactus';
import Pricing from './Components/Pricing';
import PrivacyPolicy from './Components/privacypolicy';
import TermsConditions from './Components/terms&conditions';
import RefundPolicy from './Components/RefundPolicy';
import Sitemap from './Components/Sitemap';
import NotFound from './Components/404Page';
function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/students" element={<Students />} />
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/safety' element={<SafetyFeatures/>}/>
            <Route path='/live-tracking' element={<LiveTracking/>}/>
            <Route path='/blogs' element={<Blog/>}/>
            <Route path='/careers' element={<Careers/>}/>
            <Route path='/help' element={<HelpCentre/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
            <Route path='/terms-conditions' element={<TermsConditions/>}/>
            <Route path='/refund-policy' element={<RefundPolicy/>}/>
            <Route path='/sitemap' element={<Sitemap/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
