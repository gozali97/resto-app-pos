import { numberFormat } from "@/Libs/Helpers";
import {Link, router} from "@inertiajs/react";
import React from "react";
import Button from "@/Components/Button.jsx";
import {toast} from "react-toastify";
import {Typography} from "@material-tailwind/react";
import {ShoppingBagIcon} from "@heroicons/react/24/solid/index.js";

export default function Cart({ carts, numberTable }) {
    return (
        <div className="fixed bottom-4 right-4">
            <Typography as="a" href="#" className="mr-2 ml-2 cursor-pointer py-1.5 font-medium ">
                <Link href={`/carts/${numberTable}`}>
                    <div className="relative inline-flex animate-bounce">
                        <ShoppingBagIcon className="h-10 w-10 text-blue-500 hover:text-blue-600 rounded-lg"/>
                        <div
                            className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">{carts}
                        </div>
                    </div>
                </Link>
            </Typography>
        </div>
    );
}
