import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  // Extract the ID from the URL path
  const { pathname } = request.nextUrl;
  const id = pathname.split('/').pop();

  // Validate the ID
  if (!id || typeof id !== 'string') {
    return NextResponse.json({ message: 'Invalid ID parameter' }, { status: 400 });
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