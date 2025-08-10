import { defineConfig } from '@sanity/cli'

export default defineConfig({
  projectId: '94v3467t', // Your Sanity project ID
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