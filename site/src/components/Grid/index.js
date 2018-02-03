import React from 'react'
import Cell from 'grille'

const generate = n => {
  let x = [];
  for (let i = 1; i <= n; i++) {
    x.push(i);
  }
  return x;
}

const Grid = ({ show }) => (
  <Cell span={16}>
    {
      generate(16).map( i => <Cell span={1}> <div className='grid-cell'> {show && i} </div> </Cell>)
    }
  </Cell>
)

export default Grid
