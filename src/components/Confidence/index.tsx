import React from 'react';
import pose from 'assets/photos/afy_pose_small.jpg';
export const Confidence = () => {
    return (
        <section className="max-w-5xl mx-auto flex mt-16 text-gray-800">
            <div className="hidden lg:block lg:w-1/2 px-8 py-8">
                <img className="rounded-lg shadow-2xl" alt={'pose'} src={pose}></img>
            </div>
            <div className="mx-auto px-8 py-16 sm:max-w-xl lg:max-w-full lg:w-1/2">
                <div className="lg:w-1/2 lg:hidden">
                    <img className="rounded-lg shadow-xl" src={pose} alt="pose"></img>
                </div>
                <div className="py-12">
                    <h2 className="text-4xl font-semibold mb-12">Confidence</h2>
                    <p>
                        By moving their bodies big and taking up space, children practice a sense of self-confidence and
                        belief in themselves that transfers to their lives outside dance class.
                    </p>
                </div>
            </div>
        </section>
    );
};
