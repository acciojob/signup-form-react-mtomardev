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
      setError('Please identify as male, female or others')
      setWelcomeMessage('')
    }
    else if(!phoneNumber.match(/^[0-9]+$/)){
      setError('Phone Number must contain only numbers')
      setWelcomeMessage('')
    }

    else if(password.length < 6){
      setError('Password must contain atleast 6 letters');
      setWelcomeMessage('');
    }

    else{
      //substrating name from Email
      let User = email.split('@')[0]
      let UserName = User.toUpperCase();
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
         <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
      </select>
      <label htmlFor='Phone Number'>Phone Number</label>
      <input data-testid = 'phoneNumber' type="number" 
      onChange={(e)=>setPhoneNumber(e.target.value)}/>

      <label htmlFor='Password'>Password</label>
      <input data-testid = 'password' type="text" onChange={(e)=>setPassword(e.target.value)}/>

      <button data-testid = 'submit' type="submit">Submit</button>
      </form>

    {
      error && <div><span>{error}</span></div>
    } 

    {welcomeMessage && <div><h2>{welcomeMessage}</h2></div>}       
      
    </div>
  )
}


export default App;
