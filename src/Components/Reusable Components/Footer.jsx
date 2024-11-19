import React from 'react';
import Logo from "../navBar/assets/Logo.jpeg";


const footerData = [
    { label: "Address", value: "Rohtak, Haryana 124001" },
    { label: "Mail", value: "skillissues@codethics.com" },
    { label: "Telephone", value: "+69 43168511074" },
    { label: "Facebook", value: "Code Ethics" },
    { label: "Instagram", value: "@cod_ethics" },
];

export default function Footer() {
    return (
        <div className="bg-slate-800 text-center pt-7">
            <div className="flex flex-col gap-5 sm:flex-row p-4 justify-around">
                <div className="h-[25vh] flex justify-center">
                    <img src={Logo} alt="Logo" className="h-full w-auto" />
                </div>
                <div className="sm:w-[55%] w-full h-full">
                    
                <table className="h-full w-full">
                    <tbody className="text-white ">
                        {footerData.map((item, index) => (
                            <tr key={index} className='border-b-2 border-white'>
                                <td className="font-medium">{item.label}</td>
                                <td className="text-right">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            <div className='h-[7vh] bg-gray-500 text-white flex items-center justify-center mt-5 sm:mt-0'>
                <p>© CODETHICS LOGISTICS CO., LTD. All Rights Reserved</p>
            </div>
        </div>
    );
}
