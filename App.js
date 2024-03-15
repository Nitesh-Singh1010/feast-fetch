import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";
// import RestaurantCard from "./src/Components/RestaurantCard";
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// Header component for header section: Logo, Nav Items

// RestaurantList is JSON Data for displaying cards

// Restaurant card component: Image, name, cuisine

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
