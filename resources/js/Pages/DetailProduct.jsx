import {Link, Head, router} from '@inertiajs/react';
import React from "react";
import MainLayout from "@/Layouts/MainLayout.jsx";
import GuestNavbar from "@/Components/GuestNavbar.jsx";
import {numberFormat} from "@/Libs/Helpers.jsx";
import Button from "@/Components/Button.jsx";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Carousel} from "@material-tailwind/react";
import Cart from "@/Components/Cart.jsx";
import Toastfy from "@/Components/Toastfy.jsx";

export default function DetailProduct(props) {
    const product = props.product;
    const numberTable = props.numberTable;
    const carts = props.carts;

    const addToCart = async () => {
        try {
            router.post(route("cart.store", [numberTable, product]));
            toast.success("Success add to cart "+product.product_name +" !");
        } catch (error) {
            console.error(error);
            toast.error("Failed add to cart!");
        }
    };

    return (
        <MainLayout>
            <Toastfy />
            <Head title="Detail Product"/>
            <GuestNavbar table={numberTable}/>
            <div className="py-20">
                <div className="flex w-full px-10 h-72 lg:h-96">
                    <Carousel className="rounded-xl" loop={true} autoplay={true}>
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1577303935007-0d306ee638cf?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </div>
                <div className="flex flex-col w-full px-10 py-6 justify-center">
                    <div className="flex gap-10">
                        <div className="w-1/2">
                            {product.path_image ? (
                                    <img
                                        className="w-full rounded-lg"
                                        src={product.path_image}
                                        alt=""
                                    />
                                ) :
                                <img
                                    className="w-full rounded-lg"
                                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            }

                        </div>
                        <div className="w-1/2 min-h-full flex flex-col">
                            <div className="flex flex-col ml-6 space-y-4 justify-center my-auto">
                                <Link
                                    className="text-sm font-semibold px-2 text-white py-1 inline-flex bg-blue-500 rounded w-fit"
                                    href={`/table/${numberTable}/?category=${product.category.slug}`}
                                >
                                    {product.category.category_name}
                                </Link>
                                <h1 className="text-3xl font-semibold">
                                    {product.product_name}
                                </h1>
                                <div className="leading-relaxed text-gray-600 my-4">
                                    {product.description}
                                </div>
                                <div className="font-semibold text-4xl">
                                    <sup>Rp.</sup>
                                    {numberFormat(product.price)}
                                </div>
                                <div className="mt-2">
                                <Button onClick={addToCart}>Add to Cart</Button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <Cart carts={carts} numberTable={numberTable}/>
            </div>
        </MainLayout>
    );
}
