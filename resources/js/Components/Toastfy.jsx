import {ToastContainer} from "react-toastify";
import React from "react";
export default function Toastfy() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnHover={false}
            draggable
            theme="light"
            transition: Bounce
        />
    );
}
