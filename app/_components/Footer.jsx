'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-500">
            <button
                className="flex justify-between items-center w-full py-5 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-gray-900 font-medium">{question}</span>
                {isOpen ? (
                    <ChevronUp className="text-violet-700" size={20} />
                ) : (
                    <ChevronDown className="text-violet-700" size={20} />
                )}
            </button>
            {isOpen && (
                <div className="pb-5 text-blue-950">
                    <p className='my-4'>{answer}</p>
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    const faqs = [
        {
            question: "How do I create an account with ExpenseO'Split?",
            answer: "To create an account with ExpenseO'Split, visit our website and click on the 'Sign Up' button. Follow the prompts to enter your personal information and complete the verification process."
        },
        {
            question: "How does ExpenseO'Split ensure the security of my financial data?",
            answer: "ExpenseO'Split uses state-of-the-art encryption and security protocols provided by Clerk to protect your financial data to ensure the safety of your information."
        },
        {
            question: "What benefits does ExpenseO'Split offer for wealth management?",
            answer: "ExpenseO'Split offers comprehensive wealth management tools including Split Calculator, personalized FIRE Calculator Tool, Budget tracking and Expenses Managing strategies."
        }
    ];

    return (
        <div className="text-gray-900 bg-white py-16">
            <div className="container mx-auto px-20">
                <h2 className="text-4xl font-normal mb-12">Frequently asked questions</h2>
                <div className="space-y-4 text-sm">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="text-gray-900  bg-white py-12">
            <div className="container mx-auto px-20 ">
                <div className='flex flex-row justify-between'>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="flex items-center mb-4 md:mb-0">
                            <Image src={'/darklogo.webp'} alt='logo' 
                            width={350}
                            height={400}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-60">
                        <div>
                            <h3 className="text-primary font-semibold mb-4">About us</h3>
                            <ul className="space-y-4 text-sm font-light">
                                <li><a href="#" className="hover:text-violet-500">Our company</a></li>
                                <li><a href="#" className="hover:text-violet-500">Careers</a></li>
                                <li><a href="#" className="hover:text-violet-500">Press kits</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-primary font-semibold mb-4">Legal</h3>
                            <ul className="space-y-4 text-sm font-light">
                                <li><a href="#" className="hover:text-violet-500">Terms of use</a></li>
                                <li><a href="#" className="hover:text-violet-500">Privacy policy</a></li>
                                <li><a href="#" className="hover:text-violet-500">About us</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-primary font-semibold mb-4">Support</h3>
                            <ul className="space-y-4 text-sm font-light">
                                <li><a href="#" className="hover:text-violet-500">Contact us</a></li>
                                <li><a href="#" className="hover:text-violet-500">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex justify-between items-center">
                    <div className="flex text-sm items-center">
                        <span className="mr-2">English (United Kingdom)</span>
                    </div>
                    <div className="text-sm text-gray-400">
                        © ExpenseO'Split
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { FAQSection, Footer };