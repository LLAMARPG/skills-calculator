import { useState } from 'react'

import styled from 'styled-components'
import { IconButton } from './IconButton'


const TreeWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;

  z-index: 1;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,1), inset 0 0 20px 0 rgba(255,255,255,0.15);
  border-radius: 3px;
  padding: 24px;
  background: linear-gradient(#0000009F, #0000009F), url(${props => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & > h2 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 18px;
  }
`

const SkillWrapper = styled.li`
  width: 48px;
  height: 48px;
  border: ${props => props.isBlank ? '1px solid rgba(0,0,0,0)' : '1px solid #fff'};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  background-color: #1a1a1a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &.disabled {
    border: 1px solid #444;

    img {
        opacity: 0.5;
    }
  }
`

const SkillTreeWrapper = styled.ul`
  display: flex;
  flex-flow: column;
  list-style: none;
  gap: 24px;
  width: 100%;
`

const SkillTreeRowWrapper = styled.ul`
  display: flex;
  flex-flow: row;
  gap: 24px;
  list-style: none;
  width: 100%;
  justify-content: center;
`


export const SpecTree = (props) => {
    const { spec, totalPoints, setPoints, onCallback } = props

    const handleSkillClick = (skill, amt, action) => {
        if (action === 'add') {
            setPoints(p => p + amt)
        } else if (action === 'remove') {
            setPoints(p => p - amt)
        }
    }

    const handleCallback = (treeName, action) => {
        if (typeof onCallback === "function") onCallback(treeName, action)
    }

    const buildRow = (t, idx) => {
        let cols = []
        for (let i = 0; i < t.cols; i++) {
            const isDisabled = totalPoints < t.points

            const skillClasses = []

            if (isDisabled) skillClasses.push('disabled')

            if (t.skills.find(sk => sk.col === i)) {
                const colSkill = t.skills.find(sk => sk.col === i)

                cols.push(<IconButton 
                    callback={handleCallback}
                    handleChange={handleSkillClick}
                    totalPoints={totalPoints}
                    treePoints={t.points}
                    data={colSkill}
                    classes={skillClasses}
                    active={!isDisabled}
                    key={'col-' + i}/>)
            } else {
                cols.push(<SkillWrapper isBlank={true} key={'col-' + i}></SkillWrapper>)
            }
        }
        return (<li key={'row' + idx}>
            <SkillTreeRowWrapper>
                {cols}
            </SkillTreeRowWrapper>
        </li>)
    }


    return (
        <TreeWrapper bg={spec.background}>
            <h2>{spec.name}</h2>
            <br />
            <SkillTreeWrapper>
                {spec.tree.map(buildRow)}
            </SkillTreeWrapper>
        </TreeWrapper>
    )
}