import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    ChartPieIcon,
    Bars2Icon,
} from "@heroicons/react/24/solid";
import {Link} from "@inertiajs/react";

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
        url:"admin.dashboard"
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
        url:"admin.dashboard"
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
        url:"admin.dashboard"
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
        url:"admin.dashboard"
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
        url:"admin.logout"
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border border-gray-900 p-0.5"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${
                            isMenuOpen ? "rotate-180" : ""
                        }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon, url }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    const routeUrl = route(url);
                    return (
                        <Link href={routeUrl}
                              key={label}
                              method={routeUrl === 'admin.logout' ? 'post' : 'get'}
                              as={routeUrl === 'admin.logout' ? 'button' : undefined}
                        >
                            <MenuItem
                                key={label}
                                className={`flex items-center gap-2 rounded ${
                                    isLastItem
                                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                        : ""
                                }`}
                            >
                                {React.createElement(icon, {
                                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                    strokeWidth: 2,
                                })}
                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-normal"
                                    color={isLastItem ? "red" : "inherit"}
                                >
                                    {label}
                                </Typography>
                            </MenuItem>
                        </Link>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

// nav list menu
const navListMenuItems = [
    {
        title: "Number Table",
        url:"numberTable.index"
    },
    {
        title: "Category",
        url:"admin.dashboard"
    },
    {
        title: "Product",
        url:"admin.dashboard"
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const renderItems = navListMenuItems.map(({ title, url }) => (
        <Link href={route(url)} key={title}>
            <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                    {title}
                </Typography>
            </MenuItem>
        </Link>
    ));

    return (
        <React.Fragment>
            <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
                <MenuHandler>
                    <Typography as="a" href="#" variant="small" className="font-normal">
                        <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
                            <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                            Master Data{" "}
                            <ChevronDownIcon
                                strokeWidth={2}
                                className={`h-3 w-3 transition-transform ${
                                    isMenuOpen ? "rotate-180" : ""
                                }`}
                            />
                        </MenuItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-lg gap-3 overflow-visible lg:flex">
                    <ul className="flex w-full flex-col gap-1">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
                <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                Pages{" "}
            </MenuItem>
            <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
                {renderItems}
            </ul>
        </React.Fragment>
    );
}

// nav list component
const navListItems = [
    {
        label: "Account",
        icon: UserCircleIcon,
    },
    {
        label: "Blocks",
        icon: CubeTransparentIcon,
    },
    {
        label: "Docs",
        icon: CodeBracketSquareIcon,
    },
];

function NavList() {
    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="gray"
                className="font-medium text-blue-gray-500"
            >
                <MenuItem className="flex items-center gap-2 lg:rounded-full">
                    <ChartPieIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
                    <span className="text-gray-900">Dashboard</span>
                </MenuItem>
            </Typography>
            <NavListMenu />
            {navListItems.map(({ label, icon }, key) => (
                <Typography
                    key={label}
                    as="a"
                    href="#"
                    variant="small"
                    color="gray"
                    className="font-medium text-blue-gray-500"
                >
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
                        <span className="text-gray-900"> {label}</span>
                    </MenuItem>
                </Typography>
            ))}
        </ul>
    );
}

export function AdminNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-3xl p-2 lg:rounded-full lg:pl-6">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
                >
                    Genial POS
                </Typography>
                <div className="hidden lg:flex">
                    <NavList />
                </div>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>

                <ProfileMenu />
            </div>
            <MobileNav open={isNavOpen} className="overflow-scroll">
                <NavList />
            </MobileNav>
        </Navbar>
    );
}
export default AdminNavbar;
