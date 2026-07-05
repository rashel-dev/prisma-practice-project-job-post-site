import React from 'react';
import GithubButton from './../../../Components/auth/GithubButton';
import Link from 'next/link';

const SignInPage = () => {
    return (
        <div className = "min-h-[calc(100vh-10rem)] flex items-center justify-center " >
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg mx-4">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome to JobList
                    </h2>
                    <p className="text-gray-600">
                        Sign in to post jobs or apply for opportunities
                    </p>
                </div>

                <div className="mt-8">
                    <GithubButton />
                </div>

                <div className="mt-6 text-center text-sm text-gray-500">
                    By signing in, you agree to our{" "}
                    <Link href="#" className="text-indigo-600 hover:text-indigo-500">
                        Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-indigo-600 hover:text-indigo-500">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;