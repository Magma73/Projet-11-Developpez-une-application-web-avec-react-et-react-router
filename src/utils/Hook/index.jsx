import { useState, useEffect } from 'react'

function UseFetch(url) {
    const [logementsList, setLogementsList] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchLogements() {
            try {
                const response = await fetch(`http://localhost:3000/datas/logements.json`)
                const logementsList = await response.json()
                setLogementsList(logementsList)
            } catch (err) {
                console.log('===== error =====', err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchLogements()
    }, [url])
    return { isLoading, logementsList, error }
}

export default UseFetch