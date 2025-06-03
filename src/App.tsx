import React from "react";
import PricingCard from "./components/PricingCard";

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-16 px-4">
            <h1 className="text-3xl font-bold mb-12">Pricing</h1>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x sm:divide-transparent justify-center items-center w-full max-w-5xl">
                <PricingCard
                    plan="Standard"
                    price="$100"
                    features={["50,000 Requests", "4 contributors", "Up to 3 GB storage space"]}
                />
                <PricingCard
                    plan="Pro"
                    price="$200"
                    features={["100,000 Requests", "7 contributors", "Up to 6 GB storage space"]}
                    isFeatured
                />
                <PricingCard
                    plan="Expert"
                    price="$500"
                    features={["200,000 Requests", "11 contributors", "Up to 10 GB storage space"]}
                />
            </div>
        </div>
    );
};

export default App;
