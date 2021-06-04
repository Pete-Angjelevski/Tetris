import styled from 'styled-components'

// import bgImage from './img/bg.png'

export const StyledTetrisWrapper = styled.div`
    width: 100%;
    height: 100%;
    
    background-size: cover;
    overflow: hidden;
`

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }

    button {
        box-sizing: border-box;
        margin: 0 0 20px 0;
        padding: 10px;
        min-height: 20px;
        width: 100%;
        border-radius: 20px;
        border: none;
        color: white;
        background: #333;
        font-family: 'VT323', monospace;
        font-size: 2rem;
        outline: none;
        cursor: cell;
    }
`
