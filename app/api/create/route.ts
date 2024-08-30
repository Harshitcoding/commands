// src/app/api/posts/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { auth } from '@/lib/auth'; // Assuming your auth config is exported like this

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { title, content } = body;

  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        userId: session.user.id!, // session.user should now have the authenticated user's details
      },
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}


export async function GET() {
  const prisma = new PrismaClient();


  const body = await prisma.post.findMany()

  return NextResponse.json({
      body
  })
}
