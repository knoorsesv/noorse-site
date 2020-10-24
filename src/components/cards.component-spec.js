import '../output.css'
import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { Card } from './cards'
import Img from 'gatsby-image'

const FakeImage = (props) => <img id="fake-image" {...props} />

describe('Card', () => {
  beforeEach(() => {
    cy.stub(React, 'createElement')
      .callThrough()
      .withArgs(Img)
      .callsFake((constructor, props, children) =>
        React.createElement(FakeImage, props, children)
      )
  })

  describe('Header given', () => {
    it('should show header if present', () => {
      mount(<Card header={'Header'} />)
      cy.get('article').get('h2').contains('Header')
    })

    it('should add image if given', () => {
      mount(<Card header={'Header'} image={{ fluid: 'fluid-image-props' }} />)
      cy.get('article')
        .get('#fake-image')
        .should('have.attr', 'fluid', 'fluid-image-props')
        .should('have.attr', 'alt', 'Card Header Image')
    })
  })

  it('should not show header if not provided', function () {
    mount(<Card />)
    cy.get('article').get('h2').should('not.exist')
  })

  it('should not show image if header is not provided', function () {
    mount(<Card />)
    cy.get('article').get('img').should('not.exist')
  })

  it('should show card content', () => {
    mount(<Card>Content</Card>)
    cy.get('article').contains('Content')
  })
})

describe('Clickable Card', () => {
  it('should wrap card in a11y component', () => {
    //todo: no clue how to really test this
    // const clickableCreator = cy.stub(React, 'createElement')
    //   .callThrough()
    //   .withArgs(Clickable, () => {}, {header: 'Header'})
    //   .callsFake((constructor, props, children) =>
    //     React.createElement((<div>Clickable</div>), props, children),
    //   )
    //
    // mount(<ClickableCard header={'Header'}>Content</ClickableCard>).then(() => {
    //
    //   expect(clickableCreator).to.have.been.called
    // })
  })
})
