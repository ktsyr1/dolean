import React from 'react';

const projects = [
    {
        title: "Inspectex",
        description: "تطوير موقع لعرض خدمات الفحص الهندسي وتمكين التسجيل والدفع عبر الموقع.",
        duration: "مارس 2024 - مايو 2024",
        tech: "Next.js, Tailwind CSS, WordPress API, GraphQL",
        link: "http://inspectex.sa/"
    },
    {
        title: "عالم المبدعين",
        description: "تطوير تطبيق لإدارة مؤسسة تعليمية تشمل المعلمين والموظفين وإرسال المعلومات إلى الأهالي.",
        duration: "أغسطس 2023 - أكتوبر 2023",
        tech: "MERN Stack, Next.js, Sass, MongoDB",
        link: "https://app.alamalmoubdien.com/"
    },
    {
        title: "جمعية الاتحاد الإنساني",
        description: "تطوير تطبيق لإدارة مؤسسة تعليمية تشمل المعلمين والموظفين وإرسال المعلومات إلى الأهالي.",
        duration: "أكتوبر 2022 - نوفمبر 2022",
        tech: "WordPress, Next.js, GraphQL, Sass",
        link: "https://ktsyr1.netlify.app/"
    }
];

const services = [
    "تطوير واجهات المواقع",
    "تطوير التطبيقات الخلفية",
    "تحسين الأداء",
    "تصميم المواقع المستجيبة",
    "تحسين محركات البحث (SEO)",
    "صيانة المواقع",
    "التكامل مع الأنظمة الأخرى"
];

const Portfolio = () => {
    return (

        <div className="flex flex-col min-h-dvh *:text-zinc-800" dir='ltr'>
            <header className="bg-background px-4 py-3 md:px-6 md:py-4 border-b">
                <div className="container mx-auto flex items-center justify-between">
                    <a className="flex items-center gap-2" href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-primary"
                        >
                            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                        </svg>
                        <span className="font-bold text-lg">Qutaiba Mohammed</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-4">
                        <a className="text-muted-foreground hover:underline" href="#">
                            About
                        </a>
                        <a className="text-muted-foreground hover:underline" href="#">
                            Services
                        </a>
                        <a className="text-muted-foreground hover:underline" href="#">
                            Business Exhibition
                        </a>
                        <a className="text-muted-foreground hover:underline" href="#">
                            Technologies
                        </a>
                        <a className="text-muted-foreground hover:underline" href="#">
                            Contact
                        </a>
                    </nav>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Hire Me
                    </button>
                </div>
            </header>
            <main className="flex-1">
                <section id="hero" className="bg-background py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Hi, I'm Qutaiba Mohammed</h1>
                                <p className="mt-4 text-muted-foreground md:text-xl">
                                    A passionate web developer with expertise in building stunning websites and web applications using
                                    modern technologies like React, Next.js, and Tailwind CSS.xpertise in building
                                </p>
                                <div className="mt-6 flex gap-4">
                                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                        Hire Me
                                    </button>
                                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                                        View Portfolio
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="/placeholder.svg"
                                    alt="Qutaiba Mohammed"
                                    width="300"
                                    height="300"
                                    className="rounded-full"
                                    style={{ aspectRatio: "600 / 400", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="bg-muted py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-2xl font-bold mb-8">My Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-background rounded-lg p-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 mb-2 text-primary"
                                >
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                <h3 className="text-lg font-medium">Web Development</h3>
                                <p className="text-muted-foreground">
                                    I specialize in building modern, responsive, and user-friendly websites and web applications.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg p-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 mb-2 text-primary"
                                >
                                    <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"></path>
                                    <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"></path>
                                </svg>
                                <h3 className="text-lg font-medium">UI/UX Design</h3>
                                <p className="text-muted-foreground">
                                    I create visually appealing and intuitive user interfaces that enhance the user experience.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg p-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 mb-2 text-primary"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </svg>
                                <h3 className="text-lg font-medium">SEO Optimization</h3>
                                <p className="text-muted-foreground">
                                    I optimize websites for better search engine visibility and higher organic traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="business-exhibition" className="bg-background py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-2xl font-bold mb-8">Business Exhibition</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-muted rounded-lg overflow-hidden shadow-sm">
                                <img
                                    src="/placeholder.svg"
                                    alt="Project 1"
                                    width="600"
                                    height="400"
                                    className="w-full h-48 object-cover"
                                    style={{ aspectRatio: "600 / 400", objectFit: "cover" }}
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-medium">Project 1</h3>
                                    <p className="text-muted-foreground">Lorem ipsum</p>
                                    <div className="mt-4 flex justify-end">
                                        <a className="text-primary hover:underline" href="#">
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-muted rounded-lg overflow-hidden shadow-sm">
                                <img
                                    src="/placeholder.svg"
                                    alt="Project 2"
                                    width="600"
                                    height="400"
                                    className="w-full h-48 object-cover"
                                    style={{ aspectRatio: "600 / 400", objectFit: "cover" }}
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-medium">Project 2</h3>
                                    <p className="text-muted-foreground">A web application built with Next.js and Tailwind CSS.</p>
                                    <div className="mt-4 flex justify-end">
                                        <a className="text-primary hover:underline" href="#">
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-muted rounded-lg overflow-hidden shadow-sm">
                                <img
                                    src="/placeholder.svg"
                                    alt="Project 3"
                                    width="600"
                                    height="400"
                                    className="w-full h-48 object-cover"
                                    style={{ aspectRatio: "600 / 400", objectFit: "cover" }}
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-medium">Project 3</h3>
                                    <p className="text-muted-foreground">
                                        A landing page designed with Tailwind CSS for optimal user experience.
                                    </p>
                                    <div className="mt-4 flex justify-end">
                                        <a className="text-primary hover:underline" href="#">
                                            View Project
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="technologies" className="bg-muted py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-2xl font-bold mb-8">My Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <div className="bg-background rounded-lg p-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 mb-2 text-primary"
                                >
                                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                                    <line x1="12" x2="12" y1="22" y2="15.5"></line>
                                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                                    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                                    <line x1="12" x2="12" y1="2" y2="8.5"></line>
                                </svg>
                                <h3 className="text-lg font-medium">React</h3>
                                <p className="text-muted-foreground">
                                    Proficient in building dynamic and responsive user interfaces with React.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg p-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 mb-2 text-primary"
                                >
                                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                                    <line x1="12" x2="12" y1="22" y2="15.5"></line>
                                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                                    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                                    <line x1="12" x2="12" y1="2" y2="8.5"></line>
                                </svg>
                                <h3 className="text-lg font-medium">Next.js</h3>
                                <p className="text-muted-foreground">
                                    Experienced in creating server-rendered React applications with Next.js.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg p-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 mb-2 text-primary"
                                >
                                    <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                                    <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
                                    <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
                                </svg>
                                <h3 className="text-lg font-medium">Tailwind CSS</h3>
                                <p className="text-muted-foreground">
                                    Skilled in designing responsive and visually appealing user interfaces with Tailwind CSS.
                                </p>
                            </div>
                            <div className="bg-background rounded-lg p-4 shadow-sm">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-8 h-8 mb-2 text-primary"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 2a7 7 0 1 0 10 10"></path>
                                </svg>
                                <h3 className="text-lg font-medium">JavaScript</h3>
                                <p className="text-muted-foreground">Proficient in JavaScript, the language that powers the web.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="communication" className="bg-background py-12 md:py-16 lg:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
                        <div className="mt-4 flex items-center gap-4">
                            <a className="text-muted-foreground hover:text-primary" href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6"
                                >
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a className="text-muted-foreground hover:text-primary" href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a className="text-muted-foreground hover:text-primary" href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                        <form className="max-w-lg mx-auto mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-muted-foreground mb-2">
                                        Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="name"
                                        placeholder="Enter your name"
                                        name="name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-muted-foreground mb-2">
                                        Email
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        name="email"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label htmlFor="message" className="block text-muted-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Enter your message"
                                ></textarea>
                            </div>
                            <div className="mt-6 text-right">
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                                    type="submit"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="mr-2"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </svg>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <footer className="bg-background px-4 py-6 md:px-6 md:py-8 border-t">
                <div className="container mx-auto flex items-center justify-between">
                    <p className="text-muted-foreground">© 2024 Qutaiba Mohammed. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};


export default Portfolio;