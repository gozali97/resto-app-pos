import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Carousel } from "@material-tailwind/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <div className="py-12">
               <div className="flex w-full px-6 h-96">
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
            </div>
        </AuthenticatedLayout>
    );
}
