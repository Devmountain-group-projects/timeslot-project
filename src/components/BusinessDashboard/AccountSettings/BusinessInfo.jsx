import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { userCheck } from '../../../context/AuthContext';

const BusinessInfo = () => {
    const [services, setServices] = useState([
        { id: 1, description: 'Service 1', duration: '1 hour', price: '$100' },
        { id: 2, description: 'Service 2', duration: '30 minutes', price: '$50' },
        { id: 3, description: 'Service 3', duration: '2 hours', price: '$200' },
    ]);
    const [editingService, setEditingService] = useState(null);
    const [business, setBusiness] = useState(null);
    const [newBusiness, setNewBusiness] = useState(null);
    const [address, setAddress] = useState(null);
    const [newAddress, setNewAddress] = useState(null);
    const [address2, setAddress2] = useState("Enter New Unit or Suite Number");
    const [newAddress2, setNewAddress2] = useState(null);
    const [city, setCity] = useState(null);
    const [newCity, setNewCity] = useState(null);
    const [state, setState] = useState(null);
    const [newState, setNewState] = useState(null);
    const [zip, setZip] = useState(null);
    const [newZip, setNewZip] = useState(null);
    const [phone, setPhone] = useState(null);
    const [newPhone, setNewPhone] = useState(null);
    const [website, setWebsite] = useState(null);
    const [newWebsite, setNewWebsite] = useState(null);


    useEffect(() => {
        sessionCheck()
    }, [])

    const sessionCheck = async () => {
        const res = await userCheck()
        console.log("Test: ", res)
        if (res.success) {
            console.log("Testing: ", res.user.business[0].city)
            setBusiness(res.user.business[0].business_name)
            setAddress(res.user.business[0].address_line1)
            if (res.user.business[0].address_line2) {
                setAddress2(res.user.business[0].address_line2)
            } else {
                setAddress2("Enter New Unit or Suite Number")
            }
            setCity(res.user.business[0].city)
            setState(res.user.business[0].state)
            setZip(res.user.business[0].zip_code)
            setPhone(res.user.business[0].phone)
            setWebsite(res.user.business[0].website)
        } else {
            setBusiness("Enter Your New Business Name")
        }
    }

    const handleAddService = () => {
        const newService = {
            id: services.length + 1,
            description: 'New Service',
            duration: '1 hour',
            price: '$0'
        };
        setServices([...services, newService]);
    };

    const handleEditService = (id) => {
        setEditingService(id);
    };

    const handleUpdateService = (id) => {
        setEditingService(null);
    };

    const handleDeleteService = (id) => {
        setServices(services.filter(service => service.id !== id));
    };

    const handleUpdate = (field, input) => {
        if (input) {
            console.log(`${field} has been updated to ${input}`);
        } else {
            console.log("Feild is Empty")
        }
    };

    const [availability, setAvailability] = useState({
        Monday: { start: '09:00', end: '17:00' },
        Tuesday: { start: '09:00', end: '17:00' },
        Wednesday: { start: '09:00', end: '17:00' },
        Thursday: { start: '09:00', end: '17:00' },
        Friday: { start: '09:00', end: '17:00' },
        Saturday: { start: '', end: '' },
        Sunday: { start: '', end: '' },
    });

    const handleAvailabilityChange = (day, field, value) => {
        setAvailability(prev => ({
            ...prev,
            [day]: { ...prev[day], [field]: value }
        }));
    };

    const handleUpdateAvailability = (day) => {
        console.log(`Updating availability for ${day}`);
        // Here you would typically send an update to your backend
    };

    return (
        <div className="w-full space-y-4">
            {/* Business Details Card */}
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Business Details</h3>
                    <form className="space-y-2">
                        <div className="space-y-2">
                            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
                            <input
                                id="businessName"
                                type="text"
                                placeholder={business}
                                onChange={(e) => setNewBusiness(e.target.value)}
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => {handleUpdate('businessName', newBusiness), setBusiness(newBusiness)}}
                                    className="btn-blue-dashboard"
                                >
                                    Update Business Name
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                id="addressLine1"
                                type="text"
                                placeholder={address}
                                onChange={(e) => setNewAddress(e.target.value)}
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('address1', newAddress)}
                                    className="btn-blue-dashboard"
                                >
                                    Update Address
                                </button>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex-1 space-y-2">
                                <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Unit or Suite Number</label>
                                <input
                                    id="addressLine2"
                                    type="text"
                                    placeholder={address2}
                                    onChange={(e) => setNewAddress2(e.target.value)}
                                    className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('address2', newAddress2)}
                                    className="btn-blue-dashboard whitespace-nowrap float-end"
                                >
                                    Update Unit/Suite
                                </button>
                            </div>
                            <div className="flex-1 space-y-2">
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                <input
                                    id="city"
                                    type="text"
                                    placeholder={city}
                                    onChange={(e) => setNewCity(e.target.value)}
                                    className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('city', newCity)}
                                    className="btn-blue-dashboard whitespace-nowrap float-end"
                                >
                                    Update City
                                </button>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex-1 space-y-2">
                                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                                <div className="flex space-x-2">
                                    <input
                                        id="state"
                                        type="text"
                                        placeholder={state}
                                        onChange={(e) => setNewState(e.target.value)}
                                        className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('state', newState)}
                                    className="btn-blue-dashboard whitespace-nowrap float-end"
                                >
                                    Update State
                                </button>
                            </div>
                            <div className="flex-1 space-y-2">
                                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                                <div className="flex space-x-2">
                                    <input
                                        id="zipCode"
                                        type="text"
                                        placeholder={zip}
                                        onChange={(e) => setNewZip(e.target.value)}
                                        className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('zip', newZip)}
                                    className="btn-blue-dashboard whitespace-nowrap float-end"
                                >
                                    Update Zip
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="contactInfo" className="block text-sm font-medium text-gray-700">Contact Info (phone)</label>
                            <input
                                id="contactInfo"
                                type="tel"
                                placeholder={phone}
                                onChange={(e) => setNewPhone(e.target.value)}
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('businessPhone', newPhone)}
                                    className="btn-blue-dashboard"
                                >
                                    Update Contact Info
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                            <input
                                id="website"
                                type="url"
                                placeholder={website}
                                onChange={(e) => setNewWebsite(e.target.value)}
                                className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                            <div className="text-right mt-2">
                                <button
                                    type="button"
                                    onClick={() => handleUpdate('website', newWebsite)}
                                    className="btn-blue-dashboard"
                                >
                                    Update Website
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Service Details Card */}
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Service Details</h3>
                        <button onClick={handleAddService} className="btn-blue-dashboard flex items-center">
                            <FaPlus className="mr-2" /> Add Service
                        </button>
                    </div>
                    {services.map((service) => (
                        <div key={service.id} className="mb-4 p-4 border rounded-md text-sm">
                            {editingService === service.id ? (
                                <div className="space-y-3">
                                    <input
                                        className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        value={service.description}
                                        onChange={(e) => {
                                            const updatedServices = services.map(s =>
                                                s.id === service.id ? { ...s, description: e.target.value } : s
                                            );
                                            setServices(updatedServices);
                                        }}
                                        placeholder="Service description"
                                    />
                                    <input
                                        className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        value={service.duration}
                                        onChange={(e) => {
                                            const updatedServices = services.map(s =>
                                                s.id === service.id ? { ...s, duration: e.target.value } : s
                                            );
                                            setServices(updatedServices);
                                        }}
                                        placeholder="Service duration"
                                    />
                                    <input
                                        className="text-sm block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        value={service.price}
                                        onChange={(e) => {
                                            const updatedServices = services.map(s =>
                                                s.id === service.id ? { ...s, price: e.target.value } : s
                                            );
                                            setServices(updatedServices);
                                        }}
                                        placeholder="Service price"
                                    />
                                    <div className="text-right">
                                        <button onClick={() => handleUpdateService(service.id)} className="btn-blue-dashboard w-full sm:w-auto">
                                            Submit Update
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col sm:flex-row justify-between sm:items-start space-y-3 sm:space-y-0">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium">Description: {service.description}</p>
                                        <p className="text-sm">Duration: {service.duration}</p>
                                        <p className="text-sm">Price: {service.price}</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                                        <button
                                            onClick={() => handleEditService(service.id)}
                                            className="btn-blue-dashboard flex items-center justify-center w-full sm:w-auto"
                                        >
                                            <FaEdit className="mr-2" /> Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteService(service.id)}
                                            className="border-2 border-secondary text-secondary px-2 py-1 rounded-full flex items-center justify-center w-full sm:w-auto hover:ring-2 hover:ring-red-600 hover:text-red-600 hover:border-transparent transition duration-300"
                                        >
                                            <FaTrash className="mr-2" /> Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Business Availability Card */}
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Business Availability</h3>
                    {Object.entries(availability).map(([day, times]) => (
                        <div key={day} className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">{day}</label>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:items-center">
                                <div className="flex items-center flex-1 space-x-2">
                                    <div className="flex-1">
                                        <input
                                            type="time"
                                            value={times.start}
                                            onChange={(e) => handleAvailabilityChange(day, 'start', e.target.value)}
                                            className="w-full text-sm px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <span className="text-sm">to</span>
                                    <div className="flex-1">
                                        <input
                                            type="time"
                                            value={times.end}
                                            onChange={(e) => handleAvailabilityChange(day, 'end', e.target.value)}
                                            className="w-full text-sm px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="w-full sm:w-auto">
                                    <button
                                        onClick={() => handleUpdateAvailability(day)}
                                        className="w-full sm:w-auto btn-blue-dashboard"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;