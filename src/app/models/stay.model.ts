export interface Stay {
    _id: string;
    name: string;
    type: string;
    imgUrl: string[];
    price: number;
    summery: string
    capacity: number
    amenities: string[]
    labels: string[]
    host: Host
    loc: Loc
    review: Review
    likedByUser:string[]
    types: string[]
}

export interface Host {
    _id: string
    fullname: string
    imgUrl: string
}
export interface Loc {
    country: string
    countryCode: string
    city: string
    address: string
    lat: number
    lng: number
}
export interface Review {
    id: string,
    txt: string,
    rate: number,
    by: {
        _id: string,
        fullname: string,
        imgUrl: string
    }
}
