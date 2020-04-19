import React from 'react'
import Layout from '../components/layout'

const NieuwsPage = () => (
  <Layout>
    <div className="h-64">Nieuws</div>
    <div className="bg-black h-12 p-2 group">
        <div className="bg-white m-3 h-2 mt-3 group-hover:bg-red-300"></div>
        <div className="bg-white m-3 h-2 mt-3 group-hover:bg-red-300"></div>

    </div>


    <div className="h-64">Nieuws</div>
    <div className="h-64">Nieuws</div>

  </Layout>
)

export default NieuwsPage
