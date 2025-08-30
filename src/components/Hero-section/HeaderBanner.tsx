import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { styles } from '../../styles/styles';
import bgUzor from "/Group.png"
import bgUzor1 from "/Group-2.png"
import bgUzor2 from "/Group-3.png"
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setModalStatus } from '@/featerues/headerModalSlice';

function HeaderBanner() {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleOpen = () => {
    dispatch(setModalStatus("open"))
  }

  return (
    <header className={`${styles.container} pt-[20px]`}>
      <Swiper spaceBetween={50} slidesPerView={1}>
        <SwiperSlide className="min-h-[450px] max-h-[450px] relative bg-[#6BA252] pt-[40px] pb-[74px] px-[40px] text-white font-semibold text-[50px] leading-[100%] rounded-[20px] overflow-hidden">
          <div className="absolute inset-0 z-0"><img src={bgUzor} alt="фон узор" className="w-full h-full object-cover" /></div>
          <div className="relative z-10">
            <h1 className="max-w-[600px] mb-[20px] text-[50px] leading-[100%]">{t('FirstSlide')}</h1>
            <span className="font-medium text-[16px] leading-[120%] mb-[30px] block max-w-[223px]">{t('slidesSpan')}</span>
            <button onClick={handleOpen} className={styles.button}>{t('button')}</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[450px] max-h-[450px] relative bg-[#6BA252] pt-[40px] pb-[74px] px-[40px] text-white font-semibold text-[50px] leading-[100%] rounded-[20px] overflow-hidden">
          <div className="absolute inset-0 z-0"><img src={bgUzor1} alt="фон узор" className="w-full h-full object-cover" /></div>
          <div className="relative z-10">
            <h1 className="max-w-[600px] text-[50px] leading-[100%] mb-[20px]">{t('SecondSlide')}</h1>
            <span className="font-medium text-[16px] leading-[120%] mb-[30px] block max-w-[223px]">{t('slidesSpan')}</span>
            <button onClick={handleOpen} className={styles.button}>{t('button')}</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[450px] max-h-[450px] relative bg-[#6BA252] pt-[40px] pb-[74px] px-[40px] text-white font-semibold text-[50px] leading-[100%] rounded-[20px] overflow-hidden">
          <div className="absolute inset-0 z-0"><img src={bgUzor2} alt="фон узор" className="w-full h-full object-cover" /></div>
          <div className="relative z-10">
            <h1 className="max-w-[600px] text-[50px] leading-[100%] mb-[20px]">{t('ThirdSlide')}</h1>
            <span className="font-medium text-[16px] leading-[120%] mb-[30px] block max-w-[223px]">{t('slidesSpan')}</span>
            <button onClick={handleOpen} className={styles.button}>{t('button')}</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  )
}

export default HeaderBanner