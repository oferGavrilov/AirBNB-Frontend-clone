
export interface Order {
  _id: string,
  buyer: {
    _id: string,
    fullname: string
  },
  totalPrice: number,
  startDate: Date,
  endDate: Date,
  guests: Guest,
  stay: {
    _id: string,
    name: string,
    price: number
  },
  host: {
    _id: string,
    fullname: string,
  }
  status: string
}
export interface FilterOrder {
  hostId: string
  buyerId: string
  status: string
  stayName: string
  hostName: string
  totalPrice: number
  term: string
}

export interface Guest {
  adults: number
  children: number
  infants: number
  pets: number
}
