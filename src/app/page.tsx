import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* More sections coming soon... */}
      <div className="h-96 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More Sections Coming...
          </h2>
          <p className="text-gray-600">
            Services, Case Studies, Pricing, and more!
          </p>
        </div>
      </div>
    </main>
  );
}