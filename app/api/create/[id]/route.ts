import { NextResponse, NextRequest } from 'next/server';
import  prisma  from '@/lib/prisma';

export async function GET(request: NextRequest) {

  // Extract the ID from the URL path concisely
  const id = request.nextUrl.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ message: 'Missing ID parameter' }, { status: 400 });
  }

  try {
    const command = await prisma.post.findUnique({
      where: { id },
    });

    if (!command) {
      return NextResponse.json({ message: 'Command not found' }, { status: 404 });
    }

    return NextResponse.json(command);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}