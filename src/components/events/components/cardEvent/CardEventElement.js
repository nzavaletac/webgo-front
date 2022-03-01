import styled from "styled-components"
import editSvg from "../../../../assets/images/edit.svg"
import deleteSvg from "../../../../assets/images/delete.svg"

export const Card = styled.div`
  background-color: #1e1e1e;
  margin: 1vh 1vw;
  margin-bottom: 3vh;
  border: 1px solid #1e1e1e;
  box-sizing: border-box;
  border-radius: 10px;
  width: 260px;
  height: 375px;
`
export const Edit = styled.button`
  margin-left: 230px;
  margin-top: 6px;
  margin-bottom: 0;
  width: 24px;
  height: 24px;
  background-image: url(${editSvg});
  background-color: transparent;
  border-style: none;
`
export const Delete = styled.button`
  margin-left: 120px;
  width: 24px;
  height: 24px;
  background-image: url(${deleteSvg});
  background-color: transparent;
  border-style: none;
`
export const ImgEvent = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px 30px;
  margin-top: 10px;
`
export const Description = styled.p`
  position: static;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #ffffff;
  margin: 0 5.05%;
  margin-bottom: 5px;
`
export const Title = styled.h5`
  margin-left: 110px;
  margin-top: 0px;
  margin-bottom: 2px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  color: #ffffff;
`
