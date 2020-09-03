import React from 'react';
import pose from 'assets/photos/afy_pose_small.jpg';
import './styles.css';
export const Confidence = () => {
    return (
        <section className="confidence-section">
            <div className="container">
                <div>
                    <img src={pose} alt="creativity"></img>
                </div>
                <div className="text">
                    <h2>Confidence</h2>
                    <p>
                        By moving their bodies big and taking up space, children practice a sense of self-confidence and
                        belief in themselves that transfers to their lives outside dance class.
                    </p>
                </div>
            </div>
        </section>
    );
};
