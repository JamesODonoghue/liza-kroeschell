import React from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
declare const google: any;

let schools = [
    'Commodore Sloat Elementary School',
    'French American International School',
    'Junipero Serra Elementary School',
    'Alamo Elementary School',
    'Jewish Community Center of San Francisco',
    'Chinese Immersion School at De Avila ',
    'Alice Fong Yu Elementary School',
    'Edwin and Anita Lee Newcomer School',
    'Rosa Parks Elementary School',
    'William Cobb Elementary School',
    'Geary Dance Center',
    'Bay Area Ballet Conservatory',
    'Tutu School',
    'Bryant Elementary School',
    'Dianne Feinstein Elementary School',
    'San Francisco Friends School',
    'Horizons at San Francisco Friends School',
    'Lycée Français de San Francisco',
];

schools = schools.sort();

export const Experience = () => (
    <section className="max-w-full">
        <div className="max-w-6xl mx-auto py-64 sm:px-16 p-8 text-gray-900">
            <h2 className="sm:text-5xl text-4xl font-semibold mb-16 ">
                Teaching <span className="text-blue-600">experience</span>
            </h2>
            <ul className="sm:flex flex-wrap">
                {schools.map((school, key) => (
                    <li
                        key={key}
                        className="mb-4 sm:mr-4 p-6 font-semibold text-xl bg-blue-200 text-blue-900 rounded-lg"
                    >
                        {school}
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

// const containerStyle = {
//     width: '400px',
//     height: '400px',
// };

// const center = {
//     lat: -3.745,
//     lng: -38.523,
// };

// function MyComponent() {
//     const [map,/ setMap] = React.useState(null);

//     const onLoad = React.useCallback(function callback(map) {
//         const bounds = new google.maps.LatLngBounds();
//         map.fitBounds(bounds);
//         setMap(map);
//     }, []);

//     const onUnmount = React.useCallback(function callback(map) {
//         setMap(null);
//     }, []);

//     return (
//         <LoadScript googleMapsApiKey="">
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//                 onLoad={onLoad}
//                 onUnmount={onUnmount}
//             >
//                 {/* Child components, such as markers, info windows, etc. */}
//                 <></>
//             </GoogleMap>
//         </LoadScript>
//     );
// }

// export default React.memo(MyComponent);
