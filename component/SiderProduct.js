import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { easeOut, motion } from "framer-motion";

const SiderProduct = () => {
  const mainmenu = () => {
    const sideProduct = document.querySelector(".sideproduct");

    sideProduct.style.display = "none";
  };
  return (
    <motion.div
      initial={{
        x: -800,
      }}
      whileInView={{
        x: 0,
      }}
      transition={{
        duration: 0.2,
        ease: easeOut,
      }}
      exit={{
        x: -800,
      }}
      className="sideproduct absolute top-0 left-0 w-[800px] h-[150vh] backdrop-blur-[2px]  z-30 hidden overflow-y-scroll overflow-x-hidden"
    >
      <div className="flex flex-col  bg-white w-[800px] h-[180vh] z-30 pt-16">
        <span
          onClick={mainmenu}
          className="mainmenu pl-6 mt-6 text-orange-500 border-black border-b-2 pr-[336px] pb-6"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Main menu
        </span>

        <span className="bg-gray-100 text-2xl font-bold pl-8 pt-3 pb-2">
          Products
        </span>

        <div>
          <div>
            <div className="h-28 border-b-2 border-black border-t-2 pt-4 m-auto text-2xl">
              <div className="flex align-middle text-center p-auto">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block pl-4 ml-4 text-center pb-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V16H11.1415C11.8311 16 12.472 15.6448 12.8375 15.06L14.1625 12.94C14.528 12.3552 15.1689 12 15.8585 12H22V6C22 5.44771 21.5523 5 21 5H3Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.5em] font-bold pl-8 ">
                  Corporate card
                </span>
              </div>
              <p className="pl-8  font-medium">
                Get 10-20x higher credit limits
              </p>
            </div>

            <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
              <div className="flex align-middle text-center p-auto">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block pl-4 ml-4 text-center pb-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.8162 14.1036C23.937 13.4206 24 12.7177 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C12.7177 24 13.4206 23.937 14.1036 23.8162C13.3793 23.3301 12.7509 22.7122 12.2525 21.9969C12.1686 21.999 12.0844 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.0844 21.999 12.1686 21.9969 12.2525C22.7122 12.7509 23.3301 13.3793 23.8162 14.1036ZM18 24C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24ZM19 14L15 19H17.5L17 22L21 17H18.5L19 14ZM14.9332 11.7058C14.4111 11.2654 13.7365 11 13 11H11C10.4477 11 10 10.5523 10 10C10 9.44771 10.4477 9 11 9H14V10H16V7H13V4H11V7C9.34315 7 8 8.34315 8 10C8 11.6569 9.34315 13 11 13H13C13.0325 13 13.0646 13.0016 13.0963 13.0046C13.6318 12.4789 14.2515 12.0386 14.9332 11.7058ZM11.4616 15.5338C11.5462 15.3303 11.6235 15.1443 11.6736 15H10V14H8V17H11C11 16.6443 11.253 16.0356 11.4616 15.5338L11.4616 15.5338Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.5em] font-bold pl-8 ">
                  Expense management
                </span>
              </div>
              <p className="pl-8  font-medium">
                Simplify expenses and reimbursements
              </p>
            </div>

            <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
              <div>
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block pl-4 ml-4 text-center pb-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9 0C7.89543 0 7 0.89543 7 2V7H4H3V8V19C3 20.8819 4.2996 22.4603 6.05029 22.8866C6.2208 23.5277 6.80523 24 7.5 24C8.15311 24 8.70873 23.5826 8.91465 23H15.0854C15.2913 23.5826 15.8469 24 16.5 24C17.1948 24 17.7792 23.5277 17.9497 22.8866C19.7004 22.4603 21 20.8819 21 19V8V7H20H17V2C17 0.895431 16.1046 0 15 0H9ZM17 21C18.1046 21 19 20.1046 19 19V9H17H16H8H7H5V19C5 20.1046 5.89543 21 7 21H9H15H17ZM15 7V2L9 2V7H15ZM17 14H7V12H17V14ZM7 18H17V16H7V18Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.5em] font-bold pl-8 ">Travel</span>
              </div>
              <p className="pl-8  font-medium">Book and manage global travel</p>
            </div>

            <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
              <div>
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block pl-4 ml-4 text-center pb-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6 0C4.34315 0 3 1.34314 3 3V21C3 22.6569 4.34315 24 6 24H18C19.6569 24 21 22.6569 21 21H19C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44771 2 6 2H14V7H19V11H21V5.58579L15.4142 0H6ZM8 11H16V13H8V11ZM12 15H8V17H12V15ZM23.6715 16L20.6914 12.4238L19.3086 13.5762L20.5785 15.1H16V16.9H20.5785L19.3086 18.4238L20.6914 19.5762L23.6715 16Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.5em] font-bold pl-8 ">Bill pay</span>
              </div>
              <p className="pl-8 font-medium">Pay vendors faster and easier</p>
            </div>

            <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
              <div className="">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block pl-4 ml-4 text-center pb-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 0.922852L21.1142 4.56852C22.2531 5.02411 23 6.12724 23 7.35395V9.99988H20V15.9999H23V18.9999C23 20.6567 21.6569 21.9999 20 21.9999H4C2.34315 21.9999 1 20.6567 1 18.9999V15.9999H4V9.99988H1V7.35395C1 6.12724 1.74685 5.02411 2.88583 4.56852L12 0.922852ZM6 15.9999H11V9.99988H6V15.9999ZM13 15.9999H18V9.99988H13V15.9999ZM12 3.07692L3.62861 6.42547C3.24895 6.57734 3 6.94505 3 7.35395V7.99988H15V4.27692L12 3.07692ZM3 18.9999V17.9999H15V19.9999H4C3.44772 19.9999 3 19.5522 3 18.9999Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.5em] font-bold pl-8 ">
                  Business banking
                </span>
              </div>
              <p className="pl-8 font-medium">Earn yield and move money fast</p>
            </div>

            <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
              <div>
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 24 24"
                  fill="fill=currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block pl-4 ml-4 text-center pb-4"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 2C1.89543 2 1 2.89543 1 4V17C1 18.1046 1.89543 19 3 19H9C9.53043 19 10.0391 19.2107 10.4142 19.5858C10.7893 19.9609 11 20.4696 11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21C13 20.4696 13.2107 19.9609 13.5858 19.5858C13.9609 19.2107 14.4696 19 15 19H21C22.1046 19 23 18.1046 23 17V4C23 2.89543 22.1046 2 21 2H16C14.6739 2 13.4021 2.52678 12.4645 3.46447C12.2962 3.63275 12.1411 3.81178 12 3.99997C11.8589 3.81178 11.7038 3.63275 11.5355 3.46447C10.5979 2.52678 9.32608 2 8 2H3ZM13 17.5359C13.6029 17.1878 14.2918 17 15 17H21V4H16C15.2044 4 14.4413 4.31607 13.8787 4.87868C13.3161 5.44129 13 6.20435 13 7V17.5359ZM11 17.5359V7C11 6.20435 10.6839 5.44129 10.1213 4.87868C9.55871 4.31607 8.79565 4 8 4H3V17H9C9.70823 17 10.3971 17.1878 11 17.5359Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.5em] font-bold pl-8 ">
                  Accounting automation
                </span>
              </div>
              <p className="pl-8 font-medium">Close the books in minutes</p>
            </div>

            <div className="h-28 border-b-2 border-black  pt-4 m-auto text-2xl">
              <div>
                <svg
                  fill="none"
                  height="52"
                  viewBox="0 0 32 32"
                  width="52"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block pl-4 ml-4 text-center pb-4"
                >
                  <path
                    clip-rule="evenodd"
                    d="m26.6667 2.66675v4 3.99995c1.4145 0 2.771.562 3.7712 1.5621 1.0002 1.0002 1.5621 2.3568 1.5621 3.7713s-.5619 2.771-1.5621 3.7712-2.3567 1.5621-3.7712 1.5621v4 4h-2.6667v-2.8705l-9.4081-1.568c-.4256 2.5195-2.618 4.4386-5.25857 4.4386-2.94551 0-5.33333-2.3879-5.33333-5.3334 0-.292.02359-.579.06902-.859l-.72662-.1211c-1.92875-.3215-3.3424-1.9902-3.3424-3.9456v-6.1486c0-1.9554 1.41365-3.62416 3.3424-3.94562l20.6576-3.44293v-2.8705zm-19.96724 20.91275 5.26164.8769c-.2165 1.2554-1.3106 2.2104-2.62777 2.2104-1.47276 0-2.66666-1.1939-2.66666-2.6667 0-.1435.01122-.2839.03279-.4206zm17.30054-15.3388-20.2192 3.3699c-.64292.1071-1.11413.6634-1.11413 1.3152v6.1486c0 .6518.47121 1.208 1.11413 1.3152l20.2192 3.3699z"
                    fill="currentColor"
                    fill-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-[1.5em] font-bold pl-8 ">
                  Product releases
                </span>
              </div>
              <p className="pl-8  font-medium">See what's new at Custina</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="  bg-white w-[800px] h-[110vh]">
              <span className="bg-gray-100 text-2xl font-bold pl-8 pt-6 pb-2 pr-[600px]">
                Platform
              </span>

              <div className="h-28 border-b-2 border-black border-t-2 pt-1 m-auto text-2xl mt-2">
                <div className="flex align-middle text-center p-auto">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block pl-4 ml-4 text-center pb-4"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V16H11.1415C11.8311 16 12.472 15.6448 12.8375 15.06L14.1625 12.94C14.528 12.3552 15.1689 12 15.8585 12H22V6C22 5.44771 21.5523 5 21 5H3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="text-[1.5em] font-bold pl-8 ">
                    Custina AI
                  </span>
                </div>
                <p className="pl-8  font-medium">
                  Get 10-20x higher credit limits
                </p>
              </div>

              <div className="h-28 border-b-2 border-black border-t-2 pt-1 m-auto text-2xl mt-2 z-50">
                <div className="flex align-middle text-center p-auto">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block pl-4 ml-4 text-center pb-4"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V16H11.1415C11.8311 16 12.472 15.6448 12.8375 15.06L14.1625 12.94C14.528 12.3552 15.1689 12 15.8585 12H22V6C22 5.44771 21.5523 5 21 5H3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="text-[1.5em] font-bold pl-8 ">
                    Global ready
                  </span>
                </div>
                <p className="pl-8  font-medium">
                  Multi-currency and multi-entity
                </p>
              </div>

              <div className="h-28 border-b-2 border-black border-t-2 pt-1 m-auto text-2xl mt-2">
                <div className="flex align-middle text-center p-auto">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block pl-4 ml-4 text-center pb-4"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V16H11.1415C11.8311 16 12.472 15.6448 12.8375 15.06L14.1625 12.94C14.528 12.3552 15.1689 12 15.8585 12H22V6C22 5.44771 21.5523 5 21 5H3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="text-[1.5em] font-bold pl-8 ">
                    Live budget
                  </span>
                </div>
                <p className="pl-8  font-medium">
                  Real-time tracking and agility
                </p>
              </div>

              <div className="h-28 border-b-2 border-black border-t-2 pt-1 m-auto text-2xl mt-2">
                <div className="flex align-middle text-center p-auto">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block pl-4 ml-4 text-center pb-4"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V16H11.1415C11.8311 16 12.472 15.6448 12.8375 15.06L14.1625 12.94C14.528 12.3552 15.1689 12 15.8585 12H22V6C22 5.44771 21.5523 5 21 5H3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="text-[1.5em] font-bold pl-8 ">
                    Spend limits
                  </span>
                </div>
                <p className="pl-8  font-medium">
                  Custom limits with built-in controls
                </p>
              </div>

              <div className="h-28 border-b-2 border-black border-t-2 pt-1 m-auto text-2xl mt-2">
                <div className="flex align-middle text-center p-auto">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block pl-4 ml-4 text-center pb-4"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V16H11.1415C11.8311 16 12.472 15.6448 12.8375 15.06L14.1625 12.94C14.528 12.3552 15.1689 12 15.8585 12H22V6C22 5.44771 21.5523 5 21 5H3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="text-[1.5em] font-bold pl-8 ">
                    Native integrations
                  </span>
                </div>
                <p className="pl-8  font-medium">
                  ERP, HRIS, productivity, security
                </p>
              </div>

              <div className="h-28 border-b-2 border-black border-t-2 pt-1 m-auto text-2xl mt-2">
                <div className="flex align-middle text-center p-auto">
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block pl-4 ml-4 text-center pb-4"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 6C0 4.34315 1.34315 3 3 3H21C22.6569 3 24 4.34315 24 6V18C24 19.6569 22.6569 21 21 21H3C1.34314 21 0 19.6569 0 18V6ZM3 5C2.44772 5 2 5.44772 2 6V16H11.1415C11.8311 16 12.472 15.6448 12.8375 15.06L14.1625 12.94C14.528 12.3552 15.1689 12 15.8585 12H22V6C22 5.44771 21.5523 5 21 5H3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="text-[1.5em] font-bold pl-8 ">Mobile</span>
                </div>
                <p className="pl-8  font-medium">
                  Available on iOS and Android
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SiderProduct;
