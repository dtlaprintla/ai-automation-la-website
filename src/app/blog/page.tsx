'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import Button from '@/components/ui/Button';

// Blog post data - would normally come from CMS or MDX files
const blogPosts = [
  {
    slug: 'ai-phone-agents-transform-dtla-dental-practice',
    title: 'How AI Phone Agents Transformed a DTLA Dental Practice: +$180K Revenue in 6 Months',
    excerpt: 'A downtown Los Angeles dental practice went from missing 40% of calls to answering 98% with AI automation. See the exact process and results.',
    category: 'Case Studies',
    author: 'AI Automation LA Team',
    publishedAt: '2024-12-01',
    readTime: '7 min read',
    image: '/blog/dtla-dental-case-study.jpg',
    featured: true,
    tags: ['AI Phone Agents', 'Dental Automation', 'Los Angeles', 'Case Study']
  },
  {
    slug: 'stop-missing-calls-la-business-automation',
    title: 'Stop Missing Calls: How LA Businesses Capture Every Lead with AI Automation',
    excerpt: 'Los Angeles businesses lose $50K+ annually to missed calls. Learn how AI phone agents ensure you never miss another opportunity.',
    category: 'AI Strategy',
    author: 'Michael Chen',
    publishedAt: '2024-11-28',
    readTime: '5 min read',
    image: '/blog/missed-calls-automation.jpg',
    featured: true,
    tags: ['Missed Calls', 'Lead Generation', 'AI Phone System', 'Los Angeles Business']
  },
  {
    slug: 'vernon-ca-warehouse-automation-success',
    title: 'Vernon, CA Warehouse Automation: Pick-Pack-Ship Goes AI',
    excerpt: 'How a Vernon manufacturing company automated their entire fulfillment process, saving 30 hours per week and reducing errors by 95%.',
    category: 'Automation',
    author: 'Sarah Rodriguez',
    publishedAt: '2024-11-25',
    readTime: '6 min read',
    image: '/blog/vernon-warehouse-automation.jpg',
    featured: false,
    tags: ['Vernon CA', 'Warehouse Automation', 'Manufacturing', 'AI Workflow']
  },
  {
    slug: 'bilingual-ai-assistants-los-angeles-market',
    title: 'Bilingual AI Assistants: Serving LA\'s Diverse Market in English & Spanish',
    excerpt: 'Why bilingual AI automation is essential for Los Angeles businesses and how to implement it effectively.',
    category: 'AI Technology',
    author: 'Carlos Martinez',
    publishedAt: '2024-11-22',
    readTime: '4 min read',
    image: '/blog/bilingual-ai-la.jpg',
    featured: false,
    tags: ['Bilingual AI', 'Spanish Language', 'Los Angeles', 'Inclusive Automation']
  },
  {
    slug: 'restaurant-automation-los-angeles-success',
    title: 'Restaurant Automation Success: How LA Restaurants Use AI to Handle Peak Hours',
    excerpt: 'From order taking to reservation management, see how Los Angeles restaurants are using AI to handle their busiest times.',
    category: 'Industry Focus',
    author: 'Lisa Kim',
    publishedAt: '2024-11-20',
    readTime: '5 min read',
    image: '/blog/restaurant-automation-la.jpg',
    featured: false,
    tags: ['Restaurant Automation', 'Peak Hours', 'Los Angeles Dining', 'AI Ordering']
  },
  {
    slug: 'ai-automation-roi-calculator-guide',
    title: 'Calculate Your AI Automation ROI: A Complete Guide for LA Business Owners',
    excerpt: 'Step-by-step guide to calculating ROI for AI automation projects, with real examples from Los Angeles businesses.',
    category: 'Business Guide',
    author: 'David Park',
    publishedAt: '2024-11-18',
    readTime: '8 min read',
    image: '/blog/roi-calculator-guide.jpg',
    featured: false,
    tags: ['ROI Calculator', 'Business Planning', 'AI Investment', 'Los Angeles']
  }
];

const categories = ['All', 'Case Studies', 'AI Strategy', 'Automation', 'AI Technology', 'Industry Focus', 'Business Guide'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <main className="min-h-screen bg-n8n-bg-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automation Insights
              <span className="block text-brand-primary mt-2">for Los Angeles Businesses</span>
            </h1>
            <p className="text-xl text-n8n-text-secondary max-w-3xl mx-auto leading-relaxed">
              Real case studies, practical guides, and expert insights on AI automation 
              for LA businesses. Learn how to save time, reduce costs, and scale efficiently.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-n8n-text-secondary" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-n8n-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-n8n-bg-primary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 flex items-center justify-center">
                    <span className="text-n8n-text-secondary">Featured Article Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                      <div className="flex items-center text-n8n-text-secondary text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-n8n-text-secondary text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-n8n-text-secondary mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-n8n-text-secondary text-sm">
                        By {post.author}
                      </span>
                      <div className="flex items-center text-brand-primary font-semibold">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-brand-primary text-white font-semibold'
                    : 'bg-n8n-bg-secondary text-n8n-text-secondary hover:bg-n8n-border hover:text-n8n-text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-n8n-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
            </h2>
            <span className="text-n8n-text-secondary">
              {filteredPosts.length} articles
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="bg-n8n-bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-40 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 flex items-center justify-center">
                    <span className="text-n8n-text-secondary text-sm">Article Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-brand-primary/10 text-brand-primary px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-n8n-text-secondary text-xs">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-n8n-text-secondary text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-n8n-text-secondary text-xs">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                      <div className="flex items-center text-brand-primary text-sm font-semibold">
                        Read
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-n8n-text-secondary text-lg">
                No articles found matching your search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated on AI Automation
          </h2>
          <p className="text-xl text-n8n-text-secondary mb-8">
            Get weekly insights, case studies, and automation tips for LA businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            />
            <Button size="md" className="bg-brand-primary hover:bg-brand-primary/80">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}