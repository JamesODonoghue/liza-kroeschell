import React from 'react';
import creativity from 'assets/photos/nagata_three_small.jpg';
export const Creativity = () => {
    return (
        <div className="max-w-full bg-teal-300 text-blue-900">
            <section className="max-w-6xl mx-auto pt-64 ">
                <h1 className="max-w-xl lg:max-w-5xl lg:text-5xl text-4xl mx-auto mb-16 px-8 lg:p-0 font-semibold ">
                    Teaching <span className="text-white">philosophy</span>
                </h1>
                <div className="flex">
                    <div className="mx-auto sm:max-w-xl lg:w-1/2">
                        <div className="lg:w-1/2 lg:hidden mb-8 p-8 text-teal-900">
                            <img className="rounded-lg shadow-xl" src={creativity} alt="creativity"></img>
                        </div>
                        <div className="lg:p-16 px-8 py-4">
                            <h2 className="lg:text-4xl text-2xl font-semibold mb-4">Creativity</h2>
                            <p>
                                Ms. Liza believes that a clear sense of structure and safety creates a solid foundation
                                from which creative exploration flourishes. When children feel safe and supported, they
                                are able to take risks and push themselves to try new things.
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:w-1/2 lg:p-16">
                        <img className="rounded-lg shadow-2xl" alt={'profile_image'} src={creativity}></img>
                    </div>
                </div>
            </section>
        </div>
    );
};
