import st from './style.module.scss'

export const SaleSeason = () => {
    

    return (
        <div className={st.container}>
            
            <img className={st.bush} src="./Images/bush.png" alt="" />

            <div className={st.wrapper}>
                <h1> Sale </h1>
                <h2> New seasone</h2>
                <button className={st.btnSale}>Sale</button>
            </div>
            
        </div>
    )
}