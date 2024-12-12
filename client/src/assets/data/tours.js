import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Adi Kailash Pithoragarh",
    city: "Uttarakhand",
    distance: 300,
    address:' Somewhere ',
    price : 24999 ,
    maxGroupSize: 20,
    desc: "The Adi Kailash Yatra, also known as the Adi Kailash Parikrama, is a pilgrimage and trekking route situated in the Indian state of Uttarakhand. It is a spiritual journey that takes travelers through stunning landscapes, remote villages, and sacred sites. Adi Kailash is often considered an alternative to the more famous Kailash Mansarovar Yatra in Tibet, which involves a pilgrimage to Mount Kailash and Lake Mansarovar.",
    reviews: [
      {
        name: "Rahul",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  // {
  //   id: "02",
  //   title: "Nainital,Uttarakhand",
  //   city: "Uttarakhand",
  //   distance: 400,
  //   address:' Somewhere ',
  //   price: 5000,
  //   maxGroupSize: 8,
  //   desc: "this is the description",
  //   reviews: [
  //     {
  //       name: "jatin",
  //       rating: 4.6,
  //     },
  //   ],
  //   avgRating: 4.5,
  //   photo: tourImg02,
  //   featured: true,
  // },
  // {
  //   id: "03",
  //   title: "Kedarnath",
  //   city: "Uttarakhand",
  //   distance: 500,
  //   address:' Somewhere ',
  //   price: 18000,
  //   maxGroupSize: 10,
  //   desc: "this is the description",
  //   reviews: [
  //     {
  //       name: "suraj",
  //       rating: 4.6,
  //     },
  //   ],
  //   avgRating: 4.5,
  //   photo: tourImg03,
  //   featured: true,
  // },
  // {
  //   id: "04",
  //   title: "Beautiful Sunrise, Dehradun",
  //   city: "Uttarakhand",
  //   distance: 500,
  //   address:' Somewhere ',
  //   price: 8000,
  //   maxGroupSize: 12,
  //   desc: "this is the description",
  //   reviews: [
  //     {
  //       name: "Ramu",
  //       rating: 4.6,
  //     },
  //   ],
  //   avgRating: 4.5,
  //   photo: tourImg04,
  //   featured: true,
  // },
  // {
  //   id: "05",
  //   title: "kasar Devi,Almora",
  //   city: "Uttarakhand",
  //   distance: 500,
  //   address:' Somewhere ',
  //   price: 7000,
  //   maxGroupSize: 8,
  //   desc: "this is the description",
  //   reviews: [
  //     {
  //       name: "sachin",
  //       rating: 4.6,
  //     },
  //   ],
  //   avgRating: 4.5,
  //   photo: tourImg05,
  //   featured: false,
  // },
  // {
  //   id: "06",
  //   title: "Himalyas view",
  //   city: "Uttarakhand",
  //   distance: 500,
  //   address:' Somewhere ',
  //   price: 8000,
  //   maxGroupSize: 8,
  //   desc: "this is the description",
  //   reviews: [ ],
  //   avgRating: 4.5,
  //   photo: tourImg06,
  //   featured: false,
  // },
  {
    id: "07",
    title: "Panchachuli,Darma Valley",
    city: "Pithoragarh",
    distance: 500,
    address:' Dharchula ',
    price: 14000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "Himanshu",
        rating: 4.6,
      },
      {
        name: "diyansh",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  // {
  //   id: "08",
  //   title: "Risikesh",
  //   city: "Uttarakhand",
  //   distance: 500,
  //   address:' Somewhere ',
  //   price: 4999,
  //   maxGroupSize: 8,
  //   desc: "this is the description",
  //   reviews: [
     
  //   ],
  //   avgRating: 4.5,
  //   photo: tourImg08,
  //   featured: false,
  // },
];

export default tours;
