const PartnerShipIntro = ()=>{
  const countries = [
    { flag: "🇸🇬", name: "Singapore", code: "SG" },
    { flag: "🇻🇳", name: "Vietnam", code: "VN" },
    { flag: "🇦🇺", name: "Australia", code: "AU" },
    // { flag: "🇲🇾", name: "Malaysia", code: "MY" },
    // { flag: "🇹🇭", name: "Thailand", code: "TH" },
    // { flag: "🇵🇭", name: "Philippines", code: "PH" }
  ];
  return(
    <section className="py-20">
        <div className="container max-auto">
            <div className="text-center mb-6">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 "> Our Trusted Global Network</h2>
               <div className="max-w-4xl mx-auto space-y-6">
                 <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    We are proud to collaborate with a growing network of trusted partners, retailers, 
                    and distributors from Singapore, Vietnam, and Australia. Together, we share a vision 
                    to deliver the finest therapeutic-grade honey — ethically harvested from the pristine 
                    forests of Western Australia — to every corner of the world.
                 </p>
                 <p className="text-lg md:text-xl text-gray-600 leading-relaxed italic">
                   With every partnership, we build not only distribution, but also trust, quality, and a commitment to global wellness.
                 </p>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {countries.map((item, index)=>{
                  return(
                    <div key={index} className="flex flex-col items-center p-6 bg-honey-300 rounded shadow-glow">
                        <div className="text-4xl mb-3">{item.flag}</div>
                        <div className="text-gray-900 font-semibold">{item.name}</div>
                    </div>
                  )
                })}
            </div>
        </div>
    </section>
  )
}
export default PartnerShipIntro