import { useState } from 'react'

import styled from 'styled-components'
import { Layout } from '../components/Layout'
import { IconNav } from '../components/parts/IconNav'
import { SpecTree } from '../components/parts/SpecTree'


const SpecWrapper = styled.section`
  display: none;
  flex-flow: column;
  gap: 24px;
  align-items: center;
  margin: 48px 0;

  &.show {
    display: flex;
  }

  & > h3 {
    text-transform: uppercase;
  }
`

const SpecTreeRow = styled.ul`
  display: flex;
  flex-flow: row;
  gap: 24px;
  list-style: none;
  width: 100%;
  justify-content: center;
`

const PageTitle = styled.h1`
  font-size: 48px;
  font-weight: 500;
  margin:48px 0 24px 0;
`

const PointsWrapper = styled.h4`
  font-weight: 400;
  margin-bottom: 24px;
`

const IconNavWrapper = styled.div`
  display: flex;
  flex-flow: row;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin: 48px 0;
`

export default function Home(props) {
  const { classes } = props.data
  
  const [points, setPoints] = useState(0)
  const [activeTrees, setActiveTrees] = useState([])
  const [currentTree, setCurrentTree] = useState('')

  const defaultTree = classes[0]
  const defaultSpec = defaultTree.specializations[0]

  const onCallback = (treeName, action) => {
    if (action === 'add') setActiveTrees(a => [...a, treeName])
    if (action === 'remove') setActiveTrees(a => a.filter(t => t !== treeName))
  }

  const buildActiveTrees = () => {
    const trees = classes.filter(c => activeTrees.includes(c.name))
    return trees.map((tree,idx) => (
      <SpecWrapper key={'activeTree-'+idx} className={currentTree === tree.name ? 'show' : 'hide'}>
        <h3>{tree.name}</h3>

        <SpecTreeRow>
          {tree.specializations.map((spec,specIdx) => (
            <SpecTree
              key={'activeSpec-'+specIdx}
              spec={spec}
              totalPoints={points}
              setPoints={setPoints} />
          ))}
        </SpecTreeRow>
      </SpecWrapper>
    ))
  }

  const handleTreeClick = (treeName) => {
    setCurrentTree(treeName)
  }

  const buildIconNavs = () => {
    const trees = classes.filter(c => activeTrees.includes(c.name))
    return trees.map((tree,idx) => (
      <IconNav
        key={'iconNav-'+idx}
        name={tree.name}
        icon={tree.icon}
        isActive={currentTree === tree.name}
        handleClick={handleTreeClick}
      />
    ))
  }

  return (
    <Layout>
      <PageTitle>Llama RPG: Skill Calculator</PageTitle>
      
      <PointsWrapper>Points Spent: {points}</PointsWrapper>

      <SpecTree  
        onCallback={onCallback}
        spec={defaultSpec}
        totalPoints={points} 
        setPoints={setPoints} />

      <IconNavWrapper>
        {buildIconNavs()}
      </IconNavWrapper>

      {buildActiveTrees()}

    </Layout>
  )
}

export async function getStaticProps(context) {
  // get the json file with the class icons and slugs
  const res = await fetch('http://localhost:3000/api/classes')
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}