import logo from '../assets/images/logo.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="bg-[#1e232e]">
                <div className="mx-5 lg:mx-20 pt-20 pb-10 lg:pb-15 text-white">
                    <div className="flex flex-col lg:flex-row pb-2 lg:pb-10 gap-10 lg:gap-0">
                        <div className="basis-2/5 mr-0 lg:mr-20 pr-0 lg:pr-10">
                            <div className='pb-8'>
                                <img src={logo} className='h-8 w-auto' alt="Logo" />
                            </div>
                            <p className='text-[#788293] pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.</p>
                            <div className='flex'>
                                <a href="#" className='text-[#788293] mr-5 text-[1.1rem] hover:text-[#0069c0]'><FaFacebookF /></a>
                                <a href="#" className='text-[#788293] mr-5 text-[1.1rem] hover:text-[#0069c0]'><FaXTwitter /></a>
                                <a href="#" className='text-[#788293] mr-5 text-[1.1rem] hover:text-[#0069c0]'><FaYoutube /></a>
                                <a href="#" className='text-[#788293] text-[1.1rem] hover:text-[#0069c0]'><FaLinkedin /></a>
                            </div>
                        </div>

                        <div className="basis-1/5">
                            <h3 className='text-[1.3rem] font-bold pb-7'>Useful Links</h3>
                            <ul className='text-[#788293]'>
                                <li className='pb-4 hover:text-[#0069c0]'><Link to="/">Home</Link></li>
                                <li className='pb-4 hover:text-[#0069c0]'><a href="#feature">Features</a></li>
                                <li className='pb-4 hover:text-[#0069c0]'><a href="#service">Services</a></li>
                                <li className='pb-4 hover:text-[#0069c0]'><a href="#price">Pricing</a></li>
                                <li className='hover:text-[#0069c0]'><a href="#blog">Blog</a></li>
                            </ul>
                        </div>

                        <div className="basis-1/5">
                            <h3 className='text-[1.3rem] font-bold pb-7'>Terms</h3>
                            <ul className='text-[#788293]'>
                                <li className='pb-4 hover:text-[#0069c0]'><a href="#">TOS</a></li>
                                <li className='pb-4 hover:text-[#0069c0]'><a href="#">Privacy Policy</a></li>
                                <li className='hover:text-[#0069c0]'><a href="#">Refund Policy</a></li>
                            </ul>
                        </div>

                        <div className="basis-1/5">
                            <h3 className='text-[1.3rem] font-bold pb-7'>Support & Help</h3>
                            <ul className='text-[#788293]'>
                                <li className='pb-4 hover:text-[#0069c0]'><a href="#">Open Support Ticket</a></li>
                                <li className='pb-4 hover:text-[#0069c0]'><a href="#">Terms of Use</a></li>
                                <li className='hover:text-[#0069c0]'><a href="#">About</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className='my-5 lg:my-10 text-[#52515196]' />
                    <p className='text-center'>Finished by <span className='hover:text-[#0069c0] cursor-pointer'>Unknown</span></p>
                </div>
            </div>
        </>
    );
}
export default Footer