import React from 'react'
import { FaPhone, FaMapMarkerAlt, FaFax } from "react-icons/fa";
import { FaMessage } from 'react-icons/fa6';
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { motion } from 'framer-motion';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ContactInfo = () => {
    const position = [40.431551, -111.890712] // Coordinates for 1550 Digital Dr #400, Lehi, UT 84043

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="max-w-7xl mx-auto my-24">
                <div>
                    <motion.section
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-12"
                        variants={containerVariants}
                    >
                        {[
                            { icon: FaMapMarkerAlt, title: "Visit office", content: "1550 Digital Dr #400, Lehi, UT 84043" },
                            { icon: FaPhone, title: "Call us", content: "+1 (801) 851-5466" },
                            { icon: FaMessage, title: "Chat to us", content: "contact@TimelineSlot.com" },
                            { icon: FaFax, title: "Fax", content: "+1-548-2588" }
                        ].map((item, index) => (
                            <motion.div key={index} className="flex flex-col items-center bg-white" variants={itemVariants}>
                                <item.icon className="text-3xl fill-primary" />
                                <div className="mt-4 text-center">
                                    <h4 className="text-gray-800 text-base font-bold">{item.title}</h4>
                                    <p className="text-sm text-gray-500 mt-2">{item.content}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.section>

                    <motion.section
                        className="mt-24"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <h2 className="title-text text-center mb-8">Where to Find Us<span className='text-primary text-3xl sm:text-5xl'>.</span></h2>
                        <div className="w-full h-96">
                            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                                <LayersControl position="topright">
                                    <LayersControl.BaseLayer name="OpenStreetMap">
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                    </LayersControl.BaseLayer>
                                    <LayersControl.BaseLayer checked name="Satellite">
                                        <TileLayer
                                            attribution='Imagery &copy; 2023 Google, Imagery &copy; 2023 Maxar Technologies, USDA Farm Service Agency, Map data &copy; 2023'
                                            url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                                            maxZoom={20}
                                            subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
                                        />
                                    </LayersControl.BaseLayer>
                                </LayersControl>
                                <Marker position={position}>
                                    <Popup>
                                        Timeline Slot<br />1550 Digital Dr #400, Lehi, UT 84043
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </motion.section>
                </div>
            </div>
        </motion.div>
    )
}

export default ContactInfo