
function CommonTitle({ slug, text }) {
    return (
        <div className="flex justify-between mb-[40px] !w-[100%]">
            <span className="font-medium text-[14px] leading-[130%] text-[#70798E]">
                {slug}
            </span>
            <h2 className="font-semibold leading-[100%] text-[40px] max-w-[776px]">
                {text}
            </h2>
        </div>
    )
}

export default CommonTitle
