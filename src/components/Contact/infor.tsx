"use client"
import { useState } from "react";

const ContactInfor = () => {
  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(true);
  

  const locations = [
    {
      name: 'Greenwood Market, Singapore',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1993.650914583403!2d103.8075641!3d1.3329574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10a8c33b2dc7%3A0x2fa2b84f8f03f6ea!2s34%20Greenwood%20Ave%2C%20Singapore%20289236!5e0!3m2!1sen!2ssg!4v1719250000000',
    },
    {
      name: 'Quayside Isle, Singapore',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.728992520821!2d103.82764809999999!3d1.2422775999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b8b00fb10d1%3A0x91c7618e917d5dbb!2s31%20Ocean%20Way%2C%20Singapore%20098373!5e0!3m2!1sen!2ssg!4v1719251111111',
    },
    {
      name: 'Marege Native Foods, Australia',
      src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.929174016712!2d130.9724289!3d-12.471667499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cc0a10f15e99b4d%3A0x97bca4d957015770!2s15%20Birripa%20Ct%2C%20Rosebery%20NT%200832%2C%20Australia!5e0!3m2!1sen!2sau!4v1719251222222',
    },
  ];

  return (
    <section className="container">
      <div className="w-full h-auto max-w-7xl mx-auto py-6">
        {/* Header Info */}
        <div className="max-w-3xl mx-auto text-center space-y-4 p-6">
            <div>
                <h1 className="text-3xl md:text-4xl text-gray-900">Visit us in-store or shop online 24/7</h1>
                <p className="text-gray-700 leading-relaxed">
                    Honna Honey is a Western Australian Beekeeping & Honey Company. You can purchase our delicious bio-active honey, premium bee products, and Mated Queen Bees in-store or online now.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-medium text-gray-900">Singapore</h3>
                <p className="font-semibold">GREENWOOD FISH MARKET</p>
                <p>
                    Address 1: BUKIT TIMAH<br />
                    34/38 GREENWOOD AVE<br />
                    SINGAPORE 289236
                </p>
                <p className="mt-2">
                    Address 2: QUAYSIDE ISLE<br />
                    31 OCEAN WAY #01-04/05<br />
                    SINGAPORE 098373
                </p>
            </div>

            <div className="">
                <h3 className="text-xl font-medium text-gray-900">Australia</h3>
                <p className="font-semibold">Marege Native Foods</p>
                <p>15 Birripa Court, Rosebery NT 083</p>
            </div>
            <p className="text-gray-700 leading-relaxed">
                <span className="text-xl text-gray-900 font-bold">Store opening and customer service hours:</span><br />
                Monday - Thursday: 10AM - 3PM
            </p>
        </div>

        {/* Locations */}
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Locations</h2>
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {locations.map((loc, i) => (
              <button
                key={i}
                onClick={() => {
                    setSelected(i);
                    setLoading(true);
                }}
                className={`px-4 py-2 rounded-full border ${
                  selected === i ? 'bg-honey-400 text-white' : 'bg-white text-black'
                }`}
              >
                {loc.name}
              </button>
            ))}
          </div>
          <div className="text-center">
            <p className="mt-2 text-sm text-gray-500">
                Currently showing: <span className="font-semibold">{locations[selected].name}</span>
            </p>
          </div>
          <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg border">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-10">
                <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            )}

            <iframe
              onLoad={()=> setLoading(false)}
              title={locations[selected].name}
              src={locations[selected].src}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
        
        </div>

        {/* Contact Form */}
        <div className="my-8 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-wide">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-5 w-full">
                <input className="w-full bg-honey-200 border border-gray-900 hover:border-2 hover:border-gray-900 p-2" type="text" placeholder="Name" />
              </div>
              <div className="mb-5 w-full">
                <input className="w-full bg-honey-200 border border-gray-900 hover:border-2 hover:border-gray-900 p-2" type="email" placeholder="Email" />
              </div>
            </div>
            <div className="mb-5 w-full">
              <input className="w-full bg-honey-200 border border-gray-900 hover:border-2 hover:border-gray-900 p-2" type="text" placeholder="Phone" />
            </div>
            <div className="mb-5 w-full">
              <textarea className="w-full bg-honey-200 border border-gray-900 hover:border-2 hover:border-gray-900 p-2" rows={5} placeholder="Message" />
            </div>
            <div className="text-center bg-black text-white mb-5 w-full cursor-pointer">
              <button className="text-xl text-white px-6 py-4">Send</button>
            </div>
          </div>
        </div>

        {/* Business Contact */}
        <div className="max-w-3xl mx-auto text-center space-y-4 p-6">
          <h1 className="text-3xl md:text-4xl text-gray-900">Business Contact Details</h1>

          <div className="max-w-sm mx-auto space-y-4 text-center">
            <span className="text-xl text-gray-900 font-bold">General Enquiries</span><br />
            <a href="mailto:export@aaan.com.au">export@aaan.com.au</a>
            <p className="text-gray-700 leading-relaxed">
              Chat online now, or you can also contact us on Facebook and Instagram.
            </p>
          </div>

          <div className="max-w-sm mx-auto space-y-4 text-center">
            <span className="text-xl text-gray-900 font-bold">Phone:</span><br />
            <a href="tel:+61432189874">(+61) 0432 189 874</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfor;
