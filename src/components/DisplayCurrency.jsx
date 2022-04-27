import axios from "axios"
import { CURRENCY_NAME, CURRENCY_CHANGE } from "../globals"

const DisplayCurrency = async (props) => {
    
    const symbol = await axios.get(`${CURRENCY_CHANGE}bitcoin`)
    console.log(symbol.data.data.currencySymbol)


    return (
        <div className="grid">
            {
                props.totalCurrency.map((currency) => (
                    <div>
                        <h3>{currency.name}</h3>
                        <h2>{currency.priceUsd}</h2>
                        <h2>{currency.changePercent24Hr}</h2>
                    </div>
                ))
            }
        </div>
  )
}

export default DisplayCurrency