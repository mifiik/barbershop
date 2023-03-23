import './main.css'
import MainBarbers from './MainBarbers'
import MainBook from './MainBook'
import MainDiscount from './MainDiscount'
import MainHeader from './MainHeader'
import MainInformation from './MainInformation'
import MainMap from './MainMap'
import MainPriceList from './MainPriceList'
import MainSayHello from './MainSayHello'
import MainService from './MainService'

function Main() {
   return (
      <>
         <MainHeader />
         <MainBarbers />
         <MainDiscount />
         <MainService />
         <MainBook />
         <MainPriceList />
         <MainSayHello />
         <MainInformation />
         <MainMap />
      </>
   )
}
export default Main