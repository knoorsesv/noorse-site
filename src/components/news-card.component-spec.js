import { NewsCard } from './news-card'
import { mount } from 'cypress-react-unit-test'
import React from 'react'
import '../output.css'

describe('News Card', () => {
  let newsNode

  const NEWS_NODE = {
    title: 'News Title',
    category: { naam: 'Nieuwscategorie' },
    body: {
      json: { content: [{ content: '' }] },
    },
  }

  beforeEach(() => {
    mount(<NewsCard newsNode={newsNode}></NewsCard>)
  })

  describe('news item with publish date', () => {
    before(() => {
      newsNode = {
        ...NEWS_NODE,
        publishDate: '13/02/20',
      }
    })

    it('shows news info', () => {
      cy.contains('News Title')
      cy.contains('Nieuwscategorie')
      cy.contains('13/02/20')
    })

    it('matches snapshot', () => {
      cy.get('body').parentsUntil('article').matchImageSnapshot('news-card')
    })
  })

  describe('news item without publishdate', () => {
    before(() => {
      newsNode = {
        ...NEWS_NODE,
        createdAt: '20/05/19',
      }
    })

    it('shows created at instead', () => {
      cy.contains('20/05/19')
    })
  })
})
