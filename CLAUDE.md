# AI Automation LA - Project Context

## 🎯 Project Overview
This is the AI Automation LA website - a Done-For-You AI automation agency serving Los Angeles businesses. We specialize in voice agents, chatbots, workflow automation, and customer support AI.

**Live Site**: https://ai-automation-la-website.vercel.app/

## 🚨 CRITICAL WORKFLOW RULES

### 1. Always Start Here
- **FIRST**: Read `PROJECT_STATUS.md` to understand current progress
- **SECOND**: Check the "REMAINING TASKS" section for what needs to be done
- **THIRD**: Review relevant docs in `/docs/` folder based on the task

### 2. Global Styling Rules
- **ALWAYS** use the N8N dark theme CSS variables from `src/styles/global-n8n-theme.css`
- **NEVER** use hardcoded colors like `#0E0918` or `bg-gray-50`
- **USE THESE** CSS variables instead:
  - `bg-n8n-bg-primary` (deep navy background)
  - `bg-n8n-bg-secondary` (elevated surfaces)
  - `text-n8n-text-primary` (white headings)
  - `text-n8n-text-secondary` (lavender body text)
  - `border-n8n-border` (subtle borders)
  - `text-brand-primary` (orange accent)

### 3. Git Workflow
- **ALWAYS** commit and push changes before ending a session
- **USE** descriptive commit messages
- **INCLUDE** professional commit signatures for tracking

### 4. Documentation Updates
- **ALWAYS** update `PROJECT_STATUS.md` after completing tasks
- **MOVE** completed items to the "COMPLETED" section with a checkmark
- **ADD** any new discovered tasks to "REMAINING TASKS"
- **UPDATE** the "Last Updated" timestamp at the bottom

### 5. Content Rules
- **NEVER** include text like "Generated with Claude", "Written by Claude", or any Claude references on the website
- **NEVER** add Claude signatures or attributions to website content
- **NEVER** mention AI authorship in website copy or code comments
- **KEEP** git commit signatures for tracking purposes only

### 6. CRITICAL: Content Protection Rules (SEO Protection)
**🚨 NEVER CHANGE CONTENT DURING STYLING TASKS 🚨**

#### CSS-Only Changes Rules:
- **STYLING REQUESTS**: Only modify CSS files, never change HTML content, headings, or copy
- **PROTECT SEO CONTENT**: Never alter meta titles, descriptions, headings (h1, h2, h3), or body text
- **GLOBAL CSS ONLY**: Use `src/styles/global-n8n-theme.css` for all visual changes
- **NO CONTENT EDITS**: When asked for "styling" or "design" changes, ONLY touch CSS files

#### What You CAN Change (Styling Only):
- ✅ Colors, backgrounds, borders in CSS files
- ✅ Fonts, spacing, margins, padding in CSS
- ✅ Button styles, hover effects, animations
- ✅ Layout positioning (flexbox, grid) in CSS
- ✅ CSS variables and utility classes

#### What You CANNOT Change (Content Protection):
- ❌ Any text content, headlines, or copy
- ❌ Meta tags, titles, descriptions
- ❌ Alt text, button labels, navigation text
- ❌ Service descriptions, pricing, or business info
- ❌ Form labels, placeholder text, or CTAs
- ❌ Blog content, case studies, or testimonials

#### If Content Changes Are Needed:
- **ASK EXPLICITLY**: "This requires content changes, not just CSS. Should I proceed?"
- **GET APPROVAL**: Wait for explicit approval before changing any text
- **SEPARATE TASKS**: Treat content changes as completely separate from styling

#### SEO Protection Rationale:
- Google has indexed current content and meta tags
- Changing content can hurt search rankings
- CSS changes don't affect SEO, content changes do
- Maintain content consistency for user experience

## 📚 Project Documentation

All strategic docs are in `/docs/` folder:

### Marketing & Strategy
- `01-STRATEGY.md` - Core business strategy, USP, and positioning
- `04-MARKETING-PLAN.md` - Complete Meta ads strategy and campaigns
- `05-SEO-KEYWORDS.md` - LA-focused SEO keywords (English & Spanish)
- `07-CUSTOMER-PROFILES.md` - Detailed ideal customer profiles
- `08-PAIN-POINTS-BENEFITS.md` - Customer problems we solve

### Content & Messaging
- `03-CONTENT-COPY.md` - All website copy and messaging templates
- `06-SERVICES-MENU.md` - Service offerings with pricing

### Technical Structure
- `02-SITE-STRUCTURE.md` - Complete sitemap and page hierarchy

## 🛠️ Technical Stack
- **Framework**: Next.js 15.4.6 with TypeScript
- **Styling**: Tailwind CSS + N8N Dark Theme
- **CMS**: Sanity CMS (project ID: 94v3467t)
- **Deployment**: Vercel (auto-deploys from GitHub)
- **Integrations**: 100+ business tool integrations

### 📝 Content Management (Sanity CMS)
- **Sanity Studio**: Located in `/sanity_cms/` folder
- **Project ID**: `94v3467t`
- **Dataset**: `production`
- **Local Studio**: Run `cd sanity_cms && npm run dev` to start studio locally
- **Content Hooks**: Use `useContent` hook from `/src/hooks/useContent.ts` for fetching
- **Static Fallbacks**: All content has static fallbacks in `/src/content/` folder

## 📋 Common Commands
```bash
# Development
npm run dev          # Start dev server

# Before committing
npm run build        # Verify build works
npm run lint         # Check for linting errors

# Sanity CMS
cd sanity_cms && npm run dev  # Start Sanity Studio locally

# Git workflow
git add -A
git commit -m "Your message here"
git push origin main
```

## 🚨 Build Troubleshooting
If Vercel deployments are failing:

1. **Check TypeScript errors** - Most common issues:
   - Missing imports or incorrect import paths
   - Undefined variables being used before declaration
   - Scope issues (functions defined in wrong scope)

2. **Sanity CMS issues**:
   - Ensure no `sanity.config.ts` in root directory (should only be in `/sanity_cms/`)
   - Check that Sanity imports use correct package names

3. **Content Management**:
   - Static content fallbacks should exist in `/src/content/` for all pages
   - `useContent` hook should handle errors gracefully

4. **CSS Override conflicts**:
   - Check `/src/app/vapi-override.css` for conflicting rules
   - Ensure proper CSS specificity with `!important` when needed

## 🎨 Design System
- **Theme**: N8N-inspired dark theme (already activated globally)
- **Primary Colors**: Orange (#EE4F27), Purple (#6B21EF), Blue (#4A9EFF)
- **Background**: Deep navy (#0E0918) with elevated surfaces (#1A1B26)
- **Typography**: Inter font family

## 📱 Key Features
- 100+ business integrations with N8N-style grid
- AI voice agents with 650% ROI messaging
- Case studies from real LA businesses
- Bilingual support (English/Spanish)
- Local LA focus (Vernon, DTLA, Beverly Hills, etc.)

## ⚡ Performance Goals
- PageSpeed score: 90+
- Mobile-first responsive design
- SEO optimized for "AI automation Los Angeles" keywords
- Fast 2-3 week implementation messaging

## 🔄 Session Workflow

1. **Start**: Read PROJECT_STATUS.md
2. **Plan**: Identify tasks from REMAINING TASKS section
3. **Execute**: Complete tasks using global CSS variables
4. **Update**: Update PROJECT_STATUS.md with progress
5. **Commit**: Git add, commit with message, and push
6. **End**: Verify all changes are pushed to GitHub

Remember: This is a production website for a real business. Always maintain professional quality and follow the established design system.