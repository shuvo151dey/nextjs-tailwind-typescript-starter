import React from 'react'
import { useForm } from 'react-hook-form'

//name /Pan/addhar/company name/CV/ mobile number /Area
export default function Form() {
    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        submitFocusError: true,
        validateCriteriaMode: 'firstError',
    })
    const submitHandler = (event) => {
        event.preventDefault()
        fetch('/api/updateSheet/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'ABD',
                phone: '78895613',
                address: 'abc',
                PAN: '78946613',
            }),
        })
    }
    return (
        <div className="w-full bg-gray-200 max-w-md title-center">
            <h2 className="block font-bold text-center pt-6 text-xl mb-2"> KHOJ SOFTWARE FORM</h2>
            <div className="pl-8 mt-2">Please fill every field</div>
            <form
                className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={(e) => handleSubmit(submitHandler(e))}
            >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        ref={register({ required: true, maxLength: 80 })}
                    />
                    {errors.name && <span className="text-red-500">Please enter Name</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PAN">
                        PAN
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="PAN"
                        placeholder="PAN"
                        ref={register({ required: true, pattern: /[A-Z]{5}[0-9]{4}[A-Z]{1}/ })}
                    />
                    {errors.PAN && <span className="text-red-500">Enter PAN</span>}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Addhar Address"
                    >
                        Addhar Address
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="Address"
                        ref={register({ required: true })}
                    ></textarea>
                    {errors.Address && <span className="text-red-500">Enter Addhar Address</span>}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Company Name"
                    >
                        Company Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="CompanyName"
                        ref={register({ required: true })}
                    />
                    {errors.CompanyName && <span className="text-red-500">Enter Company Name</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="CV">
                        CV/Resume
                    </label>
                </div>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file"
                        name="CV"
                        ref={register({ required: true })}
                    />
                    {errors.CV && <span className="text-red-500">Enter your CV</span>}
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="mobile_no"
                    >
                        Mobile No
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="tel"
                        name="mobile_no"
                        placeholder="XXXXX XXXXX"
                        ref={register({ required: true, maxLength: 12 })}
                    />
                    {errors.mobile_no && <span className="text-red-500">Enter your mobile no</span>}
                </div>
                <div className="mb-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
