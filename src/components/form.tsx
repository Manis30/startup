import { useState } from "react";

function Form() {
    const initialValue = { name: "", email: "", message: "" };
    const [formData, setFormData] = useState(initialValue);
    const [error, setError] = useState(initialValue);

    const subInitial = { subName: "", subEmail: "" };
    const [subData, setSubData] = useState(subInitial);
    const [subError, setSubError] = useState(subInitial);

    const handleChange = (e:any) => {
        let name = e.target.name;
        let value = e.target.value;
        let newValue = value;

        if (name === "name") {
            newValue = value.replace(/[^A-Za-z ]/g, "");
        }

        const updatedForm = {
            ...formData,
            [name]: newValue,
        };
        setFormData(updatedForm);
        validate(updatedForm);
    };

    const validate = (formData:any) => {
        const newErrors:any = {};

        if (formData.name.trim().length == 0) {
            newErrors.name = 'Name is required';
        }
        else if (formData.name.trim().length < 3) {
            newErrors.name = 'Name must be atleast 3 characters';
        }
        else {
            newErrors.name = '';
        }

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

        if (formData.message.trim().length == 0) {
            newErrors.message = 'Message is required';
        }
        else if (formData.message.trim().length < 20) {
            newErrors.message = 'Message must be atleast 20 characters';
        }
        else {
            newErrors.message = '';
        }

        setError(newErrors);
        return newErrors;
    };

    const submitData = (e:any) => {
        e.preventDefault();
        let errors = validate(formData);
        errors = Object.values(errors).some(item => item != "");
        if (!errors) {
            alert("Ticket Submitted successfully");
            console.log(formData);
            setFormData(initialValue);
        }
    };

    const handleSubChange = (e:any) => {
        let name = e.target.name;
        let value = e.target.value;
        let newValue = value;

        if (name === "subName") {
            newValue = value.replace(/[^A-Za-z ]/g, "");
        }

        const updatedSub = {
            ...subData,
            [name]: newValue,
        };
        setSubData(updatedSub);
        validateSub(updatedSub);
    };

    const validateSub = (subData:any) => {
        const newErrors:any = {};

        if (subData.subName.trim().length == 0) {
            newErrors.subName = 'Name is required';
        }
        else if (subData.subName.trim().length < 3) {
            newErrors.subName = 'Name must be atleast 3 characters';
        }
        else {
            newErrors.subName = '';
        }

        const emailvalidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (subData.subEmail.trim().length == 0) {
            newErrors.subEmail = 'Email is required';
        }
        else if (!emailvalidator.test(subData.subEmail)) {
            newErrors.subEmail = 'Invalid Email';
        }
        else {
            newErrors.subEmail = '';
        }

        setSubError(newErrors);
        return newErrors;
    };

    const submitSub = (e:any) => {
        e.preventDefault();
        let errors = validateSub(subData);
        errors = Object.values(errors).some(item => item != "");
        if (!errors) {
            alert("Subscribed successfully");
            console.log(subData);
            setSubData(subInitial);
        }
    };

    return (
        <>
            <div className="bg-[#121723] px-5 lg:px-20 py-12 lg:py-27 text-white">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                    <div className="basis-2/3 bg-[#4a494938] p-6 lg:p-12">
                        <h3 className="text-[1.4rem] lg:text-[1.8rem] font-bold pb-3">Need Help? Open a Ticket</h3>
                        <p className="text-[#788293] pb-10">Our support team will get back to you ASAP via email.</p>

                        <div className="flex flex-col sm:flex-row gap-5 pb-2">
                            <div className="flex flex-col basis-1/2">
                                <label className="pb-4 font-medium text-[0.9rem]">Your Name</label>
                                <input
                                    type="text" name="name" onChange={handleChange} value={formData.name}
                                    placeholder="Enter your name"
                                    className="border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] p-3 pl-6 w-full focus:border-[#0f95d0] rounded"
                                />
                                {error.name != "" ? <span className="text-red-500 text-sm inline-block mt-2">{error.name}</span> : ""}
                            </div>
                            <div className="flex flex-col basis-1/2">
                                <label className="pb-4 font-medium text-[0.9rem]">Your Email</label>
                                <input
                                    type="text" name="email" onChange={handleChange} value={formData.email}
                                    placeholder="Enter your email"
                                    className="border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] p-3 pl-6 w-full focus:border-[#0f95d0] rounded"
                                />
                                {error.email != "" ? <span className="text-red-500 text-sm inline-block mt-2">{error.email}</span> : ""}
                            </div>
                        </div>

                        <div className="flex flex-col pt-6">
                            <label className="pb-4 font-medium text-[0.9rem]">Your Message</label>
                            <textarea
                                name="message" onChange={handleChange} value={formData.message}
                                placeholder="Enter your message"
                                className="h-40 w-full border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] pl-6 pt-3 focus:border-[#0f95d0] rounded"
                            ></textarea>
                            {error.message != "" ? <span className="text-red-500 text-sm inline-block mt-2">{error.message}</span> : ""}
                        </div>

                        <div className="pt-10">
                            <button
                                onClick={submitData} type="submit"
                                className="bg-[#4a6cf7] text-center w-full sm:w-45 font-semibold cursor-pointer hover:bg-[#3a6cf7] transition-colors p-2 h-15 rounded"
                            >
                                Submit Ticket
                            </button>
                        </div>
                    </div>

                    <div className="basis-1/3 bg-[#4a494938] p-5 lg:p-10">
                        <h3 className="text-[1.4rem] font-bold pb-4">Subscribe to receive future updates</h3>
                        <p className="text-[#788293] pb-10">Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
                        <hr className="text-[#52515196] pb-10" />

                        <div className="pb-2">
                            <input
                                type="text" name="subName" onChange={handleSubChange} value={subData.subName}
                                placeholder="Enter your name"
                                className="border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] p-3 pl-6 w-full focus:border-[#0f95d0] rounded"
                            />
                            {subError.subName != "" ? <span className="text-red-500 text-sm inline-block mt-2">{subError.subName}</span> : ""}
                        </div>

                        <div className="py-2">
                            <input
                                type="text" name="subEmail" onChange={handleSubChange} value={subData.subEmail}
                                placeholder="Enter your mail"
                                className="border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] p-3 pl-6 w-full focus:border-[#0f95d0] rounded"
                            />
                            {subError.subEmail != "" ? <span className="text-red-500 text-sm inline-block mt-2">{subError.subEmail}</span> : ""}
                        </div>

                        <button
                            onClick={submitSub} type="submit"
                            className="bg-[#4a6cf7] text-center w-full font-semibold cursor-pointer hover:bg-[#3a6cf7] transition-colors p-2 h-15 mt-4 rounded"
                        >
                            Subscribe
                        </button>
                        <p className="text-[#788293] text-center pt-7">No spam guaranteed, So please don't send any spam mail.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Form