import './App.scss';
import 'bootstrap';


import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import WhyChoosUs from './components/whychooseus/WhyChooseUs';
import Announcement from './components/announcement/Announcement';
import Advantages from './components/advantages/Advantages';
import Assistance from './components/assistances/Assistance';
import Countries from './components/countries/Countries';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <h1 className="display-1">Hello World</h1>
      <Navbar />
      <Hero />
      <WhyChoosUs />
      <Announcement />
      <Advantages />
      <Assistance />
      <Countries />
      <Footer />
    </div>
  );
}

export default App;
