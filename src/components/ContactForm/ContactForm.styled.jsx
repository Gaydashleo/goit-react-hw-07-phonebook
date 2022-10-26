import styled from 'styled-components';

export const Form = styled.form`
  max-width: 400px;
  border-radius: 5px;
  
  padding: 10px;
  margin-bottom:35px;
 box-shadow: inset 0 7em 10em -5em rgba(255,255,255,0.6),
    0 0.3em 0.5em -0.2em rgba(100,100,100,1),
    0 1em 2em -0.75em rgba(100,100,100,0.75),
    0 1em 3em -0.5em rgba(100,100,100,0.5),
    0 3em 3em -0.25em rgba(100,100,100,0.2);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

`;

export const Input = styled.input`
  width: 360px;
  margin-top: 2px;
  box-shadow:  inset 0 7em 10em -5em rgba(255,255,255,0.6),
    0 0.3em 0.5em -0.2em rgba(100,100,100,1),
    0 1em 2em -0.75em rgba(100,100,100,0.75),
    0 1em 3em -0.5em rgba(100,100,100,0.5),
    0 3em 3em -0.25em rgba(100,100,100,0.2);
`;

export const Button = styled.button`
  cursor: pointer;
  box-shadow:  inset 0 7em 10em -5em rgba(255,255,255,0.6),
    0 0.3em 0.5em -0.2em rgba(100,100,100,1),
    0 1em 2em -0.75em rgba(100,100,100,0.75),
    0 1em 3em -0.5em rgba(100,100,100,0.5),
    0 3em 3em -0.25em rgba(100,100,100,0.2);
`;
