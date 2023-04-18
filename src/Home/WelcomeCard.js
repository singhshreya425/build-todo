import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomeCard = () => {
    const navigate = useNavigate();
const handleSubmit = ()=>{
    localStorage.clear()
    navigate('/')
}

    return (
        <>
        <div className="card mx-auto" style={{'width':'48rem' }}>
      <div className="card-body ">
        <h1 className="card-title h1 my-6"  style={{'fontSize':'3rem','textAlign':'center'}}><b>Welcome to the Party</b></h1>
        <h1 className="card-title h1 my-3">Name - {localStorage.getItem("firstName")}  {localStorage.getItem("LastName")}</h1>
        <h1 className="card-text h1  my-3">Email -{localStorage.getItem("email")}</h1>
        <h1 className="card-text h1  my-3">Contact-{localStorage.getItem("Phone")}</h1>
        <button className="btn btn-primary" onClick={handleSubmit}>Clear All </button>
      </div>
    </div>
      </>
      )
    }


export default WelcomeCard