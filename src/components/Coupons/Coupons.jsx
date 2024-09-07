import useCoupon from "../../hooks/useCoupon";

const Coupons = () => {

    const [coupons,,isLoading]= useCoupon()
    return (
        <div className='w-11/12 mx-auto mt-24'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-gray-500 mt-5'>Grab Our Exciting Offer</h1>
            </div>

            
            <div className="flex justify-center">

{isLoading&&<span className="loading loading-bars loading-lg"></span>}

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
    {
        coupons?.map((item,index)=><div  data-aos="zoom-in" data-aos-duration="500" key={index} className="container mx-auto mt-10">
        <div className="bg-gradient-to-br from-blue-900 border-t-yellow-600 text-white text-center py-10 px-20 rounded-lg shadow-md relative">
            <img src="https://i.imghippo.com/files/5XMiJ1725286055.jpg" className="w-20 mx-auto mb-4 rounded-lg"/>
            <h3 className="text-2xl font-semibold mb-4">{item?.description}</h3>
            <div className="flex justify-center items-center space-x-2 mb-6">
                <span id="cpnCode" className="border-dashed border text-white px-4 py-2 rounded-l">{item?.code}</span>
                <span id="cpnBtn" className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer">GET</span>
            </div>
            <p className="text-sm">Valid Till: {item?.validDate}</p>
            
<div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
<div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>

        </div>
    </div>)
    }


</div>

            
            
        </div>
    );
};

export default Coupons;