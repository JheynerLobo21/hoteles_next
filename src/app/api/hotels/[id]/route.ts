import { NextResponse } from 'next/server';
const baseUrl="https://my-json-server.typicode.com/manuelmebm/testing-hotel-api/hotels/"
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params; 

  if (!id) {
    return NextResponse.json({ error: 'Hotel ID is required' }, { status: 400 });
  }
  const response = await fetch(`${baseUrl}${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to delete hotel' }, { status: response.status });
  }
  return NextResponse.json({ message: 'Hotel deleted successfully' }, { status: 200 });
}