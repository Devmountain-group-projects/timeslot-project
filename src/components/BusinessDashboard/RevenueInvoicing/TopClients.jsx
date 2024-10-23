// TopClients.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { mockData } from './mockData';

const TopClients = () => {
    return (
        <div className="bg-white w-full h-full flex flex-col rounded-xl border-2 border-gray-300 overflow-hidden">
            <section className="flex justify-between items-center p-3 bg-tertiary">
                <div className="w-[10%]">
                    <FaStar className="text-xl md:text-2xl text-[#cd942d]" />
                </div>
                <h2 className="w-[90%] text-sm text-center font-medium">Top Clients</h2>
            </section>
            <hr className="border-t border-gray-300 w-full m-0" />
            <section className="flex-grow flex flex-col overflow-y-auto">
                {mockData.topClients.map((client, index) => (
                    <React.Fragment key={client.id}>
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center">
                                <img src={client.image} alt={client.name} className="w-10 h-10 rounded-full mr-3" />
                                <div className="text-left">
                                    <p className="text-sm font-medium">{client.name}</p>
                                    <p className="text-xs text-gray-500">{client.appointments} Appointments</p>
                                </div>
                            </div>
                            <p className="text-sm font-medium text-green-600">${client.revenue}</p>
                        </div>
                        {index < mockData.topClients.length - 1 && (
                            <hr className="border-t border-gray-300 w-full m-0" />
                        )}
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
};

export default TopClients;