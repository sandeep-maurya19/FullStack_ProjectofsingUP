import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Kishan from "./Kishan";


function SingUP() {
    const [name, setname] = useState('');
    const [pass, setpass] = useState('');
    const [email, setemail] = useState('');
    const naviget = useNavigate();
    async function handle() {

        let result = await fetch('http://localhost:8000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, pass }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (result) {
            naviget("/");
        }
        result = await result.json();
        console.log(result);

    }

    function handle1() {
        naviget("/login1");
    }
    return (
        <>
            <Kishan />
            <div style={{
                display: "flex", justifyContent: "center", margin: "20px"
            }}>
                <div style={{ borderRadius: "20px", width: "270px", height: "300px", display: "flex", flexDirection: "column", gap: "30px", backgroundColor: "silver", alignItems: "center" }}>

                    <h1>Sing UP </h1>
                    <input style={{ width: "90%", height: "35px", borderRadius: "10px" }} type="text" placeholder="Enter User Name" value={name} onChange={(e) => {
                        setname(e.target.value);
                    }} />
                    <input style={{ width: "90%", height: "35px", borderRadius: "10px" }} type="text" placeholder="Email@gmail.com" value={email} onChange={(e) => {
                        setemail(e.target.value);
                    }} />
                    <input style={{ width: "90%", height: "35px", borderRadius: "10px" }} type="text" value={pass} onChange={(e) => {
                        setpass(e.target.value);
                    }} placeholder="Password" />

                    <div style={{ display: "flex", gap: "30px" }}>
                        <button type="button" style={{ textAlign: "center", borderRadius: "20px", height: "40px", width: "50%", backgroundColor: "blue" }} onClick={handle}>SingUP</button>
                        <button type="button" style={{ textAlign: "center", borderRadius: "20px", height: "40px", width: "50%", backgroundColor: "blue" }} onClick={handle1}>Login</button>

                    </div>


                </div>
            </div>
        </>
    )
}

export default SingUP;