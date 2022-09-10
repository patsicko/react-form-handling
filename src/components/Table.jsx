import React,{useState} from 'react';
import MyForm from './form';

const Table = () => {

   const handleData=(firstName,lastName,email,password)=>{
    console.log(` First name: ${firstName} \n Last name: ${lastName} \n Email: ${email} \n Password: ${password}`);
   }



  return (
    <>
    <MyForm onSubmit={handleData}/>
    </>
  )
}

export default Table