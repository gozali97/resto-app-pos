import { useState } from 'react';
import GuestNavbar from "@/Components/GuestNavbar.jsx";

export default function MainLayout({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="flex-1 h-full py-4 bg-gray-100">
            <GuestNavbar/>
            <main>{children}</main>
        </div>
    );
}
