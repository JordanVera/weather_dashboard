import { Input } from '@material-tailwind/react';

const NewsletterSignup = () => {
  return (
    <div className="flex flex-col w-1/4 rounded-2xl h-full">
      <img
        src="/images/landscape.jpg"
        className="w-full h-auto rounded-tr-2xl rounded-tl-2xl"
        alt=""
      />

      <div className="p-2 bg-[#1d1e20] rounded-bl-2xl rounded-br-2xl">
        <h5 className="text-gray-500 text-xs">Stay Ahead of the weather!</h5>
        <h5 className="text-gray-500 text-xs">
          Join our newsletter now to receive updates daily.
        </h5>

        <input
          placeholder="Enter Email..."
          className="w-full px-2 my-2 h-[24px] bg-gray-700 rounded-full placeholder-white placeholder:text-xs"
        />

        <button className="h-[24px] bg-orange-900 hover:bg-blue-700 w-full rounded-full text-xs">
          submit
        </button>
      </div>
    </div>
  );
};
export default NewsletterSignup;
