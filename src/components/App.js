import React, {useState} from "react";
import '../styles/App.css';

const App = () => {
  let[name, setName] = useState("")
  let[email, setEmail] = useState("")
  let[gender, setGender] = useState("Male")
  let[phoneNumber, setPhoneNumber] = useState("")
  let[password, setPassword] = useState("")
  let[error, setError] = useState('')
  let[welcomeMessage, setWelcomeMessage] = useState("")
  
  
  const handleSubmit = (e) =>{
    e.preventDefault();

    //validation check
    if(!name || !email ||!phoneNumber || !password){
      setError("All fields are mandatory")
      setWelcomeMessage('')
    }

    else if(!name.match(/^[a-zA-Z0-9\s]+$/)){
      setError("Name is not alphanumeric")
      setWelcomeMessage('')
    }


    else if(!email.includes('@')){
      setError('Email must contain @');
      setWelcomeMessage('')
    }
    //if gender is not equal to Male Femal and Other than error will come
    //if gender 3no main se kisi ke bhi barabar howa than error will not come
    else if(gender !== 'Male' && gender !== 'Female' && gender !== 'Other'){
      setError('Please identify as male, female, or other')
      setWelcomeMessage('')
    }
    else if(!phoneNumber.match(/^[0-9]+$/)){
      setError('Phone Number must contain only numbers')
      setWelcomeMessage('')
    }

    else if(password.length < 6){
      setError('Password must contain at least 6 characters');
      setWelcomeMessage('');
    }

    else{
      //substrating name from Email
      let UserName = email.split('@')[0]
      setWelcomeMessage(`Hello ${UserName}`)
      setError('');
    }

  };
  return (
    <div id="main">
      Sign Up Form
      <form onSubmit={handleSubmit}>
      <label htmlFor='Name'>Name: </label>
      <input data-testid = 'name' type="text" onChange={(e)=> setName(e.target.value)} />
      <label htmlFor='Email'>Email</label>
      <input data-testid = 'email' type="email" onChange={(e)=>setEmail(e.target.value)}/>
      <label htmlFor='Gender'>Gender</label>
      <select data-testid = 'gender'
      value={gender}
      onChange={(e)=>setGender(e.target.value)}>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <label htmlFor='Phone Number'>Phone Number</label>
      <input data-testid = 'phoneNumber' type="number" onChange={(e)=>setPhoneNumber(e.target.value)}/>

      <label htmlFor='Password'>Password</label>
      <input data-testid = 'password' type="text" onChange={(e)=>setPassword(e.target.value)}/>

      <button data-testid = 'submit' type="submit">Submit</button>
      </form>

    {
      error && <div>{error}</div>
    } 

    {welcomeMessage && <div>{welcomeMessage}</div>}       
      
    </div>
  )
}


export default App;
