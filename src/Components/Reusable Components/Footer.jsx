import React from 'react'
import Logo from "../navBar/assets/Logo.jpeg";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

export default function Footer() {
return (
    <div>
        <div className=" bg-slate-800 text-center pt-7">
            <div className="flex p-4 justify-around  ">
                <div className="h-[25vh]">
                    <img src={Logo} alt="" className="h-full w-auto" />
                </div>
                <div className=" w-[55%] h-full ">
                    <Table className="h-full ">
                        {/*  <TableCaption>A list of your recent invoices.</TableCaption> */}
                        {/*  <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Invoice</TableHead>
                                <TableHead></TableHead>
                                <TableHead></TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader> */}
                        <TableBody className="text-white ">
                            <TableRow>
                                <TableCell className="font-medium">Address</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right">Rohtak,Haryana 124001</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Mail</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right">skillissues@codethics.com</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Telephone</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right">+69 43168511074</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Facebook</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right">Code Ethics</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">Instagram</TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell className="text-right">@cod_ethics</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className='h-[7vh] bg-gray-500 text-white flex items-center justify-center'>
                    <p>© CODETHICS LOGISTICS CO., LTD. All Rights Reserved</p>
            </div>
        </div>
    </div>
)
}
