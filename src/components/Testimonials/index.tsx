import React from 'react';
export const Testimonials = () => {
    return (
        <section className="px-8 py-64 bg-teal-100">
            <div className="max-w-xl mx-auto ">
                <div className="text-2xl text-teal-800 italic">
                    "The 5-6 year olds at our public school in San Francisco absolutely cherished our dance classes with
                    Ms. Liza. She created a fun environment for students to actively engage and express themselves. So
                    many smiles and an energy of pure joy filled the room.
                    <div className="mt-8">The children made several new friends in the dance class"</div>
                </div>
                <div className="uppercase text-indigo-700 font-bold mt-8">Colleen Wentworth</div>
                <div style={{ color: '#6B749C' }}> Kindergarten teacher</div>
                {/* <p>
                    She taught children how to count beats and listen to music, too. The children worked solo and often
                    times with a partner. These two approaches gave the children the opportunity to be brave on their
                    own as well as cooperative with others.
                </p> */}
            </div>
        </section>
    );
};
