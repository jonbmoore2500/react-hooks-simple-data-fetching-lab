import React, { useState, useEffect } from "react"

function App() {
    const [dogUrl, setDogUrl] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(data => {
            setDogUrl(data.message)
            setIsLoaded(true)
        })
    }, [])


    if (!isLoaded) return <p>Loading...</p>

    return (
        <img src={dogUrl} alt="A Random Dog"/>
    )
}




export default App
