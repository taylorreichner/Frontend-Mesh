export const fetchEvents = async () => {
    const res = await fetch('http://localhost:3001/api/v1/events/all')
    const result = await res.json();
    
    return result.map((event) => ({
        id: event.id,
        title: event.title,
        url: event.url,
        date: event.date,
        host: event.host
        
    })
    
    )
    
    

}