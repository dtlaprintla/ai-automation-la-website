'use client';

import { useState } from 'react';
import { X, Phone, Mail, Building, Users, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { integrations } from '@/data/integrations';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  businessSize: string;
  biggestChallenge: string;
  timeline: string;
  additionalDetails: string;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    businessSize: '',
    biggestChallenge: '',
    timeline: '',
    additionalDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Prepare webhook payload
      const webhookPayload = {
        ...formData,
        submittedAt: new Date().toISOString(),
        source: 'AI Automation LA Website - Popup',
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct',
        formType: 'popup'
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
      
      // Reset form and close popup after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          companyName: '',
          industry: '',
          businessSize: '',
          biggestChallenge: '',
          timeline: '',
          additionalDetails: ''
        });
        setSubmitStatus('idle');
        onClose();
      }, 3000);

    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-n8n-bg-primary rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-n8n-border">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-n8n-border">
            <div>
              <h2 className="text-2xl font-medium text-n8n-text-primary">Get Your Free AI Plan</h2>
              <p className="text-n8n-text-secondary mt-1">Tell us about your business needs</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-n8n-bg-secondary rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-n8n-text-secondary" />
            </button>
          </div>

          {/* Success State */}
          {submitStatus === 'success' && (
            <div className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-brand-primary mx-auto mb-4" />
              <h3 className="text-2xl font-medium text-n8n-text-primary mb-2">Thank You!</h3>
              <p className="text-n8n-text-secondary text-lg mb-4">
                We've received your information and will contact you within 24 hours.
              </p>
              <p className="text-n8n-text-secondary">
                Check your email for our LA Business Automation Guide!
              </p>
            </div>
          )}

          {/* Form */}
          {submitStatus !== 'success' && (
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="(323) 555-0123"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Acme Industries"
                  />
                </div>
              </div>

              {/* Business Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Industry *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select your industry</option>
                    <option value="Dental">Dental Practice</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Legal">Legal Services</option>
                    <option value="Home Services">Home Services</option>
                    <option value="Restaurant">Restaurant/Hospitality</option>
                    <option value="E-commerce">E-commerce/Retail</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Professional Services">Professional Services</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Business Size *
                  </label>
                  <select
                    name="businessSize"
                    value={formData.businessSize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select business size</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-25">6-25 employees</option>
                    <option value="26-100">26-100 employees</option>
                    <option value="100+">100+ employees</option>
                  </select>
                </div>
              </div>

              {/* Business Challenge */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Biggest Business Challenge *
                  </label>
                  <select
                    name="biggestChallenge"
                    value={formData.biggestChallenge}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select your biggest challenge</option>
                    <option value="Too many missed calls">Too many missed calls</option>
                    <option value="Manual data entry">Manual data entry</option>
                    <option value="Lead follow-up">Lead follow-up</option>
                    <option value="Customer service">Customer service</option>
                    <option value="Scheduling coordination">Scheduling coordination</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Implementation Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP (within 1 month)">ASAP (within 1 month)</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Just exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                  Tell us about your automation needs
                </label>
                <textarea
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-n8n-bg-secondary border border-n8n-border rounded-lg text-n8n-text-primary focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="What processes would you like to automate?"
                />
              </div>

              {/* Error State */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                    <p className="text-red-400">
                      {errorMessage || 'Something went wrong. Please try again.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 bg-n8n-bg-secondary hover:bg-n8n-bg-secondary/80 text-n8n-text-primary border border-n8n-border rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-brand-primary hover:bg-brand-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Phone className="w-5 h-5" />
                      Get My Free Consultation
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-n8n-text-secondary text-sm text-center">
                We'll contact you within 24 hours with a custom automation plan
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}