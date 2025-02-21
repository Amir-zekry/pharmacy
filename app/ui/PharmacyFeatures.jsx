import { TbHours24 } from "react-icons/tb";

export default function PharmacyFeatures() {
    return (
        <main className="relative flex items-center w-full min-h-screen h-screen md:my-20 my-96">
            <div className="absolute flex md:flex-row flex-col w-full md:h-full">
                <div
                    className="w-full h-full md:hidden block bg-fixed bg-center bg-auto bg-no-repeat z-40"
                    style={{
                        backgroundImage: "url('/2a1a02_d6de3be18b144bb7b27eb57317c98f49~mv2.avif')",
                        height: '90vh'
                    }}
                />
                <section className="bg-[#F8ECE5] md:text-left text-center justify-center items-center md:ml-40 pt-10 md:whitespace-nowrap">
                    <div className="flex flex-col py-5 space-y-5">
                        <h2 className="text-black text-3xl font-bold flex space-x-4 items-center w-full justify-center md:justify-start">
                            <TbHours24 size={40} className="text-[#724EE2]" />
                            <span>24/7 Free Delivery</span>
                        </h2>
                        <div>
                            <p className="text-black text-base">We will be there for you all day round, no worries.</p>
                            <p className="text-black text-base">Afraid of paying more? We've got you covered</p>
                        </div>
                    </div>
                    <div className="flex flex-col py-10 space-y-5">
                        <h2 className="text-black text-3xl font-bold">Wide Variety</h2>
                        <div>
                            <p className="text-black text-base">
                                Explore our extensive selection of pharmacy essentials.<br />
                                Find the right products to meet your health needs.<br />
                                Quality and variety, all in one place.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col py-10 space-y-5">
                        <h2 className="text-black text-3xl font-bold">Availability</h2>
                        <div>
                            <p className="text-black text-base">The product you're searching for is here.</p>
                        </div>
                    </div>
                </section>
                <div
                    className="w-full md:block hidden bg-fixed bg-auto bg-no-repeat z-40"
                    style={{
                        backgroundImage: "url('/2a1a02_d6de3be18b144bb7b27eb57317c98f49~mv2.avif')",
                        backgroundPosition: "top 50% left 90%",
                        height: '90vh'
                    }}
                />
            </div>
            <div className="w-full h-[110vh] md:pr-96 md:pl-20">
                <div className="bg-[#F8ECE5] w-full h-[110vh] py-40 hidden md:block"></div>
            </div>
        </main>
    );
}
