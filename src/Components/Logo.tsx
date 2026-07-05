import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href="/" className="flex items-center">
            <Image
                src="/logo.png"
                alt="Job Board Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-semibold text-gray-900">
                Job Board
            </span>
        </Link>
    );
};

export default Logo;