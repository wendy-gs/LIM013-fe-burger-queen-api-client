import { ProductI } from '../models/product.model'
export interface OrderI {
    _id: string,
    userId: string,
    client: string,
    products: any [//{
      //  qty: number,
        //products: ProductI
   // }
    ],
    status: string,
    dateEntry: Date,
    dateProcessed: Date
}