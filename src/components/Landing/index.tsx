import React, { useEffect } from 'react';
import headshot from 'assets/photos/headshot_small.jpg';

export const Landing = () => {
    useEffect(() => {}, []);
    return (
        <section className="flex max-w-6xl mx-auto mb-12">
            <div className="max-w-md mx-auto px-8 sm:py-24 sm:max-w-xl lg:max-w-full lg:w-1/2">
                <div className="xl:max-w-xl xl:ml-auto">
                    <img
                        className="mt-6 mb-6 rounded-lg shadow-2xl sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden lg:w-1/2"
                        alt={'profile_image'}
                        src={headshot}
                    ></img>
                    <div>
                        <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
                            Hi, I'm Liza!{' '}
                            <div>
                                I teach dance in <div>San Francisco.</div>
                            </div>
                        </h1>
                        <div className="text-gray-700 sm:text-xl mt-16 max-w-md">
                            <p>I teach private lessons for children on Zoom!</p>
                        </div>
                        {/* <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                <g className="fill-current text-indigo-800" fill="none" fill-rule="evenodd">
                                    <g>
                                        <path d="M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
                                    </g>
                                </g>
                            </svg> */}
                        {/* <div className="pattern"></div> */}
                        <a
                            className="mt-8 min-w-full sm:text-xl sm:min-w-0 text-center inline-block rounded-md bg-indigo-700 hover:bg-indigo-500 transition duration-200 hover:shadow-lg text-white px-5 py-3 tracking-wider"
                            href="mailto:liza.kroeschell@gmail.com?subject=Zoom Private Class"
                        >
                            Schedule a private class
                        </a>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 px-8 py-24">
                <img className="rounded-lg shadow-2xl" alt={'profile_image'} src={headshot}></img>
            </div>
        </section>
    );
};
