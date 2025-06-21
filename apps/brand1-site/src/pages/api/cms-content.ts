import type { APIRoute } from 'astro'

export const get: APIRoute = () => {
  // Mock CMS content response
  return {
    body: JSON.stringify({
      title: 'Sample CMS Content',
      description: 'This is a sample content fetched from CMS.',
      items: [
        { id: 1, name: 'Item One' },
        { id: 2, name: 'Item Two' },
        { id: 3, name: 'Item Three' },
      ],
    }),
  }
}
