import React from 'react';
import ReactPlayer from 'react-player';
export interface IVideoProps {
    embedLink: string;
    name: string;
}

const videos = [
    'kSUXULbY3Jc?',
    'Zcmved0uM_E?start=1481&',
    'bdjq-_6Mvvw?',
    'woRRcl5-7mo?',
    '761Ah9h4U-o?',
    'NKEFrH_wTEo?',
    'OJItiWIscSA?',
    't7khV6OqL6Q?',
];

const videoNames = [
    'CNY Parade Team 2020',
    'Chinese New Year 2018',
    'Nagata Dance',
    'Rosa Parks',
    'French American',
    'Juniperro Serra',
    'Practicing Plies!',
    'Dancing Robots and Noodles!',
];

const videosCombo = videos.map((value, key) => ({
    name: videoNames[key],
    link: value,
}));

export const VideoList = () => (
    <div className="flex flex-wrap">{videosCombo.map(({ name, link }) => YoutubeVideo({ embedLink: link, name }))}</div>
);
export const YoutubeVideo = ({ embedLink, name }: IVideoProps) => (
    <div className="mb-12 max-w-full">
        <h2 className="text-indigo-800 text-xl mb-4 uppercase tracking-wider font-semibold">{name}</h2>
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${embedLink}`}
            light={`https://img.youtube.com/vi/${embedLink.split('?')[0]}/sddefault.jpg`}
            className="max-w-full box-border sm:mr-8 border-none rounded-md overflow-hidden shadow-xl max-w-1/2"
        ></ReactPlayer>
    </div>
);
