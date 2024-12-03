import image from '../images/Frame.png'
import './main.css'

function Button () {
    return (
        <>
            <div className='mt-[100px] ml-7'>
                <button className='rounded-lg bg-black w-[110px] h-[40px] flex justify-center items-center pt-2 pr-3 pb-2 pl-3 gap-2'>
                    <img src={image} alt="image" className='w-6 h-6'/>
                    <p className='text-white w-[54px] h-[18px] text-[15px] font-semibold'>QR-код</p>
                </button>
            </div>
        </>
    )
}
export default Button;