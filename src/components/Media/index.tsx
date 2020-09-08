import React from 'react';
import { VideoList } from '../YoutubeVideo';

export const Media = () => (
    <section className="px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-800 mb-8 mt-12">Videos</h1>
        <VideoList></VideoList>
    </section>
);
