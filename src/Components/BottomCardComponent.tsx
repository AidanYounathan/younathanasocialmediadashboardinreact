import React from 'react'

const BottomCardComponent = (prop: {card:string, text:string, company:string, posNeg:string, type:string, logo:string, headText:string, followers:string, statsColor:string, statLogo:string, stats:string}) => {
  return (
    <div className=''>
      <div className={`${prop.card} grid grid-cols-2 px-6 py-4 rounded-[5px]`}>
        <div className={`${prop.text} boldInt whitespace-nowrap`}>{prop.type}</div>
        <div className='grid justify-end'><img src={prop.logo} alt={`${prop.company} logo`}/></div>
        <div className={`${prop.headText} font-bold text-[35px] leading-none mt-12`}>{prop.followers}</div>
        <div className={`text-end mt-auto leading-none ${prop.statsColor}`}><img className='inline me-2' src={prop.statLogo} alt={`${prop.posNeg} arrow`}/>{prop.stats}</div>
      </div>
    </div>
  )
}

export default BottomCardComponent
