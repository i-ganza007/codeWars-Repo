export function remove(s: string): string {
  return s.endsWith('!') ? s.slice(0,s.length-1) : s
}
