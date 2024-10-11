import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ClientRegister from '../components/Auth/ClientRegister'
import Role from '../components/Auth/Role'
import BusinessRegister from '../components/Auth/BusinessRegister'
import BusinessDetails from '../components/Auth/BusinessDetails'
import { register } from '../context/AuthContext'

const Register = () => {
    const [step, setStep] = useState(1)
    const [userType, setUserType] = useState(null)
    const [form, setForm] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClientRegister = (formData) => {
        setForm(formData)
        setStep(2) // Move to Role selection
    }

    const handleRoleSelection = (role, data) => {
        setUserType(role)
        if (role === 'Client') {
            // For now, just log. In the future, you might want to redirect to a client dashboard or complete registration
            console.log('Client registration complete')
            console.log('Data: ', data)
            register(data.name, data.email, data.phoneNumber, data.password).then((res) => {
                const { message, success } = res.data
                if (success) {
                    console.log("Registered")
                    console.log(message)
                    dispatch({
                        type: "USER_LOGIN"
                    })
                    navigate('/dashboard') // Assuming you have a dashboard route
                } else {
                    throw new Error("Failed to Register")
                }
            })
            
        } else {
            setStep(3) // Move to Business Registration
        }
    }

    const handleBusinessRegister = () => {
        setStep(4) // Move to Business Details
    }

    const handleBusinessDetails = () => {
        // For now, just log. In the future, you might want to redirect to a business dashboard
        console.log('Business registration complete')
        navigate('/dashboard') // Assuming you have a dashboard route
    }

    return (
        <div>
            {step === 1 && <ClientRegister onRegister={handleClientRegister} />}
            {step === 2 && <Role onRoleSelect={handleRoleSelection} formData={form} />}
            {step === 3 && <BusinessRegister onContinue={handleBusinessRegister} />}
            {step === 4 && <BusinessDetails onSubmit={handleBusinessDetails} />}
        </div>
    )
}

export default Register