import { createContext, useState } from "react";

export const HotelContext = createContext();

export const HotelProvider = ({children}) => {

    const [bookedhotelslist, setbookedhotelslist] = useState(() => {
    return JSON.parse(localStorage.getItem("bookedhotelslist")) || [];
  });

   const addtobookedhotels = (hotelData) => {
  let current_user = JSON.parse(localStorage.getItem("current_user")) || {};

  current_user.bookedhotelslist = [
    ...(current_user.bookedhotelslist || []),
    hotelData
  ];

  localStorage.setItem("current_user", JSON.stringify(current_user));
};  


   

     return(
        <HotelContext.Provider  value = {{ addtobookedhotels}} >
            {children}
        </HotelContext.Provider>
    );
}  
