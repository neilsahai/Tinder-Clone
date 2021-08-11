import React, {useState, useEffect} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';
//import { SwipeableDrawer } from '@material-ui/core';
import axios from './axios';


function TinderCards() {
const [people, setPeople] = useState([
    {
        name: "Elon Musk",
        url: "https://fitsmallbusiness.com/wp-content/uploads/2019/10/elon_musk_headshot.jpg"
    },
    {
        name: "Jeff Bezos",
        url: "https://www.adweek.com/wp-content/uploads/2017/04/jeff-bezos-power100-CONTENT-2017.jpg"
    },

]);

// useEffect(() => {
//     async function fetchData() {
//         const req = await axios.get('./tinder/cards');

//         setPeople(req.data);
//     }
//     fetchData();

// }, []);
    const swiped = (direction, nameToDelete) => {
        console.log("removing:" + nameToDelete);
       // setLastDirection(direction)

    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
        
    };

    return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard 
                className = "swipe" 
                key = {person.name} 
                preventSwipe = {["up", "down"]} 
                onSwipe = {(dir) => swiped(dir, person.name)} 
                onCardLeftScreen = {() => outOfFrame(person.name)}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3> {person.name}</h3>
                    </div>


                </TinderCard>
            ))}
        </div>
    </div>
    )
}

export default TinderCards;
