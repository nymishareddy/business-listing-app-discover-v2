import React from 'react';

const BASE_URL_PHOTO="https://maps.gomaps.pro/maps/api/place/photo?maxwidth=400"
function PlaceItemCard({ place }: any) {
  return (
    <div className="w-full z-10 border-[1px] rounded-xl shadow-md transition transform duration-300 hover:scale-105 hover:shadow-lg">

      <img
        src={place?.photos?.[0]?.photo_reference? `${BASE_URL_PHOTO}&photo_reference=${place.photos[0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}`: '/placeholder.png'}

        onError={(e) => (e.currentTarget.src = '/placeholder.png')}
        alt="placeholder"
        width={200}
        height={80}
        className="w-full h-[150px] object-cover rounded-t-xl" 
      />
      <div className="p-2">
        <h2 className="line-clamp-2">{place.name}</h2>
        <div className="flex flex-col gap-2 mt-3">
        <div className="flex items-start gap-1 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-.52 0-1.04-.194-1.44-.582-1.93-1.864-6.06-6.228-6.06-10.668a7.5 7.5 0 1115 0c0 4.44-4.13 8.804-6.06 10.668a2.07 2.07 0 01-1.44.582z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" />
            </svg>
        <h2 className="text-[12px] text-gray-400 line-clamp-2">{place.formatted_address}</h2>
        </div>
      </div>
      <div className="flex gap-2 mt-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 text-red-500"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.348h5.212c.499 0 .705.64.303.94l-4.244 3.085a.563.563 0 00-.202.63l1.62 5.223a.563.563 0 01-.857.63l-4.244-3.085a.563.563 0 00-.662 0l-4.244 3.085a.563.563 0 01-.857-.63l1.62-5.223a.563.563 0 00-.202-.63L2.34 9.898a.563.563 0 01.303-.94h5.212a.563.563 0 00.475-.348l2.125-5.111z" />
        </svg>

        <h2 className="text-[12px] text-gray-400 line-clamp-2 tracking-wider">
          {place.rating} (
          <span className="inline-flex items-center gap-1 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
          </svg>
          {place.user_ratings_total}
  </span>)

        </h2>
      </div>
      </div>
    </div>
  );
}

export default PlaceItemCard;
