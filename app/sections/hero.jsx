import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <div className="bg-black opacity-50 absolute inset-0"></div>
        <Image
          src="/cleaners.jpg" // Replace with your image path
          alt="Window Cleaners"
          layout="fill"
          objectFit="cover"
          objectPosition="center 30%" // Adjust this value to focus on the window cleaners
          quality={100} // Optional: Adjust image quality
        />
        
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Sydney services</h1>
        <p className="text-xl mb-8">Get started today</p>
        <div className="space-x-2">
          <button className="w-3 h-3 rounded-full bg-white"></button>
          <button className="w-3 h-3 rounded-full bg-gray-400"></button>
          <button className="w-3 h-3 rounded-full bg-gray-400"></button>
        </div>
      </div>
    </div>
  )
}

export default Hero