import styled from "styled-components"
import sortSvg from "../../assets/images/sort.svg"
import filterSvg from "../../assets/images/filter.svg"
import createSvg from "../../assets/images/create.svg"

export const Filter = styled.button`
  background-color: #dcd9d9;
  justify-content: center;
  position: absolute;
  width: 140px;
  height: 35px;
  left: 46px;
  top: 102px;
  background-image: url(${filterSvg});
  background-repeat: no-repeat;
  background-position: 107px 7px;
  border-color: #d0d0d0;
`
export const Sort = styled.button`
  background-color: #dcd9d9;
  display: flex;
  justify-content: center;
  background-image: url(${sortSvg});
  background-repeat: no-repeat;
  background-position: 107px 7px;
  position: absolute;
  width: 140px;
  height: 35px;
  left: 206px;
  top: 102px;
  border-color: #d0d0d0;
`
export const Container = styled.div`
  background-color: #5c5c5c;
  height: auto;
  padding: 1vw;
`
export const DivButtons = styled.div`
  background-color: #5c5c5c;
  height: 60px;
`

export const DivEvents = styled.div`
  background-color: #5c5c5c;
  height: auto;
  display: flex;
  flex: 1 0 auto;
  flex-wrap: wrap;
  width: 100%;
  padding: 1vw;
  justify-content: flex-start;
`
export const DivCreate = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
`
export const Create = styled.button`
  color: #5c5c5c;
  width: 141px;
  height: 37px;
  background: #ffffff;
  border-radius: 15px;
  border-style: none;
  margin-right: 5px;
`
export const TextCreate = styled.p`
  width: 134px;
  height: 19px;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #000000;
  text-align: center;
  margin-top: 7px;
`
export const CreateAdd = styled.button`
  width: 55px;
  height: 65px;
  background-color: transparent;
  border-style: none;
  background-image: url(${createSvg});
  background-repeat: no-repeat;
  background-position: 0 7px;
`
