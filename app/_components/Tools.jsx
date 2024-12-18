import React from 'react'
import { Calculator, LineChart, Users, PiggyBank } from 'lucide-react';

function Tools() {
    const tools = [
        {
            title: 'FIRE Tool',
            description: 'Calculate your Financial Independence and Early Retirement plan',
            icon: <LineChart className="w-6 h-6" />,
            href: '/tools/fire-calculator'
        },
        {
            title: 'Tax Calculator',
            description: 'Estimate your tax liability and plan your finances',
            icon: <Calculator className="w-6 h-6" />,
            href: '/tools/tax-calculator'
        },
        {
            title: 'Expense Splitter',
            description: 'Split expenses easily among friends and groups',
            icon: <Users className="w-6 h-6" />,
            href: '/tools/expense-splitter'
        },
        {
            title: 'FD Calculator',
            description: 'Calculate Fixed Deposit returns and interest',
            icon: <PiggyBank className="w-6 h-6" />,
            href: '/tools/fd-calculator'
        }
    ];

    return (
        <div>
            <section>
                <div className="max-w-screen-xl px-10 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-24">
                        <div className="mx-20 max-w-lg text-left ">
                            <h2 className="text-3xl font-bold sm:text-4xl">Finance Tools and Calculators</h2>

                            <p className="mt-4 text-gray-600 ">
                                Explore our comprehensive suite of financial tools designed to help you make better financial decisions.
                                From retirement planning to expense tracking, we've got you covered.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                View All Tools
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                            {tools.map((tool) => (
                                <a
                                    key={tool.title}
                                    href={tool.href}
                                    className="block rounded-xl border border-gray-300 p-8 shadow-xl transition  hover:border-violet-500/10 hover:shadow-violet-500/10"

                                >

                                    <span className="inline-block rounded-lg bg-gray-50 p-3">  {tool.icon}
                                    </span>

                                    <h2 className="mt-2 font-bold">{tool.title}</h2>

                                    <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                        {tool.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Tools


{/* <section class="text-gray-900 font-medium">
                <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div class="mx-auto max-w-lg text-center">
                        <h2 class="text-3xl font-bold sm:text-4xl">Make your finances handy</h2>
                        <p class="mt-4 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
                            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
                        </p>
                    </div>

                    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <a
                            class="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-500/10"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-10 text-violet-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 class="mt-4 text-xl font-bold text-primary">Split Expenses</h2>

                            <p class="mt-1 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-500/10"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-10 text-violet-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 class="mt-4 text-xl font-bold text-primary">Day based Split Calculator</h2>

                            <p class="mt-1 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-300 p-8 shadow-xl transition  hover:border-violet-500/10 hover:shadow-violet-500/10"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-10 text-violet-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 class="mt-4 text-xl font-bold text-primary">Weights based Split Calculator</h2>

                            <p class="mt-1 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-300 p-8 shadow-xl transition  hover:border-violet-500/10 hover:shadow-violet-500/10"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-10 text-violet-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 class="mt-4 text-xl font-bold text-primary">FD Calculator</h2>

                            <p class="mt-1 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-300 p-8 shadow-xl transition  hover:border-violet-500/10 hover:shadow-violet-500/10"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-10 text-violet-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 class="mt-4 text-xl font-bold text-primary">FIRE Tool</h2>

                            <p class="mt-1 text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>

                        <a
                            class="block rounded-xl border border-gray-300 p-8 shadow-xl transition  hover:border-violet-500/10 hover:shadow-violet-500/10"
                            href="#"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-10 text-violet-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                            </svg>

                            <h2 class="mt-4 text-xl font-bold text-primary">Tax Calculator</h2>
                            
                            <p class="mt-1 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
                                distinctio alias voluptatum blanditiis laudantium.
                            </p>
                        </a>
                    </div>

                    <div class="mt-12 text-center">
                        <a
                            href="#"
                            class="inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-violet-700 focus:outline-none "
                        >
                            View All
                        </a>
                    </div>
                </div>
            </section> */}