import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';
import AdminNavbar from "@/Components/AdminNavbar.jsx";

export default function AdminLayout({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="flex-1 h-full py-4 bg-gray-100">
            <AdminNavbar/>
            <main>{children}</main>
        </div>
    );
}
