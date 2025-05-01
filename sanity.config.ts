// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'Web 3 Roster',
  title: 'Web 3 Roster',
  projectId: 'rv7l5v16',
  dataset: 'production',
  plugins: [structureTool()],
  studioBasePath: '/admin',
  schema: {
    types: [
      /* your content types here*/
    ],
  },
})