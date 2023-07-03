
//import { Catalog } from '../Catalog';
//import { Discount } from '../Discount';
import { Header } from '../Header';
//import { SaleSeason } from '../SaleSeason';
//import {Sale} from '../Sale'
import style from './style.module.scss';
import { Outlet } from 'react-router';


function App() {
  return (
    <div className={style.App}>
      <Header />
      <Outlet />
      
      {/*<SaleSeason />
      <Catalog />
      <Discount/>
  <Sale />*/}
      
    </div>
  );
}

export default App;
