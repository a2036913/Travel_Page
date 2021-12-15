import React from "react";
import image from "../../images/img-home.jpg";
import CardItem from "../CardItem";
import "../../App.css";

// bg-color : #E8ECF3
export default function Products() {
  return (
    <>
      <div class="h-20 w-full"></div>
      <div class="border-2 border-none border-gray-600 rounded-lg">
        <div
          class="product-head-bg w-screen h-60 pt-40 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div class="product-bar relative w-screen h-20 px-4 pt-3 bg-white opacity-90 ">
            <div class="flex flex-row gap-2 h-12 p-2 place-item-center border-1 border-black border-solid">
              <div class="flex-1 w-1/6 border-r border-gray-400">From</div>
              <div class="flex-1 w-2/6 border-r border-gray-400">
                Destination
              </div>
              <div class="flex-1 w-2/6 border-r border-gray-400">
                Departure Date
              </div>
              <div class="flex-1 w-1/6 border-r border-gray-400">Days Trip</div>
            </div>
          </div>
        </div>

        <div class="w-screen h-screen px-32 py-20 bg-gray-100">
          <div className="cards">
            <div className="cards__container">
              <div className="cards__wrapper">
                <ul className="cards__items">
                  <CardItem
                    src="images/img-9.jpg"
                    text="Explore the hidden waterfall deep 
                      inside Amazon Jungle"
                    label="Adventure"
                    path="/services"
                  />
                  <CardItem
                    src="images/img-2.jpg"
                    text="Travel through the Islands of Bali in a
                      Private Cruise"
                    label="Luxury"
                    path="/services"
                  />
                </ul>
                <ul className="cards__items">
                  <CardItem
                    src="images/img-3.jpg"
                    text="Set Sail in the Atlantic Ocean visiting
                      Uncharted Waters"
                    label="Mystery"
                    path="/services"
                  />
                  <CardItem
                    src="images/img-4.jpg"
                    text="Experience Football on Top of the Himilayan
                      Mountains"
                    label="Adventure"
                    path="/products"
                  />
                  <CardItem
                    src="images/img-8.jpg"
                    text="Ride through the Sahara Desert on a guided
                      camel tour"
                    label="Adrenaline"
                    path="/sign-up"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
