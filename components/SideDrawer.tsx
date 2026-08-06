import React from 'react';

const BASE_URL_PHOTO = "https://maps.gomaps.pro/maps/api/place/photo?maxwidth=400";

function SideDrawer({ place, close }: any) {

    const onDirectionClick = () => {
        window.open(`https://maps.gomaps.pro/maps?q=${encodeURIComponent(place.name + ', ' + place.formatted_address)}`, "_blank");

    }
    const onShareClick = () => {
        const shareData = {
            title: place.name,
            text: `Check out ${place.name} located at ${place.formatted_address}`,
            url: `https://maps.gomaps.pro/maps?q=${encodeURIComponent(place.formatted_address || place.name)}`,
        };

        if (navigator.share) {
            navigator.share(shareData).catch((error) => console.log('Error sharing:', error));
        } else {
            // Fallback: copy URL to clipboard
            navigator.clipboard.writeText(shareData.url).then(() => {
                alert('Link copied to clipboard!');
            }).catch(() => {
                alert('Sharing not supported and failed to copy link.');
            });
        }
    };

    const imageSrc = place?.photos?.[0]?.photo_reference
        ? `${BASE_URL_PHOTO}&photo_reference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}`
        : '/placeholder.png';

    const mapSrc = `https://maps.gomaps.pro/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}&q=${encodeURIComponent(place.formatted_address || place.name)}`;

    return (
        <div className="h-screen w-screen md:w-[400px] bg-white shadow-md p-5 z-20 overflow-y-auto">
            {/* Close button */}
            <button onClick={close} className="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Place Info */}
            <h2 className="line-clamp-2 text-[20px] font-semibold mb-3">{place.name}</h2>

            {/* Image */}
            <img
                src={imageSrc}
                onError={(e) => (e.currentTarget.src = '/placeholder.png')}
                alt="Place"
                className="w-full rounded-xl h-[200px] object-cover"
            />

            {/* Address */}
            <div className="mt-3 flex gap-2 items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-.52 0-1.04-.194-1.44-.582C8.63 19.304 4.5 14.94 4.5 10.5a7.5 7.5 0 1115 0c0 4.44-4.13 8.804-6.06 10.668a2.07 2.07 0 01-1.44.582z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
                </svg>
                <p className="text-[12px] text-gray-400">{place.formatted_address}</p>
            </div>

            {/* Rating */}
            <div className="flex gap-2 mt-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="text-[12px] text-gray-500">
                    {place.rating} ({place.user_ratings_total})
                </span>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex gap-5">
                <button onClick={() => onDirectionClick()}
                    className="flex gap-2 p-1 px-3 bg-red-500 rounded-full text-white hover:scale-105 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 3L3 10.5l7.5 2.25L13.5 21 21 3z" />
                    </svg>
                    <span>Direction</span>
                </button>

                <button
                    onClick={onShareClick}
                    className="flex gap-2 p-1 px-3 bg-red-500 rounded-full text-white hover:scale-105 transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>
                    <span>Share</span>
                </button>

            </div>

            {/* Map */}
            <div className="mt-5 w-full">
                <iframe
                    width="100%"
                    height="250"
                    src={`https://maps.gomaps.pro/maps?q=${encodeURIComponent(place.formatted_address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-xl mt-5"
                />

            </div>
        </div>
    );
}

export default SideDrawer;
