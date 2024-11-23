import { z} from 'zod'
import {currencySchema, cryptoCurrencyResponsiveSchema,pairSchema,cryptoPriceSchema} from '../schema/crypto-schema'


export type Currency = z.infer<typeof currencySchema>
export type CryptoCurrency = z.infer<typeof cryptoCurrencyResponsiveSchema>
export type Pair = z.infer<typeof pairSchema>
export type CryptoPrice = z.infer<typeof cryptoPriceSchema>