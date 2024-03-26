import styled from "@emotion/styled";

export const TextBody = styled.p`
  max-width: 100vh;
  /* background-color: #e1f8aa; */
  align-items: center;
  justify-content: center;
  color: #0c4207;
  padding: 45px;
  font-size: 23px;
  margin:0 auto;
`;
export const Refresh = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  position: relative;
  svg {
    width: 50px;
    height: 50px;
  }

`;
export const Description = styled.p`
    background-color: #e1f8aa;
    min-width: 200px;
    position:absolute;
    display: block;
    
    `