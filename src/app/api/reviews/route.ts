import { Review } from '@/types/interfaceHotel';
import { NextResponse } from 'next/server';
const baseUrl="https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews/";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const hotelId = searchParams.get('hotelId');
  if (!hotelId) {
    return NextResponse.json({ error: "hotelId is required" }, { status: 400 });
  }
  const response = await fetch(`${baseUrl}?hotelId=${hotelId}`);

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: response.status });
  }

  const hotelReviews = await response.json();
  return NextResponse.json(hotelReviews);
}

export async function POST(req: Request) {
  const newReview: Review = await req.json();
  const reviewId = newReview.id;
  const response = await fetch(`${baseUrl}${reviewId}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReview),
  })
  console.log(response.status);
  return NextResponse.json(newReview);
}

export async function PUT(req: Request) {
  try {
    const reviewUpdated: Review = await req.json();
    const reviewId = reviewUpdated.id;
    const response = await fetch(`${baseUrl}${reviewId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error response from server:', errorData);
      return NextResponse.json({ error: errorData.message || 'Failed to update review' }, { status: response.status });
    }

    const updatedReview = await response.json();
    return NextResponse.json(updatedReview, { status: 200 });
  } catch (error) {
    console.error('Error updating review:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    console.log(searchParams);
    const reviewId = searchParams.get('review');
    console.log(reviewId);
    if (!reviewId) {
      return NextResponse.json({ error: "Review ID is required" }, { status: 400 });
    }

    const response = await fetch(`${baseUrl}${reviewId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.message || 'Failed to delete review' }, { status: response.status });
    }
    return NextResponse.json({ message: 'Review deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


