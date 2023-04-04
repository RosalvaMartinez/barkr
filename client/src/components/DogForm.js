import { useState } from 'react';
import Auth from '../utils/auth';

function DogForm() {
    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [birthday, setBirthday] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")

    const [nameError, setNameError] = useState(false)
    const [breedError, setBreedError] = useState(false)
    const [birthdayError, setBirthdayError] = useState(false)
    const [ageError, setAgeError] = useState(false)
    const [genderError, setGenderError] = useState(false)

    const [nameErrorMessage, setNameErrorMessage] = useState("")
    const [breedErrorMessage, setBreedErrorMessage] = useState("")
    const [birthdayErrorMessage, setBirthdayErrorMessage] = useState("")
    const [ageErrorMessage, setAgeErrorMessage] = useState(false)
    const [genderErrorMessage, setGenderErrorMessage] = useState(false)


    const handleFormsubmit = async (e) => {
        e.preventDefault()
        if (nameError || breedError || birthdayError || ageError || genderError) return
        const token = Auth.getToken()
        const res = await fetch('/api/users/dog', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                breed: breed,
                birthday: birthday,
                age: age,
                gender: gender
            })
        })
        const data = await res.json()
        console.log(data)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
        if (e.target.value === "") {
            setNameError(true)
            setNameErrorMessage("must enter your pets name")
        } else {
            setNameError(false)
            setNameErrorMessage("")
        }
    }

    const handleBreedChange = (e) => {
        setBreed(e.target.value)
        if (e.target.value === "") {
            setBreedError(true)
            setBreedErrorMessage("If multiple breeds, seperate with / example: labrador/blue heeler")
        } else {
            setBreedError(false)
            setBreedErrorMessage("")
        }
    }

    const handleBirthdayChange = (e) => {
        setBirthday(e.target.value)
        if (e.target.value === "") {
            setBirthdayError(true)
            setBirthdayErrorMessage("Please provide the most accurate birthday possible.")
        } else {
            setBirthdayError(false)
            setBirthdayErrorMessage("")
        }
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value)
        if (e.target.value === "") {
            setAgeError(true)
            setAgeErrorMessage("Please provide age as of today.")
        } else {
            setAgeError(false)
            setAgeErrorMessage("")
        }
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value)
        if (e.target.value === "") {
            setGenderError(true)
            setGenderErrorMessage("male/female")
        } else {
            setGenderError(false)
            setGenderErrorMessage("")
        }
    }

    return (
        <div className="flex flex-col w-full h-full justify-center place-items-center">
            <form onSubmit={handleFormsubmit} className="flex flex-col border border-black rounded-xl w-[300px] p-4 justify-center bg-gradient-to-r from-slate-800 to-slate-700">
                <label className="my-4">
                    <input className="rounded w-full p-2" placeholder="name" name="name" type="text" value={name} onChange={handleNameChange} />
                    <div className={`${nameError ? "visible" : "invisible"} h-4 text-red-600`}>{nameErrorMessage}</div>
                </label>
                <label className="my-4">
                    <input className="rounded w-full p-2" placeholder="breed" name="breed" type="text" value={breed} onChange={handleBreedChange} />
                    <div className={`${breedError ? "visible" : "invisible"} h-4 text-red-600`}>{breedErrorMessage}</div>
                </label>
                <label className="my-4">
                    <input className="rounded w-full p-2" placeholder="birthday" name="birthday" type="text" value={birthday} onChange={handleBirthdayChange} />
                    <div className={`${birthdayError ? "visible" : "invisible"} h-4 text-red-600`}>{birthdayErrorMessage}</div>
                </label>
                <label className="my-4">
                    <input className="rounded w-full p-2" placeholder="age" name="age" type="text" value={age} onChange={handleAgeChange} />
                    <div className={`${ageError ? "visible" : "invisible"} h-4 text-red-600`}>{ageErrorMessage}</div>
                </label>
                <label className="my-4">
                    <input className="rounded w-full p-2" placeholder="gender" name="gender" type="text" value={gender} onChange={handleGenderChange} />
                    <div className={`${genderError ? "visible" : "invisible"} h-4 text-red-600`}>{genderErrorMessage}</div>
                </label>
                <button type="submit" className="font-sans font-normal bg-blue-300 hover:bg-blue-500 active:bg-blue-400 p-2 rounded-lg text-lg focus:outline-none focus:ring focus:ring-blue-200">
                    Add My Dog
                </button>
            </form>
        </div>
    )
};

export default DogForm;