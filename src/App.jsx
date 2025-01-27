import './App.css'
import Card from './Card'


  const USER1 = {
    image: "https://via.placeholder.com/150",
    pseudo: "CoolCat123",
    email: "coolcat123@example.com",
    description: "Passionné de jeux vidéo et de technologies, toujours prêt pour une partie de Mario Kart !"
  };

  const USER2 = {
    image: "https://via.placeholder.com/150", 
    pseudo: "NatureLover89",
    email: "naturelover89@example.com",
    description: "Amoureux de la nature et des randonnées, j'aime capturer la beauté du monde avec mon appareil photo."
  };

  const USER3 = {
    image: "https://via.placeholder.com/150", 
    pseudo: "TechGuru42",
    email: "techguru42@example.com",
    description: "Développeur passionné, geek et amateur de science-fiction. Toujours à jour sur les dernières innovations !"
  };

const USERS = [USER1, USER2, USER3];

function ListUsers(){
  return( 
      USERS.map((user, index) => {
        console.log(user);
        return <Card key={index} user={user}/> 
      })
  )
}

function App() {
  return (
    <>
    <h1 className='titre'>Liste des Utilisateurs : </h1>
    <ListUsers/>
   </>
  )
}

export default App
//       <Card image={user.image} pseudo={user.pseudo} email={user.email} description={user.description}/> 
