import bgImg from '../assets/images/art/llama-group-1.jpg'
import styled from "styled-components"
import Image from 'next/image'
import Meta from './Meta'

const MainWrapper = styled.main`
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    background-color: rgba(17,17,17,1);
    
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.05;
        z-index: 0;
    }

    * {
        z-index: 1;
    }
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    z-index: 0;

    img {
        width: 100%;
        height: 100%;
    }
`

export const Layout = (props) => {
    const { children } = props
    return (
        <MainWrapper bg={bgImg}>
            <Meta />
            <Background>
                <Image src={bgImg} alt="background image" fill />
            </Background>
            {/* TODO: Header */}
            {children}
            {/* TODO: Footer */}
        </MainWrapper>
    )
}