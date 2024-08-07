import { Link } from "react-router-dom"
import Cookies from "js-cookie"


let Hero = () => {
    let islogin = Cookies.get("x-auth-token")
    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">قم بالوصول الى الدورات التي تحتاجها في لبنان</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">قم بتزويد فرقك بالتدريب على أحدث استراتيجيات التكنولوجيا والأعمال والقيادة.</p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link to="/apply" className="inline-flex mx-4 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"> اخبرنا عنك </Link>
                    {!islogin && <Link to="/auth?route=login" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-white border border-primary-700 rounded-lg text-primary-700 hover:text-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"> تسجيل دخول </Link>}
                </div>

            </div>
        </section>

    )

}

export default Hero 
