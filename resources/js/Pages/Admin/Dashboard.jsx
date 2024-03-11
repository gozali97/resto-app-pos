import { Head } from '@inertiajs/react';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import AdminLayout from "@/Layouts/AdminLayout.jsx";

export default function Dashboard({ auth }) {

    const cardLists = [
    {
        label: "User",
        desc: "lorem ipsum",
        count: 30,
    },
    {
        label: "Category",
        desc: "lorem ipsum",
        count: 80,
    },
    {
        label: "Product",
        desc: "lorem ipsum",
        count: 10,
    },
    {
        label: "Transaction",
        desc: "lorem ipsum",
        count: 60,
    },
];

    const chartConfig = {
        type: "line",
        height: 240,
        series: [
            {
                name: "Sales",
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: "",
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#020617"],
            stroke: {
                lineCap: "round",
                curve: "smooth",
            },
            markers: {
                size: 0,
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
                categories: [
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: true,
                borderColor: "#dddddd",
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: "dark",
            },
        },
    };

    return (
        <AdminLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-12">
               <div className="grid lg:grid-cols-4 px-6">
                   {cardLists.map(({ label, desc, count }, key) => (
                       <Card className="mt-6 lg:w-96 grid grid-cols-2" key={label}>
                           <div>
                               <CardBody>
                                   <Typography variant="h5" color="blue-gray" className="mb-2">
                                       {label}
                                   </Typography>
                                   <Typography>
                                       {desc}
                                   </Typography>
                               </CardBody>
                               <CardFooter className="pt-0">
                                   <Button>Read More</Button>
                               </CardFooter>
                           </div>
                           <div className="flex justify-center items-center text-5xl font-bold">
                               {count}
                           </div>
                       </Card>
                   ))}
               </div>
                <div className="px-6 py-10 w-full">
                    <Card>
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
                        >
                            <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
                                <Square3Stack3DIcon className="h-6 w-6" />
                            </div>
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    Line Chart
                                </Typography>
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="max-w-sm font-normal"
                                >
                                    Visualize your data in a simple way using the
                                    @material-tailwind/react chart plugin.
                                </Typography>
                            </div>
                        </CardHeader>
                        <CardBody className="px-2 pb-0">
                            <Chart {...chartConfig} />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
