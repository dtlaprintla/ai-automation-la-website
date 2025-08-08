import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';

export const metadata: Metadata = {
  title: `AI Workflow Automation | ${BRAND.name}`,
  description: "Connect all your business apps with AI workflows. Automate data entry, reporting, and repetitive tasks. Done-for-you setup.",
  keywords: "AI workflow automation Los Angeles, business process automation, app integration automation, done for you workflows"
};

export default function WorkflowsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 text-center">
        <h1 className="text-4xl font-bold mb-4">AI Workflows & Integrations</h1>
        <p className="text-xl text-gray-600 mb-8">Coming soon - detailed service page</p>
      </div>
      <Footer />
    </main>
  );
}