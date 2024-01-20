import { HiOutlineCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

const includedFeatures = [
    'Early Access to Features and Events',
    'Priority Customer Support',
    'Exclusive Discounts and Offers',
    'Premium Analytics and Insights',
]

export default function Premium() {
    return (
        <div className="bg-white font-inter my-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Simple no-tricks pricing</h2>
                    <p className="mt-4 text-sm leading-5 text-gray-600">
                        Elevate your experience with our premium subscription and embrace a seamless, uninterrupted journey at your fingertips.
                    </p>
                </div>
                <div className="mx-auto mt-6 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-8 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Unlock a lifetime of premium benefits with a one-time payment – seize the opportunity to enjoy ad-free browsing, exclusive content, and priority support forever.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-lion-500">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <HiOutlineCheck className="h-6 w-5 flex-none text-hunyadi_yellow-500" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">₹2,999 /-</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">INR</span>
                                </p>
                                <Link
                                    to={''}
                                    className="mt-10 block w-full rounded-md bg-hunyadi_yellow-400 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-hunyadi_yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get access
                                </Link>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Invoices and receipts available for easy company reimbursement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}