
import './App.css'
import Banner from './Components/Banner/Banner'
import UserCount from './Components/Banner/UserCount'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar/Navbar'
import PricingCard from './Components/PricingCard'
import StepsCard from './Components/StepsCard'
import Workflow from './Components/Workflow'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <UserCount></UserCount>
    <StepsCard></StepsCard>
    <PricingCard></PricingCard>
    <Workflow></Workflow>
    <Footer></Footer>
    
    </>
  )
}

export default App
