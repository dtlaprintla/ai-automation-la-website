import { NextResponse } from 'next/server';
import { contentManager } from '@/lib/content';

export async function GET() {
  try {
    const config = await contentManager.getSiteConfig();
    
    if (!config) {
      return NextResponse.json(
        { error: 'Site configuration not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(config);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}