import { LinkProps } from "../../type";
import {
  RiTwitterFill,
  RiYoutubeFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiFacebookBoxFill,
} from "react-icons/ri";
import React from "react";

// Define an interface for the footer section
interface FooterSection {
  title: string;
  links: LinkProps[];
}

// Define the overall footer data interface
interface FooterData {
  aboutUs: FooterSection;
  customerService: FooterSection;
  policies: FooterSection;
  socialMedia: FooterSection;
}

export interface FooterSocial {
  icon: React.ElementType;
  link: string;
  className?: string;
}

export const footerSocialData: FooterSocial[] = [
  {
    icon: RiFacebookBoxFill,
    link: "https://www.facebook.com",
    className: "hover:text-blue-700",
  },
  {
    icon: RiInstagramFill,
    link: "https://www.instagram.com",
    className: "hover:text-[#962fbf]",
  },
  {
    icon: RiLinkedinBoxFill,
    link: "https://www.linkedin.com",
    className: "hover:text-blue-700",
  },
  {
    icon: RiYoutubeFill,
    link: "https://www.youtube.com",
    className: "hover:text-red-700",
  },
  {
    icon: RiTwitterFill,
    link: "https://www.twitter.com",
    className: "hover:text-blue-500",
  },
];

export const footerData: FooterData = {
  aboutUs: {
    title: "About Us",
    links: [
      { label: "Company Overview", url: "/company-overview" },
      { label: "Our Team", url: "/our-team" },
      { label: "Contact Us", url: "/contact-us" },
    ],
  },
  customerService: {
    title: "Customer Service",
    links: [
      { label: "FAQ", url: "/faq" },
      { label: "Shipping", url: "/shipping" },
      { label: "Returns", url: "/returns" },
    ],
  },
  policies: {
    title: "Policies",
    links: [
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
      { label: "Refund Policy", url: "/refund-policy" },
    ],
  },
  socialMedia: {
    title: "Social Media",
    links: [
      { label: "Facebook", url: "https://www.facebook.com" },
      { label: "Twitter", url: "https://www.twitter.com" },
      { label: "Instagram", url: "https://www.instagram.com" },
    ],
  },
};
