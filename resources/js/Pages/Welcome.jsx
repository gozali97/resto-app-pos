import { Link, Head } from '@inertiajs/react';
import React from "react";
import {
    Navbar,
    Collapse,
    Button,
    IconButton,
    Typography,
    Input,
} from "@material-tailwind/react";
import {
    RectangleStackIcon,
    UserCircleIcon,
    CommandLineIcon,
    Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Welcome({ auth }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpen(false),
        );
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <Navbar shadow={false} fullWidth className="border-0">
                <div className="container mx-auto flex items-center justify-between">
                    <Typography color="blue-gray" className="text-lg font-bold">
                        Material Tailwind
                    </Typography>

                    <div className="hidden items-center gap-4 lg:flex">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route('register')}
                                    className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </Navbar>
            <header className="bg-white p-8">
                <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/image/bg-hero-17.svg')] bg-center bg-contain bg-no-repeat">
                    <div className="container mx-auto px-4 text-center">
                        <Typography className="inline-flex text-xs rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 lg:px-4 px-1 font-medium text-primary">
                            Exciting News! Introducing our latest innovation
                        </Typography>
                        <Typography
                            variant="h1"
                            color="blue-gray"
                            className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
                        >
                            Get ready to experience a new level of{" "}
                            <span className="text-green-500 leading-snug ">
                performance
              </span>{" "}
                            and{" "}
                            <span className="leading-snug text-green-500">
                functionality
              </span>
                            .
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
                        >
                            The time is now for it to be okay to be great. For being a bright
                            color. For standing out.
                        </Typography>
                        <div className="mt-8 grid w-full place-items-start md:justify-center">
                            <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                                <Input color="gray" label="Enter your email" size="lg" />
                                <Button className="w-full px-4 md:w-[12rem] bg-black">
                                    get started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
