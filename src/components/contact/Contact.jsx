import Footer from "../footer/Footer";

const Contact_US = () => {
    return ( 
        <div className="py-12 pb-0">
            <div className="px-8">
            <div className="text-4xl text-gray-300 my-4">
                Logo.
            </div>

            <div className="text-gray-100">
                You can message us on whatsapp  <a href="https://wa.me/15551234567?text=Hello%2C%20I%20am%20interested%20in%20your%20services" target="_blank" className="text-red-500">Message Us</a>   
            </div>
            </div>

            <div className="mt-8">
                <Footer />
            </div>
        </div>
     );
}
 
export default Contact_US;