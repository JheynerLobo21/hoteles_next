import { Hotel, Review } from "@/types/interfaceHotel";

export  async function reviewsForHotel(hotelId: number){
    return await fetch(
        `https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels/${hotelId}`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
}

export async function addReview(formData:Review){
    const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      });
      console.log(response.status)
      return await response.json();
}

export async function getHotels(){
    const baseUrl = 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/hotels`, {
    method: "GET",
  });

  if (res.ok) {
  const hotels: Hotel[] = await res.json();
  return hotels;
  }
}

export async function saveReview(formData: Review){
    const response = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      });
}