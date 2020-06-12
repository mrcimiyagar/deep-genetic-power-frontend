import React from 'react'
import ReactDOM from 'react-dom'
import Input from '../components/Input';
import role from '../roleWrapper';

export default function Login(props) {
    return (
        <div style={{
            width: '100%',
            height: '100vh'
        }}>
            <div style={{
                width: 300,
                height: 350,
                backgroundColor: '#27293d',
                borderRadius: 16,
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <div style={{
                    width: '100%',
                    top: 96,
                    position: 'absolute'
                }}>
                    <Input
                        id={1}
                        fieldId={'usernameField'}
                        label="نام کاربری"
                        predicted="California"
                        locked={false}
                        active={false}
                    />
                    <Input
                        id={1}
                        fieldId={'passwordField'}
                        label="رمز عبور"
                        predicted="California"
                        locked={false}
                        active={false}
                    />
                </div>

            </div>
            <button style={{
                backgroundColor: "#00D6B4",
                width: 125,
                height: 125,
                border: 'none',
                borderRadius: 62.5,
                outline: 'none',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, calc(-50% - 175px))',
                color: "#27293d",
                fontSize: 20,
                fontFamily: 'sans-serif'
            }}>
              لوگو
            </button>
            <button style={{
                backgroundColor: "#00D6B4",
                width: 150,
                height: 56,
                border: 'none',
                borderRadius: 28,
                outline: 'none',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, calc(-50% + 175px))',
                color: "#27293d",
                fontSize: 20,
                fontFamily: 'sans-serif'
            }}
            onClick={() => {
                const options = { 
                    method: 'post',
                    headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "username": document.getElementById("usernameField").value,
                        "password": document.getElementById("passwordField").value
                    })
                };
                fetch("../auth/login", options)
                   .then(async response => {
                     return await response.json();
                   })
                   .then(res => { 
                       role.value = res.role;
                       if (res.role === 'admin') {
                           props.pageChangerHook('/dashboard/admin');
                       }
                       else if (res.role === 'employee') {
                           props.pageChangerHook('/dashboard/employee');
                       }
                   });
            }}>
              ورود
            </button>
        </div>
    );
}