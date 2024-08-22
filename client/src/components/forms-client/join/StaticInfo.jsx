import React from 'react';

const StaticInfo = () => {
    return (
        <div className="text-center min-h-[300px] flex flex-col items-center justify-center">
            <svg viewBox="0 0 1024 1024" width={50} xmlns="http://www.w3.org/2000/svg" className='*:fill-blue-700 my-4'>
                <g stroke-linecap="round" stroke-linejoin="round"></g>
                <path fill="#000000" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path>
            </svg>
            <h2 className="text-xl font-bold my-4">شكراً لتقديم معلوماتك</h2>
            <p className="text-muted-foreground">سنتواصل معك قريباً بناءً على المعلومات التي زودتنا بها.</p>
        </div>
    );
};

export default StaticInfo;
