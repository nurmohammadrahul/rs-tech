import { useState, useRef, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/rs-tech-asset/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [forceRenderKey, setForceRenderKey] = useState(0);
    const navRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // Clear timeouts on unmount
    useEffect(() => {
        return () => {
            if (hoverTimeout) clearTimeout(hoverTimeout);
        };
    }, [hoverTimeout]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleDropdownHover = (index) => {
        clearTimeout(hoverTimeout);
        setHoverTimeout(setTimeout(() => {
            setOpenDropdown(index);
        }, 300));
    };

    const handleDropdownLeave = () => {
        clearTimeout(hoverTimeout);
        setHoverTimeout(setTimeout(() => {
            setOpenDropdown(null);
            setOpenSubDropdown(null);
        }, 200));
    };

    const handleSubDropdownHover = (subIndex) => {
        clearTimeout(hoverTimeout);
        setHoverTimeout(setTimeout(() => {
            setOpenSubDropdown(subIndex);
        }, 200));
    };

    const handleLinkClick = (path, linkId) => {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setIsOpen(false);
        setForceRenderKey(prev => prev + 1);

        if (location.pathname === path) {
            navigate('/empty');
            setTimeout(() => navigate(path), 10);
        } else {
            navigate(path);
        }
    };

    const navItems = [
        { id: "home", path: "/", label: "Home" },
        {
            id: "about",
            label: "About Us",
            subItems: [
                { id: "about-page", path: "/about", label: "About" },
                { id: "management", path: "/management", label: "Management Info" }
            ]
        },
        { id: "products", path: "/products", label: "Products" },
        {
            id: "solutions",
            label: "Solutions",
            subItems: [
                {
                    id: "network-solution",
                    label: "Enterprise Network Solution",
                    subItems: [
                        { id: "structured-lan", path: "/solution", label: "Structured LAN" },
                        { id: "enterprise-wifi", path: "/solution", label: "Enterprise Wi-Fi" },
                        { id: "cloud-networks", path: "/solution", label: "Cloud Networks" }
                    ]
                },
                {
                    id: "cctv",
                    label: "CCTV Surveillance",
                    subItems: [
                        { id: "ir-cam", path: "/solution", label: "IR CAM" },
                        { id: "box-camera", path: "/solution", label: "Box Type Camera" },
                        { id: "dome-camera", path: "/solution", label: "Dome Camera" }
                    ]
                },
                { id: "centralized", path: "/solution", label: "Centralized Surveillance" },
                { id: "video-conf", path: "/solution", label: "Video Conference" },
                { id: "pa-system", path: "/solution", label: "PA System" },
                { id: "ip-pabx", path: "/solution", label: "IP PABX" },
                { id: "fire-detection", path: "/solution", label: "Fire Detection" }
            ]
        },
        { id: "clients", path: "/clients", label: "Our Clients" },
        {
            id: "gallery",
            label: "Gallery",
            subItems: [
                { id: "photo", path: "/photo", label: "Photo Gallery" },
                { id: "video", path: "/video", label: "Video Gallery" }
            ]
        },
        { id: "news", path: "/news", label: "News" },
        { id: "contact", path: "/contact", label: "Contact" }
    ];

    return (
        <header
            key={`navbar-${forceRenderKey}`}
            className="bg-white rounded-4xl font-medium text-black w-full lg:w-[85%] mt-4 lg:mt-10 mx-auto lg:mx-24 z-50 fixed lg:absolute left-0 right-0 lg:left-auto lg:right-auto"
            ref={navRef}
        >
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <Link to="/" className="block" onClick={() => handleLinkClick('/', 'home')}>
                    <img src={logo} alt="Logo" className="h-12" />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-12 p-4 items-center">
                    {navItems.map((item, index) => (
                        <div
                            key={`${item.id}-${forceRenderKey}`}
                            className="relative"
                            onMouseEnter={() => handleDropdownHover(index)}
                            onMouseLeave={handleDropdownLeave}
                        >
                            {item.path ? (
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to={item.path}
                                        className="hover:text-indigo-950"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(item.path, item.id);
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ) : (
                                <>
                                    <motion.div
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-1 hover:text-indigo-950 cursor-pointer"
                                    >
                                        {item.label}
                                        {openDropdown === index ? <FiChevronUp /> : <FiChevronDown />}
                                    </motion.div>

                                    {openDropdown === index && item.subItems && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute top-full text-sm left-1/2 transform -translate-x-1/2 bg-indigo-950 shadow-lg rounded-md mt-2 min-w-[300px] py-2 z-10"
                                        >
                                            {item.subItems.map((subItem, subIndex) => (
                                                <div
                                                    key={`${subItem.id}-${forceRenderKey}`}
                                                    className="relative px-2"
                                                    onMouseEnter={() => handleSubDropdownHover(`${index}-${subIndex}`)}
                                                    onMouseLeave={() => setOpenSubDropdown(null)}
                                                >
                                                    {subItem.path ? (
                                                        <motion.div
                                                            whileHover={{ y: -2 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Link
                                                                to={subItem.path}
                                                                className="block px-2 py-2 text-white hover:text-orange-300"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleLinkClick(subItem.path, subItem.id);
                                                                }}
                                                            >
                                                                {subItem.label}
                                                            </Link>
                                                        </motion.div>
                                                    ) : (
                                                        <>
                                                            <motion.div
                                                                whileHover={{ y: -2 }}
                                                                whileTap={{ scale: 0.95 }}
                                                                className="flex justify-between items-center w-full px-2 py-2 text-white hover:text-orange-300 cursor-pointer"
                                                            >
                                                                <span>{subItem.label}</span>
                                                                <FiChevronDown className="text-xs ml-2" />
                                                            </motion.div>

                                                            {openSubDropdown === `${index}-${subIndex}` && subItem.subItems && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: -10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    className="absolute left-full top-0 ml-1 bg-indigo-950 shadow-lg rounded-md min-w-[200px] z-10"
                                                                >
                                                                    {subItem.subItems.map((nestedItem) => (
                                                                        <motion.div
                                                                            key={`${nestedItem.id}-${forceRenderKey}`}
                                                                            whileHover={{ y: -2 }}
                                                                            whileTap={{ scale: 0.95 }}
                                                                        >
                                                                            <Link
                                                                                to={nestedItem.path}
                                                                                className="block px-4 py-2 text-white hover:text-orange-300"
                                                                                onClick={(e) => {
                                                                                    e.preventDefault();
                                                                                    handleLinkClick(nestedItem.path, nestedItem.id);
                                                                                }}
                                                                            >
                                                                                {nestedItem.label}
                                                                            </Link>
                                                                        </motion.div>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleMenu}
                    className="lg:hidden text-white p-1 rounded-lg text-3xl bg-indigo-950"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden bg-indigo-950 text-sm shadow-md px-4 pb-1"
                >
                    <ul className="space-y-2">
                        {navItems.map((item, index) => (
                            <motion.li
                                key={`mobile-${item.id}-${forceRenderKey}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="w-full"
                            >
                                {item.path ? (
                                    <motion.div
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link
                                            to={item.path}
                                            className="block py-2 text-white hover:text-indigo-300"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleLinkClick(item.path, item.id);
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ) : (
                                    <>
                                        <motion.button
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                setOpenDropdown(openDropdown === index ? null : index);
                                                setOpenSubDropdown(null);
                                            }}
                                            className="flex w-full py-2 text-white hover:text-indigo-300"
                                        >
                                            <span>{item.label}</span>
                                            {openDropdown === index ? (
                                                <FiChevronUp className="ml-2" />
                                            ) : (
                                                <FiChevronDown className="ml-2" />
                                            )}
                                        </motion.button>

                                        {openDropdown === index && item.subItems && (
                                            <ul className="py-2 space-y-2 pl-4">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <motion.li
                                                        key={`mobile-${subItem.id}-${forceRenderKey}`}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: subIndex * 0.05 }}
                                                    >
                                                        {subItem.path ? (
                                                            <motion.div
                                                                whileHover={{ y: -2 }}
                                                                whileTap={{ scale: 0.95 }}
                                                            >
                                                                <Link
                                                                    to={subItem.path}
                                                                    className="block py-2 text-white hover:text-indigo-300"
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        handleLinkClick(subItem.path, subItem.id);
                                                                    }}
                                                                >
                                                                    {subItem.label}
                                                                </Link>
                                                            </motion.div>
                                                        ) : (
                                                            <>
                                                                <motion.button
                                                                    whileHover={{ y: -2 }}
                                                                    whileTap={{ scale: 0.95 }}
                                                                    onClick={() => {
                                                                        setOpenSubDropdown(openSubDropdown === `${index}-${subIndex}` ? null : `${index}-${subIndex}`);
                                                                    }}
                                                                    className="flex w-full py-2 text-white hover:text-indigo-300"
                                                                >
                                                                    <span>{subItem.label}</span>
                                                                    <FiChevronDown className="ml-2" />
                                                                </motion.button>

                                                                {openSubDropdown === `${index}-${subIndex}` && subItem.subItems && (
                                                                    <ul className="pl-4 space-y-2 mt-2">
                                                                        {subItem.subItems.map((nestedItem, nestedIndex) => (
                                                                            <motion.li
                                                                                key={`mobile-${nestedItem.id}-${forceRenderKey}`}
                                                                                initial={{ opacity: 0, x: -10 }}
                                                                                animate={{ opacity: 1, x: 0 }}
                                                                                transition={{ delay: nestedIndex * 0.05 }}
                                                                            >
                                                                                <motion.div
                                                                                    whileHover={{ y: -2 }}
                                                                                    whileTap={{ scale: 0.95 }}
                                                                                >
                                                                                    <Link
                                                                                        to={nestedItem.path}
                                                                                        className="block py-2 text-white hover:text-indigo-300"
                                                                                        onClick={(e) => {
                                                                                            e.preventDefault();
                                                                                            handleLinkClick(nestedItem.path, nestedItem.id);
                                                                                        }}
                                                                                    >
                                                                                        {nestedItem.label}
                                                                                    </Link>
                                                                                </motion.div>
                                                                            </motion.li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </>
                                                        )}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                )}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;