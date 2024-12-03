import downloadImage from '../images/download.png'
import eyeImage from '../images/eye.png'
import banImage from '../images/ban.png'
import icon from '../images/Icon.png'
import doneImage from '../images/done.png'
import exitImage from '../images/exit.png'
function Form () {
    return (
        <>
            <div className="w-[660px] min-h-[709px] bg-white rounded-xl p-8 gap-8">
                <p className="w-[596px] h-[26px] font-normal text-2xl text-black">Создание клуба</p>
                <div className="w-[596px] min-h-[507px] gap-6 mt-8">
                    <div className="m-w-[208px] min-h-[153px] pb-4 gap-6">
                        <div>
                            <div className="flex gap-6">
                                <div>
                                    <p className="w-[208px] h-[15px] font-medium text-[14px] text-[#5F6B88]">Логотип клуба</p>
                                    <div className="flex items-center border border-dashed border-[#0068FF] w-[208px] h-[114px] rounded-lg gap-2 mt-2">
                                        <div className="ml-[21px] mr-[21px] flex items-center gap-1 mt-[45px] mb-[45px]">
                                            <img src={downloadImage} alt="" className="w-6 h-6"/>
                                            <p className="w-[135px] h-[18px] font-bold text-[15px] text-[#0068FF]">Загрузить логотип</p>
                                        </div>
                                    </div>
                                    <span className="w-[146px] h-7 font-medium text-xs text-[#AFB7CA]">JPG, PNG, SVG Не более 600x600px, 5MB</span>
                                </div>
                                <div className="w-[364px] min-h-[235px] gap-6">
                                    <div className="w-[364px] min-h-[66px]">
                                        <p className="w-[364px] h-[15px] font-medium text-[14px] text-[#5F6B88]">Название клуба</p>
                                        <input type="text" className="w-[364px] min-h-[43px] rounded-lg pt-3 pr-4 pb-3 pl-4 gap-3 bg-[#F0F3FA] mt-2" placeholder='Введите название клуба'/>
                                    </div>
                                    <div className="w-[364px] min-h-5 mt-6">
                                        <div className="min-w-[115px] min-h-5 gap-2 flex">
                                            <input type="checkbox" className="w-5 h-5 border border-[#AFB7CA]"/>
                                            <p className="w-[87px] h-[15px] font-medium text-[14px] text-[#5F6B88] whitespace-nowrap">Главный клуб</p>
                                        </div>
                                    </div>
                                    <div className='w-[364px] min-h-[101px] pb-4 gap-2 mt-6'>
                                        <p className='w-[364px] h-[15px] font-medium text-[14px] text-[#5F6B88]'>Администратор клуба</p>
                                        <div className="w-[364px] h-[62px] rounded-lg pt-3 pb-3 pl-4 pr-4 bg-[#F0F3FA] flex justify-between items-center mt-2 mb-2">
                                            <label for="choices" className="w-[308px] h-[19px] font-normal text-[15px] text-[#AFB7CA] whitespace-nowrap">Выберите главного администратора</label>
                                            <select id="choices" name="choices" className="w-6 h-6 bg-transparent outline-none text-[#AFB7CA]">
                                            <option value="" selected disabled hidden></option>
                                            <option value="option1" className="text-black">Вариант 1</option>
                                            <option value="option2" className='text-black'>Вариант 2</option>
                                            <option value="option3" className='text-black'>Вариант 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[596px] min-h-[158px] pb-4 gap-2'>
                        <p className='w-[596px] h-[15px] font-medium text-[14px] text-[#5F6B88]'>Краткое описание</p>
                        <div className='mt-2'>
                            <textarea name="description" id="info" placeholder='Текст описания' className='w-[596px] h-[119px] rounded-lg pt-3 pb-3 pl-4 pr-4 gap-3 bg-[#F0F3FA] resize-none'></textarea>
                            <span className='w-[34px] h-[14px] font-medium text-xs text-[#AFB7CA] ml-4'>0/300</span>
                        </div>
                    </div>
                    <div className='w-[596px] min-h-[66px] gap-3 flex justify-between'>
                        <div className='w-[290px] min-h-[66px] gap-2'>
                            <p className='w-[67x] h-[15px] font-medium text-[14px] text-[#5F6B88]'>Категория</p>
                            <div className='w-[294px] min-h-[43px] gap-[10px] rounded-lg p-1 bg-[#F0F3FA] mt-2'>
                                
                            </div>
                        </div>
                        <div className='min-w-[294px] min-h-[66px] gap-2'>
                            <p className='w-[294px] h-[15px] font-medium text-[15px] text-[#5F6B88]'>Видимость</p>
                            <div className='w-[294px] min-h-[43px] gap-[10px] rounded-lg p-1 bg-[#F0F3FA] mt-2'>
                                <div className='flex items-center'>
                                    <button className='h-[35px] min-w-[124px] rounded-md pt-2 pb-2 pl-4 pr-4 gap-2 bg-[#0068FF] flex items-center'><img src={eyeImage} alt=""/><span className='text-white font-medium text-[15px]'>Видимый</span></button>
                                    <button className='h-[35px] min-w-[124px] rounded-md pt-2 pb-2 pl-4 pr-4 gap-2  flex items-center'><img src={banImage} alt="" /><span className='font-medium text-[15px] text-[#0068FF]'>Заблокирован</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[596px] min-h-[48px] gap-3 mt-8 mb-8'>
                        <div className='flex items-center justify-between'>
                            <button className='w-[292px] h-12 rounded-lg pt-3 pb-3 pl-12 pr-12 gap-2 bg-[#5F6B88] flex items-center justify-center'><img src={icon} alt="icon" /><span className=' font-semibold text-[15px] text-white'>Вернуться</span></button>
                            <button className='w-[292px] h-12 rounded-lg pt-3 pb-3 pl-12 pr-12 gap-2 bg-[#3BBC30] flex items-center justify-center opacity-30'><img src={doneImage} alt="done" /><span className='font-semibold text-[15px] text-white'>Создать клуб</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Form;