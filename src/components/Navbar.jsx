import { useState, useRef } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/rs-tech-asset/logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const [clickedLink, setClickedLink] = useState(null);
    const navRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (path, linkId) => {
        setClickedLink(linkId);
        setTimeout(() => setClickedLink(null), 300);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setIsOpen(false);

        if (location.pathname === path) {
            navigate('/empty');
            setTimeout(() => navigate(path), 1);
        } else {
            navigate(path);
        }
    };

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
        setOpenSubDropdown(null);
    };

    const toggleSubDropdown = (index) => {
        setOpenSubDropdown(openSubDropdown === index ? null : index);
    };

    const handleMouseEnter = (index) => {
        setTimeout(() => setOpenDropdown(index), 10);
    };

    const handleMouseLeave = () => {
        setTimeout(() => setOpenDropdown(null), 700);
    };

    const handleSubDropdownEnter = (index) => {
        setTimeout(() => setOpenSubDropdown(index), 10);
    };

    const handleSubDropdownLeave = () => {
        setTimeout(() => setOpenSubDropdown(null), 700);
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
            path: "/solution",
            label: "Solutions",
            subItems: [
                {
                    id: "network-solution",
                    label: "Enterprise Network Solution",
                    subItems: [
                        { id: "structured-lan", path: "/singlesolution", label: "Structured LAN" },
                        { id: "enterprise-wifi", path: "/singlesolution", label: "Enterprise Wi-Fi" },
                        { id: "cloud-networks", path: "/singlesolution", label: "Cloud Networks" }
                    ]
                },
                {
                    id: "cctv",
                    label: "CCTV Surveillance",
                    subItems: [
                        { id: "ir-cam", path: "/singlesolution", label: "IR CAM" },
                        { id: "box-camera", path: "/singlesolution", label: "Box Type Camera" },
                        { id: "dome-camera", path: "/singlesolution", label: "Dome Camera" }
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
        <header className="bg-white rounded-4xl font-medium text-black w-full lg:w-[85%] mt-2 lg:mt-10 mx-auto lg:mx-24 z-50 lg:absolute left-0 right-0 lg:left-auto lg:right-auto" ref={navRef}>
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <Link to="/" className="block" onClick={() => handleLinkClick('/', 'home')}>
                    <img src={logo} alt="Logo" className="h-12" />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex gap-12 p-4 items-center">
                    {navItems.map((item, index) => (
                        <div key={item.id} className="relative"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}>
                            {/* Clickable items with hover effects */}
                            <motion.div
                                whileHover={{ y: 0 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-1 hover:text-indigo-950 cursor-pointer"
                                onClick={(e) => {
                                    if (item.path) {
                                        e.preventDefault();
                                        handleLinkClick(item.path, item.id);
                                    } else {
                                        toggleDropdown(index);
                                    }
                                }}
                            >
                                {item.label}
                                {item.subItems && (openDropdown === index ? <FiChevronUp /> : <FiChevronDown />)}
                            </motion.div>

                            {/* Dropdown for items with subItems */}
                            {item.subItems && openDropdown === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 0 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute top-full left-1/2 transform -translate-x-1/2 bg-indigo-950 shadow-lg rounded-md mt-2 min-w-[200px] py-2 z-10"
                                >
                                    {item.subItems.map((subItem, subIndex) => (
                                        <div key={subItem.id} className="relative"
                                            onMouseEnter={() => handleSubDropdownEnter(`${index}-${subIndex}`)}
                                            onMouseLeave={handleSubDropdownLeave}>
                                            <motion.div
                                                whileHover={{ y: 0 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex justify-between text-sm items-center w-full px-2 py-2 text-white hover:text-orange-300 cursor-pointer"
                                                onClick={(e) => {  // Added e parameter here
                                                    if (subItem.path) {
                                                        e.preventDefault();
                                                        handleLinkClick(subItem.path, subItem.id);
                                                    } else {
                                                        toggleSubDropdown(`${index}-${subIndex}`);
                                                    }
                                                }}
                                            >
                                                <span>{subItem.label}</span>
                                                {subItem.subItems && <FiChevronDown className="text-xs ml-2" />}
                                            </motion.div>

                                            {/* Sub-dropdown */}
                                            {openSubDropdown === `${index}-${subIndex}` && subItem.subItems && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 0 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="absolute left-full top-0 ml-[-5px] bg-indigo-950 text-sm shadow-lg rounded-md min-w-[200px] z-10"
                                                >
                                                    {subItem.subItems.map((nestedItem) => (
                                                        <motion.div
                                                            key={nestedItem.id}
                                                            whileHover={{ y: 0 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <Link
                                                                to={nestedItem.path}
                                                                className="block px-4 py-2 text-sm text-white hover:text-orange-300"
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
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="bg-indigo-950 text-white p-2 rounded-md hover:bg-indigo-900 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-indigo-950 p-6 absolute text-xs top-20 left-0 right-0 z-10">
                    <nav className="flex flex-col gap-4 text-white">
                        {navItems.map((item) => (
                            <div key={item.id} className="relative">
                                <motion.div
                                    whileHover={{ y: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex justify-between items-center hover:text-indigo-900"
                                    onClick={() => {
                                        if (item.subItems) {
                                            toggleDropdown(item.id);
                                        } else {
                                            handleLinkClick(item.path, item.id);
                                        }
                                    }}
                                >
                                    <span>{item.label}</span>
                                    {item.subItems && (openDropdown === item.id ? <FiChevronUp /> : <FiChevronDown />)
                                    }
                                </motion.div>

                                {/* Mobile dropdown */}
                                {item.subItems && openDropdown === item.id && (
                                    <div className="ml-4">
                                        {item.subItems.map((subItem) => (
                                            <motion.div
                                                key={subItem.id}
                                                whileHover={{ y: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Link
                                                    to={subItem.path}
                                                    className="block px-2 py-2 text-white hover:text-indigo-900"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleLinkClick(subItem.path, subItem.id);
                                                    }}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;