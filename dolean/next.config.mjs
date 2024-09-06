/** @type {import('next').NextConfig} */
const nextConfig = {

    eslint: {
        ignoreDuringBuilds: true, // تجاهل أخطاء ESLint أثناء البناء
    },
    typescript: {
        ignoreBuildErrors: true, // تجاهل أخطاء TypeScript أثناء البناء
    },
    // skipMiddlewareUrlNormalize: true,

};

export default nextConfig;
