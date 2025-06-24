import type { MetadataRoute } from 'next'
import { getURL } from './utilts'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${getURL('sitemap.xml')}`,
  }
}
