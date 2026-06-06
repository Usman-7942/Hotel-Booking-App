import React, { useState } from "react";
import styles from "./BookedHotelsPage.module.css";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const BookedHotelsPage = () => {
  const current_user = JSON.parse(localStorage.getItem("current_user"));

  const BookedHotels = current_user?.bookedhotelslist || [];

  const [index, setIndex] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState(null);





  const handleCardClick = (item) => {

      setSelectedHotel(item);

  };



  const nextfun = () => {
    if (index < BookedHotels.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevfun = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div>
      <Navbar />

      <div className={styles.wrapper}>
        <button className={styles.prevbtn} onClick={prevfun}>
          {"<"}
        </button>

        <div
          className={styles.card_section}
          style={{ transform: `translateX(-${index * 20}vw)` }}
        >
          {BookedHotels.length === 0 ? (
            <p className={styles.empty}>No bookings found.</p>
          ) : (
                <>
                  {BookedHotels.map((item) => (
                <div key={item.hotel.id} className={styles.card}
                onClick={() => handleCardClick(item) }
                >
                  <img
                    src={item.hotel.image}
                    alt={item.hotel.name}
                    className={styles.image}
                  />

                  <div className={styles.content}>
                    <h2>{item.hotel.name}</h2>
                    <p>📍 {item.hotel.location}</p>

                    <div className={styles.row}>
                      <span>⭐ {item.hotel.rating}</span>
                      <span>🧾 {item.hotel.reviews} reviews</span>
                    </div>

                    <div className={styles.row}>
                      <span>📅 Check-in: {item.booking?.checkin || "N/A"}</span>
                    </div>

                    <div className={styles.row}>
                      <span>📅 Check-out: {item.booking?.checkout || "N/A"}</span>
                    </div>

                    <div className={styles.row}>
                      <span>👥 Guests: {item.booking?.guests}</span>
                      <span>💰 ${item.hotel.price}/night</span>
                    </div>

                   
                  </div>
                </div>
              ))}
                </>
          )}
        </div>

        <button className={styles.nextbtn} onClick={nextfun}>
          {">"}
        </button>
      </div>


      {selectedHotel && (
  <div className={styles.detailsPanel}>

    <h2 className={styles.detailsHeading}>
      📄 Booking Details
    </h2>

    {/* ========== USER DETAILS ========== */}
    <div className={styles.userSection}>
      <h4>👤 User Details</h4>
      <p><b>Name:</b> {selectedHotel.user?.fullname}</p>
      <p><b>Email:</b> {selectedHotel.user?.email}</p>
      <p><b>Phone:</b> {selectedHotel.user?.phoneno}</p>
    </div>

    {/* ========== HOTEL DETAILS ========== */}
    <div className={styles.hotelSection}>
      <h4>🏨 Hotel Details</h4>

      <h3>{selectedHotel.hotel?.name}</h3>
      <p>📍 {selectedHotel.hotel?.location}</p>

      <p>⭐ {selectedHotel.hotel?.rating}</p>
      <p>🧾 {selectedHotel.hotel?.reviews}</p>
    </div>

    {/* ========== BOOKING DETAILS ========== */}
    <div className={styles.bookingSection}>
      <h4>📝 Booking Details</h4>

      <p>📅 {selectedHotel.booking?.checkin} → {selectedHotel.booking?.checkout}</p>
      <p>👥 Guests: {selectedHotel.booking?.guests}</p>
      <p>🌙 Nights: {selectedHotel.booking?.nights}</p>
    </div>

    {/* ========== PRICE DETAILS ========== */}
    <div className={styles.priceSection}>
      <h4>💰 Price Details</h4>

      <p>Tax: ${selectedHotel.price?.tax}</p>
      <p><b>Total: ${selectedHotel.price?.total}</b></p>
    </div>

  </div>
)}

      

      <Footer />
    </div>
  );
};

export default BookedHotelsPage;