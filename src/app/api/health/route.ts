import { NextResponse } from 'next/server';

// Health check endpoint for Docker
export async function GET() {
  return NextResponse.json(
    {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'AI Automation LA',
      version: '1.0.0',
    },
    { status: 200 }
  );
}