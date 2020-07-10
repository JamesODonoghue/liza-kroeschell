import React from 'react';
import pose from 'assets/photos/afy_pose.jpg';
import creativity from 'assets/photos/nagata_three.jpg';

import './styles.css';
export const TeachingPhilosophy = () => {
    return (
        <section>
            <div className="teaching-philosophy">
                <div className="new-grid">
                    <div className="item">
                        <div>
                            <img src={pose} alt="confidence"></img>
                        </div>
                        <div className="text">
                            <h2>Confidence</h2>
                            <p>
                                By moving their bodies big and taking up space, children practice a sense of
                                self-confidence and belief in themselves that transfers to their lives outside dance
                                class.
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text">
                            <h2>Creativity</h2>
                            <p>
                                Ms. Liza believes that a clear sense of structure and safety creates a solid foundation
                                from which creative exploration flourishes. When children feel safe and supported, they
                                are able to take risks and push themselves to try new things.
                            </p>
                        </div>
                        <div>
                            <img src={creativity} alt="creativity"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
