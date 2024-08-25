import { Link } from "react-router-dom"
import Cookies from "js-cookie"

let Hero = () => {
    let islogin = Cookies.get("authorization")
    return (
        <section className="bg-white ddark:bg-gray-900 flex flex-col-reverse items-center justify-between md:flex-row py-8 p-4 w-full">
            <div className=" px-4 mx-auto max-w-screen-xl *:text-start lg:pl-12">
                <h1 className="mb-4 text-4xl flex flex-col *:py-4 font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ddark:text-white">
                    <span>أطلق العنان</span>
                    <span>لإمكاناتك مع دورات</span>
                    <span>مخصصة لك</span>
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl my-4 ddark:text-gray-400">
                    اكتشف عالماً من الفرص التعليمية في محيطك مع منصتنا الجديدة والفريدة. نحن نربط المتعلمين الطموحين بالدورات القريبة منهم، لنجعل التعلم أكثر سهولة وملاءمة من أي وقت مضى.
                </p>
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row justify-center sm:justify-start sm:space-y-0 sm:space-x-4">
                    <Link to="/apply" className="inline-flex sm:ml-4 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ddark:focus:ring-primary-900"> اخبرنا عنك </Link>
                    {!islogin && <Link to="/auth?route=login" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-white border border-primary-700 rounded-lg text-primary-700 hover:text-primary-800 focus:ring-4 focus:ring-primary-300 ddark:focus:ring-primary-900"> تسجيل دخول </Link>}
                </div>
            </div>
            <img loading='lazy' src="\images\home-hero.svg" alt="hero image" className="max-w-[400px] w-[80%] max-h-[400px] rounded-lg my-4" />
        </section>
    )
}
export default Hero 
