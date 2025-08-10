// Simplified content import script
const { createClient } = require('@sanity/client')

// Get token from command line argument
const token = process.argv[2]

if (!token) {
  console.log('❌ Please provide your Sanity token')
  console.log('Usage: node simple-import.js YOUR_TOKEN_HERE')
  process.exit(1)
}

const client = createClient({
  projectId: '94v3467t',
  dataset: 'production',
  useCdn: false,
  token: token,
  apiVersion: '2024-01-01'
})

// Content to import
const pages = [
  {
    _type: 'page',
    _id: 'page-home',
    title: 'Home',
    slug: { current: 'home', _type: 'slug' },
    heroHeadline: 'Done-For-You AI Automation for Los Angeles Businesses',
    heroDescription: 'We build and manage AI phone agents, chatbots, and workflow automation so you can focus on growing your business. Zero technical knowledge required.',
    content: 'Transform your business with AI automation. ✓ 24/7 AI phone agents ✓ Smart chatbots ✓ Automated workflows ✓ Completely managed'
  },
  
  {
    _type: 'page',
    _id: 'page-services',
    title: 'Services',
    slug: { current: 'services', _type: 'slug' },
    heroHeadline: 'AI Automation Services Built For LA Businesses',
    heroDescription: 'We handle everything - from building your AI systems to managing them daily.',
    content: 'AI PHONE AGENTS - 24/7 call answering. AI CHATBOTS - Website engagement. WORKFLOW AUTOMATION - App integrations.'
  },
  
  {
    _type: 'page',
    _id: 'page-pricing',
    title: 'Pricing',
    slug: { current: 'pricing', _type: 'slug' },
    heroHeadline: 'Simple, Transparent Pricing',
    heroDescription: 'Choose the package that fits your business needs. All plans include setup and management.',
    content: 'STARTER $497/month - GROWTH $997/month - ENTERPRISE $1997/month. All with 90-day guarantee.'
  },
  
  {
    _type: 'page',
    _id: 'page-contact',
    title: 'Contact',
    slug: { current: 'contact', _type: 'slug' },
    heroHeadline: 'Let\'s Talk About Your Business',
    heroDescription: 'Free consultation to explore how AI automation can help you grow.',
    content: 'Phone: (323) 555-0123. Email: hello@aiautomationla.com. Address: 4905 S Santa Fe Ave, Vernon, CA 90058'
  }
]

const posts = [
  {
    _type: 'post',
    _id: 'post-ai-phone-agents',
    title: 'How AI Phone Agents Transform LA Businesses',
    slug: { current: 'ai-phone-agents-transform-business', _type: 'slug' },
    publishedAt: new Date().toISOString(),
    content: 'AI phone agents answer every call 24/7, book appointments instantly, and qualify leads automatically.'
  }
]

async function importData() {
  try {
    console.log('🚀 Starting import...')
    
    // Import pages
    for (const page of pages) {
      await client.createOrReplace(page)
      console.log(`✅ Imported: ${page.title}`)
    }
    
    // Import posts
    for (const post of posts) {
      await client.createOrReplace(post)
      console.log(`✅ Imported: ${post.title}`)
    }
    
    console.log('🎉 Import complete! Check your Sanity dashboard.')
    
  } catch (error) {
    console.error('❌ Import failed:', error.message)
  }
}

importData()