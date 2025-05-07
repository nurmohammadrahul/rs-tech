import {
    FaPinterestP,
    FaFacebookF,
    FaInstagram,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-indigo-950 text-white pt-10 text-md md:px-24 lg:px-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row flex-wrap gap-8 lg:gap-12">
                    <div className="w-full md:w-[calc(50%-16px)] lg:w-[40%] space-y-4">
                        <h3 className="text-xl font-semibold">About Us</h3>
                        <p className="leading-relaxed">
                            Welcome to RS Technologies, the leading provider of innovative and reliable
                            solutions for your enterprise needs. We are a team of passionate and experienced
                            professionals committed to delivering the best value and quality to our customers.
                        </p>
                        <div className="flex space-x-4 text-xl">
                            <a href="#">
                                <FaPinterestP className="border text-4xl rounded-full p-2 hover:text-yellow-900 hover:border-yellow-900 transition-colors" />
                            </a>
                            <a href="#">
                                <FaTwitter className="border text-4xl rounded-full p-2 hover:text-yellow-900 hover:border-yellow-900 transition-colors" />
                            </a>
                            <a href="#">
                                <FaFacebookF className="border text-4xl rounded-full p-2 hover:text-yellow-900 hover:border-yellow-900 transition-colors" />
                            </a>
                            <a href="#">
                                <FaInstagram className="border text-4xl rounded-full p-2 hover:text-yellow-900 hover:border-yellow-900 transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - takes full width on mobile, half on medium, 1/3 on large */}
                    <div className="w-full md:w-[calc(50%-16px)] lg:w-[20%] space-y-4">
                        <h3 className="text-xl font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                "Service & Support",
                                "FAQs",
                                "Manufacturers",
                                "CSR",
                                "Career",
                                "Location Map"
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <a href="#" className="hover:text-indigo-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - takes full width on mobile and medium, 1/3 on large */}
                    <div className="w-full md:w-full lg:w-[20%] space-y-4">
                        <h3 className="text-xl font-semibold">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 group">
                                <FaMapMarkerAlt className="mt-1 group-hover:text-indigo-300 transition-colors" />
                                <p>House# 9, Road# 2C, Block# J, Baridhara, Dhaka-1212</p>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <FaPhoneAlt className="mt-1 group-hover:text-indigo-300 transition-colors" />
                                <a href="tel:01916017508" className="hover:text-indigo-300">(+088) 01916017508</a>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <FaEnvelope className="mt-1 group-hover:text-indigo-300 transition-colors" />
                                <a href="mailto:rejveee@gmail.com" className="hover:text-indigo-300 lowercase">rejveee@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-indigo-800 mt-10 py-6">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-indigo-100">
                    <p>Copyright © 2025 RS Technologies Ltd. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0">
                        <a href="https://www.esoft.com.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300">
                            Web Design Company: <span className="font-cursive">e-<span className="text-red-400">S</span>oft</span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;