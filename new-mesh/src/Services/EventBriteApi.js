export const getEventBriteFeed = async () => {
    const res = await fetch `http://localhost:3000/`
    
    const req = await res.json()
    

    console.log(req)
    return req;
}



