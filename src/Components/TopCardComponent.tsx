import React from 'react'
import '../App.css';
//This was heavily inspired by Brandon Nguyen, I changed styling by moving it from style tags to classes, added a prop to give the alt tag the corresponding company alt tag and positive or negative
const TopCardComponent = (prop: { company:string, posNeg:string, topBorder:string, logo:string, username:string, followers:string, type:string, statsColor:string, statLogo:string, stats:string}) => {
  return (
    <div>
      <div className={` cursor-pointer dark:hover:bg-[#333A56] hover:bg-[#E1E3F0] text-center rounded-[5px] bg-[#f0f2fa] dark:bg-[#252a41]`}>
        <div className={`h-[6px] rounded-t-[5px] ${prop.topBorder}`}></div>
        <p className="font-bold dark:text-[#8b97c6]"><img className='inline me-2 my-6 h-5' src={prop.logo} alt={`${prop.company} logo`}/>{prop.username}</p>
        <h1 className={` font-bold  text-[50px] dark:text-white leading-none`}>{prop.followers}</h1>
        <p className={`tracking-[0.25em] dark:text-[#8b97c6;] font-bold`}>{prop.type}</p>
        <p className={`${prop.statsColor} bold`}><img className='inline me-2 my-8' src={prop.statLogo} alt={`${prop.posNeg} arrow`}/>{prop.stats}</p>
      </div>
    </div>
  )
}

export default TopCardComponent
