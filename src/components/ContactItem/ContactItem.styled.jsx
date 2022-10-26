import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
    
  }
  padding-left: 10px;
  font-size: 14px;
  box-shadow: inset 0 7em 10em -5em rgba(255,255,255,0.6),
    0 0.3em 0.5em -0.2em rgba(100,100,100,1),
    0 1em 2em -0.75em rgba(100,100,100,0.75),
    0 1em 3em -0.5em rgba(100,100,100,0.5),
    0 3em 3em -0.25em rgba(100,100,100,0.2);
`;

export const Button = styled.button`
  margin-left: 20px;
  cursor: pointer;
  font-size: 14px;

`;
