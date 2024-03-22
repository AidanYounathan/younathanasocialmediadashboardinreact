import React, { useEffect, useState } from 'react'
import { CustomFlowbiteTheme, Label, ToggleSwitch } from 'flowbite-react';
import '../App.css'
import TopCardComponent from './TopCardComponent';
import BottomCardComponent from './BottomCardComponent';
import positive from '../Assets/icon-up.svg'
import negative from '../Assets/icon-down.svg'
import fb from '../Assets/icon-facebook.svg'
import twit from '../Assets/icon-twitter.svg'
import insta from '../Assets/icon-instagram.svg'
import yt from '../Assets/icon-youtube.svg'


const Dashboard = () => {

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')
  }


  const [switch1, setSwitch1] = useState(true); //Keep
  const [toggle, setToggle] = useState<boolean>(false);
  const [headText, setHeadText] = useState<string>('darkTitle');
  const [toggleBtn, setToggleBtn] = useState<string>('darkToggle');
  const [card, setCard] = useState<string>('darkCard');
  const [hr, setHr] = useState<string>('hrDark');

  useEffect(() => {

    if (switch1 === false) {

      // setHeadText('darkHeadText');
      // setToggleBtn('darkToggleBtn');
      // setCard('darkCard');
      // setHr('hrDark');
      document.body.style.backgroundColor = '#1E202A';
    } else {

      // setHeadText('lightHeadText');
      // setToggleBtn('lightToggleBtn');
      // setCard('lightCard');
      // setHr('hrLight');
      document.body.style.backgroundColor = '#FFFFFF';
    }

  }, [switch1])

  const handleTheme = () => {
    setToggle(!toggle);
  }


  const customTheme: CustomFlowbiteTheme = {
    button: {
      color: {
        primary: 'bg-red-500 hover:bg-red-600',
      },
    },
  };

  return (
    <>
      <div className='inter'>
        <div>
          <div className={`bg-[#f5f7ff] dark:bg-[#1f212e] h-[250px] rounded-b-[15px] px-6 xl:px-[165px]`}>
            <div className="grid xl:grid-cols-2 py-10">
              <div>
                <h1 className={' text-[27px] leading-7 font-bold text-black dark:text-white'}>
                  Social Media Dashboard
                </h1>
                <p className='font-bold text-[#63687e] dark:text-[#8b97c6]'>Total Followers: 23,004</p>
              </div>
              <div className={`block xl:hidden my-4 h-[1px] ${hr}`}></div>
              <div className="grid xl:justify-end my-auto">
                <div className={`${toggleBtn} grid grid-cols-2`}>
                  <div className="my-auto">

                  </div>
                  <div className="flex" onClick={toggleTheme}>
                    <span className='dark:text-[#8b97c6;] mr-2 dark:hover:text-white'>{switch1 ? "Light Mode" : "Dark Mode"}</span>
                    <ToggleSwitch className=' toggleClass' checked={switch1} onChange={setSwitch1} />
                  </div>

                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-4 gap-7">
              <div className="w-full mx-auto">
                <TopCardComponent
                  statsColor="text-[#1db489]"
                  statLogo={positive}
                  posNeg='Positive'
                  stats="12 Today"
                  type="FOLLOWERS"
                  followers="1987"
                  logo={fb}
                  company='Facebook'
                  username="@nathanf"
                  topBorder="facebook"
                />
              </div>
              <div className="w-full mx-auto">
                <TopCardComponent
                  statsColor="text-[#1db489]"
                  statLogo={positive}
                  posNeg='Positive'
                  stats="99 Today"
                  type="FOLLOWERS"
                  followers="1044"
                  logo={twit}
                  company='Twitter'
                  username="@nathanf"
                  topBorder="twitter"
                />
              </div>
              <div className="w-full mx-auto">
                <TopCardComponent
                  statsColor="text-[#1db489]"
                  statLogo={positive}
                  posNeg='Positive'
                  stats="1099 Today"
                  type="FOLLOWERS"
                  followers="11k"
                  logo={insta}
                  company='Instagram'
                  username="@realnathanf"
                  topBorder="instagram"
                />
              </div>
              <div className="w-full mx-auto">
                <TopCardComponent
                  statsColor="text-[#dc414c]"
                  statLogo={negative}
                  posNeg='Negative'
                  stats="144 Today"
                  type="SUBSCRIBERS"
                  followers="8239"
                  logo={yt}
                  company='Youtube'
                  username="Nathan F."
                  topBorder="youtube"
                />
              </div>
            </div>

            <div>
              <h1 className={'text-[24px] mt-11 mb-6 font-bold dark:text-white'}>Overview - Today</h1>
            </div>

            <div className="grid xl:grid-cols-4 gap-7">
              <div className="w-full mx-auto">
                <BottomCardComponent statsColor='text-[#1db489]' posNeg='Positive' statLogo={positive} stats='3%' logo={fb} followers='87' type='Page Views' headText={headText} company='Facebook' />
              </div>
              <div className="w-full mx-auto">
                <BottomCardComponent statsColor='text-[#dc414c]' posNeg='Negative' statLogo={negative} stats='2%' logo={fb} followers='52' type='Likes' headText={headText} company='Facebook' />
              </div>
              <div className="w-full mx-auto">
                <BottomCardComponent statsColor='text-[#1db489]' posNeg='Positive' statLogo={positive} stats='2257%' logo={insta} followers='5462' type='Likes' headText={headText} company='Instagram' />
              </div>
              <div className="w-full mx-auto">
                <BottomCardComponent statsColor='text-[#1db489]' posNeg='Positive' statLogo={positive} stats='1375%' logo={insta} followers='52k' type='Profile Views' headText={headText} company='Instagram' />
              </div>
              <div className="w-full mx-auto">
                <BottomCardComponent statsColor='text-[#1db489]' posNeg='Positive' statLogo={positive} stats='303%' logo={twit} followers='117' type='Retweets' headText={headText} company='Twitter' />
              </div>
              <div className="w-full mx-auto">
                <BottomCardComponent statsColor='text-[#1db489]' posNeg='Positive' statLogo={positive} stats='553%' logo={twit} followers='507' type='Likes' headText={headText} company='Twitter' />
              </div>
              <div className="w-full mx-auto">
                <BottomCardComponent statsColor='text-[#dc414c]' posNeg='Negative' statLogo={negative} stats='19%' logo={yt} followers='107' type='Likes' headText={headText} company='Youtube' />
              </div>
              <div className="w-full mx-auto mb-[45px] xl:mb-[75px]">
                <BottomCardComponent statsColor='text-[#dc414c]' posNeg='Negative' statLogo={negative} stats='12%' logo={yt} followers='1407' type='Total Views' headText={headText} company='Youtube' />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Dashboard


