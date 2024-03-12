import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    MenuItem,
    IconButton,
} from "@material-tailwind/react";
import {
    ShoppingBagIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";
import {Link, usePage} from "@inertiajs/react";
// nav list component

function NavList() {
    const { categories_global } = usePage().props;

    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <Typography
                as="a"
                variant="small"
                color="gray"
                className="font-medium text-blue-gray-500"
            >
                <Link href="/">
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        <span className="text-gray-900">Dashboard</span>
                    </MenuItem>
                </Link>
            </Typography>
            {/*<NavListMenu />*/}
            {categories_global.map((category) => (
                <Typography
                    key={category.slug}
                    as="a"
                    variant="small"
                    color="gray"
                    className="font-medium text-blue-gray-500"
                >
                    <Link href={`/${category.slug}/?category=${category.slug}`}>
                        <MenuItem className="flex items-center gap-2 lg:rounded-full">
                            <span className="text-gray-900"> {category.category_name}</span>
                            {category.number}
                        </MenuItem>
                    </Link>
                </Typography>
            ))}
        </ul>
    );
}

export function GuestNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className="fixed z-50 mx-auto lg:mx-4 max-w-screen-2xl p-2 lg:rounded-full lg:px-4">
            <div className="flex lg:items-center gap-4 text-gray-900 justify-between">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                >
                    Genial POS
                </Typography>
                <div className="relative lg:mx-auto flex items-center justify-center text-blue-gray-900">
                    <div className="hidden lg:flex">
                        <NavList/>
                    </div>

                    {/*<ProfileMenu />*/}
                </div>
                <div className="flex">
                    <IconButton
                        size="sm"
                        color="blue-gray"
                        variant="text"
                        onClick={toggleIsNavOpen}
                        className="ml-auto float-end mr-2 lg:hidden"
                    >
                        <Bars3Icon className="h-6 w-6"/>
                    </IconButton>
                </div>

            </div>
            <MobileNav open={isNavOpen} className="overflow-scroll">
                <NavList/>
            </MobileNav>
        </Navbar>
    );
}

export default GuestNavbar;
