import { marked, Renderer } from 'marked'
import type { Tokens } from 'marked'
import ctl from '@netlify/classnames-template-literals'
import type { FC, PropsWithChildren } from 'react'

const renderer: Partial<Renderer> = {
  // declare this: typeof Renderer

  list(token: Tokens.List) {
    const ordered = token.ordered
    const start = token.start

    let body = ''
    for (let j = 0; j < token.items.length; j++) {
      const item = token.items[j]
      body += this.listitem?.(item)
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

  listitem(item: Tokens.ListItem) {
    let itemBody = ''

    if (item.task) {
      const checkbox = this.checkbox?.({ checked: !!item.checked })
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

    itemBody += this.parser?.parse(item.tokens, !!item.loose)

    // todo: add a caret icon so it's clear this is collapsible
    return `<li class="group-[.opened]:list-item">${itemBody}</li>\n`
  },
}

marked.use({ renderer })

// todo: type check that these children can only be strings
// todo: add a boolean instead of passing this className
export const MarkDown: FC<
  PropsWithChildren<{ sectionClassNames?: string }>
> = ({ children, ...props }) => {
  if (!children) {
    return null
  }
  return (
    <section
      className={ctl(`prose mb-4 ${props.sectionClassNames}`)}
      dangerouslySetInnerHTML={{
        __html: marked.parse(children as string),
      }}
    ></section>
  )
}
