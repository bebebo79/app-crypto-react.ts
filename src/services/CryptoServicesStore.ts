import axios from "axios"
import { cryptoCurrenciesResponsiveSchema, cryptoPriceSchema} from "../schema/crypto-schema";
import { Pair } from "../types";



// creamos la funcion para llamar a la api asyn await 
export async function getCrypto() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD';
    const {data : {Data}} = await axios(url)
    const result = cryptoCurrenciesResponsiveSchema.safeParse(Data)
    
    if(result.success){
        return result.data
    }

    
}

//creamos la funcion para llamar a la api ahora para darnos el dato que necesitamos ( valor de la crypto)
export async function fetchCurrentCryptoPrice(pair:Pair){
    const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const {data : {DISPLAY}} =  await axios(url)
    const result = cryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
    if(result.success) {
       return result.data
    }

}