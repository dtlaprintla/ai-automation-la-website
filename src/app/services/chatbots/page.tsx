import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';

export const metadata: Metadata = {
  title: `AI Chatbots | ${BRAND.name}`,
  description: "Smart AI chatbots for your website that capture leads and convert visitors 24/7. Done-for-you chatbot development and management.",
  keywords: "AI chatbots Los Angeles, website chat automation, lead capture chatbots, customer service bots, done for you chatbots"
};

export default function ChatbotsPage() {
  return (
    <main className="min-h-screen bg-[#0E0918] text-white">
      <Header />
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">AI Chatbots</h1>
        <p className="text-xl text-[#C4BBD3] mb-8">Coming soon - detailed service page</p>
      </div>
      <Footer />
    </main>
  );
}