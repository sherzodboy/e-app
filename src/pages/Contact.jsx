/* eslint-disable react/no-unescaped-entities */
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="contact_img"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            A.Navoiy <br /> Bog'ishamal street
          </p>
          <p className="text-gray-500">
            Tel: (91) 584 27-22 <br />
            Email: sherzodbcy@gmail.com{" "}
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Online Shopping
          </p>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-400">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
