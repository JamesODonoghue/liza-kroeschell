import React from 'react';
import pose from 'assets/photos/afy_pose_small.jpg';
export const Confidence = () => {
    return (
        <div className="max-w-full bg-teal-300 text-blue-900">
            <section className="max-w-6xl mx-auto flex pt-16">
                <div className="hidden lg:block lg:w-1/2 lg:p-16">
                    <img className="rounded-lg shadow-2xl" alt={'pose'} src={pose}></img>
                </div>
                <div className="mx-auto sm:max-w-xl lg:w-1/2">
                    <div className="lg:w-1/2 lg:hidden mb-8 p-8">
                        <img className="rounded-lg shadow-xl" src={pose} alt="pose"></img>
                    </div>
                    <div className="lg:p-16 p-8 py-4">
                        <h2 className="lg:text-4xl text-2xl font-semibold mb-4">Confidence</h2>
                        <p>
                            By moving their bodies big and taking up space, children practice a sense of self-confidence
                            and belief in themselves that transfers to their lives outside dance class.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
