import { defineConfig } from '@sanity/cli'

export default defineConfig({
  projectId: 'your-project-id', // You'll get this when creating Sanity project
  dataset: 'production',
  
  plugins: [
    'deskTool',
    'visionTool'
  ],

  tools: (prev, { dataset }) => {
    const isDev = dataset !== 'production'
    if (isDev) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  }
})