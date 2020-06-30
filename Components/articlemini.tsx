import React from 'react'

export default function ArticleMini(): React.ReactElement {
    return (
        <div className="flex mt-4 populararticle">
            <div className="populararticle-image">
                <img src="./dummy-man.jpg" alt="alt" />
            </div>
            <div className="ml-2">
                <h4 className="font-bold text-xl">Article title</h4>
                <p className="text-xs">19 Aug 2020</p>
                <p className="text-xs">6 Comments</p>
            </div>

            <style jsx>{`
                .populararticle-image {
                    @apply w-1/3 h-auto;
                }
                .populararticles-container {
                    @apply mt-4;
                }
                @media (min-width: 768px) and (max-width: 1025px) {
                    .populararticle {
                        width: 50%;
                        float: left;
                    }
                }
            `}</style>
        </div>
    )
}
