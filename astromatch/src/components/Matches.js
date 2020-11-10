import React, {useState, useEffect} from 'react'
import axios from 'axios'


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lais-flavio-turing/matches"

function Matches (props) {

  const [profile, setProfile] = useEffect({})

  useEffect(() => {
    axios
      .get(baseUrl)
      .then(response => {
        console.log(response.data.matches)
        setProfile(response.data.matches)
      }).catch(error => {
        console.log(error.message)
      })
  }, [props.idMatches])

  return(
    <div>
      <p><strong>Deu Match!</strong></p>
     <img src={profile.photo} alt="Profile Match"/>
     <p>src={profile.name}</p>
    </div>
  )
}

export default Matches