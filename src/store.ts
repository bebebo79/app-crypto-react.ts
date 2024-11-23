import {create} from "zustand"
import { devtools} from "zustand/middleware"
import { CryptoCurrency, CryptoPrice, Pair} from "./types";
import { getCrypto, fetchCurrentCryptoPrice } from "./services/CryptoServicesStore";

// creamos el type
type CryptoStore = {
    cryptocurrencies : CryptoCurrency[],
    result : CryptoPrice,
    loading : boolean,
    fetchCryptos : () => Promise<void>,
    fetchData : (pair : Pair) => Promise<void>

}

// creamos nuestro almacenamiento con la funcion de fetch
export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies : [],
    result : {
        IMAGEURL: '',
        PRICE : '',
        HIGHDAY :'',
        LOWDAY:'',
        CHANGEPCT24HOUR : '',
        LASTUPDATE : ''
    },
    loading : false,

    fetchCryptos : async () =>{
       const cryptocurrencies =  await getCrypto()
       set(()=>({
            cryptocurrencies
       }))
    },
    
    fetchData : async(pair)=>{
        set(()=>({
            loading: true
        }))
        
        const result = await fetchCurrentCryptoPrice(pair)
        set(()=>({
            result,
            loading:false
        }))
        
        
        

    }
   
})))