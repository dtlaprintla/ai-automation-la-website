import { NextRequest, NextResponse } from 'next/server';
import { contentManager } from '@/lib/content';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type');
  const filename = searchParams.get('filename');

  if (!type || !filename) {
    return NextResponse.json(
      { error: 'Missing type or filename parameter' },
      { status: 400 }
    );
  }

  try {
    const content = await contentManager.getContent(type as any, filename);
    
    if (!content) {
      return NextResponse.json(
        { error: 'Content not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}