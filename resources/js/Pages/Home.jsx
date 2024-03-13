import { Link, Head } from '@inertiajs/react';
import React from "react";
import {Carousel, Typography} from "@material-tailwind/react";
import MainLayout from "@/Layouts/MainLayout.jsx";
import Pagination from "@/Components/Pagination.jsx";
import ProductItem from "@/Components/ProductItem.jsx";
import {ShoppingBagIcon} from "@heroicons/react/24/solid/index.js";
import GuestNavbar from "@/Components/GuestNavbar.jsx";

export default function Home(props) {
    const { data: products, meta, links } = props.products;
    const numberTable = props.numberTable;
    const carts = props.carts;

    return (
        <MainLayout>
            <Head title="Menu"/>
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
                <div className="flex flex-col w-full py-4 justify-center">
                    {products.length ? (
                        <div className="grid px-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {products.map((product) => (
                                <ProductItem table={numberTable} product={product} key={product.id}/>
                            ))}
                        </div>
                    ) : null}
                    <div className="flex justify-center">
                        <Pagination meta={meta} links={links}/>
                    </div>
                </div>
                <div className="fixed bottom-4 right-4">
                    <Typography as="a" href="#" className="mr-2 ml-2 cursor-pointer py-1.5 font-medium ">
                        <Link href="/cart">
                            <div className="relative inline-flex">
                                <ShoppingBagIcon className="h-10 w-10 text-blue-500 hover:text-blue-600 rounded-lg"/>
                                <div
                                    className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{carts}
                                </div>
                            </div>
                        </Link>
                    </Typography>
                </div>
            </div>
        </MainLayout>
    );
}
