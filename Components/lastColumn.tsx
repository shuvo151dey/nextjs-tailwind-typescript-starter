import React from 'react'
import ArticleMini from './articlemini'

export default function LastColumn(): React.ReactElement {
    return (
        <>
            <div className="thirdColumn bg-gray-200">
                <div className="searchbar-container">
                    <input
                        type="text"
                        name="search"
                        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal searchbar"
                        placeholder="Type anything to search"
                    />
                </div>
                <ul className=" mt-6 categorylist">
                    <h3 className="text-xl">Categories</h3>
                    <li className="categorylist-item">
                        Category 1 <span className="categorycount">(x)</span>
                    </li>
                    <li className="categorylist-item">
                        Category 2 <span className="categorycount">(x)</span>
                    </li>
                    <li className="categorylist-item">
                        Category 3 <span className="categorycount">(x)</span>
                    </li>
                    <li className="categorylist-item">
                        Category 4 <span className="categorycount">(x)</span>
                    </li>
                </ul>
                <div className="populararticles-container">
                    <h3 className="text-xl">Popular Articles</h3>

                    <ArticleMini />
                    <ArticleMini />
                    <ArticleMini />
                    <ArticleMini />
                </div>
            </div>
            <style jsx>{`
                .populararticles-container {
                    @apply mt-4;
                }
                .categorycount {
                    float: right;
                }
                .thirdColumn {
                    position: fixed;
                    top: 0;
                    right: 0;
                    width: 24%;
                    height: 100%;
                    padding: 2%;
                }
                .categorylist-item {
                    @apply mt-4 border-b-2 border-black;
                }
                @media (max-width: 1024px) {
                    .thirdColumn {
                        position: unset;
                        width: 75%;
                        padding-left: 10%;
                        padding-right: 10%;
                        @apply my-6 mx-auto h-auto text-center rounded;
                    }
                    .categorylist {
                        width: 50%;
                        margin: 0 auto;
                        margin-top: 5%;
                    }
                    .categorylist-item {
                        text-align: left;
                    }
                }
                @media (max-width: 768px) {
                    .thirdColumn {
                        width: 100%;
                    }
                }
                @media (min-width: 768px) and (max-width: 1025px) {
                    .populararticles-container {
                        height: 20vh;
                    }
                }
            `}</style>
        </>
    )
}
