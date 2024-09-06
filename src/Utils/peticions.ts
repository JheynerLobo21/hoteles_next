import { Hotel, Review } from "@/types/interfaceHotel";

export async function reviewsForHotel(hotelId: number) {
  return await fetch(
    `https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels/${hotelId}`,
    {
      method: "GET",
    }
  ).then((res) => res.json());
}

export async function addReview(formData: Review) {
  const response = await fetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  
  if (!response.ok) {
    throw new Error("Failed to add review");
  }
  else{
    console.log(response.status)
  return await response.json();
  }
}

export async function editReview(formData: Review) {
  const response = await fetch("/api/reviews", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  
  if (!response.ok) {
    throw new Error("Failed to update review");
  }
  console.log(response.status)
  return await response.json();
}

export async function editHotel(formData: Hotel) {
  const response = await fetch("/api/hotels", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  
  if (!response.ok) {
    throw new Error("Failed to update review");
  }
  console.log(response.status)
  return await response.json();
}

export async function deleteReview(reviewId: number) {
  const response = await fetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete review');
  }
  console.log(response.status);
  return await response.json();
}

export async function deleteHotel(hotelId: number) {
  const response = await fetch(`/api/reviews/${hotelId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete review');
  }
  console.log(response.status);
  return await response.json();
}

export async function getHotels() {
  const baseUrl = "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/hotels`, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Error en la petición");
  } else {
    const hotels: Hotel[] = await res.json();
    return hotels;
  }
}

export async function saveReview(formData: Review) {
  const response = await fetch("/api/reviews", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if(!response.ok) {
    throw new Error("Error en la petición");
  } else {
    console.log(response.status);
    const review: Review = await response.json();
    return review;
}
}

export async function saveHotel(formData: Hotel) {
  const response = await fetch("/api/hotels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if(!response.ok) {
    throw new Error("Error en la petición");
  } else {
    console.log(response.status);
    const hotel: Hotel = await response.json();
    return hotel;
}
}

export async function getReviewsByIdHotel(hotelId: number) {
  const response = await fetch(`/api/reviews/?hotelId=${hotelId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error en la petición");
  } else {
    console.log(response.status);
    const reviews: Review[] = await response.json();
    return reviews;
  }
}
