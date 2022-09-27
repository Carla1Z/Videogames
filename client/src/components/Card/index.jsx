import styles from "./Card.module.css"

function Card({image, name, genres}){
    return(
        <div className={styles.card}>
            <h3>{name}</h3>
            <img src={image} alt="videogame" />
            <p>{genres}</p>
        </div>
    )
}

export default Card;