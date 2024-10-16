import React, { useState } from 'react'
import { TbEye, TbEyeClosed } from "react-icons/tb";

const Security = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const passwordsMatch = password === confirmPassword;

    const handleUpdate = (field) => {
        console.log(`${field} has been updated`);
    }

    return (
        <div className="w-full space-y-4">
            <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden border-2 border-gray-300">
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`text-sm block w-full px-3 py-2 bg-white border ${!passwordsMatch && confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="Enter new password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                >
                                    {showPassword ? <TbEye className="h-5 w-5 text-gray-400" /> : <TbEyeClosed className="h-5 w-5 text-gray-400" />}
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className={`text-sm block w-full px-3 py-2 bg-white border ${!passwordsMatch && confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                                    placeholder="Confirm new password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                >
                                    {showConfirmPassword ? <TbEye className="h-5 w-5 text-gray-400" /> : <TbEyeClosed className="h-5 w-5 text-gray-400" />}
                                </button>
                            </div>
                            {!passwordsMatch && confirmPassword && (
                                <p className="mt-2 text-sm text-red-600">Passwords don't match</p>
                            )}
                        </div>
                        <div className="text-right mt-4">
                            <button
                                type="button"
                                onClick={() => handleUpdate('Password')}
                                className="btn-blue-dashboard"
                                disabled={!passwordsMatch || !password}
                            >
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Security