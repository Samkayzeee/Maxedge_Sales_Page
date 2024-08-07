
import Suit_Holding from "/assets/Suit_Hand_Holding.jpg";
import Suit_Pocket from "/assets/Suit_Hand_Pocket.jpg";

const About_US = () => {
    return ( 
        <div className="bg-white py-10">
            {/* first section About section */}
            <div className="flex md:flex-row flex-col-reverse items-center justify-between md:my-20 my-2 px-6">
            <div className="flex md:w-1/2 w-full h-full md:flex-row flex-col">
                <img src={Suit_Holding} alt="Someone Holding is suit" className="md:w-1/2 w-full h-full md:translate-y-10"/>
                <img src={Suit_Pocket} alt="Someone Putting is hand in his suit" className="md:w-1/2 w-full h-full md:translate-x-6 mt-6 md:mt-0" />
            </div>

            <div className="md:w-5/12 w-full">
                <h2 className="md:text-6xl text-3xl font-bold my-2 text-black">About Us</h2>
                <p className="text-gray-600 leading-7">
                    we specialize in crafting custom wedding suits that embody elegance, sophistication, and personal style. 
                    Our expert tailors dedicate themselves to creating perfectly fitted suits, using only the finest fabrics and meticulous attention to detail. 
                    We believe every groom deserves to feel confident and look his best on his special day, and we are committed to making that a reality with our bespoke tailoring services.
                    Whether you envision a classic tuxedo, a modern slim-fit suit, or a unique design that reflects your individuality, we are here to bring your vision to life. 
                    With a passion for quality and a commitment to excellence we are your trusted partner in making your wedding day unforgettable.
                </p>

                <div className="flex my-6">
                    <div className="w-1/2">
                        <h1 className="md:text-6xl text-4xl font-bold text-black md:my-3 my-2">40</h1>
                        <p className="text-gray-700">Suit Project</p>
                    </div>

                    <div className="w-1/2">
                        <h1 className="md:text-6xl text-4xl font-bold text-black md:my-3 my-2">25</h1>
                        <p className="text-gray-700">Year Experience</p>
                    </div>
                </div>

            </div>
        </div>

        {/* second section About section */}
        <div className="flex md:flex-row flex-col items-center justify-between py-16 my-10 bg-gray-50 px-6">
            <div className="md:w-2/5 w-full">
                <h2 className="md:text-5xl text-3xl font-bold text-black md:leading-[80px]">
                    25 YEARS OF EXPERIENCED TAILOR
                </h2>

                <p className="text-gray-700 my-7">
                    With years of experience in bespoke tailoring, 
                    We are dedicated to crafting custom wedding suits that ensure every groom looks his best on his special day and even more dresses.
                </p>

                <div className="flex justify-between">
                    <p className="text-3xl text-black font-medium"> King Suits </p>
                    <p className="text-3xl text-black font-medium"> Executiva </p>
                    <p className="text-3xl text-black font-medium"> MaleZone </p>
                </div>
            </div>

            <div className="md:w-1/2 w-full md:mt-0 mt-8">
                <div>
                    <h3 className="text-black text-lg font-semibold">Precision Tailoring</h3>
                    <progress className="progress w-full h-5 my-2.5 progress-black bg-black" value={80} max="100"></progress>
                </div>

                <div>
                    <h3 className="text-black text-lg font-semibold">Material Quality</h3>
                    <progress className="progress w-full h-5 bg-black my-2.5 progress-black" value={75} max="100"></progress>
                </div>

                <div>
                    <h3 className="text-black text-lg font-semibold">Time Working</h3>
                    <progress className="progress w-full h-5 bg-black my-2.5 progress-black" value={72} max="100"></progress>
                </div>
            </div>
        </div>



        {/* third section About section */}
        <div
        className="h-dvh flex items-center justify-end p-4"
        style={{
            background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.6)), url('/assets/Man_Walking.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment:"fixed"
        }}
        >
            <div className="md:w-1/2 w-full">
                <h2 className="md:text-5xl text-2xl text-center text-white md:text-end md:leading-[80px] font-bold">
                    ARE YOU READY TO WEAR OUR BEST FASHION WORK?
                </h2>
                <p className="md:text-end text-center text-white my-4 leading-8">
                    From luxurious fabrics to refined details, we craft wedding suits that stand the test of time. 
                    Whether you envision a traditional tuxedo, a contemporary slim-fit suit.
                </p>  

                <div className="flex md:justify-end justify-center">
                    <a href="#contact" className="inline-block text-xl text-white my-4 border border-solid py-3 px-6 hover:text-black hover:bg-white transition-all ease-in-out delay-100 duration-150"> Contact Us </a>
                </div>
            </div>
        </div>

        <div className="py-20">
            <h2 className="text-center md:text-5xl text-3xl font-bold text-black">HOW WE WORK</h2>
            <p className="text-center text-gray-700 md:w-1/2 w-fit mx-auto my-3">
                Make a lasting impression on your special day with a wedding suit that celebrates your individuality and complements your bride beautifully.
            </p>


            <div className="flex md:flex-row flex-col justify-between md:mt-32 mt-10 mb-24 px-10">
                <div className="text-center md:w-1/4 w-full my-14 md:my-0">
                    <h2 className="text-3xl font-semibold text-black my-4 ">Design</h2>
                    <p className="text-base text-gray-700">
                        The design process is where your unique vision comes to life. 
                        We start by understanding your individual style.
                    </p>
                </div>

                <div className="text-center md:w-1/4 w-full my-14 md:my-0">
                    <h2 className="text-3xl font-semibold text-black my-4">Working</h2>
                    <p className="text-base text-gray-700">
                        Our skilled artisans bring the design to fruition with precision and dedication. 
                    </p>
                </div>

                <div className="text-center md:w-1/4 w-full my-14 md:my-0">
                    <h2 className="text-3xl font-semibold text-black my-4">Finishing</h2>
                    <p className="text-base font-normal text-gray-700">
                        The finishing touches are what elevate our suits to a level of true sophistication.
                    </p>
                </div>
            </div>

            <div
            className="h-dvh flex"
            style={{
                background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0, 0.6)), url('/assets/HoldSuit_.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}
            >
                <div className="w-1/4 border border-r-white pt-20">
                    <h2 className="text-center md:text-2xl text-xl font-medium text-white">Casual Suit</h2>
                </div>

                <div className="w-1/4 border border-r-white pt-20">
                    <h2 className="text-center md:text-2xl text-xl font-medium text-white">Grooms Suit</h2>
                </div>

                <div className="w-1/4 border border-r-white pt-20">
                    <h2 className="text-center md:text-2xl text-xl font-medium text-white">Basic Suit</h2>
                </div>

                <div className="w-1/4 border border-r-white pt-20">
                    <h2 className="text-center md:text-2xl text-xl font-medium text-white">Fashion Cloth</h2>
                </div>
            </div>
        </div>


        </div>
        
     );
}
 
export default About_US;