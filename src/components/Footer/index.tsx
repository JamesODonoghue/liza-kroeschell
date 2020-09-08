import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Footer = () => {
    return (
        <footer className="h-64 py-64 p-12 w-full bg-indigo-600">
            <div className="max-w-4xl mx-auto sm:flex-row flex flex-col items-center justify-between">
                <div className="flex items-center justify-between w-64 sm:mb-0 mb-16">
                    <div className="text-5xl text-white hover:text-teal-200 transition duration-200">
                        <a href="https://www.facebook.com/liza.kroeschell">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </a>
                    </div>
                    <div className="text-5xl text-white hover:text-teal-200 transition duration-200">
                        <a href="https://www.instagram.com/lizakroeschell/">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                    </div>
                    <div className="text-5xl text-white hover:text-teal-200 transition duration-200">
                        <a href="https://www.youtube.com/channel/UCoknyjXqdGefORakI0gMWwg">
                            <FontAwesomeIcon icon={['fab', 'youtube']} />
                        </a>
                    </div>
                </div>
                <h4 className="text-lg font-semibold tracking-wider text-white">liza.kroeschell@gmail.com</h4>
            </div>
        </footer>
    );
};
