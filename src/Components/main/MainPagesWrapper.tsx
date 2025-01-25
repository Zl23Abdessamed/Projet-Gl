import React from "react";

const MainPagesWrapper = ({ title, subTitle, children }: { title: string, subTitle: string, children: React.ReactNode }) => {
    return (
        <div className="w-full pt-12 ">
            <div className="w-full flex flex-col gap-2 items-center justify-center font-poppins mb-8">
                <h1 className="text-4xl font-semibold text-ternary-semi-dark-color">{title}</h1>
                <h2 className="text-2xl font-normal text-ternary-extra-light-color">{subTitle}</h2>
            </div>
            <div>
                {
                    children
                }
            </div>
        </div>
    )
};

export default MainPagesWrapper