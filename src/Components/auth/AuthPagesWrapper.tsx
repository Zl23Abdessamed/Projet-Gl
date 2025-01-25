import React from 'react'
import SideEffects1 from "../../assets/sideEffects1.svg"
import SideEffects2 from "../../assets/sideEffects2.svg"
import Star from "../../assets/Star.svg"

type AuthElementProps = {
    title : string;
    description : string;
};

const AuthPagesWrapper = ({children , props} : {children : React.ReactNode , props : AuthElementProps}) => {
  return (
    <div className='w-screen h-screen relative flex justify-center items-center font-poppins'>
        <img src={SideEffects1} alt="side-effects-for-corners" className='absolute top-0 right-0' />
        <img src={SideEffects2} alt="side-effects-for-corners" className='absolute bottom-0 left-0' />
        <div className='h-4/6 w-11/12 flex z-50 rounded-xl bg-white shadow-sm'>
            <div className='flex flex-col items-center justify-center bg-ternary-color text-white rounded-xl shadow-sm w-1/3 relative'>
                <img src={Star} alt="side-effects" className='absolute bottom-[10%] left-[10%]' />
                <div className='bg-ternary-light-color bg-opacity-30 h-5 w-6 shadow-md absolute top-[10%] left-1/2'></div>
                <div className='bg-ternary-light-color bg-opacity-30 h-2 w-3 shadow-md absolute bottom-[10%] right-1/4'></div>
                <h1 className='text-4xl font-semibold mb-4'>{props.title}</h1>
                <p className='text-xl font-light'>{props.description}</p>
            </div>
            <div className='flex items-center justify-center w-2/3'>
                {
                    children
                }
            </div>
        </div>
    </div>
  )
}

export default AuthPagesWrapper