export interface Order {
  _id: string,
  hostId: string,
  buyer: {
    _id: string,
    fullname: string
  },
  totalPrice: number,
  startDate: Date,
  endDate: Date,
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
  status: string
}

export interface FilterOrder {
  hostId: string
  buyerId: string
  status: string
}

