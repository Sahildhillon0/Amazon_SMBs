"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";

export default function SignupFormDemo() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-neutral-900">
        <h2 className="font-bold text-xl text-neutral-200">
            Contact Us
        </h2>
        <p className="text-neutral-300 text-sm max-w-sm mt-2">
            Enter the Contact form given below to get in touch with us.
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Label htmlFor="firstname" className="text-gray-300">First name</Label>
                    <Input id="firstname" placeholder="First Name" type="text" className="rounded-md bg-[#27272A] text-white" />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="lastname" className="text-gray-300">Last name</Label>
                    <Input id="lastname" placeholder="Last Name" type="text" className="rounded-md bg-[#27272A] text-white" />
                </LabelInputContainer>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input id="email" placeholder="Email" type="email" className="rounded-md bg-[#27272A] text-white" />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="confirmEmail" className="text-gray-300">Confirm Email</Label>
                    <Input id="confirmEmail" placeholder="Confirm Email" type="email" className="rounded-md bg-[#27272A] text-white" />
                </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                <Input id="phone" placeholder="Phone Number" type="tel" className="rounded-md bg-[#27272A] text-white" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="address" className="text-gray-300">Address</Label>
                <Input id="address" placeholder="Address" type="text" className="rounded-md bg-[#27272A] text-white" />
            </LabelInputContainer>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Label htmlFor="city" className="text-gray-300">City</Label>
                    <Input id="city" placeholder="City" type="text" className="rounded-md bg-[#27272A] text-white" />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="postcode" className="text-gray-300">Postcode</Label>
                    <Input id="postcode" placeholder="Postcode" type="text" className="rounded-md bg-[#27272A] text-white" />
                </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-8">
                <Label htmlFor="location" className="text-gray-300">Location</Label>
                <select id="location" className="rounded-md bg-[#27272A] text-white p-2">
                    {[
                        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
                        "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
                        "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
                        "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the",
                        "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
                        "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
                        "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
                        "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
                        "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South",
                        "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
                        "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
                        "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar",
                        "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway",
                        "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland",
                        "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
                        "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
                        "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
                        "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
                        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
                        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                    ].map(country => (
                        <option key={country} value={country.toLowerCase()}>{country}</option>
                    ))}
                </select>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="issue" className="text-gray-300">Issue</Label>
                <textarea id="issue" placeholder="Briefly explain your issue" className="rounded-md bg-[#27272A] text-white p-2 text-sm" rows="4" />
            </LabelInputContainer>

            <button
                style={{ borderRadius: 6, backgroundColor: '#27272A' }}
                className="relative group/btn from-zinc-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
                type="submit">
                Submit &rarr;
                <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
    </div>
);
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {children}
    </div>
  );
};
