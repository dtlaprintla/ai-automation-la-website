import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';

export const metadata: Metadata = {
  title: `Real Estate AI Cold Calling | ${BRAND.name}`,
  description: "AI that makes cold calls for real estate agents. Finds motivated sellers, qualifies leads, and books appointments automatically.",
  keywords: "real estate AI cold calling Los Angeles, automated real estate calls, AI lead generation real estate, real estate automation"
};

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-[#0E0918] text-white">
      <Header />
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Real Estate AI Cold Calling</h1>
        <p className="text-xl text-[#C4BBD3] mb-8">Coming soon - detailed service page</p>
      </div>
      <Footer />
    </main>
  );
}