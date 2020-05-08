import React from 'react'
import Layout from '../components/layout'
import { Header } from '../components/headers'

export default ({ pageContext: { ploegNode } }) => {
  return (
    <Layout>
      <Header>{ploegNode.naam}</Header>
      <div className={'grid grid-cols-3'}>
        <div className={'col-span-1 flex flex-col'}>
          <h2 className={'subtitle'}>Info</h2>
          <div className={'flex flex-col'}>
            <div>Coach</div>
            {ploegNode.coach &&
              ploegNode.coach.map((coach) => <span>{coach}</span>)}
            <div>Training</div>
            {ploegNode.training &&
              ploegNode.training.map((training) => <span>{training}</span>)}
          </div>
        </div>
        <div className={'col-span-2 flex flex-col'}>
          <h2 className={'subtitle'}>Kalender</h2>
        </div>
      </div>
    </Layout>
  )
}
