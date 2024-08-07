import First_Service_Img from '/assets/Service_First_Pic.jpg';
import Second_Service_Img from '/assets/Service_Second_Pic.jpg';


const Services = () => {
    return ( 
        <div className="bg-white md:py-10 pt-6 px-6">
            <h1 className="md:text-5xl text-3xl font-bold text-black text-center md:text-start">SERVICES</h1>

            <p className="md:w-1/2 w-full text-sm my-5 text-gray-900">
                Our expert tailors provide meticulous alterations to ensure your clothing fits perfectly. 
                From simple adjustments to major modifications, we enhance the fit and comfort of your garments while maintaining their original integrity and style. 
                Trust us to make your favorite pieces look and feel just right.
            </p>

            <div className='flex md:flex-row flex-col my-8'>
                <div className='flex md:flex-row flex-col md:w-1/2 w-full items-center justify-between md:h-48 h-max my-12 md:my-0'>
                    <div className='md:w-1/2 w-full h-full'>
                        <img src={First_Service_Img} alt="Suit Images" className='h-full w-full'/>
                    </div>

                    <div className='md:w-2/5 w-full'>
                        <h2 className='text-3xl my-3 font-bold text-black'>WEDDING SUIT</h2>
                        <p className='text-base text-gray-900 leading-6'>
                            Step into your wedding day with unmatched sophistication and style.
                        </p>
                    </div>
                </div>


                <div className='flex md:flex-row flex-col md:w-1/2 w-full items-center justify-between md:h-48 h-max my-12 md:my-0'>
                    <div className='md:w-1/2 w-full h-full'>
                        <img src={Second_Service_Img} alt="Suit Images"  className='h-full w-full' />
                    </div>

                    <div className='md:w-2/5 w-full'>
                        <h2 className='text-3xl my-3 font-bold text-black'>WEDDING SUIT</h2>
                        <p className='text-base text-gray-900 leading-6'>
                            Celebrate your big day with a wedding suit that epitomizes modern sophistication and style.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Services;