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
import {ChevronDownIcon, CreditCardIcon, LockClosedIcon} from "@heroicons/react/24/solid";
import {
    CardBody,
    CardFooter,
    CardHeader, Input,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
    Typography
} from "@material-tailwind/react";
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
    const addProduct = async (cart_id) => {
        try {
            router.post(route('carts.addProduct', cart_id));
            toast.success("Successfully added quantity product!");
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while deleting the item.");
        }
    }

    const reduceProduct = async (cart_id) => {
        try {
            router.post(route('carts.reduceProduct', cart_id));
            toast.success("Successfully reduce quantity product!");
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while deleting the item.");
        }
    }

    let subtotal = carts.reduce((acc, cart) => acc + cart.price, 0);
    let ppn = (11 / 100) * carts.reduce((acc, cart) => acc + cart.price, 0);
    let total = carts.reduce((acc, cart) => acc + cart.price_tax, 0);

    const [type, setType] = React.useState("cash");
    const [cardNumber, setCardNumber] = React.useState("");
    const [cardExpires, setCardExpires] = React.useState("");
    const [paymentValue, setpaymentValue] = React.useState("");

    const isPaymentValueSufficient = parseFloat(paymentValue) >= total;
    const changeValue = paymentValue ? parseFloat(paymentValue) - total : 0;


    return (<MainLayout>
        <Toastfy/>
        <Head title="Your Cart"/>
        <GuestNavbar table={numberTable}/>
        <div className="py-28">
            <div className={`grid gap-4 px-4 ${carts.length ? ' lg:grid-cols-3' : ''}`}>
                <div className="lg:col-span-2 -mt-6 max-w-96 lg:max-w-full overflow-x-auto">
                    <Container>
                        <Card>
                            <Card.Header>Your Cart</Card.Header>
                            <Card.Table>
                                <Table>
                                    <Table.Thead>
                                        <tr>
                                            <Table.Th>#</Table.Th>
                                            <Table.Th>Name</Table.Th>
                                            <Table.Th>Category</Table.Th>
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
                                                    className="text-start">{cart.category.category_name}
                                                </Table.Td>
                                                <Table.Td
                                                    className="text-start">
                                                    <div className="flex items-center">
                                                        <button onClick={() => reduceProduct(cart.id)} className="border rounded-md py-2 font-bold px-4 mr-2 text-white bg-red-500 hover:bg-red-600">-</button>
                                                        <span className="text-center w-8">{cart.quantity}</span>
                                                        <button onClick={() => addProduct(cart.id)} className="border rounded-md py-2 font-bold px-4 ml-2 text-white bg-green-500 hover:bg-green-600">+</button>
                                                    </div>
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
                                                <Table.Td></Table.Td>
                                                <Table.Td>PPN 11%</Table.Td>
                                                <Table.Td className="text-right">RP. {numberFormat(ppn)}</Table.Td>
                                            </tr>
                                            <tr>
                                                <Table.Td></Table.Td>
                                                <Table.Td></Table.Td>
                                                <Table.Td></Table.Td>
                                                <Table.Td>Subtotal</Table.Td>
                                                <Table.Td className="text-right">RP. {numberFormat(subtotal)}</Table.Td>
                                            </tr>
                                            <tr className='bg-gray-200 text-gray-900 font-bold'>
                                                <Table.Td></Table.Td>
                                                <Table.Td></Table.Td>
                                                <Table.Td></Table.Td>
                                                <Table.Td>Total</Table.Td>
                                                <Table.Td className="text-right">RP. {numberFormat(total)}</Table.Td>
                                                <Table.Td></Table.Td>
                                            </tr>
                                        </> : <Table.Empty colSpan={5} message={<>
                                            The Cart is currently empty
                                            <br/>
                                            <br/>
                                            <Link href={`/table/${numberTable}`}
                                                  className="bg-green-500 text-white p-2 mt-5 rounded">Try
                                                add new one</Link>
                                        </>}/>}
                                    </Table.Tbody>
                                </Table>
                            </Card.Table>
                        </Card>
                    </Container>
                </div>
                <div className="px-4">
                    {carts.length ? <>
                        <Card className="w-full max-w-[24rem]">
                            <CardHeader
                                color="gray"
                                floated={false}
                                shadow={false}
                                className="m-0 grid place-items-center px-4 py-6 text-center"
                            >
                                <Typography variant="h5" color="white">
                                    {type === "card" ? "Pay with Card" : "Pay with Cash"}
                                </Typography>
                            </CardHeader>
                            <CardBody>
                                <form action="">
                                    <Tabs value={type} className="overflow-visible">
                                        <TabsHeader className="relative z-0 ">
                                            <Tab value="cash" onClick={() => setType("cash")}>
                                                Pay with Cash
                                            </Tab>
                                            <Tab value="card" onClick={() => setType("card")}>
                                                Pay with Card
                                            </Tab>
                                        </TabsHeader>
                                        <TabsBody
                                            className="!overflow-x-hidden !overflow-y-visible"
                                            animate={{
                                                initial: {
                                                    x: type === "card" ? 400 : -400,
                                                },
                                                mount: {
                                                    x: 0,
                                                },
                                                unmount: {
                                                    x: type === "card" ? 400 : -400,
                                                },
                                            }}
                                        >
                                            <TabPanel value="card" className="p-0">
                                                <div className="mt-12 flex flex-col gap-4">
                                                    <div className="my-3">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="mb-2 font-medium "
                                                        >
                                                            Card Details
                                                        </Typography>

                                                        <Input
                                                            maxLength={19}
                                                            value={cardNumber}
                                                            onChange={(event) => setCardNumber(event.target.value)}
                                                            icon={
                                                                <CreditCardIcon
                                                                    className="absolute left-0 h-4 w-4 text-blue-gray-300"/>
                                                            }
                                                            placeholder="0000 0000 0000 0000"
                                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                            labelProps={{
                                                                className: "before:content-none after:content-none",
                                                            }}
                                                        />
                                                        <div className="my-4 flex items-center gap-4">
                                                            <div>
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="mb-2 font-medium"
                                                                >
                                                                    Expires
                                                                </Typography>
                                                                <Input
                                                                    maxLength={5}
                                                                    value={cardExpires}
                                                                    onChange={(event) => setCardExpires(event.target.value)}
                                                                    containerProps={{className: "min-w-[72px]"}}
                                                                    placeholder="00/00"
                                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                                    labelProps={{
                                                                        className: "before:content-none after:content-none",
                                                                    }}
                                                                />
                                                            </div>
                                                            <div>
                                                                <Typography
                                                                    variant="small"
                                                                    color="blue-gray"
                                                                    className="mb-2 font-medium"
                                                                >
                                                                    CVC
                                                                </Typography>
                                                                <Input
                                                                    maxLength={4}
                                                                    containerProps={{className: "min-w-[72px]"}}
                                                                    placeholder="000"
                                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                                    labelProps={{
                                                                        className: "before:content-none after:content-none",
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="mb-2 font-medium"
                                                        >
                                                            Holder Name
                                                        </Typography>
                                                        <Input
                                                            placeholder="name@mail.com"
                                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                            labelProps={{
                                                                className: "before:content-none after:content-none",
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="mb-2 font-medium"
                                                        >
                                                            Payment Value
                                                        </Typography>
                                                        <Input
                                                            type="text"
                                                            placeholder="Rp.0"
                                                            value={paymentValue}
                                                            onChange={(event) => setpaymentValue(event.target.value)}
                                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                            labelProps={{
                                                                className: "before:content-none after:content-none",
                                                            }}
                                                        />
                                                    </div>
                                                    <Button size="lg" disabled={!isPaymentValueSufficient} className={`text-white ${isPaymentValueSufficient ? 'bg-blue-600 hover:bg-blue-700':'bg-red-500'}`}>
                                                        Pay Now
                                                    </Button>
                                                    <Typography
                                                        variant="small"
                                                        color="gray"
                                                        className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                                                    >
                                                        <LockClosedIcon className="-mt-0.5 h-4 w-4"/> Payments are
                                                        secure and encrypted
                                                    </Typography>
                                                </div>
                                            </TabPanel>
                                            <TabPanel value="cash" className="p-0">
                                                <div className="mt-12 flex flex-col gap-4">
                                                    <div>
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="mb-2 font-medium"
                                                        >
                                                            Payment Value
                                                        </Typography>
                                                        <Input
                                                            type="text"
                                                            placeholder="Rp.0"
                                                            value={paymentValue}
                                                            onChange={(event) => setpaymentValue(event.target.value)}
                                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                            labelProps={{
                                                                className: "before:content-none after:content-none",
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="my-2">
                                                        <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="mt-2 -mb-2 font-medium"
                                                        >
                                                            Change Value
                                                        </Typography>
                                                        <Input
                                                            placeholder="Rp.0"
                                                            value={changeValue}
                                                            disabled
                                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                            labelProps={{
                                                                className: "before:content-none after:content-none",
                                                            }}
                                                            containerProps={{ className: "mt-4" }}
                                                        />
                                                    </div>
                                                    <Button size="lg" disabled={!isPaymentValueSufficient} className={`text-white ${isPaymentValueSufficient ? 'bg-blue-600 hover:bg-blue-700':'bg-red-500'}`}>
                                                        Pay Now
                                                    </Button>
                                                    <Typography
                                                        variant="small"
                                                        color="gray"
                                                        className="flex items-center justify-center gap-2 font-medium opacity-60"
                                                    >
                                                        <LockClosedIcon className="-mt-0.5 h-4 w-4"/> Payments are
                                                        secure and encrypted
                                                    </Typography>
                                                </div>
                                            </TabPanel>
                                        </TabsBody>
                                    </Tabs>
                                </form>
                            </CardBody>
                        </Card>
                    </> : null}

                </div>
            </div>

        </div>
    </MainLayout>);
}
