import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import { BRAND } from '@/config/branding';

export const metadata: Metadata = {
  title: `AI Voice Agents | ${BRAND.name}`,
  description: "Human-sounding AI voice agents that answer calls, book appointments, and qualify leads 24/7. Done-for-you setup and management.",
  keywords: "AI voice agents Los Angeles, automated phone answering, appointment booking AI, lead qualification calls, done for you voice automation"
};

export default function VoiceAgentsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-bold mb-4">AI Voice Agents</h1>
        <p className="text-xl text-gray-600 mb-8">Coming soon - detailed service page</p>
      </div>
    </main>
  );
}