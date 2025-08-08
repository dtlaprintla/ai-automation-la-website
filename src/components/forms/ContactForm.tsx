'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { integrations } from '@/data/integrations';
import { 
  Phone, 
  Mail, 
  Building, 
  Users, 
  DollarSign, 
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  businessSize: string;
  monthlyRevenue: string;
  topApps: string[];
  biggestChallenge: string;
  preferredContactTime: string;
  howDidYouHear: string;
  timeline: string;
  additionalDetails: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    businessSize: '',
    monthlyRevenue: '',
    topApps: [],
    biggestChallenge: '',
    preferredContactTime: '',
    howDidYouHear: '',
    timeline: '',
    additionalDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Popular apps for multi-select (from our integrations)
  const popularApps = integrations
    .filter(app => app.popularity >= 80)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 20)
    .map(app => app.name);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAppSelection = (app: string) => {
    setFormData(prev => ({
      ...prev,
      topApps: prev.topApps.includes(app)
        ? prev.topApps.filter(a => a !== app)
        : prev.topApps.length < 3
        ? [...prev.topApps, app]
        : prev.topApps
    }));
  };

  const calculateLeadScore = (data: ContactFormData): number => {
    let score = 0;
    
    // Industry scoring (higher value industries get more points)
    const industryScores: Record<string, number> = {
      'Dental': 25,
      'Real Estate': 20,
      'Legal': 20,
      'Home Services': 18,
      'Restaurant': 15,
      'E-commerce': 15,
      'Other': 10
    };
    score += industryScores[data.industry] || 0;
    
    // Revenue scoring
    const revenueScores: Record<string, number> = {
      '$1M+': 30,
      '$250k-1M': 25,
      '$50k-250k': 15,
      '$0-50k': 5
    };
    score += revenueScores[data.monthlyRevenue] || 0;
    
    // Business size scoring
    const sizeScores: Record<string, number> = {
      '100+': 20,
      '26-100': 15,
      '6-25': 10,
      '1-5': 5
    };
    score += sizeScores[data.businessSize] || 0;
    
    // Challenge urgency scoring
    const challengeScores: Record<string, number> = {
      'Too many missed calls': 15,
      'Manual data entry': 10,
      'Lead follow-up': 12,
      'Staff management': 8,
      'Other': 5
    };
    score += challengeScores[data.biggestChallenge] || 0;
    
    // Timeline urgency
    const timelineScores: Record<string, number> = {
      'ASAP (within 1 month)': 15,
      '1-3 months': 10,
      '3-6 months': 5,
      'Just exploring': 2
    };
    score += timelineScores[data.timeline] || 0;

    return Math.min(score, 100); // Cap at 100
  };

  const determineLeadPriority = (score: number): 'HOT' | 'WARM' | 'COLD' => {
    if (score >= 70) return 'HOT';
    if (score >= 40) return 'WARM';
    return 'COLD';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Calculate lead score and priority
      const leadScore = calculateLeadScore(formData);
      const leadPriority = determineLeadPriority(leadScore);
      
      // Prepare webhook payload with enhanced data
      const webhookPayload = {
        ...formData,
        leadScore,
        leadPriority,
        submittedAt: new Date().toISOString(),
        source: 'AI Automation LA Website',
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct',
        // Add UTM parameters if available
        utmSource: new URLSearchParams(window.location.search).get('utm_source'),
        utmMedium: new URLSearchParams(window.location.search).get('utm_medium'),
        utmCampaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        // Enhanced business context
        businessContext: {
          estimatedEmployees: formData.businessSize,
          estimatedAnnualRevenue: formData.monthlyRevenue,
          primaryIndustry: formData.industry,
          currentTools: formData.topApps,
          urgencyLevel: formData.timeline,
          primaryPainPoint: formData.biggestChallenge
        },
        // Automation triggers
        automationTriggers: {
          shouldCallImmediately: leadPriority === 'HOT',
          shouldSendIndustryContent: formData.industry !== 'Other',
          shouldSendAppSpecificContent: formData.topApps.length > 0,
          suggestedFollowUpTime: formData.preferredContactTime,
          estimatedDealSize: formData.monthlyRevenue === '$1M+' ? 'Enterprise' : 
                           formData.monthlyRevenue === '$250k-1M' ? 'Growth' : 'Starter'
        }
      };

      // Send to n8n webhook
      const response = await fetch('https://n8n-dtla-c914de1950b9.herokuapp.com/webhook/ca1ff70d-541f-48ab-815a-59ee6dc1f707', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload)
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }

      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          industry: '',
          businessSize: '',
          monthlyRevenue: '',
          topApps: [],
          biggestChallenge: '',
          preferredContactTime: '',
          howDidYouHear: '',
          timeline: '',
          additionalDetails: ''
        });
        setSubmitStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 text-lg mb-4">
          We've received your information and will contact you within 24 hours.
        </p>
        <p className="text-green-600">
          Check your email for our LA Business Automation Guide!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
      {/* Contact Information Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Mail className="w-6 h-6 text-brand-primary mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="John Smith"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="john@company.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="(323) 555-0123"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
              placeholder="Acme Industries"
            />
          </div>
        </div>
      </div>

      {/* Business Information Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Building className="w-6 h-6 text-brand-primary mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Business Information</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry *
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option value="">Select your industry</option>
              <option value="Dental">Dental Practice</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Legal">Legal Services</option>
              <option value="Home Services">Home Services (HVAC, Plumbing, etc.)</option>
              <option value="Restaurant">Restaurant/Hospitality</option>
              <option value="E-commerce">E-commerce/Retail</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Professional Services">Professional Services</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Size *
            </label>
            <select
              name="businessSize"
              value={formData.businessSize}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option value="">Select business size</option>
              <option value="1-5">1-5 employees</option>
              <option value="6-25">6-25 employees</option>
              <option value="26-100">26-100 employees</option>
              <option value="100+">100+ employees</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Revenue Range *
            </label>
            <select
              name="monthlyRevenue"
              value={formData.monthlyRevenue}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option value="">Select revenue range</option>
              <option value="$0-50k">$0 - $50,000/month</option>
              <option value="$50k-250k">$50,000 - $250,000/month</option>
              <option value="$250k-1M">$250,000 - $1M/month</option>
              <option value="$1M+">$1M+/month</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option value="">Select timeline</option>
              <option value="ASAP (within 1 month)">ASAP (within 1 month)</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="Just exploring">Just exploring</option>
            </select>
          </div>
        </div>
      </div>

      {/* Business Challenges Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <AlertCircle className="w-6 h-6 text-brand-primary mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Current Challenges</h3>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Biggest Business Challenge *
            </label>
            <select
              name="biggestChallenge"
              value={formData.biggestChallenge}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option value="">Select your biggest challenge</option>
              <option value="Too many missed calls">Too many missed calls</option>
              <option value="Manual data entry">Manual data entry between systems</option>
              <option value="Lead follow-up">Lead follow-up and nurturing</option>
              <option value="Staff management">Staff management and training</option>
              <option value="Customer service">Customer service response time</option>
              <option value="Inventory management">Inventory management</option>
              <option value="Scheduling coordination">Scheduling and coordination</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Top 3 Apps You Use Most (select up to 3)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-h-64 overflow-y-auto border border-gray-200 rounded-lg p-4">
              {popularApps.map((app) => (
                <label
                  key={app}
                  className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all ${
                    formData.topApps.includes(app)
                      ? 'bg-brand-primary text-white border-brand-primary'
                      : 'bg-gray-50 border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.topApps.includes(app)}
                    onChange={() => handleAppSelection(app)}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{app}</span>
                </label>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Selected: {formData.topApps.length}/3
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Clock className="w-6 h-6 text-brand-primary mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">Additional Information</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Time
            </label>
            <select
              name="preferredContactTime"
              value={formData.preferredContactTime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option value="">Select preferred time</option>
              <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
              <option value="Afternoon (12pm-5pm)">Afternoon (12pm-5pm)</option>
              <option value="Evening (5pm-8pm)">Evening (5pm-8pm)</option>
              <option value="Anytime">Anytime</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How did you hear about us?
            </label>
            <select
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            >
              <option value="">Select source</option>
              <option value="Google Search">Google Search</option>
              <option value="Social Media">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Facebook">Facebook</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Details
          </label>
          <textarea
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
            placeholder="Tell us more about your specific automation needs..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        {submitStatus === 'error' && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
              <p className="text-red-700">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            </div>
          </div>
        )}
        
        <Button
          type="submit"
          size="xl"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white font-bold text-xl px-16 py-4 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-6 h-6 mr-2 animate-spin" />
              Sending Your Information...
            </>
          ) : (
            <>
              <Phone className="w-6 h-6 mr-2" />
              Get My Free AI Plan
            </>
          )}
        </Button>
        
        <p className="text-gray-600 text-sm mt-4">
          We'll contact you within 24 hours with a custom automation plan
        </p>
      </div>
    </form>
  );
}