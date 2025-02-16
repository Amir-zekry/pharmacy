"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="mt-10 bg-[#F8ECE5] text-[#724EE2] py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <img
                                src="https://images.unsplash.com/photo-1584362917165-526a968579e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTEyfDB8MXxzZWFyY2h8MTB8fHBoYXJtYWN5JTIwbG9nb3xlbnwwfHx8fDE3MDg0ODI0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Pharmacy Logo"
                                className="h-8 w-8 object-contain"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/80";
                                }}
                            />
                            <h3 className="text-xl font-bold">noon Pharmacy</h3>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <MdLocationOn className="text-xl" />
                                <a href="https://maps.app.goo.gl/W2Qb6kxDzFzbZYuV8" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    الندي مول - الشيخ زايد
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MdPhone className="text-xl" />
                                <a href="tel:+201030857748" className="hover:underline">
                                    +2 01030857748
                                </a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MdEmail className="text-xl" />
                                <a href="mailto:support@noonpharmacy.org" className="hover:underline">
                                    support@noonpharmacy.org
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <p>Not working yet</p>
                        <ul className="space-y-2">
                            {[
                                "Frequently Asked Questions",
                                "Shipping Policy",
                                "Return Policy",
                                "Privacy Policy",
                            ].map((link, index) => (
                                <li className="pointer-events-none" key={index}>
                                    <a href="#" className="text-gray-900 transition duration-300">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Operating Hours */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Operating Hours</h3>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <MdAccessTime className="text-xl" />
                                <p>24/7 Service Available</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Connect With Us</h3>
                        <div className="flex space-x-4">
                            {[
                                { icon: <FaFacebookF className="text-xl" />, href: "https://www.facebook.com/profile.php?id=61569560729671" },
                                { icon: <FaTwitter className="text-xl" />, href: "https://x.com/NoonPharmacy" },
                                { icon: <FaInstagram className="text-xl" />, href: "https://www.instagram.com/noon.pharmacy08" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="bg-[#724EE2] text-white p-2 rounded-full transition duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        {/* <p className="text-sm mt-4">
                            Subscribe to our newsletter for updates and special offers!
                        </p> */}
                    </div>
                </div>

                <div className="border-t border-blue-400 mt-8 pt-8 text-center">
                    <p>
                        © 2025 HealthCare Pharmacy. All rights reserved. Powered by
                        <span className="text-amber-500"> Affiliate Website</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
