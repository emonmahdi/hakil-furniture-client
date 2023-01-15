import { useEffect, useState } from "react"

const useToken = (email) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if(email){
            fetch(`http://localhost:5000/jwt?email=${email}`,{
                method: "GET",
                headers:{
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data => {
              if(data.accessToken){
                localStorage.setItem('accessToken', data.accessToken)
                setToken(data.accessToken);
              }
            })
        }
    }, [email]);

    return [token]
}

export default useToken;