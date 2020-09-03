import React from 'react';
import creativity from 'assets/photos/nagata_three_small.jpg';
import './styles.css';
export const Creativity = () => {
    return (
        <section className="creativity-section">
            <div className="text">
                <h2>Creativity</h2>
                <p>
                    Ms. Liza believes that a clear sense of structure and safety creates a solid foundation from which
                    creative exploration flourishes. When children feel safe and supported, they are able to take risks
                    and push themselves to try new things.
                </p>
            </div>
            <div>
                <img src={creativity} alt="creativity"></img>
            </div>
        </section>
    );
};
