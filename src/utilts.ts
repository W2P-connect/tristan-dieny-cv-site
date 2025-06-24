export function clx(
  ...inputs: Array<string | undefined | false | null | 0 | Record<string, boolean> | string[]>
): string {
  return inputs
    .flatMap((input) => {
      if (typeof input === 'string') return input
      if (Array.isArray(input)) return input
      if (typeof input === 'object' && input !== null) {
        return Object.entries(input)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key)
      }
      return []
    })
    .filter(Boolean)
    .join(' ')
}

export const getURL = (path: string = '', id?: string) => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim() !== ''
      ? process.env.NEXT_PUBLIC_SITE_URL
      : process?.env?.NEXT_PUBLIC_VERCEL_URL && process.env.NEXT_PUBLIC_VERCEL_URL.trim() !== ''
        ? process.env.NEXT_PUBLIC_VERCEL_URL
        : 'http://localhost:3100/'

  url = url.replace(/\/+$/, '')
  url = url.includes('http') ? url : `https://${url}`
  path = path.replace(/^\/+/, '')

  return path ? `${url}${id ? `#${id}` : ''}/${path}` : url
}



export function mayJsonStringify(value: any, defaultValue: any = null): any {
  try {
    return JSON.stringify(value);
  } catch (e) {
    return defaultValue;
  }
}
