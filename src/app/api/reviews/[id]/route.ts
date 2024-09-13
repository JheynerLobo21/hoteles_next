import { NextResponse } from 'next/server';

export async function DELETE({ params }: { params: { review: string } }) {
  const { review } = params; 
  console.log(review);
  if (!review) {
    return NextResponse.json({ error: 'Review ID is required' }, { status: 400 });
  }
  const response = await fetch(`https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews/${review}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to delete review' }, { status: response.status });
  }
  return NextResponse.json({ message: 'Review deleted successfully' }, { status: 200 });
}
