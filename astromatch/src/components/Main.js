import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Body, Cards, AlinhaHeader, CardProfiles, ImagePeople, InfoProfile, H1, Image, Button, CallAction, CurtImage, RejectImage} from './styles/styles'
import Login from './Login' 
import Matches from './Matches'
import heart from './assets/heart.png'
import likeHeart from './assets/like_favorite_heart_3524.png'
import marcaX from './assets/marca-x.png'
import xVermelho from './assets/false.png'
import people from './assets/people.png'



const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-flavio-turing/person'

export default function Main(props) {

  const [id, setId]=useState("")
  const [age, setAge]=useState("")
  const [bio, setBio]= useState("")
  const [name, setName]=useState("")
  const [photo, setPhoto]=useState("")
  const [curtido, setCurtido]=useState(false)
  const [rejeitado, setRejeitado]=useState(false)
  const [profiles, setProfiles] = useState({})
  const [matchs, setPageMatchs] = useState("")


  useEffect(() => {
    getAll()
  }, [])

  const getAll = () => {
    axios.get(baseUrl)
    .then((response) => { 
      console.log(response.data.profile)
      setProfiles(response.data.profile)
      setId(response.data.profile.id)
      setAge(response.data.profile.age)
      setBio(response.data.profile.bio)
      setName(response.data.profile.name)
      setPhoto(response.data.profile.photo)
  }).catch(err => {
      console.log(err.message)
    }) 
  }
  
 const onClickLogin = () => {}
  
  const onChangeHeart = () => {
    if(curtido) {
      setCurtido(!curtido)
      getAll()
    }else {
      setCurtido(!curtido)
    }
  }

  const onChangeReject = () => {
    if(rejeitado) {
      setRejeitado(!rejeitado)
      getAll()
    }else{
      setRejeitado(!rejeitado)
    }
  }

const changeCurtido = curtido? (likeHeart) : (heart)
const changeReject = rejeitado? (xVermelho) : (marcaX)
const changePage = () => {
  setPageMatchs(!matchs)
}
const screen = matchs && <Matches idMatches={id} />
//const transitionPage = (screenMain === "main")? (<Main />) : (<Matches />)
 

/*const renderizaProfiles = profiles.map(user => {
  return <div>
        <Image src={user.photo} alt="" />
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.bio}</p>
      </div>
})
*/
  return (
      <Body>
        <Cards>
          <AlinhaHeader>
            <H1>Astromatch</H1>
            <ImagePeople src={people} onClick={changePage} />
            {screen}
          </AlinhaHeader>
            {/*{screenMain === "main"? <Main />: <Matches />}
          {/*{renderizaProfiles}*/}
          <CardProfiles>
            <Image src={photo} alt="" />
            <InfoProfile>
              <span><strong>{name}, {age}</strong></span>
              <p>{bio}</p>
            </InfoProfile>
            <CurtImage onClick={onChangeHeart} src={changeCurtido} alt="Icone de curtidas" />
            <RejectImage onClick={onChangeReject} src={changeReject} alt="Icone de rejeição" />
          </CardProfiles>
        </Cards>
        <CallAction>
          <h2>Procurando personalidades autênticas para conhecer?</h2>
          <Button onClick={onClickLogin}>Login</Button>
          <Button>Cadastrar</Button>
        </CallAction>
        
      </Body>
  )
}


{/*  
   setId(response.data.profile.id)
      setAge(response.data.profile.age)
      setBio(response.data.profile.bio)
      setName(response.data.profile.name)
      setPhoto(response.data.profile.photo)
*/}