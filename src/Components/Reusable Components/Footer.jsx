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
            <div className="flex p-4 justify-around">
                <div className="h-[25vh]">
                    <img src={Logo} alt="Logo" className="h-full w-auto" />
                </div>
                <div className="w-[55%] h-full">
                    
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
            <div className='h-[7vh] bg-gray-500 text-white flex items-center justify-center'>
                <p>© CODETHICS LOGISTICS CO., LTD. All Rights Reserved</p>
            </div>
        </div>
    );
}
