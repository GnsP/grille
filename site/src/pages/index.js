import React from 'react'
import Link from 'gatsby-link'
import Cell from 'grill'
import Grid from '../components/Grid'

const Lipsum = ({ title }) => (
  <div className='rect'>
    <h2> {title} </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula, arcu non mattis cursus.
      </p>
  </div>
);

const generate = n => {
  let x = [];
  for (let i = 1; i <= n; i++) {
    x.push(i);
  }
  return x;
}

const IndexPage = () => (
  <Cell span={16}>
    <Grid show={true} />

    <Cell span={14} offset={1}>
      <Cell span={2}>
        <Lipsum title='Title One' />
      </Cell>
      <Cell span={12}>
        <Cell span={6}>
          <Lipsum title='Title One' />
        </Cell>
        <Cell span={6}>
          <Lipsum title='Title One' />
        </Cell>
        <Cell span={6}>
          <Lipsum title='Title One' />
        </Cell>
        <Cell span={6}>
          <Lipsum title='Title One' />
        </Cell>
      </Cell>

      <Cell span={14}>
        <Cell span={12} offset={1} className='rect'>
          <Cell span={4}>
            <Lipsum title='Title Three' />
          </Cell>
          <Cell span={4}>
            <Lipsum title='Title four' />
          </Cell>
          <Cell span={4}>
            <Lipsum title='Title five' />
          </Cell>
        </Cell>
      </Cell>

      <Cell span={3}>
        <Lipsum title='Title six' />
      </Cell>
      <Cell span={3}>
        <Lipsum title='Title seven' />
      </Cell>
      <Cell span={3} offset={2}>
        <Lipsum title='Title eight' />
      </Cell>
      <Cell span={3}>
        <Lipsum title='Title nine' />
      </Cell>

      <Cell span={8}>
        <Lipsum title='Title ten' />
      </Cell>
      <Cell span={6}>
        <Lipsum title='Title eleven' />
      </Cell>

    </Cell>

    {
      generate(8).map( i => (<Cell span={2}> <Lipsum /> </Cell>) )
    }

    <Grid show={true} />

    <Cell span={16}>
      <div className='rect' style={{textAlign: 'right'}}>
        <strong>Grill</strong> (A CSS flexbox based grid layout system) &copy; 2018, Ganesh Prasad
      </div>
    </Cell>
  </Cell>
)

export default IndexPage
