import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const hotelId = params.id;

  const response = await fetch(
    `https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels/${hotelId}`
  );

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch hotel" }, { status: response.status });
  }

  const hotel = await response.json();
  return NextResponse.json(hotel);
}
