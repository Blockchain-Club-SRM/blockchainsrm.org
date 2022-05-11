import React from 'react';
import Link from 'next/link';
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black p-4 md:px-16 md:py-8">
        <section id="about">
          <h1 className="mb-8">
            Block<span className="text-purple-accent">chain</span> <br /> SRM
          </h1>
          <p className="max-w-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            reiciendis.
          </p>
          <span className="flex my-8 gap-4">
            <AiOutlineInstagram size={48} />
            <AiOutlineYoutube size={48} />
            <AiOutlineTwitter size={48} />
            <AiOutlineLinkedin size={48} />
          </span>
        </section>
        <section id="quick-links">
          <h2 className="text-purple-accent mb-8">Quick Links</h2>
          <ul className="flex flex-col gap-3">
            <Link href="/">
              <p className="cursor-pointer">Home</p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer">Our Team</p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer">Resources</p>
            </Link>
            <Link href="/">
              <p className="cursor-pointer">Contact Us</p>
            </Link>
          </ul>
        </section>
        <section id="doubt">
          <h2 className="text-purple-accent mb-8">Have a doubt?</h2>
          <p className="mb-8">
            Drop us an email at <br /> abc.xyz.com
          </p>
          <p className="mb-4">Phone Number</p>
          <p>9274xxxxxx</p>
          <p>9274xxxxxx</p>
        </section>
        <div className="md:col-span-3 border-2 w-full border-white my-8"></div>
        <span className="col-start-1">
          Privacy Terms of Use Cookie preferences
        </span>
        <span className="md:col-start-3 md:text-right">
          Copyright © 2022. BlockchainSRM
        </span>
      </div>
    </>
  );
};

export default Footer;
