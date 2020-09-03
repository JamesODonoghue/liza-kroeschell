import React, { useEffect } from 'react';
import headshot from 'assets/photos/headshot.jpg';

export const Landing = () => {
    useEffect(() => {}, []);
    return (
        <div>
            <div className="flex lg:py-32 max-w-6xl mx-auto">
                <div className="max-w-md mx-auto px-8 py-16 sm:max-w-xl lg:max-w-full lg:w-1/2">
                    <div className="xl:max-w-xl xl:ml-auto">
                        <img
                            className="mt-6 mb-6 rounded-lg shadow-2xl sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden lg:w-1/2"
                            alt={'profile_image'}
                            src={headshot}
                        ></img>
                        <div>
                            <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                                Hi, I'm Liza.{' '}
                                <div>
                                    I teach dance to children <span className=""> ages 3 to 13</span> in San Francisco
                                </div>
                            </h1>
                            <p className="text-gray-700 sm:text-xl mt-16">
                                I teach private dance lessons on Zoom! Reach out if you want to support a local
                                independent artist!{' '}
                            </p>
                            <a
                                className="mt-8 inline-block rounded-md bg-indigo-700 hover:bg-indigo-500 text-white px-5 py-3 uppercase font-semibold tracking-wider"
                                href="mailto:liza.kroeschell@gmail.com?subject=Zoom Private Class"
                            >
                                Schedule a private class
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 px-8 py-8">
                    <img className="rounded-lg shadow-2xl" alt={'profile_image'} src={headshot}></img>
                </div>

                {/* <div className="landing__content">
                    <p className="mb-3 text-2xl font-semibold">Private Lessons</p>
                    <p>
                        Email{' '}
                        <b>
                            <a href="mailto:liza.kroeschell@gmail.com?subject=Zoom Private Class">
                                liza.kroeschell@gmail.com
                            </a>
                        </b>{' '}
                        for more information about individualized dance instruction tailored to your child’s interests
                        and goals.
                    </p>

                    <div>
                        <a href="mailto:liza.kroeschell@gmail.com?subject=Zoom Private Class">
                            <button className="cta">Schedule a private class</button>
                        </a>
                    </div>
                </div> */}
            </div>

            {/* <div className="circles">
                <div className="circle sm"></div>
                <div className="circle md"></div>
                <div className="circle lg"></div>
            </div> */}
            {/* <p className="headshot-credit">Headshot by Rob Kunkle, GoodLux</p> */}
        </div>
    );
};
