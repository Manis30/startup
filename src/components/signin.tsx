import { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
    const initialValue = { email: "", password: "" };
    const [formData, setFormData] = useState(initialValue);
    const [error, setError] = useState(initialValue);
    const [keepSignedIn, setKeepSignedIn] = useState(false);

    const handleChange = (e:any) => {
        const name = e.target.name;
        const value = e.target.value;

        const updatedForm = {
            ...formData,
            [name]: value,
        };
        setFormData(updatedForm);
        validate(updatedForm);
    };

    const validate = (formData:any) => {
        const newErrors:any = {};

        const emailvalidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (formData.email.trim().length == 0) {
            newErrors.email = 'Email is required';
        }
        else if (!emailvalidator.test(formData.email)) {
            newErrors.email = 'Invalid Email';
        }
        else {
            newErrors.email = '';
        }

        if (formData.password.trim().length == 0) {
            newErrors.password = 'Password is required';
        }
        else if (formData.password.trim().length < 6) {
            newErrors.password = 'Password must be atleast 6 characters';
        }
        else {
            newErrors.password = '';
        }

        setError(newErrors);
        return newErrors;
    };

    const submitData = (e:any) => {
        e.preventDefault();
        let errors = validate(formData);
        errors = Object.values(errors).some(item => item != "");
        if (!errors) {
            alert("Signed in successfully");
            console.log(formData, "Keep signed in:", keepSignedIn);
            setFormData(initialValue);
        }
    };

    return (
        <>
            <div className="bg-[#121723] text-white">
                <div className="flex justify-center items-center px-5 lg:px-0 py-15 lg:py-30">
                    <div className="p-5 lg:p-15 bg-[#1e232e] w-[100%] lg:w-[40%]">
                        <h3 className="font-bold text-[1.8rem] text-center pb-3 pt-4 lg:pt-0">Sign in to your account</h3>
                        <p className="text-[#788293] pb-10 text-center">Login to your account for a faster checkout.</p>

                        <div className="mb-6">
                            <button type="button" className="border border-transparent cursor-pointer text-white focus:outline-none bg-[#2c303b] p-3 pl-6 w-full hover:border-[#0f95d0] text-[#788293] hover:bg-[#4a6cf70d] hover:text-[#4a6cf7]">
                                <span className="flex items-center justify-center font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="20" height="20" className="mr-4">
                                        <path fill="#4285f4" d="M533.5 278.4c0-18.4-1.6-36.5-4.7-54H272v102h147.4c-6.4 34.5-25.4 63.8-54.1 83.4v68h87.4c51.2-47.1 80.8-116.4 80.8-199.4z" />
                                        <path fill="#34a853" d="M272 544.3c73.5 0 135-24.5 180-66.8l-87.4-68c-24.2 16.3-55.3 26-92.6 26-71 0-131.2-47.9-152.7-112.2H30.9v70.4c44.8 88.3 136.2 150.6 241.1 150.6z" />
                                        <path fill="#fbbc04" d="M119.3 323.3c-10.1-30.4-10.1-63.1 0-93.5v-70.4H30.9c-40.8 81.4-40.8 176.1 0 257.5l88.4-70.4z" />
                                        <path fill="#ea4335" d="M272 107.7c39.9-.6 78.2 14 107.4 41l80.3-80.3C411.6 24.9 342.9-1.4 272 0 167.1 0 75.7 62.3 30.9 150.6l88.4 70.4C140.8 155.6 201 107.7 272 107.7z" />
                                    </svg>
                                    Sign in with Google
                                </span>
                            </button>
                        </div>

                        <div>
                            <button type="button" className="border border-transparent text-white focus:outline-none bg-[#2c303b] p-3 pl-6 w-full hover:border-[#0f95d0] text-[#788293] hover:bg-[#4a6cf70d] hover:text-[#4a6cf7]">
                                <span className="flex items-center justify-center font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="mr-4" viewBox="0 0 24 24" fill="black">
                                        <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 
             3.438 9.8 8.205 11.387 0.6 0.113 0.82-0.258 
             0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 
             0.724-4.042-1.61-4.042-1.61-0.546-1.387-1.333-1.757-1.333-1.757-1.09-0.745 
             0.083-0.729 0.083-0.729 1.205 0.084 1.84 1.236 
             1.84 1.236 1.07 1.835 2.809 1.305 3.495 
             0.998 0.108-0.776 0.418-1.305 0.76-1.605-2.665-0.3-5.467-1.334-5.467-5.93 
             0-1.31 0.468-2.38 1.235-3.22-0.135-0.303-0.54-1.523 
             0.105-3.176 0 0 1.005-0.322 3.3 1.23 
             0.96-0.267 1.98-0.399 3-0.405 1.02 0.006 2.04 0.138 
             3 0.405 2.28-1.552 3.285-1.23 3.285-1.23 
             0.645 1.653 0.24 2.873 0.12 3.176 
             0.765 0.84 1.23 1.91 1.23 3.22 
             0 4.61-2.805 5.625-5.475 5.92 
             0.435 0.375 0.81 1.096 0.81 2.22 
             0 1.606-0.015 2.896-0.015 3.286 
             0 0.315 0.21 0.69 0.825 0.57 
             4.77-1.59 8.205-6.084 8.205-11.385 
             0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    Sign in with GitHub
                                </span>
                            </button>
                        </div>

                        <div className="flex items-center justify-center text-gray-400">
                            <div className="flex-grow border-t border-[2px] border-gray-600"></div>
                            <span className="text-center pt-5 px-3 pb-7">Or, sign in with your email</span>
                            <div className="flex-grow border-t border-[2px] border-gray-600"></div>
                        </div>

                        <form onSubmit={submitData}>
                            <div className="pb-7">
                                <label className="block mb-3 font-medium text-[0.9rem]">Your Email</label>
                                <input
                                    type="text" name="email" value={formData.email} onChange={handleChange}
                                    placeholder="Enter your Email"
                                    className="border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] p-3 pl-6 w-full focus:border-[#0f95d0]"
                                />
                                {error.email != "" ? <span className="text-red-500 text-sm inline-block mt-2">{error.email}</span> : ""}
                            </div>

                            <div className="pb-7">
                                <label className="block mb-3 font-medium text-[0.9rem]">Your Password</label>
                                <input
                                    type="password" name="password" value={formData.password} onChange={handleChange}
                                    placeholder="Enter your Password"
                                    className="border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] p-3 pl-6 w-full focus:border-[#0f95d0]"
                                />
                                {error.password != "" ? <span className="text-red-500 text-sm inline-block mt-2">{error.password}</span> : ""}
                            </div>

                            <div className="flex justify-between pb-9">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox" checked={keepSignedIn}
                                        onChange={() => setKeepSignedIn(!keepSignedIn)}
                                        className="rounded h-4 w-4 cursor-pointer"
                                    />
                                    <p className="ml-3 text-[#788293]">Keep me signed in</p>
                                </div>
                                <div>
                                    <Link to="/forgot-password" className="text-[#4a6cf7] font-medium text-[0.9rem] hover:underline">Forgot Password?</Link>
                                </div>
                            </div>

                            <button type="submit" className="bg-[#4a6cf7] text-center w-full font-semibold cursor-pointer hover:bg-[#3a6cf7] transition-colors p-2 h-15">Sign in</button>
                        </form>

                        <div className="pt-7 text-center">
                            <p className="text-[#788293]">Don't you have an account? <Link to="/signup" className="text-[#4a6cf7] hover:underline">Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signin