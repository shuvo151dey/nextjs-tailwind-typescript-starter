import React from 'react'

export default function Article(): React.ReactElement {
    return (
        <div className="lg:flex mb-4 rounded shadow">
            <div className="w-1/2 h-auto my-8 mx-2 article-picture-container">
                <img src="/dummy-man.png" alt="DummyImage" />
            </div>
            <div className="ml-4">
                <h4 className="font-extrabold mt-2 text-xl article-title"> Article title</h4>
                <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cum consequuntur
                    pariatur voluptate dolorem error tempore eaque fuga soluta, suscipit aut nulla
                    laboriosam voluptas officiis. Nobis voluptatibus impedit accusantium modi.
                </p>
            </div>
    <style jsx>{`
        @media (max-width: 768px) {
            .article-picture-container{
                margin: 0 auto;
            }
            .article-title{
                text-align: center;
            }
        }
    `}</style>
        </div>
    )
}
