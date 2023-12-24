import { useState } from 'react'

function Contact() {

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[subject, setSubject] = useState("")

    const handlefirstNameChange = (event) => {
        console.log(event.target.value)
        setFirstName(event.target.value)
    }

    const handlelastNameChange = (event) => {
        console.log(event.target.value)
        setLastName(event.target.value)
    }

    const handleSubjectChange = (event) => {
        console.log(event.target.value)
        setSubject(event.target.value)
    }

    const onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault()
    }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault() 
            console.log(firstName, lastName, subject)
            }}>

            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" onChange={handlefirstNameChange} />
            <br />
            <br />
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" onChange={handlelastNameChange} />
            <br />
            <br />
            <label for="subject">Subject</label>
            <textarea type="text" id="subject" name="subject" placeholder="Write something.." onChange={handleSubjectChange}></textarea>
            <br />
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
}

  export default Contact