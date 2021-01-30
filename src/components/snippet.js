export function createSnippetFromContentArray(jsonContentArray) {
  const maxChars = 100
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
    snippet = (snippet + ' ' + extraText).substr(0, maxChars)
  }
  snippet += ' ...'
  return snippet
}
