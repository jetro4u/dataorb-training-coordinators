const Header = () => {
    return (
      <div className="bg-gray-100 w-full flex justify-center">
        <div className="w-full max-w-screen-md">
          <div className="bg-gray-900 h-8"></div>
  
          <div className="bg-gray-900 w-full flex justify-center">
            <div className="w-full max-w-screen-md flex">
              <div className="w-1/12"></div>
              <div className="w-5/6 flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <a href="#" className="relative">
                    <img
                      className="inline-block"
                      src="logo.png"
                      alt="logo"
                      height="68"
                      width="169"
                    />
                  </a>
                </div>
              </div>
              <div className="w-1/12"></div>
            </div>
          </div>
  
          <div className="bg-gray-900 h-8"></div>
  
          <div className="w-full flex justify-center">
            <div className="w-full max-w-screen-md">
              <div className="border-t-4 border-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;