import styled from 'styled-components'

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(30vw / ${props => props.width})
     );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 10px solid #333;
    border-radius: 3%;
    width: 100%;
    max-width: 25vw;
    background: #111;
    
`
