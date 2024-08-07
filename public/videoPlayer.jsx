import React from 'react'

const videoPlayer = () => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50'>
            <div className='relative w-full h-full flex items-center justify-center'>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/8JgDybnESLw?autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className='rounded-lg'
                ></iframe>
                <button onClick={handleCloseVideo} className='absolute top-4 right-4 text-white text-2xl cursor-pointer'>
                    X
                </button>
            </div>

        </div>
    )
}

export default videoPlayer