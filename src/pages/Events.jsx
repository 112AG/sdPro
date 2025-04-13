import React from "react";
import Working from "../components/Working";

function Events() {
  return (
    <Working/>
  );
}

export default Events;

// import React from "react";

// const Events = () => {
//   // Sample event data. Update this with your own events or fetch from an API.
//   const events = [
//     {
//       title: "Annual Tech Conference",
//       date: "May 15, 2025",
//       time: "09:00 AM",
//       location: "San Francisco, CA",
//       description:
//         "Join industry leaders for a full day of insightful talks and networking opportunities.",
//       link: "#",
//     },
//     {
//       title: "Digital Marketing Workshop",
//       date: "June 05, 2025",
//       time: "11:00 AM",
//       location: "New York, NY",
//       description:
//         "Enhance your digital marketing skills with this comprehensive workshop.",
//       link: "#",
//     },
//     {
//       title: "Innovation in Finance Summit",
//       date: "July 20, 2025",
//       time: "10:00 AM",
//       location: "Chicago, IL",
//       description:
//         "Discover how innovation is transforming finance at our annual summit.",
//       link: "#",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-12">
//       {/* Hero Section */}
//       <div className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
//             Upcoming Events
//           </h1>
//           <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
//             Discover our latest events and join us to learn, network, and celebrate innovations.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
//         {/* Event Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((event, index) => (
//             <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300">
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
//                 <p className="text-gray-500 mt-2">{event.description}</p>
//                 <div className="mt-4 text-gray-600">
//                   <p>
//                     <span className="font-medium">Date:</span> {event.date}
//                   </p>
//                   <p>
//                     <span className="font-medium">Time:</span> {event.time}
//                   </p>
//                   <p>
//                     <span className="font-medium">Location:</span> {event.location}
//                   </p>
//                 </div>
//               </div>
//               <div className="px-6 pb-6">
//                 <a
//                   href={event.link}
//                   className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Registration Section */}
//         <div className="bg-white rounded-lg shadow-lg p-6 mt-12">
//           <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">Register for an Event</h2>
//           <form className="space-y-4 max-w-lg mx-auto">
//             <div>
//               <label htmlFor="fullName" className="block text-gray-700 mb-1">
//                 Full Name
//               </label>
//               <input
//                 id="fullName"
//                 type="text"
//                 placeholder="Your Full Name"
//                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 placeholder="Your Email Address"
//                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
//               />
//             </div>

//             <div>
//               <label htmlFor="eventChoice" className="block text-gray-700 mb-1">
//                 Select Event
//               </label>
//               <select
//                 id="eventChoice"
//                 className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
//               >
//                 {events.map((event, index) => (
//                   <option key={index} value={event.title}>
//                     {event.title} - {event.date}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <button
//               type="submit"
//               className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
//             >
//               Register Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;
