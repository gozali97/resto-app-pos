import {Link, Head, router} from '@inertiajs/react';
import React from "react";
import MainLayout from "@/Layouts/MainLayout.jsx";
import GuestNavbar from "@/Components/GuestNavbar.jsx";
import {numberFormat} from "@/Libs/Helpers.jsx";
import Button from "@/Components/Button.jsx";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toastfy from "@/Components/Toastfy.jsx";
import Container from "@/Components/Container.jsx";
import Card from "@/Components/Card.jsx";
import Table from "@/Components/Table.jsx";
import {Menu, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {CardFooter} from "@material-tailwind/react";

export default function Index(props) {
    const numberTable = props.numberTable;
    const carts = props.carts;

    const onDeleteHandler = async (cart_id) => {
        try {
            router.post(route('carts.destroy', cart_id), {_method: 'delete'});
            toast.error("Product remove from your cart!");
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while deleting the item.");
        }
    };
    let subtotal = carts.reduce((acc, cart) => acc + cart.price, 0);
    let ppn = (11 / 100) * carts.reduce((acc, cart) => acc + cart.price, 0);
    let total = carts.reduce((acc, cart) => acc + cart.price_tax, 0);


    return (<MainLayout>
        <Toastfy/>
        <Head title="Your Cart"/>
        <GuestNavbar table={numberTable}/>
        <div className="py-28">
            <Container>
                <Card>
                    <Card.Header>Your Cart</Card.Header>
                    <Card.Table>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th>#</Table.Th>
                                    <Table.Th>Name</Table.Th>
                                    <Table.Th>Quantity</Table.Th>
                                    <Table.Th className="text-right">Price</Table.Th>
                                    <Table.Th></Table.Th>
                                </tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {carts.length ? <>
                                    {carts.map((cart, i) => (<tr key={cart.id}>
                                        <Table.Td>{i + 1}</Table.Td>
                                        <Table.Td>
                                            <Link href={`/table/${numberTable}/detail/${cart.product.slug}`}>
                                                {cart.product.product_name}
                                            </Link>
                                        </Table.Td>
                                        <Table.Td
                                            className="text-start">{cart.quantity}
                                        </Table.Td>
                                        <Table.Td
                                            className="text-right">Rp. {numberFormat(cart.price)}
                                        </Table.Td>
                                        <Table.Td className="text-right">
                                            <Button onClick={() => onDeleteHandler(cart.id)}
                                                    className="focus:outline-none inline">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewB
                                                     ox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor"
                                                     className="w-6 h-6 text-red-600">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                                                </svg>
                                            </Button>
                                        </Table.Td>
                                    </tr>))}
                                    <tr>
                                        <Table.Td></Table.Td>
                                        <Table.Td></Table.Td>
                                        <Table.Td>PPN 11%</Table.Td>
                                        <Table.Td className="text-right">RP. {numberFormat(ppn)}</Table.Td>
                                    </tr>
                                    <tr>
                                        <Table.Td></Table.Td>
                                        <Table.Td></Table.Td>
                                        <Table.Td>Subtotal</Table.Td>
                                        <Table.Td className="text-right">RP. {numberFormat(subtotal)}</Table.Td>
                                    </tr>
                                    <tr className='bg-gray-200 text-gray-900 font-bold'>
                                        <Table.Td></Table.Td>
                                        <Table.Td></Table.Td>
                                        <Table.Td>Total</Table.Td>
                                        <Table.Td className="text-right">RP. {numberFormat(total)}</Table.Td>
                                        <Table.Td></Table.Td>
                                    </tr>
                                </> : <Table.Empty colSpan={4} message={<>
                                    The Cart is currently empty
                                    <br/>
                                    <br/>
                                    <Link href={`/table/${numberTable}`} className="bg-green-500 text-white p-2 mt-5 rounded">Try
                                        add new one</Link>
                                </>}/>}
                            </Table.Tbody>
                        </Table>
                    </Card.Table>
                </Card>
                <CardFooter className="-mt-6">
                    {carts.length > 0 ? <>
                        <div className='mt-4 flex justify-end'>
                            <Menu as="div" className="relative z-99 inline-block text-left">
                                <div>
                                    <Menu.Button
                                        className="inline-flex w-full justify-center text-sm font-medium hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 bg-blue-600 text-white px-3 py-2 rounded-lg">
                                        Metode pembayaran
                                        <ChevronDownIcon
                                            className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items
                                        className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                <Link
                                                    className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100">
                                                    Gopay
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link
                                                    className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100">
                                                    BCA Virtual Account
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link
                                                    className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100">
                                                    BNI Virtual Account
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link
                                                    className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100">
                                                    Mandiri Virtual Account
                                                </Link>
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </> : null}
                </CardFooter>
            </Container>
        </div>
    </MainLayout>);
}
