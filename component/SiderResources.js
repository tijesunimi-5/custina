import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { easeOut, motion } from "framer-motion";

const SiderResources = () => {
  const closeResources = () => {
    const resources = document.querySelector(".resources");

    resources.style.display = "none";
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
      className="resources absolute top-0 left-0 w-[800px] h-[150vh] backdrop-blur-[2px]  z-30 hidden overflow-y-scroll overflow-x-hidden"
    >
      <div className="flex flex-col  bg-white w-[800px] h-[200vh] z-30 pt-16">
        <span
          className="mainmenu pl-6 mt-6 text-orange-500 border-black border-b-2 pr-[340px] pb-6 "
          onClick={closeResources}
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Main menu
        </span>

        <span className="bg-gray-100  text-2xl font-bold pl-8 pt-8 pb-6">
          Customer Hub
        </span>

        <div>
          <div className="h-28 mt-0 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
            <div className="flex align-middle text-center pl-10">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-center"
              >
                <path
                  d="M10.5 17.5C10.5 16.6716 11.1716 16 12 16C12.8284 16 13.5 16.6716 13.5 17.5C13.5 18.3284 12.8284 19 12 19C11.1716 19 10.5 18.3284 10.5 17.5Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M12 5C9.79086 5 8 6.79086 8 9H10C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9V9.39445C14 10.0632 13.6658 10.6876 13.1094 11.0585L12.7812 11.2774C11.6684 12.0192 11 13.2681 11 14.6056V15H13V14.6056C13 13.9368 13.3342 13.3124 13.8906 12.9415L14.2188 12.7226C15.3316 11.9808 16 10.7319 16 9.39445V9C16 6.79086 14.2091 5 12 5Z"
                  fill="currentColor"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-[1.2em] font-bold pl-4 ">Help Center</span>
            </div>
            <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
              Find answers to common questions.
            </p>
          </div>

          <div className="h-28 mt-5 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
            <div className="flex pl-10">
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-center"
              >
                <g clip-path="url(#clip0_5399_39609)">
                  <path
                    d="M9 12V10H13V16H15V18H9V16H11V12H9Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12 9C12.8284 9 13.5 8.32843 13.5 7.5C13.5 6.67157 12.8284 6 12 6C11.1716 6 10.5 6.67157 10.5 7.5C10.5 8.32843 11.1716 9 12 9Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_5399_39609">
                    <rect width="24" height="24" fill="currentColor"></rect>
                  </clipPath>
                </defs>
              </svg>
              <span className="text-[1.2em] font-bold pl-4 ">
                Implementation guides
              </span>
            </div>
            <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
              Learn how to set up key features.
            </p>
          </div>

          <div className="h-28 mt-5 border-t-[1px] border-b-[1px] border-black pb-6 pt-4 m-auto text-2xl">
            <div className="flex pl-10">
              <svg
                fill="none"
                height="34"
                viewBox="0 0 32 32"
                width="34"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="m26.6667 2.66675v4 3.99995c1.4145 0 2.771.562 3.7712 1.5621 1.0002 1.0002 1.5621 2.3568 1.5621 3.7713s-.5619 2.771-1.5621 3.7712-2.3567 1.5621-3.7712 1.5621v4 4h-2.6667v-2.8705l-9.4081-1.568c-.4256 2.5195-2.618 4.4386-5.25857 4.4386-2.94551 0-5.33333-2.3879-5.33333-5.3334 0-.292.02359-.579.06902-.859l-.72662-.1211c-1.92875-.3215-3.3424-1.9902-3.3424-3.9456v-6.1486c0-1.9554 1.41365-3.62416 3.3424-3.94562l20.6576-3.44293v-2.8705zm-19.96724 20.91275 5.26164.8769c-.2165 1.2554-1.3106 2.2104-2.62777 2.2104-1.47276 0-2.66666-1.1939-2.66666-2.6667 0-.1435.01122-.2839.03279-.4206zm17.30054-15.3388-20.2192 3.3699c-.64292.1071-1.11413.6634-1.11413 1.3152v6.1486c0 .6518.47121 1.208 1.11413 1.3152l20.2192 3.3699z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span className="text-[1.2em] font-bold pl-4 ">
                Product releases
              </span>
            </div>
            <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
              See what's new at Custina
            </p>
          </div>
        </div>

        <div>
          <div className=" mt-10 w-[720px]">
            <span className="bg-gray-100 text-2xl  font-bold pl-8 pt-6 pb-2 w-[720px] pr-[305px]">
              Resource Center
            </span>

            <div className="h-28 mt-5 border-t-[1px]  border-black pb-6 pt-4 m-auto text-2xl">
              <div className="flex pl-10">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 33 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-center"
                >
                  <path
                    d="M21.8333 18.6667V16H11.1667V18.6667H21.8333Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.1667 24V21.3333H21.8333V24H11.1667Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M16.5 6.66667H11.1667V9.33333H16.5V6.66667Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.5 4C4.5 1.79086 6.29086 0 8.5 0H21.0523L28.5 7.44772V28C28.5 30.2091 26.7091 32 24.5 32H8.5C6.29086 32 4.5 30.2091 4.5 28V4ZM8.5 2.66667C7.76362 2.66667 7.16667 3.26362 7.16667 4V28C7.16667 28.7364 7.76362 29.3333 8.5 29.3333H24.5C25.2364 29.3333 25.8333 28.7364 25.8333 28V9.33333H19.1667V2.66667H8.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.2em] font-bold pl-4 ">
                  White papers and e-books
                </span>
              </div>
              <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
                Access exclusive research and reports.
              </p>
            </div>

            <div className="h-28 mt-5 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
              <div className="flex pl-10">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 21"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-center"
                >
                  <path
                    d="M2.47117 16.9754C1.70016 16.9754 1.0939 16.758 0.652389 16.3231C0.217463 15.8815 0 15.272 0 14.4944V2.59324C0 1.81565 0.217463 1.20938 0.652389 0.774459C1.0939 0.339533 1.70016 0.12207 2.47117 0.12207H21.5288C22.2998 0.12207 22.9028 0.339533 23.3377 0.774459C23.7792 1.20938 24 1.81565 24 2.59324V14.4944C24 15.272 23.7792 15.8815 23.3377 16.3231C22.9028 16.758 22.2998 16.9754 21.5288 16.9754H2.47117ZM2.31301 12.3988H21.6771C21.9605 12.3988 22.1021 12.2605 22.1021 11.9837V2.71186C22.1021 2.49439 22.0395 2.32635 21.9143 2.20774C21.7891 2.08253 21.6244 2.01993 21.4201 2.01993H2.5799C2.37562 2.01993 2.21087 2.08253 2.08567 2.20774C1.96046 2.32635 1.89786 2.49439 1.89786 2.71186V11.9837C1.89786 12.2605 2.03624 12.3988 2.31301 12.3988ZM9 19V15.8792H15V19.0117L9 19ZM8.72817 20.5537C8.47776 20.5537 8.26359 20.4647 8.08567 20.2868C7.91433 20.1089 7.82867 19.898 7.82867 19.6542C7.82867 19.4038 7.91433 19.1896 8.08567 19.0117C8.26359 18.8404 8.47776 18.7547 8.72817 18.7547H15.2718C15.5222 18.7547 15.7331 18.8404 15.9044 19.0117C16.0758 19.1896 16.1614 19.4038 16.1614 19.6542C16.1614 19.898 16.0758 20.1089 15.9044 20.2868C15.7331 20.4647 15.5222 20.5537 15.2718 20.5537H8.72817Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.2em] font-bold pl-4 ">Webinars</span>
              </div>
              <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
                Tune in for actionable insights.
              </p>
            </div>

            <div className="h-28 mt-5 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
              <div className="flex pl-10">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-center"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0002 2.66663C12.3551 2.66663 9.40016 5.65139 9.40016 9.33329C9.40016 13.0152 12.3551 16 16.0002 16C19.6452 16 22.6002 13.0152 22.6002 9.33329C22.6002 5.65139 19.6452 2.66663 16.0002 2.66663ZM12.3335 9.33329C12.3335 7.28779 13.9751 5.62959 16.0002 5.62959C18.0252 5.62959 19.6668 7.28779 19.6668 9.33329C19.6668 11.3788 18.0252 13.037 16.0002 13.037C13.9751 13.037 12.3335 11.3788 12.3335 9.33329Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.9331 21.3834L29.9296 21.3814L29.9238 21.378L29.9052 21.3673L29.8407 21.3307C29.7858 21.2998 29.7072 21.2562 29.6063 21.2016C29.4046 21.0924 29.1135 20.9394 28.7446 20.7571C28.0076 20.393 26.9557 19.9101 25.6818 19.4276C23.1502 18.4687 19.6654 17.4814 16.0002 17.4814C12.3836 17.4814 8.93303 18.2615 6.41205 19.0254C5.14551 19.4092 4.09913 19.7934 3.36571 20.0833C2.99871 20.2284 2.70925 20.3501 2.50888 20.4369C2.40867 20.4803 2.33066 20.5149 2.27631 20.5394L2.21268 20.5682L2.19448 20.5766L2.18885 20.5792L2.18691 20.5801C2.17992 20.5834 2.18555 20.5808 2.18555 20.5808L1.3335 20.978V23.1682C1.33347 23.9491 1.33345 24.6229 1.37834 25.1778C1.42571 25.7635 1.53031 26.346 1.81307 26.9066C2.23491 27.7429 2.90803 28.4228 3.73594 28.8489C4.2909 29.1345 4.86762 29.2402 5.44746 29.288C5.99683 29.3333 6.66382 29.3333 7.43697 29.3333H24.5634C25.3365 29.3333 26.0035 29.3333 26.5529 29.288C27.1327 29.2402 27.7094 29.1345 28.2644 28.8489C29.0923 28.4228 29.7654 27.7429 30.1873 26.9066C30.47 26.346 30.5746 25.7635 30.622 25.1778C30.6669 24.6229 30.6669 23.9492 30.6668 23.1682V21.811C30.6668 21.811 30.2196 21.5504 29.9331 21.3834ZM4.26683 23.1111V22.9094C4.32046 22.8879 4.37641 22.8655 4.43462 22.8425C5.10676 22.5769 6.07704 22.2203 7.25494 21.8634C9.62285 21.1459 12.7722 20.4444 16.0002 20.4444C19.1794 20.4444 22.2946 21.309 24.6518 22.2019C25.8224 22.6453 26.7872 23.0884 27.4557 23.4187C27.5549 23.4677 27.6475 23.5142 27.7332 23.5578C27.7319 24.166 27.726 24.5949 27.6984 24.9365C27.6658 25.339 27.6106 25.4882 27.5736 25.5614C27.433 25.8402 27.2087 26.0668 26.9327 26.2089C26.8602 26.2462 26.7124 26.302 26.314 26.3349C25.8984 26.3692 25.3524 26.3703 24.5068 26.3703H7.4935C6.64789 26.3703 6.10189 26.3692 5.68632 26.3349C5.28789 26.302 5.14016 26.2462 5.06765 26.2089C4.79168 26.0668 4.5673 25.8402 4.42669 25.5614C4.38974 25.4882 4.33448 25.339 4.30193 24.9365C4.26797 24.5167 4.26683 23.9652 4.26683 23.1111Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.2em] font-bold pl-4 ">
                  Customer stories
                </span>
              </div>
              <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
                See how top companies use Custina.
              </p>
            </div>

            <div className="h-28 mt-5 border-t-[1px] border-black pb-6 pt-4 m-auto text-2xl">
              <div className="flex pl-10">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-center"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 0.585815L2 16.5858V22H7.41421L23.4142 6.00003L18 0.585815ZM4 20V17.4142L14.7071 6.70714L17.2929 9.29292L6.58579 20H4Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.2em] font-bold pl-4 ">Blog</span>
              </div>
              <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
                Get insights, tips, news and advice.
              </p>
            </div>

            <div className="h-28 mt-5 border-t-[1px] border-b-[1px] border-black pb-6 pt-4 m-auto text-2xl">
              <div className="flex pl-10">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 4C1.34315 4 0 5.34315 0 7V9V10H1C2.10457 10 3 10.8954 3 12C3 13.1046 2.10457 14 1 14H0V15V17C0 18.6569 1.34314 20 3 20H21C22.6569 20 24 18.6569 24 17V15V14H23C21.8954 14 21 13.1046 21 12C21 10.8954 21.8954 10 23 10H24V9V7C24 5.34315 22.6569 4 21 4H3ZM2 7C2 6.44772 2.44772 6 3 6H21C21.5523 6 22 6.44772 22 7V8.12602C20.2748 8.57006 19 10.1362 19 12C19 13.8638 20.2748 15.4299 22 15.874V17C22 17.5523 21.5523 18 21 18H3C2.44772 18 2 17.5523 2 17V15.874C3.72523 15.4299 5 13.8638 5 12C5 10.1362 3.72523 8.57006 2 8.12602V7ZM13.1226 10.4549L12 7L10.8774 10.4549H7.24472L10.1836 12.5902L9.06107 16.0451L12 13.9098L14.9389 16.0451L13.8164 12.5902L16.7553 10.4549H13.1226Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="text-[1.2em] font-bold pl-4 ">Events</span>
              </div>
              <p className="pl-8  font-light text-2xl pt-4 w-[600px]">
                Connect with us at an event near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SiderResources;
