import Image from 'next/image'

const Aboutus = () => {
  return (
        <div className="bg-gray-50 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className="relative h-96">
                    <Image
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                      src="/plumber.jpg"
                      layout="fill"
                      alt="plumber"
                      objectFit="cover"
                      objectPosition="center 30%" // Adjust this value to focus on the window cleaners
                      quality={100}/>
                    {/* <img
                      src="/api/placeholder/800/600"
                      alt="About Us"
                     
                    /> */}
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      SydneyService is on a mission to revolutionize Sydney services. Our values of excellence, reliability, and customer satisfaction drive everything we do. We connect homeowners with skilled professionals to ensure your home gets the care it deserves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Aboutus