import styled from 'styled-components'

export const Body = styled.body`
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  /*background: #ef8904;*/
  background-image: linear-gradient(to left bottom, #ef8904, #f1a113, #f3b827, #f3cf3c, #f2e554);
  color: #FFF;
  box-shadow: 10px 10px 14px 0px #e5b03d;
`

export const H1 = styled.h1`
  margin: 0;
  padding: 16px;
  display: flex;
  justify-content: flex-start;
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
`

export const Cards = styled.div`
  width: 400px;
  height: 70vh;
  border: 2px solid #FFF;
  box-shadow: 8px 8px 10px 2px #FFF;
  margin: 100px 0 0 55px;
`

export const AlinhaHeader = styled.header`
  display:flex;
  justify-content: space-between;
`

export const CardProfiles = styled.div`
  width: 350px;
  height: 55vh;
  margin-left: 25px;
`

export const Image = styled.img`
  width: 250px;
  height: 220px;
  border-radius: 8px;
  margin-top: 15px;
  box-shadow: 5px 5px 10px 2px #FFF;
`
export const InfoProfile = styled.div`
  width: 260px;
  margin: 0 auto;
  color: #000;
`
export const ImagePeople = styled.img`
  width: 50px;
  height: 50px;
  margin: 8px;
  background-color: #FFF;
  border-radius: 50%;
`

export const CurtImage = styled.img`
  width: 25px;
  height: 25px;
  border: 2px solid black;
  border-radius: 50%;
  padding: 10px;
  margin-right: 10px;
`

export const RejectImage = styled.img`
  height: 50px;
  width: 50px;
`



export const Button =  styled.button`
  width: 100px;
  height: 40px;
  background: #3d7ce2;
  color: #FFF;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin: 16px;
  font-family: 'Times New Roman', Times, serif;
  outline: none;
  :hover {
    font-size: 18px;
    background: #162699;
  }
`
export const CallAction = styled.div`
 margin: 0 auto;
 padding-top: 30vh;
`