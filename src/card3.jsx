import React from 'react';

const Card3 = () => {
    return (
        <div>
            <div class='flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
    <div class='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div class='max-w-md mx-auto'>
          <div class='h-[236px]' style={{backgroundImage:"url(img.jpeg)",backgroundSize:"cover",backgroundPosition:"center"}}>
            
           </div>
          <div class='p-4 sm:p-6'>
            <p class='font-bold text-gray-700 text-[22px] leading-7 mb-1'>Spagetti with shrimp sauce</p>
            <div class='flex flex-row'>
              <p class='text-[#3C3C4399] text-[17px] mr-2 line-through'>MVR 700</p>
              <p class='text-[17px] font-bold text-[#0FB478]'>MVR 700</p>
            </div>
            <p class='text-[#7C7C80] font-[15px] mt-6'>Our shrimp sauce is made with mozarella, a creamy taste of shrimp with extra kick of spices.</p>


              <a target='_blank' href='foodiesapp://food/1001' class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                  View on foodies
              </a>
            <a target='_blank' href="https://apps.apple.com/us/app/id1493631471" class='block mt-1.5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] hover:bg-[#F2ECE7] hover:text-[#000000dd] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                  Download app
              </a>
          </div>
        </div>
    </div>
</div>
        </div>
    );
}

export default Card3;
