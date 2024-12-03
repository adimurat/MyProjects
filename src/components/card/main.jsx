import userImage from '../images/image 1.png'

function Card () {
    return (
        <>
            <div className="bg-white w-[230px] h-[150px] rounded-xl block ml-7 mt-[100px]">
                <div className="flex flex-col">
                    <p className="w-[146px] h-[15px] font-medium text-[14px] text-gray-500  whitespace-nowrap mt-[27px] ml-6">Последний преподаватель</p>
                    <div className='flex gap-3 min-w-[190px] min-h-10 justify-center items-center mt-11 mb-6 ml-6 mr-4'>
                        <img src={userImage} alt="" className='rounded-[1000px] bg-[#FFE7C9]'/>
                        <div className='min-w-[138px] min-h-9 gap-1'>
                            <p className='w-[105px] h-4 text-base font-medium text-[#5F6B88] whitespace-nowrap'>Байрамов Б.О.</p>
                            <span className='w-[138px] h-4 text-xs font-normal text-[#5F6B88] opacity-60'>08.07.2024  10:00-11:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;