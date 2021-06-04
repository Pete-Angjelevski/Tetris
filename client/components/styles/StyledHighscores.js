import styled from 'styled-components'

export const StyledHighscores = styled.div`

position: absolute;
top: 50%;
left: 30%;
background: black;
color: white;
border: 5px solid grey;
width: 40%;
height: 60%;
overflow: scroll;


button {
  position: absolute;
  top: 1%;
  right: 1%;
  text-decoration: none;
  background: red;
  border: 1px solid white;
  color: white; 
}
 
h1 {
  text-decoration: underline;
  text: center;
  font-size: 2rem;
}

table {
  margin: 0 auto;
  width: 80%;
  font-size: 2rem;
  text: center;

}

thead {
  text-decoration: underline;
}

tbody {
  position: relative; 
  left: 10%;
}


`
