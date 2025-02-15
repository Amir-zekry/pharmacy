export default function PharmacyFeatures() {
    return (
        <div className="px-6 py-16 text-white flex flex-col md:flex-row justify-center items-center gap-6">
            {[
                { title: "24/7 Delivery", text: "We will be there for you all day round, no worries." },
                { title: "Free Delivery", text: "Afraid of paying more? We've got you covered." },
                { title: "Wide Variety", text: "We offer hundreds of products to choose from." },
                { title: "Availability", text: "The product you're searching for is here." }
            ].map((feature, index) => (
                <div
                    key={index}
                    className="bg-gray-100 text-blue-900 h-36 rounded-2xl shadow-lg p-6 w-full max-w-sm flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
                >
                    <h1 className="font-bold text-xl">{feature.title}</h1>
                    <p className="text-sm mt-2">{feature.text}</p>
                </div>
            ))}
        </div>
    );
}
