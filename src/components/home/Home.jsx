const Home = () => {
    return ( 
        <div 
        className="h-dvh flex items-center justify-center"
        style={{
            background: "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0, 0.7)), url('/assets/Home_Suit.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",

        }}
        >
            <div className="text-center">
                <h1 className="text-6xl font-bold text-white leading-[80px]">
                    THE BEST PERSONALISED FASHION DESIGNING SERVICES
                </h1>

                <a href="#contact" className="inline-block text-xl text-white my-4 border border-solid py-3 px-6 hover:text-black hover:bg-white transition-all ease-in-out delay-100 duration-150"> Contact Us </a>
            </div>
        </div>
     );
}
 
export default Home;