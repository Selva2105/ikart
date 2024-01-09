import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { LinkProps } from '../../type';
import { FooterSocial, footerData, footerSocialData } from './data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const renderFooterColumn = (title: string, footerDetails: LinkProps[]) => {
    return (
      <div className="flex flex-col gap-4">

        <div className="title">
          <p className='font-semibold font-inter text-sm'>{title}</p>
        </div>

        <div className="flex flex-col gap-2">
          {footerDetails.map((link, index) => (
            <Link key={index} to={link.url} className='hover:underline hover:underline-offset-2 text-xs leading-5' >{link.label}</Link>
          ))}
        </div>

      </div>
    )

  };

  const renderSocialIcons = (data: FooterSocial[]) => {
    return (
      <div className="flex gap-4 items-center justify-center">
        {data.map((social, index) => (
          <Link key={index} to={social.link} target="_blank" rel="noopener noreferrer" className="text-sm">
            {React.createElement(social.icon, { className: `w-7 h-6 ${social.className} transition-all duration-300` })}
          </Link>
        ))}
      </div>
    );
  };


  return (
    <div className="w-full font-inter">

      <div className="p-8 lg:p-4 xl:px-20 flex flex-wrap flex-row w-full justify-start md:justify-between sm:gap-12 md:gap-6 my-6 !gap-x-20 md:!gap-x-16">
        {renderFooterColumn(footerData.aboutUs.title, footerData.aboutUs.links)}
        {renderFooterColumn(footerData.customerService.title, footerData.customerService.links)}
        {renderFooterColumn(footerData.policies.title, footerData.policies.links)}
        {renderFooterColumn(footerData.socialMedia.title, footerData.socialMedia.links)}
      </div>

      <div className="flex items-center justify-center my-6">
        {renderSocialIcons(footerSocialData)}
      </div>

      <div className="enterprises p-4 xl:px-20 flex flex-row justify-between items-center w-full gap-4 bg-hunyadi_yellow-500 text-sm">

        <div className="flex flex-row gap-4">
          <p>I Kart enterprises &reg;</p>
          <p>@{currentYear}</p>
        </div>

        <div className="flex flex-row gap-4 cursor-pointer">
          <FaGooglePlay className='w-5 h-5' />
          <FaAppStoreIos className='w-6 h-6' />
        </div>

      </div>

    </div>
  );
};

export default Footer;
