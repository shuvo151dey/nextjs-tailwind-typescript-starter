import Link from 'next/link'
import React from 'react'

export default function Index(): React.ReactElement {
    return (
        <div className="p-4 bg-white rounded shadow">
            <h1 className="text-2xl font-bold">Next.js</h1>
            <p className="text-gray-700">
                with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method for
                production builds. Check{' '}
                <Link href="/jsx">
                    <a className="text-blue-500 underline" href="/jsx.js">
                        /jsx.js
                    </a>
                </Link>{' '}
                for a styled-jsx example.
            </p>
        </div>
    )
}
