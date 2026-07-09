import Link from "next/link";
import Logo from "./Logo";
import SignOutButton from './SignOutButton';
import type { Session } from "next-auth";

export default function Navbar({ session }: { session: Session | null }) {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">

                    {/* left side  */}
                    <div className="flex">
                        <Logo />
                    </div>

                    {/* right side */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/jobs"
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Browse Jobs
                        </Link>
                        {session ? (
                            <>
                                <Link
                                    href="/jobs/post"
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Post a Job
                                </Link>
                                <Link
                                    href="/dashboard"
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Dashboard
                                </Link>
                                <SignOutButton />
                            </>
                        ) : (
                            <Link
                                href="/auth/signin"
                                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
