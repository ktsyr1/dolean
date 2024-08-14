import React from 'react';

const OneUser = () => (
    <main className="w-full">
        <ProfileCard {...user} />
    </main>
);

export default OneUser;

function ProfileCard({
    name,
    username,
    description,
    followers,
    following,
    profileImage,
    coverImage,
    Governorate,
    city,
    nationality,
    requiredCourses,
    educationLevel,
    specialization,
    classes,
    graduationYear,
    englishLevel,
    computerUsage,
    freeCourses,
    paidCourses,
    paidCoursesLimit,
    noteInterests,
    interests,
    phone,
    fullName
}) {
    return (
        <div className="h-screen bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center">
            <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white shadow-lg transform duration-200 ease-in-out">

              
                <div className="flex justify-center px-5 -mt-12">
                    <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48.5 40C57.3366 40 64.5 32.8366 64.5 24C64.5 15.1634 57.3366 8 48.5 8C39.6634 8 32.5 15.1634 32.5 24C32.5 32.8366 39.6634 40 48.5 40Z" stroke="#1C274C" stroke-width="3.75" />
                        <path d="M80.49 72C80.5 71.3432 80.5 70.676 80.5 70C80.5 60.0588 66.1732 52 48.5 52C30.8269 52 16.5 60.0588 16.5 70C16.5 79.9412 16.5 88 48.5 88C57.424 88 63.8592 87.3732 68.5 86.2536" stroke="#1C274C" stroke-width="3.75" stroke-linecap="round" />
                    </svg>

                </div>
                <div>
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold">{fullName || "Unknown Name"}</h2>
                        {username && (
                            <a
                                className="text-gray-400 mt-2 hover:text-blue-500"
                                href={`https://www.instagram.com/${username}/`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @{username}
                            </a>
                        )}
                        <p className="mt-2 text-gray-500 text-sm">
                            {description || "No description available."}
                        </p>
                    </div>
                </div>

                <div className="px-14 py-4 text-gray-700">
                    <p><strong>Location:</strong> {Governorate}, {city}</p>
                    <p><strong>Nationality:</strong> {nationality}</p>
                    <p><strong>Education Level:</strong> {educationLevel}</p>
                    <p><strong>Specialization:</strong> {specialization}</p>
                    <p><strong>Graduation Year:</strong> {graduationYear}</p>
                    <p><strong>English Level:</strong> {englishLevel}</p>
                    <p><strong>Computer Usage:</strong> {computerUsage}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                </div>
            </div>
        </div>
    );
}

const user = {
    user_id: 1,
    Governorate: "California",
    city: "Los Angeles",
    nationality: "American",
    requiredCourses: ["React", "Node.js"],
    educationLevel: "Bachelor's Degree in Computer Science",
    specialization: "Solution Manager - Creative Tim Officer",
    classes: ["Class A", "Class B"],
    graduationYear: 2022,
    englishLevel: "Advanced",
    computerUsage: "Expert",
    freeCourses: ["JavaScript", "CSS"],
    paidCourses: ["React Advanced"],
    paidCoursesLimit: 5,
    noteInterests: "An artist of considerable range...",
    interests: ["Music", "Programming"],
    phone: "+961 76 481 441",
    fullName: "Jenna Stones",
    profileImage: "https://example.com/profile.jpg",
    coverImage: "https://example.com/cover.jpg"
};
