import "./Card.css";

function Card({user}){
    return (
        <article className="card">
            <img src={user.image} alt="photo de profil" />
            <h2>{user.pseudo}</h2>
            <h3>{user.email}</h3>
            <p>{user.description}</p>
        </article>
    )
}
export default Card;