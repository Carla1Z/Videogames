import axios from 'axios'
import { GET_VIDEOGAMES } from './type'

export function getVideogames(){
    return async(dispatch) => {
        let allVideogames = await axios.get('http://localhost:3001/videogames')
        return dispatch({
            type: GET_VIDEOGAMES,
            payload: allVideogames.data,
        })
    }
}