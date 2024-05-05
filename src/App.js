import Header from "./components/header/Header"; 
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Banner from "./components/banner/Banner";
import Favourite from "./components/favourite/Favourite";
import Vouchers from "./components/vouchers/Vouchers";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footer";

function App() {
  
  return (
    <div className="App">
      
      <Header/>
      <Promo/>
      <Brands/>
      <Arrivals/>
      <Banner/>
      <Favourite/>
      <Vouchers/>
      <Community/>
      <Footer/>
    </div>
  );
}

export default App;
