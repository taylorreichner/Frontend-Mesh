import React, { useEffect, useState } from 'react';
import EventList from '../Components/allEvents';
import { fetchEvents } from '../Services/eventsApi';

const Feed = () => {
    const [events, setEvents] = useState([])
    console.log(events)
    
useEffect(() => {
    fetchEvents()
    .then(setEvents)
    
},[]);
    
    return (
        <>
        <EventList events={events}/>
        </>
    )

}



export default Feed;