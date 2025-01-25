import cross_icon from "../assets/Flat_cross_icon.svg.png";
import facebook_icon from "../assets/facebook_icon.png";
import linkedin_icon from "../assets/linkedin_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import upload_area from "../assets/upload_area.png";
import logout_icon from "../assets/logout_icon.png";
import profile_icon from "../assets/profile_icon.png";
import report_icon from "../assets/report_icon.png";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import img7 from "../assets/img7.jpg"
import img8 from "../assets/img8.jpg"
import img9 from "../assets/img9.jpg"
import img10 from "../assets/img10.png"
import img11 from "../assets/img11.jpg"
import img12 from "../assets/img12.jpg"
import img13 from "../assets/img13.jpg"
import img14 from "../assets/img14.jpg"
import img15 from "../assets/img15.jpg"

const reports = [
  {
    _id: 1,
    title: "Stolen Bicycle",
    description: "A red mountain bike was stolen from the park.",
    image: img1,
    category: "Theft",
    location: "Downtown Park, City Center",
    date: new Date("2023-12-15T10:00:00"),
    status: "Pending",
    reportedBy: "userId1",
  },
  {
    _id: 2,
    title: "Vandalized Storefront",
    description: "Graffiti and broken windows at the local convenience store.",
    image: img2,
    category: "Vandalism",
    location: "Main Street, Neighborhood A",
    date: new Date("2023-12-16T14:30:00"),
    status: "Pending",
    reportedBy: "userId2",
  },
  {
    _id: 3,
    title: "Armed Robbery",
    description: "A jewelry store was robbed at gunpoint.",
    image: img3,
    category: "Robbery",
    location: "Highland Avenue, Business District",
    date: new Date("2023-12-14T18:15:00"),
    status: "Under Investigation",
    reportedBy: "userId3",
  },
  {
    _id: 4,
    title: "Cyber Fraud",
    description: "Victim lost money in an online phishing scam.",
    image: img4,
    category: "Cybercrime",
    location: "Online",
    date: new Date("2023-12-13T20:00:00"),
    status: "Pending",
    reportedBy: "userId4",
  },
  {
    _id: 5,
    title: "Domestic Violence Incident",
    description: "Neighbor reported hearing loud arguments and crying.",
    image: img5,
    category: "Domestic Violence",
    location: "Greenwood Lane, Suburban Area",
    date: new Date("2023-12-12T21:45:00"),
    status: "Resolved",
    reportedBy: "userId5",
  },
  {
    _id: 6,
    title: "Assault at Bus Stop",
    description: "Person was physically assaulted by an unknown attacker.",
    image: img6,
    category: "Assault",
    location: "West End Bus Stop, City Center",
    date: new Date("2023-12-11T22:10:00"),
    status: "Pending",
    reportedBy: "userId6",
  },
  {
    _id: 7,
    title: "Drug-related Activity",
    description: "Suspicious activity reported in an abandoned house.",
    image: img7,
    category: "Drug-related",
    location: "Maple Drive, Residential Area",
    date: new Date("2023-12-10T19:00:00"),
    status: "Pending",
    reportedBy: "userId7",
  },
  {
    _id: 8,
    title: "Missing Person",
    description: "A 10-year-old child went missing from a playground.",
    image: img8,
    category: "Missing Persons",
    location: "Sunny Park, Neighborhood C",
    date: new Date("2023-12-09T16:30:00"),
    status: "Under Investigation",
    reportedBy: "userId8",
  },
  {
    _id: 9,
    title: "Hate Crime Incident",
    description: "Racial slurs and physical attack reported in the park.",
    image: img9,
    category: "Hate Crime",
    location: "Freedom Park, Downtown",
    date: new Date("2023-12-08T12:15:00"),
    status: "Pending",
    reportedBy: "userId9",
  },
  {
    _id: 10,
    title: "Phishing Attempt",
    description: "Received fake emails pretending to be from a bank.",
    image: img10,
    category: "Cybercrime",
    location: "Online",
    date: new Date("2023-12-07T09:00:00"),
    status: "Resolved",
    reportedBy: "userId10",
  },
  {
    _id: 11,
    title: "Arson at Warehouse",
    description: "A fire was set intentionally at an old warehouse.",
    image: img12,
    category: "Arson",
    location: "Industrial Area, East District",
    date: new Date("2023-12-06T23:50:00"),
    status: "Pending",
    reportedBy: "userId11",
  },
  {
    _id: 12,
    title: "Shoplifting Incident",
    description: "A person caught stealing items from a grocery store.",
    image: img11,
    category: "Theft",
    location: "Central Market, Shopping District",
    date: new Date("2023-12-05T15:20:00"),
    status: "Resolved",
    reportedBy: "userId12",
  },
  {
    _id: 13,
    title: "Public Harassment",
    description: "Verbal abuse and threats made against a passerby.",
    image: img13,
    category: "Harassment",
    location: "Broadway Street, Downtown",
    date: new Date("2023-12-04T11:30:00"),
    status: "Pending",
    reportedBy: "userId13",
  },
  {
    _id: 14,
    title: "Illegal Dumping",
    description: "Large amounts of waste dumped in a local park.",
    image: img14,
    category: "Vandalism",
    location: "Pinewood Park, Suburban Area",
    date: new Date("2023-12-03T08:45:00"),
    status: "Pending",
    reportedBy: "userId14",
  },
  {
    _id: 15,
    title: "Suspicious Vehicle",
    description: "Unmarked van observed loitering near a school.",
    image: img15,
    category: "Suspicious Activity",
    location: "Elm Street, Neighborhood B",
    date: new Date("2023-12-02T17:00:00"),
    status: "Under Investigation",
    reportedBy: "userId15",
  },
];

const report_category_list = [
  {
    category_name: "Theft",
  },
  {
    category_name: "Robbery",
  },
  {
    category_name: "Vandalism",
  },
  {
    category_name: "Cybercrime",
  },
  {
    category_name: "Domestic Violence",
  },
  {
    category_name: "Assault",
  },
  {
    category_name: "Drug-related",
  },
  {
    category_name: "Missing Persons",
  },
  {
    category_name: "Hate Crime",
  },
  {
    category_name: "Arson",
  },
  {
    category_name: "Harassment",
  },
  {
    category_name: "Suspicious Activity",
  },
  {
    category_name: "Human Trafficking",
  },
  {
    category_name: "Fraud",
  },
  {
    category_name: "Illegal Dumping",
  },
];

export default reports;

export {
  cross_icon,
  facebook_icon,
  twitter_icon,
  linkedin_icon,
  upload_area,
  logout_icon,
  profile_icon,
  report_icon,
  reports,
  report_category_list,
};
