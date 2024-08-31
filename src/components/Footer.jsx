import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        <div>
          <img src={assets.logo} className="mb-3 w-32 " alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            illo neque inventore aut ducimus cumque, accusantium dolorum quas
            delectus, nihil, praesentium perferendis magnam distinctio. Soluta
            id expedita excepturi doloribus voluptates.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-3">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-3">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+998 (91) 584-27-22</li>
            <li>sherzodbcy@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ E-commerce shopping - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
