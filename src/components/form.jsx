import React,{useState,useEffect} from 'react';




const MyForm = () => {

  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");


  const handleFirstName=(e)=>{
setFirstName(e.target.value)
  }
  const handleLastName=(e)=>{
    setLastName(e.target.value)
      }

const handleEmail=(e)=>{
  setEmail(e.target.value)
}

const handlePassword=(e)=>{
  setPassword(e.target.value)
}

const handleSubmit=(e)=>{
  console.log(` First name: ${firstName} \n Last name: ${lastName} \n Email: ${email} \n Password: ${password}`);
 e.preventDefault();
}

  return (

    <div>
   <form className='container-sm m-5' onSubmit={handleSubmit}>
    <div className="form-group "><label htmlFor="firstName">First name</label><input type="text" value={firstName}  onChange={handleFirstName} id="firstName" className="form-control" /></div>
    <div className="form-group"><label htmlFor="lastName">Last name</label><input type="text" value={lastName}  onChange={handleLastName} id="lastName" className="form-control" /></div>
    <div className="form-group"><label htmlFor="email">Email</label><input type="text" value={email} onChange={handleEmail} id="email" className="form-control" /></div>
    <div className="form-group"><label htmlFor="password">Password</label><input type="text" value={password} onChange={handlePassword} id="password" className="form-control" /></div> <br /><br />
   <button className='btn btn-sm bg-success btn-primary '  type="submit">submit</button>
   </form>
        
    </div>
  )
}

export default MyForm