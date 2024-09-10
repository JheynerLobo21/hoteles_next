import { Hotel } from "@/types/interfaceHotel";
import { NextResponse } from "next/server";
const baseUrl =
  "https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels/";

export async function GET() {
  const response = await fetch(baseUrl);
  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch hotel" },
      { status: response.status }
    );
  }
  const hotel = await response.json();
  return NextResponse.json(hotel);
}

export async function POST(req: Request) {
  const newHotel: Hotel = await req.json();
  const response = await fetch(`${baseUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newHotel),
  });
  console.log(response.status);
  return Response.json(newHotel);
}

export async function PUT(req: Request) {
  try {
    const hotelUpdated: Hotel = await req.json();
    const hotelId = hotelUpdated.id;
    const response = await fetch(`${baseUrl}${hotelId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response from server:", errorData);
      return NextResponse.json(
        { error: errorData.message || "Failed to update hotel" },
        { status: response.status }
      );
    }
    const updatedHotel = await response.json();
    console.log("EDITO EL HOTEL");
    return NextResponse.json(updatedHotel, { status: 200 });
  } catch (error) {
    console.error("Error updating hotel:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}