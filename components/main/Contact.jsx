import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { TbBrandLinkedin } from 'react-icons/tb';
import pic1 from '../../public/479189210_3687717974836649_7530844392409098475_n.jpg'

const Contact = () => {
  return (
    <section className="container mb-28 gap-3 mx-auto mt-4 md:mt-0 flex-none md:flex flex-col md:flex-row items-center justify-between p-8 rounded-2xl shadow-lg" id='Contact'>
      {/* বাম পাশ: যোগাযোগের তথ্য */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6">
          Contact Me
        </h1>
        <p className="text-gray-600">Feel free to reach out to me through any of the platforms below.</p>

        <div className="space-y-4">
          <p className="text-lg">
            📧 Email:
            <a href="mailto:rashiquzzamansifat@gmail.com" className="text-blue-600 -top-8 md:-top-0 hover:underline cursor-pointer">
              rashiquzzamansifat@gmail.com
            </a>
          </p>
          <p className="text-lg">
            📞 Phone:
            <a href="tel:+1234567890" className="text-blue-600 hover:underline cursor-pointer">
              01833-282575
            </a>
          </p>

          <div>


            <h4 className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6">
              Social Media
            </h4>
            <div className='flex gap-6'>
              <a href='https://www.facebook.com/profile.php?id=100007954478797' target="_blank" rel="noopener noreferrer">
                {/* Facebook */}
                <FaFacebook className="text-blue-600 h-8 w-8" />
              </a>

              <a href='https://www.instagram.com/rashi_quzzaman_sifat/' target="_blank" rel="noopener noreferrer">
                {/* Instagram */}
                <BsInstagram className="text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 h-8 w-8" />
              </a>

              <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
                {/* LinkedIn */}
                <TbBrandLinkedin className="text-blue-700 h-8 w-8" />
              </a>

              <a href='https://twitter.com' target="_blank" rel="noopener noreferrer">
                {/* Twitter */}
                <FiTwitter className="text-blue-400 h-8 w-8" />
              </a>
            </div>


          </div>


        </div>
      </div>

      {/* ডান পাশ: প্রোফাইল ছবি */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 ">
        <Image

          src={pic1}
          alt="Your Image"
          width={300}
          height={300}
          className="mt-5 rounded-full border-4 border-blue-500 shadow-lg"
        />
      </div>
    </section>
  );
};

export default Contact;
