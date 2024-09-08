import { Twitter, Mail } from "lucide-react";

export const socials = [
  {
    logo: <Mail size={20} />,
    alt: "Mail",
    href: "mailto:sunnymore1337@gmail.com",
    text: "sunnymore1337@gmail.com",
  },
  {
    logo: (
      <svg
        className="fill-black dark:fill-white"
        width="20"
        height="20"
        viewBox="0 0 98 96"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        />
      </svg>
    ),
    alt: "GitHub",
    href: "https://github.com/1337sunny",
    text: "github.com/1337sunny",
  },
  {
    logo: <Twitter size={20} />,
    alt: "Twitter",
    href: "https://twitter.com/1337_sunny",
    text: "twitter.com/1337_sunny",
  },
];

export const projects = [
  {
    title: "employee management system",
    description: "This project is an Employee Management System built using Spring Boot. It helps organizations manage employee records efficiently by allowing administrators to add, update, view, and delete employee details. The system provides a streamlined interface for HR processes, improving record-keeping and management.",
    links: [
      {
        title: "Code",
        href: "https://github.com/1337sunny/employee_management_system",
      },
    ],
  },
  {
    title: "virus tracking dashboard",
    description:
      "This project is a real-time coronavirus tracking dashboard that fetches and displays up-to-date information on COVID-19 cases, recoveries, and deaths. The platform provides users with global and country-specific data, helping them stay informed about the ongoing pandemic.",
    links: [
      {
        title: "Code",
        href: "https://github.com/mxsunny/coronavirus-tracker-app",
      },
    ],
  },
  {
    title: "data analysis and visualization of indian railway data",
    description:
      "This project focuses on analyzing and visualizing extensive datasets related to Indian railways. It includes data preprocessing, cleaning, and exploration to uncover patterns and trends within the railway system. The project utilizes various data visualization techniques to present insights in a user-friendly and interactive manner.",
    links: [
      {
        title: "Code",
        href: "https://github.com/1337sunny",
      },
    ],
  },
  {
    title: "geek clothing store",
    description: "This project is a web platform designed for selling geek-themed hoodies, t-shirts, and apparel. The site provides a clean and modern interface for users to explore a wide range of products tailored for geek culture enthusiasts. Users can browse through categories, view detailed product descriptions, and make secure purchases.",
    links: [
      {
        title: "Code",
        href: "https://github.com/1337sunny/geek_clothing_store",
      },
    ],
  },
  {
    title: "boat clone",
    description: "This project is a clone of the Boat website, designed to sell various electronics such as headphones, speakers, earphones, smartwatches, and other gadgets. The platform provides users with an intuitive and user-friendly interface to browse and purchase high-quality electronic products. Key features include product search, category filtering, a shopping cart, and a secure checkout process.",
    links: [
      {
        title: "Code",
        href: "https://github.com/1337sunny/boat_clone",
      },
      {
        title: "Website",
        href: "https://ecomm-boat.vercel.app",
      },
    ],
  },
];
