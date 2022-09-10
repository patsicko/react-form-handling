import React,{useState,useEffect} from 'react';
import Form from "react-bootstrap/Form"
import  Button  from 'react-bootstrap/Button';




const MyForm = (props) => {



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
  e.preventDefault();
  
   props.onSubmit(firstName,lastName,email,password)
 
}

  return (

    <div className='form'>
      <h1>Login</h1>
    
   <Form className='container-sm m-5' onSubmit={handleSubmit}>
    <div ><label htmlFor="firstName">First name</label><Form.Control type="text" value={firstName}  onChange={handleFirstName} id="firstName"  /></div>
    <div className="form-group"><label htmlFor="lastName">Last name</label><Form.Control type="text" value={lastName}  onChange={handleLastName} id="lastName" /></div>
    <div className="form-group"><label htmlFor="email">Email</label><input type="text" value={email} onChange={handleEmail} id="email" className="form-control" /></div>
    <div className="form-group"><label htmlFor="password">Password</label><input type="text" value={password} onChange={handlePassword} id="password" className="form-control" /></div> <br /><br />

   <Button variant="danger" type='submit'>submit</Button>
   </Form>
     
    </div>
  )
}

export default MyForm




// import React,{useState,useEffect} from 'react';
// import Form from "react-bootstrap/Form"




// const MyForm = () => {


//   const [firstName,setFirstName] = useState('');
//   const [lastName,setLastName] = useState('');
//   const [email,setEmail] = useState('');
//   const [password,setPassword] = useState('');

//   const handleSubmit =()=>{
//       console.log()
//   }

// const[address,setAddress]=useState({
//   firstName:"",
//   lastName:"",
//   email:"",
//   password:""
// })




//   return (

//     <div className='form'>
//       <h1>Login</h1>
//    <form className='container-sm m-5' onSubmit={handleSubmit}>
//     <div className="form-group "><label htmlFor="firstName">First name</label><input type="text" 
//     value={address.firstName}  onChange={} id="firstName" className="form-control" /></div>
//     <div className="form-group"><label htmlFor="lastName">Last name</label><input type="text" 
//     value={lastName}  onChange={} id="lastName" className="form-control" /></div>
//     <div className="form-group"><label htmlFor="email">Email</label><input type="text" value={email} 
//     onChange={} id="email" className="form-control" /></div>
//     <div className="form-group"><label htmlFor="password">Password</label><input type="text" value={password} 
//     onChange={(e) => setPassword(e.target.value)} id="password" className="form-control" /></div> <br /><br />

//    <button className='btn btn-sm  btn-primary '  type="submit">submit</button>
//    </form>
     
//     </div>
//   )
// }

// export default MyForm