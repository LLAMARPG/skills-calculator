import styled from "styled-components"

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
        background:url('/images/art/llama-group-1.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        opacity: 0.05;
        z-index: 0;
    }

    * {
        z-index: 1;
    }
`

export const Layout = (props) => {
    const { children } = props
    return (
        <MainWrapper>
            {/* TODO: Header */}
            {children}
            {/* TODO: Footer */}
        </MainWrapper>
    )
}