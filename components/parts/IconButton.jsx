import { useEffect, useState } from 'react'

import styled from 'styled-components'


const ButtonWrapper = styled.li`
  width: 48px;
  height: 48px;
  border: 1px solid #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  background-color: #1a1a1a;
  position: relative;
  box-sizing: border-box;
  
  &:not(.disabled):hover {
    cursor: pointer;
    img {
      border: 1px solid chartreuse;
    }
  }

  img {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border: 1px solid transparent;
    border-radius: 4px;

    object-fit: cover;
    object-position: center;
  }

  &.disabled {
    border: 1px solid #444;

    img {
        opacity: 0.5;
    }
  }

  p {
    position: absolute;
    top: 100%;
    right: 0;
    font-size: 8px;
    transform: translateY(-150%);
    z-index: 100;
    padding: 2px;
    background-color: #000;
  }
`

const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 100%;
  padding:6px 8px;
  display: flex;
  flex-flow: column;
  gap: 4px;
  background-color: rgba(0,0,0,0.85);
  white-space: nowrap;
  border-radius: 8px;
  border: 2px solid #fff;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.75) , inset 0 0 4px 0 rgba(0,0,9,0.5);
`

const TooltipTitle = styled.h4`
  position: relative;
  font-size: 14px;
  color: #fff;
`

const TooltipRank = styled.h5`
  position: relative;
  font-size: 12px;
  color: #fff;
  margin-bottom: 4px;
  font-weight: 400;
`

const TooltipDescription = styled.div`
  position: relative;
  font-size: 10px;
  color: #ffd100;
`


export const IconButton = (props) => {
    const { data, treePoints, totalPoints, 
        classes, active, handleChange, callback
    } = props

    const { description, name, icon, max, enableTree=null } = data

    const [points, setPoints] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    

    const canIncrease = totalPoints >= treePoints

    const handleCallback = (action) => {
        if (typeof callback === 'function') callback(enableTree, action)
    }
    
    const handleButtonClick = () => {
        if (points < max && canIncrease) {
            const newPoints = points + 1
            if (typeof handleChange === 'function') handleChange(data, 1, 'add')
            setPoints(newPoints)
            if (enableTree) handleCallback('add')
        }/*  else if (points === max) {
            if (typeof handleChange === 'function') handleChange(data, max, 'remove')
            setPoints(0)
            if (enableTree) handleCallback('remove')
        } */
    }

    return (<ButtonWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleButtonClick} className={classes.join(' ')} >
        <img src={icon} alt={name} />
        {active && <p>{points}/{max}</p>}
        {isHovered && <Tooltip>
          <TooltipTitle>{name}</TooltipTitle>
          <TooltipRank>Rank {points}/{max}</TooltipRank>
          <TooltipDescription>{description}</TooltipDescription>
        </Tooltip>}
    </ButtonWrapper>)
}
