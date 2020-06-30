import React from 'react'

export default function Article(): React.ReactElement {
    return (
        <div className="lg:flex mb-4 rounded shadow article-container">
            <div className="w-1/2 h-auto my-8 mx-2 article-picture-container">
                <img src="/dummy-man.jpg" alt="DummyImage" />
            </div>
            <div className="ml-4 article-content">
                <h4 className="font-extrabold mt-2 text-xl article-title"> Article title</h4>
                <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum consequuntur
                </p>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 ">
                    Read more
                </button>
                <p className="mt-2">19 Aug 2020</p>
                <p className="mt-3">6 Comments</p>
            </div>
            <style jsx>{`
                @media (max-width: 1024px) {
                    .article-container {
                        margin-bottom: 1.5rem;
                    }
                    .article-content {
                        text-align: center;
                    }
                }
                @media (max-width: 768px) {
                    .article-picture-container {
                        margin: 0 auto;
                    }
                    .article-title {
                        text-align: center;
                    }
                }
            `}</style>
        </div>
    )
}
