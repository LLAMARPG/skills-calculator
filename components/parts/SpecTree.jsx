import Image from 'next/image'
import { useState } from 'react'

import styled from 'styled-components'
import { IconButton } from './IconButton'


const TreeWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;

  z-index: 1;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,1), inset 0 0 20px 0 rgba(255,255,255,0.15);
  border-radius: 3px;
  padding: 24px;

  & > h2 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 24px;
  }
`

const SkillWrapper = styled.li`
  width: 48px;
  height: 48px;
  border: ${props => props.isBlank ? '1px solid rgba(0,0,0,0)' : '1px solid #fff'};
  opacity: ${props => props.isBlank ? '0' : '1'};
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

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: rgba(17,17,17,1);
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 5px 10px 0 rgba(0,0,0,0.75), inset 0 0 20px 0 rgba(255,255,255,0.15);
        background: linear-gradient(#0000006F, #0000006F);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    img {
        opacity: 0.12;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`

export const SpecTree = (props) => {
    const { spec, totalPoints, handleSetTotalPoints, onCallback } = props

    const [points, setPoints] = useState(0)

    const handleSkillClick = (skill, amt) => {
        setPoints(p => p + amt)
        handleSetTotalPoints(amt)
    }

    const handleCallback = (treeName, action) => {
        if (typeof onCallback === "function") onCallback(treeName, action)
    }

    const buildRow = (t, idx) => {
        let cols = []
        for (let i = 0; i < t.cols; i++) {
            const isDisabled = points < t.points

            const skillClasses = []

            if (isDisabled) skillClasses.push('disabled')

            if (t.skills.find(sk => sk.col === i)) {
                const colSkill = t.skills.find(sk => sk.col === i)

                cols.push(<IconButton 
                    callback={handleCallback}
                    handleChange={handleSkillClick}
                    totalPoints={points}
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
        <TreeWrapper>
            <Background>
                <Image src={spec.background} fill alt="background" />
            </Background>

            <h2>{spec.name}</h2>
            
            <SkillTreeWrapper>
                {spec.tree.map(buildRow)}
            </SkillTreeWrapper>
        </TreeWrapper>
    )
}