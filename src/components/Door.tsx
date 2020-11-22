import React, { useEffect, useState } from 'react';
import './Door.css';
import { Link, Redirect, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import Light from './Light';
import { ReactComponent as Border } from './svg/mistletoeborder.svg';
import Challenge from '../api/Challange';
import Axios from 'axios';



const Door = () => {
    let { doorNumber } = useParams();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [challange, setChallange] = useState<Challenge>();

    useEffect(() => {
        Axios.get<Challenge>(`http://10.205.4.110:8080/challenges/${doorNumber}`, { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } })
            .then(response => {
                setChallange(response.data);
                setIsLoading(false)
            })
    }, [doorNumber])


    if (isLoading) {
        return null
    }


    // If opened door is in the future, redirect to root.
    // this is sort of hacky, and can probably be done better.
    if (new Date().getDate() < parseInt(doorNumber)) {
        return <Redirect to="/" />
    }

    if (challange === undefined) {
        return null
    }

    return <main className="DoorWrapper">
        <Light nr={doorNumber} />
        <div className="BorderWrapper">
            <Border className="Border" />
        </div>
        <div className="Door">
            <Link className="BackButton" to="/">&larr; Tilbake til lukene</Link>
            <ReactMarkdown>{challange.markdown}</ReactMarkdown>
            <form>
                <input placeholder="Ditt svar:" />
                <input type="submit" value="Send inn svar" />
            </form>
        </div></main>;
}


export default Door;