import { marked } from 'marked'
import ctl from '@netlify/classnames-template-literals'

const renderer = {
  list(token) {
    const ordered = token.ordered
    const start = token.start

    let body = ''
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j]
      body += this.listitem(item)
    }

    const type = ordered ? 'ol' : 'ul'
    const startAttr = ordered && start !== 1 ? ' start="' + start + '"' : ''
    return (
      '<' +
      type +
      startAttr +
      ' class="group" onclick="(element => element.classList.toggle(\'opened\'))(this)">\n' +
      body +
      '</' +
      type +
      '>\n'
    )
  },
  listitem(item) {
    let itemBody = ''
    if (item.task) {
      const checkbox = this.checkbox({ checked: !!item.checked })
      if (item.loose) {
        if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
          item.tokens[0].text = checkbox + ' ' + item.tokens[0].text
          if (
            item.tokens[0].tokens &&
            item.tokens[0].tokens.length > 0 &&
            item.tokens[0].tokens[0].type === 'text'
          ) {
            item.tokens[0].tokens[0].text =
              checkbox + ' ' + item.tokens[0].tokens[0].text
          }
        } else {
          item.tokens.unshift({
            type: 'text',
            raw: checkbox + ' ',
            text: checkbox + ' ',
          })
        }
      } else {
        itemBody += checkbox + ' '
      }
    }

    itemBody += this.parser.parse(item.tokens, !!item.loose)

    return `<li class="group-[.opened]:list-item">${itemBody}</li>\n`
  },
}

marked.use({ renderer })

export const MarkDown = ({ children, ...props }) => {
  return (
    <section
      className={ctl(`prose mb-4 ${props.sectionClassNames}`)}
      dangerouslySetInnerHTML={{
        __html: marked.parse(children),
      }}
    ></section>
  )
}
