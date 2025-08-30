import phone from "../../assets/images/phone.png"
import losos from "../../assets/images/losos.jpg"
import car from "../../assets/images/car.jpg"
import { styles } from '../../styles/styles'
import { FaWhatsapp } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'


function HeaderTips() {
    const { t } = useTranslation()

    return (
        <div className={`mt-[10px] ${styles.container} grid grid-cols-3 gap-[10px]`}>
            <div className="bg-white rounded-[20px] p-5 flex flex-col justify-between h-full">
                <div>
                    <h3 className="font-semibold text-[24px] leading-[120%] mb-2">{t('chatBot')}</h3>
                    <span className="font-medium text-[14px] leading-[130%] block mb-4">{t('chatBotSpan')}</span>
                </div>
                <div className="flex justify-between items-end mt-auto">
                    <button className="cursor-pointer bg-[#4ADD47] rounded-[10px] text-white py-[7px] px-[15px] flex items-center gap-[4.5px]">
                        <FaWhatsapp /> WhatsApp
                    </button>
                    <img src={phone} alt="phone" className="max-h-[90px] object-contain" />
                </div>
            </div>

            <div className="bg-white rounded-[20px] p-5 flex flex-col justify-between h-full">
                <div>
                    <h3 className="font-semibold text-[24px] leading-[120%] mb-2">{t('coolLosos')}</h3>
                    <span className="font-medium text-[14px] leading-[130%] block mb-4">{t('sale')}</span>
                </div>
                <div className="flex justify-between items-end mt-auto">
                    <span className="bg-[#FFED32] text-[14px] rounded-[10px] py-[5px] px-[12px]">до 31.12.2023 г.</span>
                    <img src={losos} alt="losos" className="max-h-[90px] object-contain" />
                </div>
            </div>

            <div className="bg-white rounded-[20px] p-5 flex flex-col justify-between h-full">
                <div>
                    <h3 className="font-semibold text-[24px] leading-[120%] mb-2">{t('fastDelivery')}</h3>
                    <span className="font-medium text-[14px] leading-[130%] block mb-4">{t('untilEleven')}</span>
                </div>
                <div className="flex justify-end items-end mt-auto">
                    <img src={car} alt="car" className="max-h-[90px] object-contain" />
                </div>
            </div>
        </div>

    )
}

export default HeaderTips
