import styled from "styled-components"

export const Container = styled.div`
  margin-top: 30px;
  width: 98vw;
  height: 80vh;
`
export const Loading = styled.div`
  margin-top: 30px;
  width: 98vw;
  height: 80vh;
  border: 5px solid #f3f3f3;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  border-top: 5px solid #555;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute; /* cambiamos de fixed a absolute */
  /* Ponemos el valor de left, bottom, right y top en 0 */
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  margin: auto;
`
