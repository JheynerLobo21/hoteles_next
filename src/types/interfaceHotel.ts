export interface Hotel {
    id: number,
    title: string,
    description:string,
    rating:number
    thumbnail: string
}

export interface Review {
    id: number,
    hotelId: number,
    title: string,
    description: string,
    rating: number
}