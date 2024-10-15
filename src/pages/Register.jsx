import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClientRegister from '../components/Auth/ClientRegister'
import Role from '../components/Auth/Role'
import BusinessRegister from '../components/Auth/BusinessRegister'
import BusinessDetails from '../components/Auth/BusinessDetails'
import { register, businessRegister } from '../context/AuthContext'
import { useDispatch } from 'react-redux'

const Register = () => {
    const [step, setStep] = useState(1)
    const [userData, setUserData] = useState(null)
    const [registerData, setRegisterData] = useState(null)
    const [detailsData, setDetailsData] = useState(null)
    const [formData, setFormData] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClientRegister = (data) => {
        setFormData(data)
        setUserData(data)
        console.log(formData)
        setStep(2) // Move to Role selection
    }

    const handleRoleSelection = (role, data) => {
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
                    setStep(1)
                    throw new Error("Failed to Register")
                }
            })
            
        } else {
            console.log("RoleSelection: ", data)
            setStep(3) // Move to Business Registration
        }
    }

    const handleBusinessRegister = (data) => {
        console.log("handleBusiness: ", data)
        setRegisterData(data)
        setStep(4) // Move to Business Details
    }

    const handleBusinessDetails = (data) => {
        // For now, just log. In the future, you might want to redirect to a business dashboard
        console.log("businessDetail: ", data)
        setDetailsData(data)
        console.log(detailsData)

        businessRegister({ userData, registerData, detailsData: data }).then((res) => {
            const { message, success } = res.data
            console.log(message)
            console.log(success)
            console.log(res.data)
        })
        console.log('Business registration complete')
        console.log({ userData, registerData, detailsData: data})
        navigate('/dashboard') // Assuming you have a dashboard route
    }

    return (
        <div>
            {step === 1 && <ClientRegister onRegister={handleClientRegister} />}
            {step === 2 && <Role onRoleSelect={handleRoleSelection} formData={formData} />}
            {step === 3 && <BusinessRegister onContinue={handleBusinessRegister} />}
            {step === 4 && <BusinessDetails onSubmit={handleBusinessDetails} />}
        </div>
    )
}

export default Register