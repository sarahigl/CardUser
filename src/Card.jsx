import "./Card.css";
import Like from './Like'
import { useState } from 'react'

function Card({image, pseudo, email, description, genre}){
    const [event, setEvent] = useState(null)
    return (
      <article className={'border '+genre} onMouseOver={(event)=>{event.target.classList.add('border')}} onMouseLeave={(event)=>{event.target.classList.remove('border')}}>
        <img src={image} alt="avatar"/>
        <h2>{pseudo}</h2>
        <h3>{email}</h3>
        <p>{description}</p>
        <Like/>
      </article>
    )
  }
export default Card;