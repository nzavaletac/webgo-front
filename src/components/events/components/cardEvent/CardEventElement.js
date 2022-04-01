import styled from "styled-components"
import editSvg from "../../../../assets/images/edit.svg"
import deleteSvg from "../../../../assets/images/delete.svg"
import Chip from "@mui/material/Chip"
export const Card = styled.div`
  background-color: #1e1e1e;
  margin: 1vh 1vw;
  margin-bottom: 3vh;
  border: 1px solid #1e1e1e;
  box-sizing: border-box;
  border-radius: 10px;
  width: 270px;
  height: 430px;

  background-color: #fff;
  color: #00b6f0;
  border: 2px solid #00b6f0;
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
  margin: 0 5.05%;
  margin-bottom: 5px;
  color: #000000;
  height: 48px;
  width: 240px;
`
export const Date = styled.p`
  position: static;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: 0.1px;
  margin: 0 5.05%;
  margin-bottom: 5px;
  color: #000000;
`
export const Title = styled.h5`
  /*margin-left: 110px;
  margin-top: 0px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  text-align: center;*/
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #000000;
  margin: 0 auto;
  text-align: center;
`
export const Tags = styled.div`
  height: 45px;
  width: 240px;
  display: flex;
  justify-content: center;
  margin: 0 12px;
  align-items: center;
`
export const Tag = styled(Chip)`
  margin: 0 2px;
`
