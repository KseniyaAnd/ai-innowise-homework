import React from "react";

interface PricingCardProps {
    plan: string;
    price: string;
    features: string[];
    isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
                                                     plan,
                                                     price,
                                                     features,
                                                     isFeatured = false,
                                                 }) => {
    const baseCardClasses =
        "w-full max-w-sm min-h-[460px] p-8 shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 font-sans rounded-none flex flex-col justify-between";
    const featuredCard = "bg-slate-700 text-white scale-105 z-10";
    const regularCard = "bg-white text-slate-800";

    const cardClasses = `${baseCardClasses} ${
        isFeatured ? featuredCard : regularCard
    }`;

    const buttonClasses = `w-full py-2 uppercase tracking-wide font-semibold text-sm ${
        isFeatured ? "bg-slate-700 text-white" : "bg-white text-slate-800"
    }`;

    return (
        <div tabIndex={0} className={cardClasses}>
            <div>
                <h2 className="text-lg font-semibold text-center mb-2">{plan}</h2>
                <p className="text-6xl font-bold text-center mb-4">{price}</p>
                <ul className="space-y-3 text-sm text-center">
                    {features.map((feature, index) => (
                        <li key={index} className="border-t pt-3">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <button className={buttonClasses}>Subscribe</button>
        </div>
    );
};

export default PricingCard;
