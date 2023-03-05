export interface Stay {
    _id: string,
    type: string,
    name: string,
    imgUrls: string[],
    price: number,
    summary: string,
    capacity: number,
    amenities: string[],
    labels: string[],
    host: Host,
    loc: Loc,
    reviews: Review[],
    likedByUser:string[],
    roomType: string,
    statReviews: StatReviews,
    bathrooms: number,
    bedrooms: number
}

export interface Host {
    _id: string
    fullname: string
    pictureUrl: string
}

export interface Loc {
    country: string
    countryCode: string
    city: string
    address: string
    lat: number
    lan: number
}
export interface googleMapLoc {
    lat: number
    lng: number
}

export interface Review {
    at: number
    id: string,
    txt: string,
    rate: number,
    by: {
        _id: string,
        fullname: string,
        imgUrl: string
    }
}

export interface StatReviews {
  cleanliness: number,
  communication: number,
  checkIn: number,
  accuracy: number,
  location: number,
  value: number
}

export interface Marker {
    // position: googleMapLoc,
    label: string
}
