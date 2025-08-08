'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/config/branding';
import { 
  Calculator, 
  DollarSign, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  AlertCircle
} from 'lucide-react';
import Button from '@/components/ui/Button';

interface CalculatorInputs {
  employees: number;
  avgHourlyWage: number;
  hoursPerWeek: number;
  missedCallsPerDay: number;
  avgDealValue: number;
  closeRate: number;
  manualTasksHours: number;
  industry: string;
}

interface ROIResults {
  currentCosts: {
    laborCost: number;
    missedRevenue: number;
    inefficiencyTime: number;
    totalAnnualCost: number;
  };
  automationBenefits: {
    timeSaved: number;
    revenueRecovered: number;
    efficiencyGains: number;
    totalAnnualSavings: number;
  };
  investment: {
    setupCost: number;
    monthlyFee: number;
    annualInvestment: number;
  };
  roi: {
    netBenefit: number;
    roiPercentage: number;
    paybackMonths: number;
    fiveYearValue: number;
  };
}

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employees: 5,
    avgHourlyWage: 20,
    hoursPerWeek: 10,
    missedCallsPerDay: 8,
    avgDealValue: 2500,
    closeRate: 25,
    manualTasksHours: 15,
    industry: 'dental'
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const industryMultipliers = {
    dental: { closeRate: 1.2, dealValue: 1.0, efficiency: 1.3 },
    realestate: { closeRate: 1.0, dealValue: 1.5, efficiency: 1.2 },
    homeservices: { closeRate: 1.1, dealValue: 1.0, efficiency: 1.4 },
    restaurant: { closeRate: 1.3, dealValue: 0.6, efficiency: 1.5 },
    professional: { closeRate: 1.1, dealValue: 1.2, efficiency: 1.2 },
    ecommerce: { closeRate: 1.0, dealValue: 0.8, efficiency: 1.6 }
  };

  const calculateROI = (): ROIResults => {
    const multiplier = industryMultipliers[inputs.industry as keyof typeof industryMultipliers] || industryMultipliers.dental;
    
    // Current Costs
    const laborCost = inputs.employees * inputs.avgHourlyWage * inputs.hoursPerWeek * 52;
    const missedCalls = inputs.missedCallsPerDay * 365;
    const missedRevenue = missedCalls * (inputs.avgDealValue * (inputs.closeRate / 100)) * multiplier.closeRate;
    const inefficiencyTime = inputs.manualTasksHours * inputs.avgHourlyWage * 52;
    const totalAnnualCost = laborCost + missedRevenue + inefficiencyTime;

    // Automation Benefits
    const timeSaved = laborCost * 0.6 * multiplier.efficiency; // 60% time savings with industry multiplier
    const revenueRecovered = missedRevenue * 0.8; // 80% of missed calls recovered
    const efficiencyGains = inefficiencyTime * 0.75; // 75% efficiency improvement
    const totalAnnualSavings = timeSaved + revenueRecovered + efficiencyGains;

    // Investment Costs
    const setupCost = inputs.employees <= 5 ? 2997 : inputs.employees <= 15 ? 6997 : 15997;
    const monthlyFee = inputs.employees <= 5 ? 497 : inputs.employees <= 15 ? 997 : 1997;
    const annualInvestment = setupCost + (monthlyFee * 12);

    // ROI Calculations
    const netBenefit = totalAnnualSavings - annualInvestment;
    const roiPercentage = ((totalAnnualSavings - annualInvestment) / annualInvestment) * 100;
    const paybackMonths = annualInvestment / (totalAnnualSavings / 12);
    const fiveYearValue = (totalAnnualSavings * 5) - (setupCost + (monthlyFee * 60));

    return {
      currentCosts: {
        laborCost,
        missedRevenue,
        inefficiencyTime,
        totalAnnualCost
      },
      automationBenefits: {
        timeSaved,
        revenueRecovered,
        efficiencyGains,
        totalAnnualSavings
      },
      investment: {
        setupCost,
        monthlyFee,
        annualInvestment
      },
      roi: {
        netBenefit,
        roiPercentage,
        paybackMonths,
        fiveYearValue
      }
    };
  };

  const handleCalculate = () => {
    const calculatedResults = calculateROI();
    setResults(calculatedResults);
    setShowResults(true);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
    setShowResults(false);
  };

  return (
    <main className="min-h-screen bg-n8n-bg-primary">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-6 py-3 mb-8">
              <Calculator className="w-5 h-5 mr-2" />
              Free ROI Calculator
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Calculate Your AI
              <span className="block gradient-text-white">Automation ROI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
              Discover exactly how much <strong>time and money</strong> AI automation can save your LA business. 
              Get your personalized ROI report in under 2 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Input Form */}
            <div className="bg-n8n-bg-secondary rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-n8n-text-primary mb-6 flex items-center">
                <Calculator className="w-6 h-6 mr-3 text-brand-primary" />
                Your Business Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Industry
                  </label>
                  <select
                    value={inputs.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full p-3 bg-n8n-bg-primary border border-gray-600 rounded-lg text-n8n-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  >
                    <option value="dental">Dental Practice</option>
                    <option value="realestate">Real Estate</option>
                    <option value="homeservices">Home Services</option>
                    <option value="restaurant">Restaurant/Hospitality</option>
                    <option value="professional">Professional Services</option>
                    <option value="ecommerce">E-commerce/Retail</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                      Number of Employees
                    </label>
                    <input
                      type="number"
                      value={inputs.employees}
                      onChange={(e) => handleInputChange('employees', parseInt(e.target.value) || 0)}
                      className="w-full p-3 bg-n8n-bg-primary border border-gray-600 rounded-lg text-n8n-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      min="1"
                      max="100"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                      Average Hourly Wage ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.avgHourlyWage}
                      onChange={(e) => handleInputChange('avgHourlyWage', parseFloat(e.target.value) || 0)}
                      className="w-full p-3 bg-n8n-bg-primary border border-gray-600 rounded-lg text-n8n-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      min="10"
                      max="100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Hours per week spent on manual tasks
                  </label>
                  <input
                    type="number"
                    value={inputs.hoursPerWeek}
                    onChange={(e) => handleInputChange('hoursPerWeek', parseFloat(e.target.value) || 0)}
                    className="w-full p-3 bg-n8n-bg-primary border border-gray-600 rounded-lg text-n8n-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    min="1"
                    max="80"
                  />
                  <p className="text-xs text-n8n-text-secondary mt-1">
                    Data entry, appointment booking, follow-ups, etc.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                      Missed Calls Per Day
                    </label>
                    <input
                      type="number"
                      value={inputs.missedCallsPerDay}
                      onChange={(e) => handleInputChange('missedCallsPerDay', parseInt(e.target.value) || 0)}
                      className="w-full p-3 bg-n8n-bg-primary border border-gray-600 rounded-lg text-n8n-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      min="0"
                      max="50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                      Average Deal Value ($)
                    </label>
                    <input
                      type="number"
                      value={inputs.avgDealValue}
                      onChange={(e) => handleInputChange('avgDealValue', parseFloat(e.target.value) || 0)}
                      className="w-full p-3 bg-n8n-bg-primary border border-gray-600 rounded-lg text-n8n-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      min="100"
                      max="50000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-n8n-text-primary mb-2">
                    Lead to Customer Close Rate (%)
                  </label>
                  <input
                    type="number"
                    value={inputs.closeRate}
                    onChange={(e) => handleInputChange('closeRate', parseFloat(e.target.value) || 0)}
                    className="w-full p-3 bg-n8n-bg-primary border border-gray-600 rounded-lg text-n8n-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    min="1"
                    max="100"
                  />
                </div>

                <Button 
                  onClick={handleCalculate}
                  size="lg"
                  fullWidth
                  className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate My ROI
                </Button>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-n8n-bg-secondary rounded-2xl shadow-xl p-8">
              {!showResults ? (
                <div className="text-center py-16">
                  <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-n8n-text-primary mb-2">
                    Enter Your Information
                  </h3>
                  <p className="text-n8n-text-secondary">
                    Fill out the form and click "Calculate My ROI" to see your personalized results
                  </p>
                </div>
              ) : results && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-n8n-text-primary mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
                    Your ROI Results
                  </h2>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-500">
                        {results.roi.roiPercentage > 0 ? `${Math.round(results.roi.roiPercentage)}%` : 'N/A'}
                      </div>
                      <div className="text-sm text-n8n-text-secondary">Annual ROI</div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-500">
                        {results.roi.paybackMonths > 0 ? `${Math.round(results.roi.paybackMonths)}` : 'N/A'} mo
                      </div>
                      <div className="text-sm text-n8n-text-secondary">Payback Period</div>
                    </div>
                  </div>

                  {/* Annual Savings Breakdown */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-n8n-text-primary">Annual Benefits</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-n8n-bg-primary rounded-lg">
                        <span className="text-n8n-text-secondary">Time Savings</span>
                        <span className="font-bold text-green-500">+{formatCurrency(results.automationBenefits.timeSaved)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-n8n-bg-primary rounded-lg">
                        <span className="text-n8n-text-secondary">Revenue Recovery</span>
                        <span className="font-bold text-green-500">+{formatCurrency(results.automationBenefits.revenueRecovered)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-n8n-bg-primary rounded-lg">
                        <span className="text-n8n-text-secondary">Efficiency Gains</span>
                        <span className="font-bold text-green-500">+{formatCurrency(results.automationBenefits.efficiencyGains)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg">
                        <span className="font-semibold text-n8n-text-primary">Total Annual Savings</span>
                        <span className="font-bold text-xl text-green-500">{formatCurrency(results.automationBenefits.totalAnnualSavings)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Investment */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-n8n-text-primary">Investment Required</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-n8n-bg-primary rounded-lg">
                        <span className="text-n8n-text-secondary">Setup Cost</span>
                        <span className="font-bold text-n8n-text-primary">{formatCurrency(results.investment.setupCost)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-n8n-bg-primary rounded-lg">
                        <span className="text-n8n-text-secondary">Monthly Fee × 12</span>
                        <span className="font-bold text-n8n-text-primary">{formatCurrency(results.investment.monthlyFee * 12)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-500/20 border border-orange-500/30 rounded-lg">
                        <span className="font-semibold text-n8n-text-primary">Total Year 1 Investment</span>
                        <span className="font-bold text-xl text-orange-500">{formatCurrency(results.investment.annualInvestment)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Net Benefit */}
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">
                      {formatCurrency(results.roi.netBenefit)}
                    </div>
                    <div className="text-n8n-text-secondary mb-4">Net Benefit Year 1</div>
                    <div className="text-lg font-semibold text-n8n-text-primary">
                      5-Year Value: {formatCurrency(results.roi.fiveYearValue)}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 border border-brand-primary/30 rounded-lg p-6 text-center">
                    <h4 className="text-lg font-bold text-n8n-text-primary mb-3">
                      Get Your Custom Automation Plan
                    </h4>
                    <p className="text-n8n-text-secondary mb-4 text-sm">
                      See exactly how we'll achieve these results for your {inputs.industry} business
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        size="sm"
                        className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Get Free Plan
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call {BRAND.phone}
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-n8n-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center text-yellow-500 mb-2">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">Important Note</span>
          </div>
          <p className="text-n8n-text-secondary text-sm">
            These calculations are estimates based on industry averages and your inputs. Actual results may vary 
            depending on your specific business circumstances, implementation quality, and market conditions. 
            We offer a 90-day ROI guarantee on all automation implementations.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}