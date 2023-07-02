import st from './style.module.scss'
import { NavLink } from 'react-router-dom'


const logo = "./Images/logo.png"

const bag = "./Images/icons8-shopping_bag 1.svg"

export const Header = () => {
    

    return (
        <div className={st.container}>

            <div className={st.logoWrapper}>

                <a href="#"> <img className={st.logo} src={logo} alt="" /></a>

                <button className={st.btnCatalog}> <NavLink className={st.text} to='/catalog'>Catalog</NavLink></button> 
                
            </div>

                <nav >

                    <ul className={st.navWrapper}>
                        <li>
                            <NavLink className={st.nav} to='/main page'>Main Page</NavLink>
                        </li>
                        <li>
                            <NavLink className={st.nav}  to='/all products'>All products</NavLink>
                        </li>
                        <li>
                            <NavLink className={st.nav}  to='/all sales'>All sales</NavLink>
                        </li>
                    </ul>

                </nav>
                

                <a href="#"><img className={st.bag} src={bag}  alt=""/></a> 

        </div>
    )
}