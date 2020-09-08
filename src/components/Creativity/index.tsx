import React from 'react';
import creativity from 'assets/photos/nagata_three_small.jpg';
export const Creativity = () => {
    return (
        <section className="max-w-5xl mx-auto flex mt-16 text-gray-800">
            <div className="mx-auto p-8 sm:max-w-xl lg:max-w-full lg:w-1/2">
                <div className="lg:w-1/2 lg:hidden mb-8">
                    <img className="rounded-lg shadow-xl" src={creativity} alt="creativity"></img>
                </div>
                <div className="sm:py-12">
                    <h2 className="text-4xl font-semibold mb-4">Creativity</h2>
                    <p>
                        Ms. Liza believes that a clear sense of structure and safety creates a solid foundation from
                        which creative exploration flourishes. When children feel safe and supported, they are able to
                        take risks and push themselves to try new things.
                    </p>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 p-16">
                <img className="rounded-lg shadow-2xl" alt={'profile_image'} src={creativity}></img>
            </div>
        </section>
    );
};
