import { Review } from '@/types/interfaceHotel';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const hotelId = searchParams.get('hotelId');
  if (!hotelId) {
    return NextResponse.json({ error: "hotelId is required" }, { status: 400 });
  }
  const response = await fetch(`https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews/?hotelId=${hotelId}`);
  
  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: response.status });
  }
  
  const hotelReviews = await response.json();
  return NextResponse.json(hotelReviews);
}

export async function POST(req: Request) {
  const newReview: Review = await req.json();

  return NextResponse.json(newReview);
}
