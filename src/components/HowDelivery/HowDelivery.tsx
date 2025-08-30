import { styles } from "@/styles/styles";
import CommonTitle from "../shared/CommonTitle/CommonTitle";
import { deliveryData } from "@/constants/data";

function HowDelivery() {
  return (
    <section className={`${styles.container} !block my-[80px]`}>
      <CommonTitle slug={deliveryData.slug} text={deliveryData.title} />
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-12">
        <div className="flex-1">
          <div className="flex flex-col gap-6 mb-10">
            {deliveryData.description.map((paragraph, index) => (
              <p 
                key={index}
                className="text-[18px] leading-[170%] text-[#444444]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {deliveryData.features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#2D5BFF] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-[18px] leading-[160%] text-[#333333]">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <img
            src={deliveryData.image}
            alt="Доставка"
            className="w-full max-w-[500px] h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HowDelivery;