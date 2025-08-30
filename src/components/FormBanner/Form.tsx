import { useForm, Controller } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import { styles } from '../../styles/styles'

function Form() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log('Отправка формы:', data)
    }

    return (
        <section
            style={{ background: 'url(/form-background.png)' }}
            className={`${styles.container} !block bg-cover bg-center pt-[60px] pb-[114px]`}
        >
            <h2 className="font-semibold text-[40px] leading-[100%] text-center max-w-[921px] m-auto mb-[40px] text-white pt-[60px] pb-[60px]">
                Получите индивидуальное коммерческое предложение для вашего бизнеса
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white max-w-6xl mx-auto p-8 rounded-[20px] grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                <div className="space-y-[10px] pt-[20px]">
                    <div>
                        <label className={`${styles.span}`}>Ваша ниша</label>
                        <select {...register('niche', { required: 'Выберите нишу' })} className={styles.input}>
                            <option value="">Выберите</option>
                            <option value="opt">Оптовик</option>
                            <option value="retail">Розница</option>
                        </select>
                        {errors.niche && <p className="text-red-500 text-sm">{errors.niche.message}</p>}
                    </div>

                    <div>
                        <label className={`${styles.span}`}>Способ получения</label>
                        <select {...register('delivery', { required: 'Выберите способ получения' })} className={styles.input}>
                            <option value="">Выберите</option>
                            <option value="moscow">Доставка по МСК или МО</option>
                            <option value="pickup">Самовывоз</option>
                        </select>
                        {errors.delivery && <p className="text-red-500 text-sm">{errors.delivery.message}</p>}
                    </div>

                    <div>
                        <label className={`${styles.span}`}>Ваши объемы закупки</label>
                        <select {...register('volume', { required: 'Выберите объём закупки' })} className={styles.input}>
                            <option value="">Выберите</option>
                            <option value="10000">от 10 000 ₽ до 25 000 ₽</option>
                            <option value="25000">от 25 000 ₽ до 50 000 ₽</option>
                            <option value="50000">от 50 000 ₽</option>
                        </select>
                        {errors.volume && <p className="text-red-500 text-sm">{errors.volume.message}</p>}
                    </div>
                </div>

                <div className="space-y-[10px]">
                    <h3 className="text-lg font-semibold text-[#203686]">Контактные данные</h3>

                    <input
                        type="text"
                        placeholder="Имя и Фамилия"
                        {...register('name', { required: 'Введите имя и фамилию' })}
                        className={styles.input}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                    <input
                        type="email"
                        placeholder="Email"
                        {...register('email', {
                            required: 'Введите email',
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: 'Некорректный email',
                            },
                        })}
                        className={styles.input}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                    <Controller
                        name="phone"
                        control={control}
                        rules={{ required: 'Введите номер телефона' }}
                        render={({ field }) => (
                            <PhoneInput
                                country={'uz'}
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                inputClass={styles.input}
                                containerClass="!w-full"
                                buttonClass="!hidden"
                                dropdownClass="!z-[9999]"
                                enableSearch
                            />
                        )}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

                    <label className="flex items-start gap-2 text-sm mt-2">
                        <input
                            type="checkbox"
                            {...register('agreement', { required: 'Подтвердите согласие' })}
                            className="mt-[2px]"
                        />
                        <span className="max-w-[479px] font-medium text-[12px] leading-[16px] text-[#70798E]">
                            Подтверждаю своё согласие на обработку и хранение моих персональных данных в соответствии с
                            пользовательским соглашением
                        </span>
                    </label>
                    {errors.agreement && <p className="text-red-500 text-sm">{errors.agreement.message}</p>}

                    <button type="submit" className={`${styles.button} w-full`}>
                        Получить
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form
