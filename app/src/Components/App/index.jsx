
import { Catalog } from '../Catalog';
import { Discount } from '../Discount';
import { Header } from '../Header';
import { SaleSeason } from '../SaleSeason';
import style from './style.module.scss';


function App() {
  return (
    <div className={style.App}>
      <Header />
      <SaleSeason />
      <Catalog />
      <Discount/>
    </div>
  );
}

export default App;
