import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import formMeat from "../../assets/images/form-meat.png"
import { styles } from '../../styles/styles'
import { FaX } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { setModalStatus } from '@/featerues/headerModalSlice'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function HeaderModal() {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(setModalStatus("close"))
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      comment: "",
      agreement: false,
    }
  })

  const onSubmit = (data: any) => {
    console.log("Form Data:", data)
    reset()
    dispatch(setModalStatus("close"))
  }

  return (
    <div className='fixed top-0 left-0 z-50 bg-[rgba(32,54,134,0.4)] w-full h-[100vh]'>
      <div className="relative w-full">
        <button
          onClick={handleClose}
          className='text-white text-[24px] absolute right-[100px] top-[60px] cursor-pointer hover:opacity-60 transition duration-300'
        >
          <FaX />
        </button>

        <div className="bg-white flex w-[80%] m-auto translate-y-[10%] rounded-[20px]">
          <img src={formMeat} alt="form" />

          <div className="py-[40px] px-[40px] w-full">
            <h3 className='font-semibold text-[40px] leading-[100%] mb-[20px]'>
              {t('formTitle')}
            </h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder={t('formName')}
                {...register("name", { required: t('nameRequired') })}
                className={`${styles.input} ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-[-12px] mb-[8px]">{errors.name.message as string}</p>}

              <Controller
                name="phone"
                control={control}
                rules={{ required: t('phoneRequired') }}
                render={({ field }) => (
                  <PhoneInput
                    country={'uz'}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    inputClass={`${styles.input}`}
                    containerClass="!w-full"
                    buttonClass="!hidden"
                    dropdownClass="!z-[9999]"
                    enableSearch
                    disableDropdown
                  />
                )}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-[-12px] mb-[8px]">{errors.phone.message as string}</p>}

              <input
                type="text"
                placeholder={t('formComment')}
                {...register("comment")}
                className={`${styles.input} mb-[16px]`}
              />

              <label className='flex items-start gap-[11px] text-sm leading-snug'>
                <input
                  type="checkbox"
                  {...register("agreement", { required: t('agreementRequired') })}
                />
                {t('formAgreement')}
              </label>
              {errors.agreement && <p className="text-red-500 text-sm mt-[4px]">{errors.agreement.message as string}</p>}

              <button type="submit" className={`${styles.button} w-full mt-[40px]`}>
                {t('formSend')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderModal
