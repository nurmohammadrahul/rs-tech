import { motion } from 'framer-motion';
import img1 from "../assets/rs-tech-asset/about-img-1.jpg";
import img2 from "../assets/rs-tech-asset/about-2.png";
import img3 from "../assets/rs-tech-asset/about-3.png";
import contacticon from "../assets/rs-tech-asset/icon-about-contact.svg";
import experienceticon from "../assets/rs-tech-asset/icon-about-experience.svg";
import { FaArrowAltCircleRight } from 'react-icons/fa';

const AboutHome = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Images Section */}
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative h-[400px]">
                        {/* Main Image (Image 1) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInLeft}
                            transition={{ duration: 0.6 }}
                            className="absolute top-0 left-0 w-3/4 h-3/4 z-10"
                        >
                            <img
                                src={img1}
                                alt="Our company"
                                className="rounded-lg shadow-xl w-130 h-120 object-cover"
                            />
                        </motion.div>

                        {/* Overlay Image (Image 2) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInRight}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute bottom-0 right-0 w-2/3 h-2/3 z-20"
                        >
                            <img
                                src={img2}
                                alt="Our team"
                                className="rounded-3xl shadow-xl w-96 h-96 object-cover"
                            />
                        </motion.div>

                        {/* Experience Icon */}

                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 lg:pl-12">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-lg font-medium text-indigo-600 mb-2 mt-20 lg:mt-5">Our Company</h3>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                <span className="text-indigo-900">Fast Growing Surveillance Solutions Provider Company</span>
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Welcome to RS Technologies, the leading provider of innovative and reliable solutions for your enterprise needs. We are a team of passionate and experienced professionals who are committed to delivering the best value and quality to our customers.
                                <br /><br />
                                At RS Technologies, we understand the challenges and opportunities that enterprises face in the digital era. We offer a range of solutions and services that can help you optimize your network performance, enhance your security, and improve your collaboration. Whether you need to design, install, manage, or troubleshoot your network, we have the expertise and the tools to assist you.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-8"
                        >
                            <div className="flex items-start">
                                <div className="mr-6">
                                    <img
                                        src={img3}
                                        alt="Our experience"
                                        className="rounded-3xl shadow-xl w-80 h-36 object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="bg-indigo-950 p-3 rounded-full w-12 h-12">
                                        <img src={experienceticon} alt="Contact" className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        We Have More Than <span className="text-indigo-600">15+</span> Years of Communication safety and automation sector
                                    </h3>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-8 rounded-3xl shadow-xl"
                        >
                            <div className="flex flex-col sm:flex-row items-center justify-between">
                                <div className="flex items-center mb-4 sm:mb-0">
                                    <div className="bg-indigo-950 p-3 rounded-full mr-4">
                                        <img src={contacticon} alt="Contact" className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Call Directly 24/7</p>
                                        <h3 className="text-xl font-semibold">
                                            <a href="tel:01916017508" className="text-indigo-600 hover:text-indigo-800">(+088) 01916017508</a>
                                        </h3>
                                    </div>
                                </div>

                                <button className="bg-indigo-950 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-3xl transition duration-300">
                                    More About Us <FaArrowAltCircleRight />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHome;