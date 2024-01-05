import React, { useEffect, useState } from "react";
import { SIDE_BAR_ITEMS } from "../constants/sideBarItems";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleSideBar } from "../redux/features/uiSlice";

const Sidebar = () => {
  /// initialization
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /// global state
  const { sideBarOpen } = useSelector((state) => state.ui);

  /// local state
  const [selectedSidebar, setSelectedSidebar] = useState("");

  /// handlers
  const handleClickBarItems = (item) => {
    if (!sideBarOpen) {
      dispatch(toggleSideBar());
    }
    if (item?.subMenuItems?.length) {
      if (selectedSidebar === item.name) {
        setSelectedSidebar(null);
        return;
      }
      setSelectedSidebar(item.name);
    } else {
      navigate(item.path);
    }
  };

  /// useEffects
  useEffect(() => {
    setSelectedSidebar(null);
  }, [sideBarOpen]);

  console.log(SIDE_BAR_ITEMS);

  return (
    <div
      className={`sidebar  top-[56px] bottom-0 lg:left-0  h-full overflow-hidden border-t-2 border-r-1 border-r-[#5e3470]  text-center bg-[#f2e9f5] flex flex-col  `}
    >
      {SIDE_BAR_ITEMS.map((item, i) => {
        return (
          <div
            onClick={() => {
              handleClickBarItems(item);
            }}
            key={i}
            className={`w-auto h-auto shadow-gray shadow-xl text-[18px]  font-semibold border-b-2 border-[#ffffff] flex flex-col gap-0  items-center  cursor-pointer overflow-hidden`}
          >
            <div
              className={`flex items-center p-1 py-2 shadow-gray shadow-xl  hover:bg-[#5e3470] hover:text-white ${
                selectedSidebar === item.name ? "bg-[#5e3470] text-white" : ""
              }`}
            >
              <div className="w-10 p-1">{item.icon} </div>
              <h1
                className={`transition-all    duration-[0.4s] ease-in-out ${
                  sideBarOpen ? "w-[10rem] text-xl " : "w-0 text-[0px] "
                }   `}
              >
                {item.name}
              </h1>
              {sideBarOpen && (
                <>
                  {item.subMenuItems?.length ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-6 h-6 mr-2 transition-all duration-[0.4s] ease-in-out ${
                        selectedSidebar === item.name ? "rotate-[-90deg]" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <div className="w-8 h-6"></div>
                  )}
                </>
              )}
            </div>

            <div
              className={`${
                selectedSidebar === item.name ? "w-full" : "w-0"
              } bg-white  transition-all  duration-[0.4s] ease-in-out ${
                selectedSidebar === item.name
                  ? `h-[${item?.subMenuItems.length * 36}px] `
                  : "h-0"
              }`}
            >
              {item?.subMenuItems?.map((subItem, i) => {
                if (selectedSidebar === item.name) {
                  return (
                    <div
                      key={i}
                      className="flex h-9  justify-around items-center shadow-gray shadow-xl hover:text-[#5e3470]"
                    >
                      <div className="w-10 p-1">{subItem.icon} </div>
                      <h1 className="w-[9rem]">{subItem.name}</h1>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
