
import { useMemo } from "react"
import { useCryptoStore } from "../store"
import Spiner from "./Spiner"

export default function CriptoPriceDisplay() {
    // generamos el state de result
    const result = useCryptoStore((state)=> state.result)
    const loading = useCryptoStore((state)=> state.loading)

    // si no hay resultado no mostramos Cotizacion
    const hasResult = useMemo(()=>!Object.values(result).includes('') ,[result])

  return (
    <div className="result-wrapper">

        { loading ? <Spiner/> : hasResult && (
            <>
                <h2>Cotizacion</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com${result.IMAGEURL}`} alt="Imagen Crypto" />
                        <div>
                            <p>El precio es: <span>{result.PRICE}</span></p>
                            <p>Precio más alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Variación últimas 24 Horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
            </>
        )}
        
    </div>
  )
}
