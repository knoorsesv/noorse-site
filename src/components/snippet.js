const maxChars = 100

export function createSnippetFromContentArray(jsonContentArray) {
  let snippet = ''
  let paragraph = -1
  const firstContent = jsonContentArray[0].content
  while (snippet.length < maxChars && paragraph++ < firstContent.length - 1) {
    const paragraphContent = firstContent[paragraph]
    let extraText
    if (paragraphContent.nodeType === 'text') {
      extraText = paragraphContent.value
    }

    if (paragraphContent.nodeType === 'hyperlink') {
      extraText = paragraphContent.content[0].value
    }
    snippet = (snippet + ' ' + extraText).substring(0, maxChars)
  }
  snippet += ' ...'
  return snippet
}

export function createSnippetFromInhoud(inhoud) {
  let snippet = ''
  let i = -1
  const paragraphs = inhoud
    .split('\n')
    .filter((par) => !par.startsWith('#'))
    .filter((par) => par.match(/[A-Za-z]/g))
    .map((par) => par.replace(/[*_]/g, ''))

  while (snippet.length < maxChars && i++ < paragraphs.length) {
    snippet = `${snippet} ${paragraphs[i].substring(
      0,
      Math.min(paragraphs[i].length, maxChars - snippet.length)
    )}`
  }
  snippet += ' ...'
  return snippet
}
