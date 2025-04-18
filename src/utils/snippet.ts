const maxChars = 100

export function createSnippetFromInhoud(inhoud: string) {
  if (!inhoud) {
    return ''
  }
  let snippet = ''
  let i = -1
  const paragraphs = inhoud
    .split('\n')
    .filter((par) => !par.startsWith('#'))
    .filter((par) => par.match(/[A-Za-z]/g))
    .map((par) => par.replace(/[*_]/g, ''))

  while (snippet.length < maxChars && i++ < paragraphs.length - 1) {
    snippet = `${snippet} ${paragraphs[i].substring(
      0,
      Math.min(paragraphs[i].length, maxChars - snippet.length)
    )}`
  }
  snippet += ' ...'
  return snippet
}
