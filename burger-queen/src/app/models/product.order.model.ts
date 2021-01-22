export interface OrderProductI {
    _id: string,
    name: string,
    price: number,
    image: string,
    type: string,
    dateEntry: Date,
    priceTotal:number,
    quantity:number
}