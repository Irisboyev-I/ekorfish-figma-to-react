import { styles } from "@/styles/styles";
import { assortimentData } from "@/constants/data";
import CommonTitle from "../shared/CommonTitle/CommonTitle";

function Assortiment() {
    return (
        <section className={`${styles.container} !block mt-[80px] mb-[85px] block`}>
            <CommonTitle slug={'Наш ассортимент'} text={'Компания предлагает более 500 наименований рыбной продукции и разнообразных товаров питания'} />

            <div className="grid grid-cols-4 gap-[20px]">
                {assortimentData.top.map((item) => (
                    <div key={item.id} className="max-w-[265px] rounded-[10px]">
                        <img className="w-full h-[200px] object-cover" src={item.image} alt={item.title} />
                        <div className="block mt-[16px]">
                            <p className={styles.paragraph}>{item.title}</p>
                            <span className={styles.span}>{item.description}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-[20px] mt-[40px]">
                {assortimentData.middle.map((item) => (
                    <div key={item.id} className="max-w-[550px] mt-[40px] rounded-[10px]">
                        <img className="w-full h-[250px] object-cover" src={item.image} alt={item.title} />
                        <div className="block mt-[16px]">
                            <p className={styles.paragraph}>{item.title}</p>
                            <span className={styles.span}>{item.description}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-4 gap-[20px] mt-[40px] rounded-[10px]">
                {assortimentData.bottom.map((item) => (
                    <div key={item.id} className="max-w-[265px]">
                        <img className="w-full h-[200px] object-cover" src={item.image} alt={item.title} />
                        <div className="block mt-[16px]">
                            <p className={styles.paragraph}>{item.title}</p>
                            <span className={styles.span}>{item.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Assortiment;