import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Grid from '../components/Grid'
import './index.css'
import './style.css'
import 'grille/lib/grill.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Grill Layout System"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div className='global-grid'>
      <Grid />
    </div>
    <Header />
    <div
      style={{
        margin: '0 auto',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
