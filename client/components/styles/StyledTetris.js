import styled from 'styled-components'

// import bgImage from './img/bg.png'

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("https://i.pinimg.com/originals/3f/a9/fe/3fa9fe249f516ff87909b587f7fefc8e.jpg");
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
`
