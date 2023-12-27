const Links = () => {
  return (
    <div className="flex flex-row w-stretch h-stetch space-x-5 items-stretch">
      {/* Portfolio link */}
      <a
        className="w-1/2 h-full relative group"
        href="https://www.jordanvera.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/michaelJordanPanoramic.jpg"
          className="rounded-2xl opacity-50 group-hover:opacity-80"
        />

        <div className="absolute bottom-0 left-0 pb-2 pl-4">
          <h2 className="text-2xl font-bold capitalize">Visit my Portfolio</h2>
          <h3 className="text-sm font-bold text-gray-700 capitalize">
            to view my projects and learn more about me
          </h3>
        </div>
      </a>

      {/* Designer link */}
      <a
        className="w-1/2 h-stretch relative group"
        href="https://dribbble.com/shots/21881192-Weather-Forecast-Dark-dashbord-design-concept"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/images/rainbow.jpg"
          className="rounded-2xl opacity-50 group-hover:opacity-80 h-full"
        />

        <div className="absolute bottom-0 left-0 pb-2 pl-4">
          <h2 className="text-2xl font-bold capitalize">view design</h2>
          <h3 className="text-sm font-bold text-gray-500 capitalize">
            checkout my inspiration for this site
          </h3>
        </div>
      </a>
    </div>
  );
};
export default Links;
