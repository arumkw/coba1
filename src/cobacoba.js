import React, {useState} from 'react'

export default function Coba () {

    const [state, setstate] = useState(0);


    const ganti = () => {
        setstate(state + 1)
        // masukgak(state + 1)
        console.log(state)
    }
    
    return (
        <div>
            <div>Ini adalah angka : {state}</div>
            <button onClick={() => ganti()}>Tekan disini</button>
        </div>
    )
}