import { useState, ChangeEvent, FormEvent } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import ErrorMensage from "./ErrorMensage"



export default function CriptoSearchForm() {

    //usar nuestro store para el state
    const cryptocurrencies = useCryptoStore((state)=>(state.cryptocurrencies))
    const fetchData = useCryptoStore((state)=>(state.fetchData))

    // creamos nuestro state ( moneda y crypto)
    const [ pair, setPair] = useState<Pair>({
        currency : '',
        criptocurrency : ''
    })

    //creamos el state de error
    const [error, setError] = useState('')
    // handle change, al seleccionar la moneda
    const handleChange = (e: ChangeEvent<HTMLSelectElement>)=>{
        setPair({
            ...pair,
            [e.target.name] : e.target.value
        })   
    }
    // handle submit para validar
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(Object.values(pair).includes('')){
            setError('Todos los Campos son Obligatorios')
            return
        } else {
            setError('')
            //consultamos la api
            fetchData(pair)
        }


    }

  
    return (
        <form className="form" action="" onSubmit={handleSubmit}>
            {error && <ErrorMensage>{error}</ErrorMensage>}
            <div className="field">
                <label htmlFor="currency">Moneda: </label>
                <select name="currency" 
                        id="currency"
                        onChange={handleChange}
                        value={pair.currency}
                >
                    <option value="">-- selecciona --</option>
                    {currencies.map(currency=>(
                        <option key={currency.code} value={currency.code}>{currency.name}</option>
                    ))}
                </select>    
            </div>
            <div className="field">
                <label htmlFor="criptocurrency">Cryptomoneda: </label>
                <select name="criptocurrency" 
                        id="criptocurrency"
                        onChange={handleChange}
                        value={pair.criptocurrency}
                >
                    <option value="">-- selecciona --</option>
                    {cryptocurrencies.map(crypto => (
                        <option value={crypto.CoinInfo.Name} key={crypto.CoinInfo.FullName}>{crypto.CoinInfo.FullName}</option>
                    ))}
                </select>    
            </div>
            <input type="submit"
                   value="Cotizar"  />

        </form>
  )
}
