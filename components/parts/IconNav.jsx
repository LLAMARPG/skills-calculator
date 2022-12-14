// like the class choice iconsimport { useEffect, useState } from 'react'

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
  opacity: 0.35;

  &.active {
    opacity: 1;

    img {
      border: 1px solid chartreuse;
    }
  }
  
  &:not(.disabled):hover {
    cursor: pointer;
    opacity: 1;
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


export const IconNav = (props) => {
    const { name, icon, handleClick, isActive } = props
    
    const handleButtonClick = () => {
        if (typeof handleClick === 'function') {
            handleClick(name)
        }
    }

    const activeClass = isActive ? 'active' : ''

    return (<ButtonWrapper 
        className={activeClass}
        onClick={handleButtonClick} >
        <img src={icon} alt={name} />
    </ButtonWrapper>)
}
