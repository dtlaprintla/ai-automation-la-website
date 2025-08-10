// Import existing website content into Sanity CMS
const { createClient } = require('@sanity/client')

// Configure Sanity client
const client = createClient({
  projectId: '94v3467t',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_TOKEN, // You'll need to get this
  apiVersion: '2024-01-01'
})

// Website content to import
const websitePages = [
  {
    _type: 'page',
    title: 'Home',
    slug: { current: 'home', _type: 'slug' },
    heroHeadline: 'Done-For-You AI Automation for Los Angeles Businesses',
    heroDescription: 'We build and manage AI phone agents, chatbots, and workflow automation so you can focus on growing your business. Zero technical knowledge required.',
    content: `Transform your business with AI automation. Book a free consultation to see how we can help.

✓ 24/7 AI phone agents that never miss calls
✓ Smart chatbots that convert visitors to customers  
✓ Automated workflows that save 20+ hours per week
✓ Completely managed - we handle everything

Average Result: Save 20+ hours per week on manual data entry and app switching.`
  },
  
  {
    _type: 'page',
    title: 'Services',
    slug: { current: 'services', _type: 'slug' },
    heroHeadline: 'AI Automation Services Built For LA Businesses',
    heroDescription: 'We handle everything - from building your AI systems to managing them daily. Focus on your business while we handle the technology.',
    content: `Our comprehensive AI automation services include:

AI PHONE AGENTS
- 24/7 call answering and appointment booking
- Lead qualification and customer support
- Bilingual English/Spanish support
- Complete CRM integration

AI CHATBOTS  
- Website visitor engagement and lead capture
- Product recommendations and support tickets
- Multi-platform deployment (website, SMS, social media)
- Advanced conversation flows

WORKFLOW AUTOMATION
- Business app integrations and data synchronization
- Email marketing automation and follow-up sequences  
- Task management and reporting dashboards
- Custom automation solutions`
  },

  {
    _type: 'page', 
    title: 'Pricing',
    slug: { current: 'pricing', _type: 'slug' },
    heroHeadline: 'Simple, Transparent Pricing',
    heroDescription: 'Choose the package that fits your business needs. All plans include setup, training, and ongoing management. No hidden fees.',
    content: `STARTER PACKAGE - $497/month
Setup Fee: $1,997
- 1 AI Phone Agent
- Basic chatbot
- Email automation  
- CRM integration
- Monthly reporting
- Phone & email support

GROWTH PACKAGE - $997/month (MOST POPULAR)
Setup Fee: $2,997
- 2 AI Phone Agents
- Advanced chatbot with AI
- Workflow automation
- Advanced CRM integration
- Weekly reporting  
- Priority phone support
- Custom integrations

ENTERPRISE PACKAGE - $1,997/month
Setup Fee: $4,997
- Unlimited AI agents
- Custom AI solutions
- Advanced workflows
- Multi-location support
- Real-time reporting
- Dedicated account manager
- White-label options

90-day money-back guarantee on all plans.`
  },

  {
    _type: 'page',
    title: 'Contact', 
    slug: { current: 'contact', _type: 'slug' },
    heroHeadline: 'Let\'s Talk About Your Business',
    heroDescription: 'Free consultation to explore how AI automation can help you grow. We\'ll analyze your current processes and show you exactly how much time and money AI automation can save.',
    content: `GET YOUR FREE CONSULTATION

Tell us about your business and we'll create a custom automation plan.

Phone: (323) 555-0123
Email: hello@aiautomationla.com

Address:
4905 S Santa Fe Ave
Vernon, CA 90058

Service Areas:
- Vernon, CA
- Los Angeles, CA  
- Downtown LA
- West LA
- Santa Monica
- Beverly Hills
- Hollywood
- Pasadena
- Long Beach
- Burbank
- Glendale

Business Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Weekend: By appointment only`
  },

  {
    _type: 'page',
    title: 'About',
    slug: { current: 'about', _type: 'slug' },
    heroHeadline: 'Your AI Automation Partners',
    heroDescription: 'Meet the team behind LA\'s premier AI automation service. We build and manage AI solutions so you can focus on growing your business.',
    content: `ABOUT AI AUTOMATION LA

We're a Los Angeles-based AI automation agency specializing in done-for-you business automation solutions. Our mission is simple: help LA businesses save time and increase revenue through intelligent automation.

OUR APPROACH
- 100% managed service - no technical knowledge required
- Custom solutions built for your specific business needs  
- Ongoing support and optimization
- Local LA team that understands your market

WHY CHOOSE US
- 5+ years in business automation
- 90-day money-back guarantee
- 24/7 customer support
- Bilingual English/Spanish service
- Local LA presence

RESULTS OUR CLIENTS SEE
- 85% fewer missed calls
- 60% more qualified leads  
- 40% cost reduction vs hiring staff
- 24/7 availability - never miss opportunities

We serve businesses across Los Angeles, Vernon, and surrounding areas.`
  }
]

// Blog posts to import  
const blogPosts = [
  {
    _type: 'post',
    title: 'How AI Phone Agents Can Transform Your LA Business',
    slug: { current: 'ai-phone-agents-transform-la-business', _type: 'slug' },
    publishedAt: '2024-08-01T10:00:00.000Z',
    content: `AI phone agents are revolutionizing how Los Angeles businesses handle customer communication. Here's how they can transform your operations:

NEVER MISS A CALL AGAIN
Traditional phone systems fail when you're busy, after hours, or during peak times. AI phone agents answer every call instantly, 24/7, ensuring you never lose a potential customer.

INSTANT APPOINTMENT BOOKING
Your AI agent can check your calendar and book appointments in real-time, even when you're sleeping. No more phone tag or missed opportunities.

LEAD QUALIFICATION
Smart AI agents ask the right questions to qualify leads before they reach you, saving time and ensuring you only talk to serious prospects.

BILINGUAL SUPPORT
In LA's diverse market, bilingual support is crucial. Our AI agents speak both English and Spanish fluently.

THE BOTTOM LINE
Businesses using AI phone agents see 85% fewer missed calls and 60% more qualified leads. The technology pays for itself in increased revenue.`
  },

  {
    _type: 'post', 
    title: '5 Signs Your LA Business Needs Automation',
    slug: { current: '5-signs-la-business-needs-automation', _type: 'slug' },
    publishedAt: '2024-07-15T10:00:00.000Z',
    content: `Is your Los Angeles business ready for automation? Here are 5 clear signs it's time to automate:

1. YOU'RE MISSING CALLS DAILY
If you're missing more than 2-3 calls per day, you're losing money. Each missed call represents potential lost revenue.

2. DATA ENTRY TAKES HOURS
Manually entering customer information, updating spreadsheets, and copying data between apps wastes valuable time that could be spent growing your business.

3. FOLLOW-UP IS INCONSISTENT  
If leads slip through the cracks because you forget to follow up, automation can ensure every prospect gets proper attention.

4. STAFF IS OVERWHELMED
When your team spends more time on repetitive tasks than strategic work, it's time to automate the routine stuff.

5. GROWTH IS STALLING
If you want to scale but can't hire fast enough, automation acts as force multiplier for your existing team.

THE SOLUTION
AI automation handles these tasks automatically, freeing you to focus on what matters most: growing your business and serving customers.

Ready to automate? Contact AI Automation LA for a free consultation.`
  }
]

// Function to import content
async function importContent() {
  try {
    console.log('Starting content import...')
    
    // Import pages
    for (const page of websitePages) {
      const result = await client.create(page)
      console.log(`✅ Imported page: ${page.title}`)
    }
    
    // Import blog posts
    for (const post of blogPosts) {
      const result = await client.create(post)  
      console.log(`✅ Imported blog post: ${post.title}`)
    }
    
    console.log('🎉 Content import complete!')
    console.log('Check your Sanity studio - all content should now be available!')
    
  } catch (error) {
    console.error('❌ Import failed:', error)
  }
}

// Run the import
if (require.main === module) {
  importContent()
}

module.exports = { importContent }