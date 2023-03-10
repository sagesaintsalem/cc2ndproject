import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Swal from 'sweetalert2'



const AdoptForm = ({handleAdoption, showAdoptForm, handleAdoptMeClick, pet}) => {

    const[firstName, setFirstName] = useState('')
    const[lastName, setLastName] = useState('')
    const[phone, setPhone] = useState('')
    const[chosenAnimal, setChosenAnimal] = useState(pet.name)
    const[personalStatement, setPersonalStatement] = useState('')

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    };

    const handleLastName = (event) => {
        setLastName(event.target.value)
    };

    const handlePhone = (event) => {
        setPhone(event.target.value)
    };

    const handleChosenAnimal = (event) => {
        setChosenAnimal(event.target.value)
    }

    const handlePersonalStatement = (event) => {
        setPersonalStatement(event.target.value)
    };

    const resetForm = () => {
        setFirstName('')
        setLastName('')
        setPhone('')
        setChosenAnimal('')
        setPersonalStatement('')
    };

    const handleAdoptionForm = (event) => {
        // event.preventDefault()
        const payload = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            chosenAnimal: chosenAnimal,
            personalStatement: personalStatement
        }
        console.log(payload);
        handleAdoption(payload)
        resetForm()
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(firstName && lastName && phone && personalStatement) {
            handleAdoptionForm()
            Swal.fire({
                title: `Thanks for your interest in ${pet.name}!`,
                text: `We will review your details and be in contact as soon as possible.`,
                // icon: 'success',
                confirmButtonText: 'Return',
                
                width:'20em',
                color: '#434343',
                background:'#ffffff',
                confirmButtonColor: 'grey',
                imageUrl: 'https://cdn-icons-png.flaticon.com/512/2171/2171990.png',
                imageWidth: '8em',
                imageHeight: '8em',
            })
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please complete all fields',
                // icon: 'warning',
                confirmButtonText: 'Return',
                
                width:'20em',
                color: '#434343',
                background:'#ffffff',
                confirmButtonColor: 'grey',
                imageUrl: 'https://cdn-icons-png.flaticon.com/512/2171/2171949.png',
                imageWidth: '8em',
                imageHeight: '8em'
            })
        }
    }

return (
    <Popup open={showAdoptForm} modal nested contentStyle={{ width: '320px', height: '540px', borderRadius: '5%'}} className='popup-content'>
        {close => (
            <div className="modal">
                <button className="close" onClick={handleAdoptMeClick} >&times;</button>
            <div className="header">
                <h4>Adopt {pet.name}</h4>
            </div>
                <div className="content">
                    <form onSubmit={handleAdoptionForm} className='form'>
                        <div className="input-div">
                            <label 
                                className='form-label' 
                                htmlFor='firstName'>
                                First Name:
                            </label>
                            <input 
                                className='form-input' 
                                type='text' 
                                name='firstName' 
                                value={firstName} 
                                onChange={handleFirstName} 
                                required
                            />
                        </div>
                        <div className="input-div">
                            <label 
                                className='form-label' 
                                htmlFor='lastName'>
                                Last Name:
                            </label>
                            <input  
                                className='form-input'
                                type='text' 
                                name='lastName' 
                                value={lastName} 
                                onChange={handleLastName} 
                                required
                            />
                        </div>
                        <div className="input-div">
                            <label 
                                className='form-label' 
                                htmlFor='phone'>
                                Phone:
                            </label>
                            <input 
                                className='form-input' 
                                type='text' 
                                name='phone' 
                                value={phone} 
                                onChange={handlePhone} 
                                required
                            />
                        </div>
                        <div className="input-div">
                            <label 
                                className='form-label' 
                                htmlFor='chosenAnimal'>
                                Adopting:
                            </label>
                            <input 
                                className='form-input' 
                                type='text' 
                                name='chosenAnimal' 
                                value={pet.name} 
                                readOnly
                                required
                            />
                        </div>
                        <div className="input-div">
                            <label 
                                className='form-label' 
                                htmlFor='personalStatement'>
                                Why do you want to adopt?
                            </label>
                            <textarea 
                                className='form-input' 
                                type='text' 
                                name='personalStatement' 
                                value={personalStatement} 
                                onChange={handlePersonalStatement} 
                                required
                            />
                        </div>
                        <div className="button-div">
                            <input 
                                type='submit' 
                                name='submit' 
                                value='Submit' 
                                id='form-input-btn' 
                                onClick={handleSubmit}>
                            </input>
                        </div>
                    </form>
                </div>
                </div>
        )}
    </Popup>
)
}

export default AdoptForm;