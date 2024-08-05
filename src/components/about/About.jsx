
import Suit_Holding from "/assets/Suit_Hand_Holding.jpg";
import Suit_Pocket from "/assets/Suit_Hand_Pocket.jpg";

const About_US = () => {
    return ( 
        <div className="bg-white py-16 px-6">
            <div className="flex items-center justify-between my-20">
            <div className="flex w-1/2 h-full">
                <img src={Suit_Holding} alt="Someone Holding is suit" className="w-1/2 h-full translate-y-10"/>
                <img src={Suit_Pocket} alt="Someone Putting is hand in his suit" className="w-1/2 h-full translate-x-6" />
            </div>

            <div className="w-5/12">
                <h2 className="text-6xl font-bold my-2 text-black">About Us</h2>
                <p className="text-gray-600 leading-7">
                    we specialize in crafting custom wedding suits that embody elegance, sophistication, and personal style. 
                    Our expert tailors dedicate themselves to creating perfectly fitted suits, using only the finest fabrics and meticulous attention to detail. 
                    We believe every groom deserves to feel confident and look his best on his special day, and we are committed to making that a reality with our bespoke tailoring services.
                    Whether you envision a classic tuxedo, a modern slim-fit suit, or a unique design that reflects your individuality, we are here to bring your vision to life. 
                    With a passion for quality and a commitment to excellence we are your trusted partner in making your wedding day unforgettable.
                </p>

                <div className="flex my-6">
                    <div className="w-1/2">
                        <h1 className="text-6xl font-bold text-black my-3">40</h1>
                        <p className="text-gray-700">Suit Project</p>
                    </div>

                    <div className="w-1/2">
                        <h1 className="text-6xl font-bold text-black my-3">25</h1>
                        <p className="text-gray-700">Year Experience</p>
                    </div>
                </div>

            </div>
        </div>


        <div className="flex items-center justify-between">
            <div className="w-2/5">
                <h2 className="text-5xl font-bold text-black leading-[80px]">
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

            <div className="w-1/2">
                <div>
                    <h3 className="text-black text-lg font-semibold">Precision Tailoring</h3>
                    <progress className="progress w-full h-5 rounded-none my-2.5 progress-black" value={80} max="100"></progress>
                </div>

                <div>
                    <h3 className="text-black text-lg font-semibold">Material Quality</h3>
                    <progress className="progress w-full h-5 rounded-none my-2.5 progress-black" value={75} max="100"></progress>
                </div>

                <div>
                    <h3 className="text-black text-lg font-semibold">Time Working</h3>
                    <progress className="progress w-full h-5 rounded-none my-2.5 progress-black" value={72} max="100"></progress>
                </div>
            </div>
        </div>
        </div>
        
     );
}
 
export default About_US;