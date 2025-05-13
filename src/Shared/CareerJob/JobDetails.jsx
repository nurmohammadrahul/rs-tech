import { FaArrowRight } from "react-icons/fa";
import CommonHero from "../CommonHero";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
    const navigate = useNavigate();
    return (
        <div>
            <CommonHero title="career" />
            <section className="py-4 md:px-24 lg:px-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main Job Content */}
                        <div className="lg:w-3/4">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h1 className="text-3xl text-gray-800 mb-2">Executive, MIS</h1>

                                <div className="space-y-2 mb-1 text-sm">
                                    <p className="text-gray-600"><span >Location:</span> Head Office</p>
                                    <p className="text-gray-600"><span >Date Posted:</span> December 27, 2021</p>
                                    <p className="text-gray-600"><span>Last Date of Application:</span> January 2, 2022</p>
                                </div>

                                <div className="job-description mb-8 text-sm">
                                    <p className="text-gray-900 mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </p>
                                    <p className="text-gray-900">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>

                                <h2 className="text-xl font-semibold  text-gray-800 mb-4">KEY RESPONSIBILITIES</h2>
                                <ul className="list-disc pl-6 space-y-2 mb-6 text-sm">
                                    <li className="text-gray-700">Receive and deliver materials in FIFO method.</li>
                                    <li className="text-gray-700">Prepare the indent and inventorial works combination with all maintenance section.</li>
                                    <li className="text-gray-700">Prepare daily store statement and update stock resister.</li>
                                    <li className="text-gray-700">Observe and monitor the local purchase, bill entry, IOU Adjust etc in emergency time.</li>
                                    <li className="text-gray-700">Ensure maximum use of all material and reserve store related documents. Check and balance of all materials.</li>
                                </ul>

                                <h2 className="text-xl font-semibold text-gray-800 mb-4">ADDITIONAL JOB REQUIREMENTS</h2>
                                <ul className="list-disc pl-6 space-y-2 mb-6 text-sm">
                                    <li className="text-gray-700">Knowledge on material distribution.</li>
                                    <li className="text-gray-700">Excellent Writing Skill in English and Bengali</li>
                                    <li className="text-gray-700">Basic knowledge on computer applications</li>
                                    <li className="text-gray-700">Inventory Management knowledge</li>
                                </ul>

                                <h2 className="text-xl font-semibold text-gray-800 mb-4">BENEFITS</h2>
                                <p className="text-gray-600 text-sm mb-6">
                                    Festival Bonus, Contributory Provident Fund, Gratuity, Health & Life Insurance and others as per organisation policy
                                </p>

                                <button
                                    onClick={() => navigate("/apply")}
                                    className="flex items-center gap-2 px-6 py-2 bg-indigo-950 text-lg text-white font-semibold rounded-4xl hover:bg-indigo-900 transition-colors md:self-center"
                                >
                                    Apply Now
                                    <span className="text-base">
                                        <FaArrowRight />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Job Summary  */}
                        <div className="lg:w-1/4">
                            <div className="bg-white p-6 rounded-lg shadow-md sticky top-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">Job Summary</h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-medium text-gray-700">Published on:</h4>
                                        <p className="text-gray-600">27 Dec 2025</p>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-700">Vacancy:</h4>
                                        <p className="text-gray-600">01</p>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-700">Employment Status:</h4>
                                        <p className="text-gray-600">Full-time</p>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-700">Experience:</h4>
                                        <p className="text-gray-600">3 to 4 year(s)</p>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-700">Age:</h4>
                                        <p className="text-gray-600">Age 24 to 36 years</p>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-700">Job Location:</h4>
                                        <p className="text-gray-600">Dhaka</p>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-700">Salary:</h4>
                                        <p className="text-gray-600">Negotiable</p>
                                    </div>

                                    <div>
                                        <h4 className="font-medium text-gray-700">Application Deadline:</h4>
                                        <p className="text-gray-600">27 Jan 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JobDetails;