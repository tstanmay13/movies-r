import React from 'react';
import poster from "../assets/poster.jpg"
import IndividualMovie from '../components/IndividualMovie';
import { useParams} from 'react-router';



const MovieDesc = () => {
    // const {id} = useParams();

    return (
            // <IndividualMovie id={id}/>
            <IndividualMovie/>
    );
}

export default MovieDesc;
