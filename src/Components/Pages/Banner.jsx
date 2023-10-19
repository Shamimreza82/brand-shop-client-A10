
import bg3 from "../../assets/brand-image/Untitled-3.png";

const Banner = () => {
  return (
    <div
      className=" m-auto py-4 md:py-28 bg-slate-200"
      // style={{
      //   backgroundImage:
      //    `url(${bg3})`,
      // }}
    >
      {/* <div className="hero-overlay bg-opacity-60 "></div> */}
      <div className="flex gap-3 flex-col-reverse md:flex-row justify-center items-center max-w-7xl m-auto">
        <div className=" md:w-[50%]">
          <div className="md:ml-12 ">
            <h1 className="mb-5 md:text-5xl text-slate-800 text-2xl " 
              data-aos="flip-down"
              data-aos-duration="1000"
              >
              Subscribe to <br />
              <span className="font-Roboto font-bold  text-slate-80 drop-shadow-md ">ENJOY 30% OFF</span>
            </h1>

            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                className=" font-Roboto  text-base border pl-3 py-1 rounded-sm
                border-[#F08E31] text-[#F08E31] hover:scale-105 hover:duration-300 duration-300"
                required
              />
            </div>
            <div className="form-control my-4">
              <input
                type="text"
                placeholder="Email"
                className="font-Roboto  text-base border w-full pl-3 py-1 rounded-sm
                border-[#F08E31] text-[#F08E31] hover:scale-105 hover:duration-300 duration-300"
                required
              />
            </div>

            <button className="font-Roboto font-bold text-base border p-1 px-6 rounded-sm  md:w-[30%] w-full
                border-[#F08E31] text-white bg-[#F08E31]  hover:scale-105 hover:duration-300 duration-300">Submit</button>
          </div>
        </div>
        <div className="w-md:[50%]" data-aos="zoom-in">
          <img className="" src={bg3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
