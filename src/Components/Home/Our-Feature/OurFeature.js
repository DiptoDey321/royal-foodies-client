import React from 'react'

function OurFeature() {
  return (
    <div className='mx-[10%] my-14 bg-slate-50'>
        <div className="ml-[5%] pt-10">
            <h2 className=' text-lg Roboto text-slate-600 why-us'>Why us </h2>
        </div>
        <div className="flex flex-wrap justify-around gap-y-10 p-8 rounded-lg">
            <div className="service01 flex items-center gap-x-3 border rounded-lg p-4 bg-slate-100 w-[280px] h-[100px]">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.2225 12.9357L29.2225 4.68574C29.001 4.56389 28.7523 4.5 28.4995 4.5C28.2467 4.5 27.998 4.56389 27.7765 4.68574L12.7765 12.9357C12.5414 13.0652 12.3452 13.2555 12.2086 13.4866C12.0721 13.7177 12 13.9813 12 14.2497C12 14.5182 12.0721 14.7818 12.2086 15.0129C12.3452 15.244 12.5414 15.4343 12.7765 15.5637L26.9995 23.3862V39.4647L22.4455 36.9597L20.9995 39.5862L27.7765 43.3137C27.9979 43.4359 28.2467 43.4999 28.4995 43.4999C28.7524 43.4999 29.0011 43.4359 29.2225 43.3137L44.2225 35.0637C44.4578 34.9343 44.654 34.7441 44.7907 34.513C44.9274 34.2818 44.9995 34.0183 44.9995 33.7497V14.2497C44.9995 13.9812 44.9274 13.7176 44.7907 13.4865C44.654 13.2554 44.4578 13.0652 44.2225 12.9357ZM28.4995 7.71274L40.387 14.2497L28.4995 20.7867L16.612 14.2497L28.4995 7.71274ZM41.9995 32.8632L29.9995 39.4632V23.3847L41.9995 16.7847V32.8632Z" fill="#727171"/>
                    <path d="M15 24H3V21H15V24ZM18 36H6V33H18V36ZM21 30H9V27H21V30Z" fill="#727171"/>
                </svg>
                <div className="Roboto text-base text-[#727171]">
                    <p className='font-semibold tracking-wider'>Free Deliery</p>
                    <p>For all orders overs 1k</p>
                </div>
            </div>

            <div className="service01 flex items-center gap-x-3 border rounded-lg p-4 bg-slate-100 w-[280px] h-[100px]">
                <svg width="32" height="43" viewBox="0 0 32 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M28 19H4C2.93913 19 1.92172 19.4214 1.17157 20.1716C0.421427 20.9217 0 21.9391 0 23V39C0 40.0609 0.421427 41.0783 1.17157 41.8284C1.92172 42.5786 2.93913 43 4 43H28C29.0609 43 30.0783 42.5786 30.8284 41.8284C31.5786 41.0783 32 40.0609 32 39V23C32 21.9391 31.5786 20.9217 30.8284 20.1716C30.0783 19.4214 29.0609 19 28 19ZM28 39H4V31H28V39ZM28 27H4V23H28V27ZM26 7V17H23V10H11.76L16.6 14.86L14.48 17L6 8.5L14.48 0L16.6 2.14L11.76 7H26Z" fill="#727171"/>
                </svg>

                <div className="Roboto text-base text-[#727171]">
                    <p className='font-semibold tracking-wider'>Refundable</p>
                    <p>we refund on no damage</p>
                </div>
            </div>
            <div className="service01 flex items-center gap-x-3 border rounded-lg p-4 bg-slate-100  w-[280px] h-[100px]">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 24.885L17.115 21L15 23.115L21 29.115L33 17.115L30.885 15L21 24.885Z" fill="#727171"/>
                    <path d="M24 45L14.736 40.0605C12.095 38.6555 9.88646 36.5578 8.34739 33.9926C6.80832 31.4274 5.99683 28.4915 6.00001 25.5V6C6.0008 5.20459 6.31713 4.44199 6.87957 3.87956C7.442 3.31712 8.2046 3.00079 9.00001 3H39C39.7954 3.00079 40.558 3.31712 41.1205 3.87956C41.6829 4.44199 41.9992 5.20459 42 6V25.5C42.0032 28.4915 41.1917 31.4274 39.6526 33.9926C38.1136 36.5578 35.905 38.6555 33.264 40.0605L24 45ZM9.00001 6V25.5C8.99752 27.9477 9.66166 30.3499 10.9212 32.4487C12.1806 34.5475 13.9879 36.2637 16.149 37.413L24 41.5995L31.851 37.4145C34.0123 36.265 35.8197 34.5486 37.0792 32.4495C38.3388 30.3504 39.0028 27.948 39 25.5V6H9.00001Z" fill="#727171"/>
                </svg>

                <div className="Roboto text-base text-[#727171]">
                    <p className='font-semibold tracking-wider'>Secure Payment</p>
                    <p>100% secure payment</p>
                </div>
            </div>
            <div className="service01 flex items-center gap-x-3 border rounded-lg p-4 bg-slate-100  w-[280px] h-[100px] overflow-hidden">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4C12.972 4 4 12.972 4 24V32.286C4 34.334 5.794 36 8 36H10C10.5304 36 11.0391 35.7893 11.4142 35.4142C11.7893 35.0391 12 34.5304 12 34V23.714C12 23.1836 11.7893 22.6749 11.4142 22.2998C11.0391 21.9247 10.5304 21.714 10 21.714H8.184C9.296 13.974 15.956 8 24 8C32.044 8 38.704 13.974 39.816 21.714H38C37.4696 21.714 36.9609 21.9247 36.5858 22.2998C36.2107 22.6749 36 23.1836 36 23.714V36C36 38.206 34.206 40 32 40H28V38H20V44H32C36.412 44 40 40.412 40 36C42.206 36 44 34.334 44 32.286V24C44 12.972 35.028 4 24 4Z" fill="#727171"/>
                </svg>

                <div className="Roboto text-base text-[#727171]">
                    <p className='font-semibold tracking-wider'>24/7 Customer Support</p>
                    <p>We have dedicated support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurFeature