'use client';

import { useState } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Phone, 
  Users,
  DollarSign,
  Star,
  CheckCircle,
  Building,
  Bot,
  Zap
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  location: string;
  businessSize: string;
  challenge: string;
  solution: string;
  implementation: string[];
  results: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
    icon: React.ReactNode;
  }[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
  tools: string[];
  timeline: string;
  roi: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'beverly-hills-dental',
    title: 'Beverly Hills Dental Practice Eliminates Missed Calls',
    industry: 'Dental',
    location: 'Beverly Hills, CA',
    businessSize: '12 employees',
    challenge: 'Missing 40% of calls during peak hours, losing potential $180K annually in missed appointments',
    solution: 'AI Voice Agent + Smart Call Routing + Automated Appointment Booking',
    implementation: [
      'Custom AI voice agent trained on dental procedures and insurance',
      'Bilingual English/Spanish support for LA market',
      'Integration with existing practice management software',
      'Smart routing to available staff during business hours'
    ],
    results: [
      {
        metric: 'Missed Calls',
        before: '40%',
        after: '3%',
        improvement: '92% Reduction',
        icon: <Phone className="w-6 h-6" />
      },
      {
        metric: 'First Response Time',
        before: '4.2 hours',
        after: '15 seconds',
        improvement: '99% Faster',
        icon: <Clock className="w-6 h-6" />
      },
      {
        metric: 'Monthly Revenue',
        before: '$85K',
        after: '$101K',
        improvement: '+$16K/month',
        icon: <DollarSign className="w-6 h-6" />
      },
      {
        metric: 'Patient Satisfaction',
        before: '3.2/5',
        after: '4.8/5',
        improvement: '+50% CSAT',
        icon: <Star className="w-6 h-6" />
      }
    ],
    testimonial: {
      quote: "Our AI assistant is like having a perfect receptionist who never takes a break. Patients love the instant responses, and we've recovered thousands in lost revenue.",
      author: "Dr. Sarah Chen",
      title: "Practice Owner",
      company: "Beverly Hills Family Dental"
    },
    tools: ['Twilio', 'OpenAI', 'Dentrix', 'Google Calendar'],
    timeline: '3 weeks',
    roi: '650% ROI in 6 months'
  },
  {
    id: 'dtla-real-estate',
    title: 'DTLA Real Estate Firm Automates Lead Nurturing',
    industry: 'Real Estate',
    location: 'Downtown Los Angeles, CA',
    businessSize: '8 agents',
    challenge: 'Cold leads going stale, agents spending 60% of time on follow-ups instead of showings',
    solution: 'AI Lead Qualification + SMS Automation + CRM Integration',
    implementation: [
      'Intelligent lead scoring based on property preferences',
      'Automated SMS campaigns for different buyer segments',
      'Market updates and new listing alerts',
      'Integration with MLS and showing scheduling'
    ],
    results: [
      {
        metric: 'Lead Response Time',
        before: '2.5 hours',
        after: '30 seconds',
        improvement: '99% Faster',
        icon: <Clock className="w-6 h-6" />
      },
      {
        metric: 'Qualified Leads',
        before: '12/month',
        after: '38/month',
        improvement: '+217%',
        icon: <TrendingUp className="w-6 h-6" />
      },
      {
        metric: 'Agent Productivity',
        before: '3 showings/day',
        after: '7 showings/day',
        improvement: '+133%',
        icon: <Users className="w-6 h-6" />
      },
      {
        metric: 'Commission Revenue',
        before: '$42K/month',
        after: '$78K/month',
        improvement: '+86%',
        icon: <DollarSign className="w-6 h-6" />
      }
    ],
    testimonial: {
      quote: "The AI handles all the initial conversations so perfectly. Our agents can focus on what they do best - closing deals. Our conversion rate doubled overnight.",
      author: "Michael Rodriguez",
      title: "Broker",
      company: "Downtown LA Realty"
    },
    tools: ['HubSpot', 'Twilio', 'MLS Integration', 'Google Ads'],
    timeline: '2 weeks',
    roi: '420% ROI in 4 months'
  },
  {
    id: 'valley-hvac',
    title: 'San Fernando Valley HVAC Scales Emergency Response',
    industry: 'Home Services',
    location: 'San Fernando Valley, CA',
    businessSize: '23 technicians',
    challenge: 'Emergency calls after hours going to voicemail, losing high-value urgent jobs to competitors',
    solution: '24/7 AI Dispatcher + Emergency Routing + Automated Scheduling',
    implementation: [
      'AI dispatcher trained on HVAC emergencies and pricing',
      '24/7 emergency call handling with priority routing',
      'Automatic technician scheduling based on location and skills',
      'Real-time customer updates via SMS'
    ],
    results: [
      {
        metric: 'After-Hours Conversion',
        before: '15%',
        after: '78%',
        improvement: '+420%',
        icon: <Phone className="w-6 h-6" />
      },
      {
        metric: 'Emergency Jobs/Month',
        before: '18 jobs',
        after: '61 jobs',
        improvement: '+239%',
        icon: <Zap className="w-6 h-6" />
      },
      {
        metric: 'Average Job Value',
        before: '$380',
        after: '$520',
        improvement: '+37%',
        icon: <DollarSign className="w-6 h-6" />
      },
      {
        metric: 'Customer Satisfaction',
        before: '3.8/5',
        after: '4.9/5',
        improvement: '+29%',
        icon: <Star className="w-6 h-6" />
      }
    ],
    testimonial: {
      quote: "We went from losing most after-hours calls to being the most responsive HVAC company in the Valley. The AI books jobs while our competitors' phones ring empty.",
      author: "Tony Vasquez",
      title: "Owner",
      company: "Valley Air Solutions"
    },
    tools: ['ServiceTitan', 'Twilio', 'Google Maps API', 'QuickBooks'],
    timeline: '4 weeks',
    roi: '580% ROI in 5 months'
  }
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<string>(caseStudies[0].id);
  const currentCase = caseStudies.find(cs => cs.id === selectedCase) || caseStudies[0];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-brand-primary/10 border border-brand-primary/20 rounded-lg px-6 py-3 mb-8">
            <TrendingUp className="w-5 h-5 mr-2 text-brand-primary" />
            <span className="text-brand-primary font-semibold">Real Results from LA Businesses</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Success Stories That 
            <span className="block gradient-text">Speak for Themselves</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            See how Los Angeles businesses are using our AI automation to eliminate missed opportunities, 
            increase revenue, and scale operations without adding overhead.
          </p>
        </div>

        {/* Case Study Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((caseStudy) => (
            <button
              key={caseStudy.id}
              onClick={() => setSelectedCase(caseStudy.id)}
              className={`flex items-center px-6 py-3 rounded-lg border transition-all ${
                selectedCase === caseStudy.id
                  ? 'bg-brand-primary text-white border-brand-primary shadow-lg'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Building className="w-4 h-4 mr-2" />
              {caseStudy.industry} - {caseStudy.location.split(',')[0]}
            </button>
          ))}
        </div>

        {/* Case Study Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent p-8 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-4 py-2 text-sm font-medium">
                    {currentCase.industry} • {currentCase.location}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {currentCase.title}
                </h3>
                <p className="text-white/90 text-lg">
                  {currentCase.challenge}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{currentCase.timeline}</div>
                    <div className="text-white/80 text-sm">Implementation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{currentCase.roi}</div>
                    <div className="text-white/80 text-sm">Return on Investment</div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-lg font-semibold">{currentCase.businessSize}</div>
                    <div className="text-white/80 text-sm">Business Size</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Measurable Business Impact
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {currentCase.results.map((result, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {result.icon}
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{result.metric}</div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Before:</span>
                      <span className="text-sm font-medium text-red-600">{result.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">After:</span>
                      <span className="text-sm font-medium text-green-600">{result.after}</span>
                    </div>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="text-lg font-bold text-brand-primary">
                      {result.improvement}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Solution Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Bot className="w-6 h-6 mr-2 text-brand-primary" />
                  Solution Implemented
                </h4>
                <p className="text-gray-700 mb-6">{currentCase.solution}</p>
                
                <ul className="space-y-3">
                  {currentCase.implementation.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Technology Stack Used
                </h4>
                <div className="flex flex-wrap gap-3 mb-8">
                  {currentCase.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-lg font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                {/* Testimonial */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{currentCase.testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {currentCase.testimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {currentCase.testimonial.title}, {currentCase.testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready for Similar Results?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join these successful LA businesses. Get your free AI automation plan 
              and see how we can transform your operations in just 2-4 weeks.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="xl"
                className="bg-white text-brand-primary font-bold hover:bg-gray-100"
              >
                <ArrowRight className="w-6 h-6 mr-2" />
                Get My Free AI Plan
              </Button>
              
              <Button
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                <Phone className="w-6 h-6 mr-2" />
                Schedule a Call
              </Button>
            </div>
            
            <p className="text-white/80 text-sm mt-4">
              ✓ Free consultation ✓ Custom automation roadmap ✓ 24-hour response
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}