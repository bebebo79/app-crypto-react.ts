import{ z} from 'zod';

// el esquema de los datos que queremos de la moneda
export const currencySchema = z.object({
    code :z.string(),
    name : z.string()

})

// el esquema de lo que queremos de la api, ojo es un array y para ello creamos otro en plural
export const cryptoCurrencyResponsiveSchema = z.object({
    CoinInfo: z.object({
        FullName : z.string(),
        Name : z.string()
    })    
})

//el esquema en plural y llamamos al singular
export const cryptoCurrenciesResponsiveSchema = z.array(cryptoCurrencyResponsiveSchema)

// el esquema para el state de pair
export const pairSchema = z.object({
        currency : z.string(),
        criptocurrency : z.string()

})

// el esquema que necesitamos para traer los datos de la comparativa de monedas
export const cryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE : z.string(),
    HIGHDAY : z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR : z.string(),
    LASTUPDATE : z.string()

})