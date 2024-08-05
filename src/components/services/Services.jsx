import First_Service_Img from '/assets/Service_First_Pic.jpg';
import Second_Service_Img from '/assets/Service_Second_Pic.jpg';


const Services = () => {
    return ( 
        <div className="bg-white py-10 px-6">
            <h1 className="text-5xl font-bold text-black ">SERVICES</h1>

            <p className="w-1/2 text-sm my-5 text-gray-900">
                Our expert tailors provide meticulous alterations to ensure your clothing fits perfectly. 
                From simple adjustments to major modifications, we enhance the fit and comfort of your garments while maintaining their original integrity and style. 
                Trust us to make your favorite pieces look and feel just right.
            </p>

            <div className='flex my-8'>
                <div className='flex w-1/2 items-center justify-between h-48'>
                    <div className='w-1/2 h-full'>
                        <img src={First_Service_Img} alt="Suit Images" className='h-full w-full'/>
                    </div>

                    <div className='w-2/5'>
                        <h2 className='text-3xl my-3 font-bold text-black'>WEDDING SUIT</h2>
                        <p className='text-base text-gray-900 leading-6'>
                            Step into your wedding day with unmatched sophistication and style.
                        </p>
                    </div>
                </div>


                <div className='flex w-1/2 items-center justify-between h-48'>
                    <div className='w-1/2 h-full'>
                        <img src={Second_Service_Img} alt="Suit Images"  className='h-full w-full' />
                    </div>

                    <div className='w-2/5'>
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