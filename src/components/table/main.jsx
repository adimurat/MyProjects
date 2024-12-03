import upImage from '../images/up.png';
import timeImage from '../images/time.png';
import editImage from '../images/edit.png';
import deleteImage from '../images/delete.png';
import user1 from '../images/Mask group.png';
import warnImage from '../images/warn.png';
import eyeImage from '../images/eye2.png';
import closeImage from '../images/close.png'
import cancelImage from '../images/cancel.png' 
import infoImage from '../images/info.png'

const caseData = [
    {
        type: 'Распитие алкоголя в университете',
        student: 'Аружан Барушева',
        date: '14.11.2024',
        status: 'Действует',
        statusColor: '#F58500',
        
    },
    {
        type: 'Распитие алкоголя в университете',
        student: 'Аружан Барушева',
        date: '14.11.2024',
        status: 'Действует',
        statusColor: '#F58500',
        
    },
    {
        type: 'Распитие алкоголя в университете',
        student: 'Аружан Барушева',
        date: '14.11.2024',
        status: 'Действует',
        statusColor: '#F58500',
        
    },
];

function Table() {
    return (
        <>
            <div className='w-[1276px] h-[800px] rounded-xl pt-4 pb-4 pl-2 pr-2 bg-white'>
                <div className="w-[1230px] min-h-[341px] rounded-xl p-2 gap-4 bg-[#F0F3FA80]">
                    <div className="w-[1214px] min-h-[70px] p-4 gap-4">
                        <div className="flex justify-between items-center ml-3">
                            <div className="flex gap-4 items-center">
                                <div className="w-9 h-9 border bg-[#0068FF] rounded-md p-[6px]">
                                    <img src={upImage} alt="upImage" className="object-contain" />
                                </div>
                                <p className="w-[340px] h-[38px] font-medium text-[15px] text-[#1A1A1A]">
                                    Дело №1. Распитие алкоголя в университете 19.11.2024
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-[180px] flex items-center gap-2">
                                    <img src={timeImage} alt="timeImage" className="object-contain w-6 h-6" />
                                    <p className="font-medium text-[15px] text-[#AFB7CA]">На рассмотрении</p>
                                </div>
                                <span className="font-medium text-[15px] text-[#5F6B88]">
                                    Выговоров в деле: 3
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center w-[168px] h-[36px] rounded-lg border gap-2 border-[#AFB7CA] p-2">
                                    <img src={editImage} alt="editImage" />
                                    <span className="font-medium text-[15px] text-[#5F6B88]">Редактировать</span>
                                </button>
                                <button className="flex items-center w-[121px] h-[36px] rounded-lg border gap-2 border-[#F12D2D] p-2">
                                    <img src={deleteImage} alt="deleteImage" />
                                    <span>Удалить</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1214px] min-h-[239px] rounded-lg bg-white">
                        <table className="w-full p-4">
                            <thead className='h-12'>
                                <tr className="text-left border-b border-[#F0F3FA] pl-2">
                                    <th className="w-[350px] pl-4 font-medium text-[15px] text-[#5F6B88]">Тип выговора</th>
                                    <th className="w-[220px] font-medium text-[15px] text-[#5F6B88]">Студент</th>
                                    <th className="w-[200px] font-medium text-[15px] text-[#5F6B88]">Дата создания</th>
                                    <th className="w-[140px] font-medium text-[15px] text-[#5F6B88]">Статус</th>
                                </tr>
                            </thead>
                            <tbody>
                                {caseData.map((caseItem, index) => (
                                    <tr key={index} className="border-b border-[#F0F3FA] pt-3">
                                        <td className="w-[350px] h-[64px] font-medium text-[15px] text-black pl-4">
                                            {caseItem.type}
                                        </td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <img src={user1} alt="user1" />
                                                <span className="font-medium text-[15px] text-black">{caseItem.student}</span>
                                            </div>
                                        </td>
                                        <td className="text-[#5F6B88] font-medium text-[15px]">{caseItem.date}</td>
                                        <td>
                                            <div className="flex items-center gap-2 ">
                                                <img src={warnImage} alt="warnImage" />
                                                <span
                                                    className="font-medium text-[15px]"
                                                    style={{ color: caseItem.statusColor }}
                                                >
                                                    {caseItem.status}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="w-[144px]">
                                            <button className="w-[142px] h-9 flex items-center justify-center rounded-lg border gap-2 border-[#AFB7CA] p-2">
                                                <img src={eyeImage} alt="eyeImage" />
                                                <span>Подробнее</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-[1230px] min-h-[84px] rounded-xl p-2 gap-4 bg-[#F0F3FA80] mt-4">
                    <div className="w-[1214px] min-h-[70px] p-4 gap-4">
                        <div className="flex justify-between items-center ml-3">
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img src={closeImage} alt="upImage" className="object-contain" />
                                </div>
                                <p className="w-[340px] h-[38px] font-medium text-[15px] text-[#1A1A1A]">
                                    Дело №1. Распитие алкоголя в университете 19.11.2024
                                </p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-[180px] flex items-center gap-2">
                                    <img src={cancelImage} alt="cancelImage" className="object-contain w-6 h-6" />
                                    <p className="font-medium text-[15px] text-[#F12D2D]">Отклонено</p>
                                    <img src={infoImage} alt="infoImage" />
                                </div>
                                <span className="font-medium text-[15px] text-[#5F6B88]">
                                    Выговоров в деле: 1
                                </span>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center w-[168px] h-[36px] rounded-lg border gap-2 border-[#AFB7CA] p-2">
                                    <img src={editImage} alt="editImage" />
                                    <span className="font-medium text-[15px] text-[#5F6B88]">Редактировать</span>
                                </button>
                                <button className="flex items-center w-[121px] h-[36px] rounded-lg border gap-2 border-[#F12D2D] p-2">
                                    <img src={deleteImage} alt="deleteImage" />
                                    <span>Удалить</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;
