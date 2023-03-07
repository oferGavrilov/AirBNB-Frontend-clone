export interface Order {
  _id: string,
  hostId: string,
  buyer: {
    _id: string,
    fullname: string
  },
  totalPrice: number,
  startDate: number,
  endDate: number,
  guests: {
    adults: number,
    children: number
    infants: number,
    pets: number
  },
  stay: {
    _id: string,
    name: string,
    price: number
  },
  msgs: string[],
  status: string
}

export interface FilterOrder {
  hostId: string
  buyerId: string
  status: string
}

