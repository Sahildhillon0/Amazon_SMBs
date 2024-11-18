import React, { useState } from "react";
import Footer from "../Reusable Components/Footer";

const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "India", 
    "Germany", "France", "Italy", "Spain", "China", "Japan", "South Korea",
    "Brazil", "Mexico", "Russia", "South Africa", "New Zealand", "Argentina",
    "Netherlands", "Sweden", "Norway", "Denmark", "Finland", "Switzerland",
    "Belgium", "Austria", "Ireland", "Portugal", "Greece", "Turkey", "Israel",
    "Saudi Arabia", "United Arab Emirates", "Singapore", "Malaysia", "Thailand",
    "Indonesia", "Philippines", "Vietnam", "Pakistan", "Bangladesh", "Sri Lanka",
    "Nepal", "Bhutan", "Maldives", "Afghanistan", "Iran", "Iraq", "Syria", "Jordan",
    "Lebanon", "Egypt", "Morocco", "Algeria", "Tunisia", "Libya", "Sudan", "Ethiopia",
    "Kenya", "Uganda", "Tanzania", "Nigeria", "Ghana", "Ivory Coast", "Senegal",
    "Cameroon", "Angola", "Zimbabwe", "Zambia", "Botswana", "Namibia", "Mozambique",
    "Madagascar", "Mauritius", "Seychelles", "Fiji", "Papua New Guinea", "Solomon Islands",
    "Vanuatu", "Samoa", "Tonga", "Kiribati", "Tuvalu", "Nauru", "Palau", "Micronesia",
    "Marshall Islands", "Brunei", "East Timor", "Mongolia", "Kazakhstan", "Uzbekistan",
    "Turkmenistan", "Kyrgyzstan", "Tajikistan", "Armenia", "Azerbaijan", "Georgia",
    "Ukraine", "Belarus", "Moldova", "Lithuania", "Latvia", "Estonia", "Poland",
    "Czech Republic", "Slovakia", "Hungary", "Romania", "Bulgaria", "Serbia",
    "Croatia", "Bosnia and Herzegovina", "Montenegro", "North Macedonia", "Albania",
    "Slovenia", "Kosovo", "Malta", "Cyprus", "Iceland", "Luxembourg", "Monaco",
    "Liechtenstein", "San Marino", "Andorra", "Vatican City"
];

function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        postcode: "",
        category: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted: ", formData);
        alert("Thank you for contacting us!");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            country: "",
            postcode: "",
            category: "",
            message: "",
        });
    };

    return (
        <>
        <div className="max-w-4xl mx-auto mt-10 bg-slate-100 p-8 shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-center text-black mb-6">Contact Us</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="firstName" className="block text-black font-semibold mb-2">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-black font-semibold mb-2">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-black font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-black font-semibold mb-2">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-black font-semibold mb-2">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                </div>
                <div>
                    <label htmlFor="city" className="block text-black font-semibold mb-2">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                </div>
                <div>
                    <label htmlFor="country" className="block text-black font-semibold mb-2">Country</label>
                    <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                        required
                    >
                        <option value="" disabled>Select a country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="postcode" className="block text-black font-semibold mb-2">Postcode</label>
                    <input
                        type="text"
                        id="postcode"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                    />
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="category" className="block text-black font-semibold mb-2">Reason for Contact</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                        required
                    >
                        <option value="" disabled>Select a category</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-black font-semibold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="md:col-span-2 text-center">
                    <button
                        type="submit"
                        className="bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 hover:border hover:border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
            <div className="mt-20">
                <Footer />  
            </div>
        </>
    );
}

export default ContactUs;
