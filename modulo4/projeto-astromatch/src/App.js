import React, {useState, useEffect} from "react";
import axios from "axios";

export default function App() {

  const [photo, setPhoto] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [age, setAge] = useState('')


  useEffect(() => {
  getProfileToChoose()
}, [])
  

const getProfileToChoose = () => {

  axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
    .then((res) => {
console.log(res.data)
setName(res.data.profile.name)
setDescription(res.data.profile.bio)
setAge(res.data.profile.age)
setPhoto(res.data.profile.photo)
  })
    .catch(err => console.log(err.response.data))
  }

  return (
    <div>
     
      <img scr={photo}></img>
      <button>Like</button>
      <button>Deslike</button>
    </div>
  

  );
}
