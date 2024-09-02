import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about_img"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            cupiditate doloribus vero optio tenetur explicabo odit debitis atque
            necessitatibus aspernatur reiciendis nihil, autem libero rerum quo
            consectetur alias veniam dolore dicta recusandae sint dolorem
            doloremque sunt est! Cum, quas nihil? Quis nobis quae officiis
            itaque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            eius ipsam quidem. Possimus, provident sapiente nihil quo eius
            perspiciatis, labore rem facere suscipit tempora cumque officia
            perferendis ipsum. Temporibus quidem aut doloribus qui?
          </p>
          <b className="text-gray-800">Our mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, vel
            molestias fuga a saepe voluptate? Impedit, quo blanditiis!
            Praesentium nemo dolorem voluptatem.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quantity Insurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            numquam tenetur minima possimus. Iste repellendus fugiat quaerat
            animi? Laboriosam, sint.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            numquam tenetur minima possimus. Iste repellendus fugiat quaerat
            animi? Laboriosam, sint.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            numquam tenetur minima possimus. Iste repellendus fugiat quaerat
            animi? Laboriosam, sint.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
