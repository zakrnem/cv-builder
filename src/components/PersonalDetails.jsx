import { useState } from "react"
import '../styles/PersonalDetails.css'

function PersonalDetails() {
    const [input, setInput] = useState({name: '', email: '', number: '', address: ''})
    const handleInputChange = (field, value) => {
        setInput(prevInput => ({
            ...prevInput,
            [field]: value
        }));
        console.log(input)
    };
    return (
        <div className="personal-details">
            <div className="personal-heading">
                <h2>Personal Details</h2>
                <button><img src="./src/assets/down-svgrepo-com.svg" /></button>
            </div>
            <form>
                <label htmlFor="fullName">Full name</label>
                <input type="text" value={input.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                <label htmlFor="email">Email</label>
                <input type="email" value={input.email} onChange={(e) => handleInputChange('email', e.target.value)} />
                <label htmlFor="phoneNumber">Phone number</label>
                <input type="tel" value={input.number} onChange={(e) => handleInputChange('number', e.target.value)} />
                <label htmlFor="address">Address</label>
                <input type="text" value={input.address} onChange={(e) => handleInputChange('address', e.target.value)} />
            </form>
        </div>
    )
}

export default PersonalDetails