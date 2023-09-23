import { Link } from 'gatsby'
import React from 'react'
import { NotFoundPage } from '../components/pages'
import Layout from '../layouts/layout'

const NotFoundTemplate = () => (
  <Layout>
    <NotFoundPage Link={Link} />
  </Layout>
)

export default NotFoundTemplate
