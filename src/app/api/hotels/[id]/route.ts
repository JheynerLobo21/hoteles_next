import { NextResponse } from 'next/server';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params; 

  if (!id) {
    return NextResponse.json({ error: 'Review ID is required' }, { status: 400 });
  }
  const response = await fetch(`https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/reviews/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to delete review' }, { status: response.status });
  }
  return NextResponse.json({ message: 'Review deleted successfully' }, { status: 200 });
}