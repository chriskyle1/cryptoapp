import React from 'react'
import axios from 'axios'
import { CURRENCY_NAME, CURRENCY_PRICE, CURRENCY_CHANGE } from '../globals'
import { useEffect, useState } from 'react'



const CurrencyDetails = (props) => {
    
    const [currencyDetails, setCurrencyDetails] = useState('')

    useEffect(() => {
        const getDetails = async () => {
            const res = await axios.get(`${CURRENCY_NAME}`)
            const sym = await axios.get(`${CURRENCY_CHANGE}`)
            setCurrencyDetails(res)
                             
        }
        getDetails()
    }, [props.addCurrency])
        
    
    
    return(
        <div>
            <h2>{currencyDetails.name}</h2>
            <h3>{currencyDetails.priceUsd}</h3>
            <h3>{currencyDetails.changePercent24Hr}</h3>
        </div>

    )
}

export default CurrencyDetails