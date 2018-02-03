import React from 'react'
import Link from 'gatsby-link'
import Cell from 'grille'

const Header = () => (
  <Cell span={16} className='demo-header rect'>
    <Cell span={14} offset={1}>
      <header>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
            }}
          >
            Grill
          </Link>
        </h1>
      </header>
    </Cell>
  </Cell>
)

export default Header
