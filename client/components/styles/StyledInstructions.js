import styled from 'styled-components'

export const StyledInstructions = styled.div`
box-sizing: border-box;
display: block;
align-items: center;
margin: 0 auto;
padding: 20px;
border: 4px solid #333;
min-height: 30px;
width: 60%;
border-radius: 20px;
color: ${props => (props.gameOver ? 'red' : '#999')};
background: black;
font-family: 'VT323', monospace;
font-size: 1rem;
text-align: center;

button {
margin: 0 auto;
box-sizing: border-box;
display: block;
border: 4px solid #333;
min-height: 50px;
min-width: 100px ;
border-radius: 20px;
color: red;
background: #969291 ;
font-family: 'VT323', monospace;
font-size: 3rem;


}

button:hover {
    cursor: cell
}

`
