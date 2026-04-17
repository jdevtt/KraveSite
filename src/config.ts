/**
 * KRAVE Restaurant Trinidad - Business Configuration
 * 
 * Business owners can easily update these values to change where 
 * emails, WhatsApp messages, and orders are routed.
 */

export const KRAVE_CONFIG = {
  contact: {
    // This is the number that shows up on the website
    displayPhone: "+1 (868) 600-KRAVE",
    
    // This is the actual WhatsApp number for the chat links (Numbers only, include country code)
    // E.g., for Trinidad: 1868 followed by the 7 digit number
    whatsappNumber: "18686005728", 
    
    // The email address where Table Reservations should be sent
    bookingEmail: "reservations@kravetrinidad.com",
    
    // The email address where Private Dining/Event inquiries should be sent
    eventsEmail: "events@kravetrinidad.com",
  },
  
  location: {
    address: "Tarouba Plaza, Marabella",
    hours: "Tue-Sun: 11:30 AM — 10:00 PM",
  },
  
  links: {
    // The URL for your FoodDrop delivery page
    foodDrop: "https://www.fooddrop.co.tt/", 
  }
};
