export default function PharmacyFeatures() {
    return (
        <div className="bg-blue-700 px-6 py-16 text-white flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
            {[
                { title: "24/7 Delivery", text: "We will be there for you all day round, no worries." },
                { title: "Free Delivery", text: "Afraid of paying more? We've got you covered." },
                { title: "Wide Variety", text: "We offer hundreds of products to choose from." },
                { title: "Availability", text: "The product you're searching for is here." }
            ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center max-w-xs">
                    <h1 className="font-bold text-xl">{feature.title}</h1>
                    <p className="text-sm mt-2">{feature.text}</p>
                </div>
            ))}
        </div>
    );
}
