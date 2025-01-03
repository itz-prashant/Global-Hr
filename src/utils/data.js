import { FaRegCheckCircle } from "react-icons/fa";


import gh0 from '../assets/gh_0.png';
import gh1 from '../assets/gh_1.png';
import gh2 from '../assets/gh_2.png';
import gh3 from '../assets/gh_3.png';
import gh4 from '../assets/gh_4.png';
import gh5 from '../assets/gh_5.png';
import gh6 from '../assets/gh_6.png';
import gh7 from '../assets/gh_7.png';
import gh8 from '../assets/gh_8.png';
import gh9 from '../assets/gh_9.png';
import gh10 from '../assets/gh_10.png';
import gh11 from '../assets/gh_11.png';
import gh12 from '../assets/gh_12.png';
import gh13 from '../assets/gh_13.png';
import gh14 from '../assets/gh_14.png';
import gh15 from '../assets/gh_15.png';
import gh16 from '../assets/gh_16.png';
import gh17 from '../assets/gh_17.png';
import gh18 from '../assets/gh_18.png';
import gh19 from '../assets/gh_19.png';
import gh20 from '../assets/gh_20.png';
import gh21 from '../assets/gh_21.png';
import gh22 from '../assets/gh_22.png';
import gh23 from '../assets/gh_23.png';
import gh24 from '../assets/gh_24.png';
import gh25 from '../assets/gh_25.png';
import gh26 from '../assets/gh_26.png';
import gh27 from '../assets/gh_27.png';
import gh28 from '../assets/gh_28.png';
import gh29 from '../assets/gh_29.png';
import gh30 from '../assets/gh_30.png';
import gh31 from '../assets/gh_31.png';
import gh32 from '../assets/gh_32.png';
import gh33 from '../assets/gh_33.png';
import gh34 from '../assets/gh_34.png';
import gh35 from '../assets/gh_35.png';
import gh36 from '../assets/gh_36.png';
import gh37 from '../assets/gh_37.png';
import gh38 from '../assets/gh_38.png';
import gh39 from '../assets/gh_39.png';

const cardData = [
  { image: gh0, name: "Dashboard" },
  { image: gh1, name: "Employee Manager" },
  { image: gh2, name: "Attendance" },
  { image: gh3, name: "Timesheet" },
  { image: gh4, name: "Leave" },
  { image: gh5, name: "Late Coming" },
  { image: gh6, name: "Outdoor Entries" },
  { image: gh7, name: "Survey" },
  { image: gh8, name: "Knowledge and Skills" },
  { image: gh9, name: "Setting Manager" },
  { image: gh10, name: "Achievement" },
  { image: gh11, name: "Performance" },
  { image: gh12, name: "Recruitment" },
  { image: gh13, name: "Over Time" },
  { image: gh14, name: "Mileage" },
  { image: gh15, name: "Device Manager Module" },
  { image: gh16, name: "Holiday Manager" },
  { image: gh17, name: "Shift manager" },
  { image: gh18, name: "Policy Document Management" },
  { image: gh19, name: "Support" },
  { image: gh20, name: "Announcement" },
  { image: gh21, name: "Email Manager" },
  { image: gh22, name: "Checklist Config" },
  { image: gh23, name: "Utilities Manager" },
  { image: gh24, name: "Partners Dashboard" },
  { image: gh25, name: "Bank Manager" },
  { image: gh26, name: "Expenses Manager" },
  { image: gh27, name: "Subscription Manager" },
  { image: gh28, name: "Organisation Details" },
  { image: gh29, name: "Currency Manager" },
  { image: gh30, name: "Master Data Manager" },
  { image: gh31, name: "Operational Location" },
  { image: gh32, name: "Contact Manager" },
  { image: gh33, name: "Hierarchy Manager" },
  { image: gh34, name: "Period Manager" },
  { image: gh35, name: "Exception Handler" },
  { image: gh36, name: "System Settings" },
  { image: gh37, name: "Entity Manager" },
  { image: gh38, name: "Security Manager" },
  { image: gh39, name: "Profile and Permissions" },
];

export const accordianDatas = [
  {
    id: 1,
    title: "Qyality",
    desccription: "We believe that the quality of the service our clients receive is a key ingredient of our overall offering. The quality of service begins with the stability and reliability of our software solutions and continues through to our consultancy and our help desk. We guarantee a 48 hour response time to our customers queries and access to a second level specialist. Our extremely high level of customer retention and satisfaction are a testament to our commitment to our top quality service.",
    isOpen: true
  },
  {
    id: 2,
    title: "Completeness",
    desccription: "Global HR offers a complete suite of tools to manage all HR processes, that can be purchased and used independently and are able to communicate perfectly with each other and with other software.",
    list:{
      list1: "Global HR Recruiting to handle the entire recruiting process.",
      list2: "Global HR Employees to manage employees data.",
      list3: "Global HR Learning to organise the training process.",
      list4: "Global HR Performance to monitor all evaluations.",
      para1: "The feature set of our HRM software adapts to the needs of both small businesses and large, complex multinationals.",
      para2: "Delivered through the Internet. No Software to install and no IT involvement."
    },
    isOpen: false
  },
  {
    id: 3,
    title: "Customizatio",
    desccription: "Global HR’s HRM SaaS solution is not just about having a web based interface. We have engineered our services to enable our customers to independently make any change they want: create new fields, add items to list, customise the graphic layout and much more.",
    isOpen: false
  },
  {
    id: 4,
    title: "Security and Uptim",
    desccription: "Our average uptime has been 99.997%. We directly engineer and maintain our multiply redundant infrastructure and this is what enables us to reach these industry leading results. Security is built into our products at both the infrastructure and application layers ensuring compliance of the strictest regulatory standards and enabling ne grained data access control for our users.",
    isOpen: false
  },
  {
    id: 5,
    title: "Integration",
    desccription: "Global HR is an integrated talent management platform that enables organisations to manage HR processes from the Career site to performance evaluation. Attract, search, screen, interview, hire, promote, assess, train and evaluate all in one single integrated environment.",
    isOpen: false
  },
  {
    id: 6,
    title: "Simplicity",
    desccription: "We believe that complex problems can be handled in a clean and simple way. Global HR is built around this principle ensuring that our users are up and running as quickly as possible and maximising the adoption of our solutions in the organisation.",
    isOpen: false
  },
]

export const pricingPlanDatas = [
  {
    name: "Essential",
    price: "Free",
    description: "Designed for businesses with a need of very small no of management licence and need access to key essential functionality. Support via website and email ticket raising functionality will be available. The support will be based on email tickets and standard hourly charges will be applied for ticket resolution.",
    feature: [
      {f: "Core HR with self service for every employee"},
      {f: "On demand subscription of any other functional modules as per the need"},
      {f: "Ticket based support on standard rate"},
      {f: "Access & Permission Management"},
      {f: "Profile Management"},
      {f: "Email Management"},
      {f: "Employee Management"},
      {f: "Attendance Management"},
      {f: "Timesheet Management"},
      {f: "Leave Management"},
      {f: "Period Management"},
      {f: "Security & Users Management"},
      {f: "Subscription Management"},
      {f: "Notification & Bulletin Board"},
      {f: "Ticket Management"},
      {f: "Multi Company Support"},
      {f: "SSL Security"},
      {f: "Essential Reports"},
      {f: "Essential Dashboard & Graphs"},
    ]
  },
  {
    name: "Standard",
    price: "£9.99",
    description: "Designed for businesses who need access to all the essential functionality customisable with the help of setting for their own set of rules and standard reports. Support via website and email ticket raising functionality will be available. The support will be based on email tickets and standard hourly charges will be applied for ticket resolution.",
    feature: [
      {f: "Standard HR with self service for every employee"},
      {f: "On demand subscription of any other functional modules as per the need"},
      {f: "Ticket based support on standard rate"},
      {f: "Advance Access & Permission Management"},
      {f: "Profile Management"},
      {f: "Advance Email Configration"},
      {f: "Employee Management"},
      {f: "Advance Attendance Management"},
      {f: "Advance Timesheet Management"},
      {f: "Advance Leave Management"},
      {f: "Period Management"},
      {f: "Security & Users Management"},
      {f: "Subscription Management"},
      {f: "Setting Management"},
      {f: "Shift Management"},
      {f: "Notification & Bulletin Board"},
      {f: "Ticket Management"},
      {f: "Multi Company Support"},
      {f: "SSL Security"},
      {f: "Standard Reports"},
      {f: "Standard Dashboard & Graphs"},
      {f: "Documents Management"},
      {f: "Custom Fields"},
    ]
  },
  {
    name: "Professional",
    price: "£19.99",
    description: "This is the recommended licence type for most business and provides all the feature of standard functionality along with advance features. Dedicated account management option. The support will be based on email tickets and a further discount 10% will be provided to users of this type of subscription on their standard hourly charges for ticket resolution.",
    feature: [
      {f: "Professional HR with self service for every employee"},
      {f: "On demand subscription of any other functional modules as per the need"},
      {f: "Ticket based support on standard rate"},
      {f: "Advance Access & Permission Management"},
      {f: "Profile Management"},
      {f: "Advance Email Configration"},
      {f: "Employee Management"},
      {f: "Advance Attendance Management"},
      {f: "Advance Timesheet Management"},
      {f: "Advance Leave Management"},
      {f: "Period Management"},
      {f: "Security & Users Management"},
      {f: "Subscription Management"},
      {f: "Setting Management"},
      {f: "Shift Management"},
      {f: "Achievement Management"},
      {f: "Announcement Management"},
      {f: "Bio-Metric Device Management"},
      {f: "Expense Management"},
      {f: "Holiday Management"},
      {f: "Late Coming Management"},
      {f: "Master Data Management"},
      {f: "Over Time Management"},
      {f: "Performance  Management"},
      {f: "Recruitment Management"},
      {f: "Notification & Bulletin Board"},
      {f: "Ticket Management"},
      {f: "Multi Company Support"},
      {f: "SSL Security"},
      {f: "Professional Reports"},
      {f: "Professional Dashboard & Graphs"},
      {f: "Documents Management"},
      {f: "Custom Fields"},
    ]
  },
  {
    name: "Enterprise",
    price: "£59.99",
    description: "Designed for businesses who need access to all the professional functionality customisable with the help of setting for their own set of rules and standard reports. The support will be based on email tickets & phone during business hours and a further discount 20% will be provided to users of this type of subscription on the standard hourly charges for ticket resolution.",
    feature: [
      {f: "Enterprise HR with self service for every employee"},
      {f: "On demand subscription of any other functional modules as per the need"},
      {f: "Ticket based support on standard rate"},
      {f: "Advance Access & Permission Management"},
      {f: "Profile Management"},
      {f: "Advance Email Configration"},
      {f: "Employee Management"},
      {f: "Advance Attendance Management"},
      {f: "Advance Timesheet Management"},
      {f: "Advance Leave Management"},
      {f: "Period Management"},
      {f: "Security & Users Management"},
      {f: "Subscription Management"},
      {f: "Setting Management"},
      {f: "Shift Management"},
      {f: "Achievement Management"},
      {f: "Announcement Management"},
      {f: "Bio-Metric Device Management"},
      {f: "Expense Management"},
      {f: "Holiday Management"},
      {f: "Late Coming Management"},
      {f: "Master Data Management"},
      {f: "Over Time Management"},
      {f: "Performance  Management"},
      {f: "Recruitment Management"},
      {f: "Address & Location Management"},
      {f: "Checklist Maintenance"},
      {f: "Knowledge & Skills Management"},
      {f: "Loan Management"},
      {f: "Mileage Management"},
      {f: "Outdoor Management"},
      {f: "Policy Management"},
      {f: "Notification & Bulletin Board"},
      {f: "Ticket Management"},
      {f: "Multi Company Support"},
      {f: "SSL Security"},
      {f: "Enterprise Reports"},
      {f: "Enterprise Dashboard & Graphs"},
      {f: "Documents Management"},
      {f: "Custom Fields"},
    ]
  },
  {
    name: "Custom ",
    price: "£219.99",
    description: "Designed for businesses who have large no of subscription and need to have a custom package created for them to pick and choose the functionalities. The support will be based on email tickets & phone during business hours and a further discount 30% will be provided to users of this type of subscription on the standard hourly charges for ticket resolution. The support will be based on email tickets & phone during business hours",
    feature: [
      {f: "Enterprise HR with self service for every employee"},
      {f: "On demand subscription of any other functional modules as per the need"},
      {f: "Ticket based support on standard rate"},
      {f: "Advance Access & Permission Management"},
      {f: "Profile Management"},
      {f: "Advance Email Configration"},
      {f: "Employee Management"},
      {f: "Advance Attendance Management"},
      {f: "Advance Timesheet Management"},
      {f: "Advance Leave Management"},
      {f: "Period Management"},
      {f: "Security & Users Management"},
      {f: "Subscription Management"},
      {f: "Setting Management"},
      {f: "Shift Management"},
      {f: "Achievement Management"},
      {f: "Announcement Management"},
      {f: "Bio-Metric Device Management"},
      {f: "Expense Management"},
      {f: "Holiday Management"},
      {f: "Late Coming Management"},
      {f: "Master Data Management"},
      {f: "Over Time Management"},
      {f: "Performance  Management"},
      {f: "Recruitment Management"},
      {f: "Address & Location Management"},
      {f: "Checklist Maintenance"},
      {f: "Knowledge & Skills Management"},
      {f: "Loan Management"},
      {f: "Mileage Management"},
      {f: "Outdoor Management"},
      {f: "Policy Management"},
      {f: "Bank Management"},
      {f: "Contact Management"},
      {f: "Currency Management"},
      {f: "Hierarchy olicy Management"},
      {f: "Payroll Management"},
      {f: "Organisation  Management"},
      {f: "Utilities Management"},
      {f: "Notification & Bulletin Board"},
      {f: "Ticket Management"},
      {f: "Multi Company Support"},
      {f: "SSL Security"},
      {f: "Enterprise Reports"},
      {f: "Enterprise Dashboard & Graphs"},
      {f: "Documents Management"},
      {f: "Custom Fields"},
    ]
  },
]

export default cardData;
