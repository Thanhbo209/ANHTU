
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import ServiceDetail from './component/ServiceDetail';
import MainPage from './component/MainPage';
import WebsiteDesigner from './component/WebsiteDesigner';
import Contact from './component/Contact.jsx';
import ServicesSection from './component/ServicesSection.jsx';


function App() {
  return (
    <div className="App">
<Navbar/>
<Routes>
<Route path="/chi-tiet" element={<ServicesSection />}/>
<Route index="/" element={<MainPage />}/>
<Route path="/trang-chu" element={<MainPage />}/>
<Route path="/thiet-ke-trang-web" element={<WebsiteDesigner />}/>
<Route path="/lien-he" element={<Contact />}/>
<Route path="/:serviceName" element={<ServiceDetail />} />
</Routes>
    </div>
  );
}

export default App;
