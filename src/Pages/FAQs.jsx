import React, { useState } from "react";
import vecBas from "../assets/vecBas.png";
import vecReno from "../assets/vecReno.png";
import vecMat from "../assets/vecMat.png";
import vecDes from "../assets/vecDes.png";
import Womansmile from "../assets/womansmile.png";
import Accordian from "../components/Accordian";
import faqtag1 from "../assets/faqtag1.svg";
import faqtag2 from "../assets/faqtag2.svg";

const FAQs = () => {
  const [activeTag, setActiveTag] = useState(null);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const getTagClass = (tag) => {
    return activeTag === tag
      ? "bg-blue-200 text-white"
      : "bg-blue-100 text-black";
  };
  const getSvgClass = (tag) => {
    return activeTag === tag
      ? "fill-current text-white"
      : "fill-current text-blue-200";
  };
  return (
    <div className=" w-full h-fit m-auto bg-gray-200  ">
      <div className=" pt-40 max-w-6xl mx-auto  p-3">
        {/*  */}
        <div className="mb-4 text-sm text-gray-600">
          <a href="/" className="text-blue-500 text-base hover:underline">
            Home
          </a>{" "}
          &gt;{" "}
          <span className="font-bold text-base font-display text-black">
            FAQs
          </span>
        </div>
        {/*  */}
        <div className="mt-8 ">
          <h1 className=" text-3xl mb-8 sm:text-5xl font-bold font-display">
            Curious Minds Wants to Know
          </h1>
          {/* faq tags  */}
          <div className=" grid grid-cols-2  max-w-[600px] gap-5 mb-4 ">
            <button
              className={`flex items-center space-x-3  p-3  rounded-full ${getTagClass(
                "faq1"
              )}`}
              onClick={() => handleTagClick("faq1")}
            >
              <span>
                <svg
                  className={`w-6 h-6 ${getSvgClass("faq1")}`}
                  viewBox="0 0 20 24"
                  fill="blue-200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5371 23.9691C16.5371 18.6949 16.5371 13.4969 16.5371 8.2481C16.7405 8.20997 16.9692 8.15914 17.2107 8.12101C17.2107 7.93038 17.2107 7.76516 17.2107 7.56182C16.9692 7.5364 16.7659 7.51098 16.5371 7.48556C16.5371 4.99461 16.5371 2.51636 16.5371 -1.52588e-05C17.4522 -1.52588e-05 18.3672 -1.52588e-05 19.3458 -1.52588e-05C19.3585 0.228746 19.3839 0.444799 19.3839 0.67356C19.3839 8.20997 19.3712 15.7337 19.3966 23.2701C19.3966 23.8801 19.206 24.0326 18.6468 23.9945C17.9478 23.9437 17.2488 23.9691 16.5371 23.9691Z"
                    fill="blue-200"
                    fill-opacity="0.87"
                  />
                  <path
                    d="M8.30169 9.3919C7.93313 9.5317 7.47561 9.64608 7.08163 9.86214C6.56056 10.1417 6.31908 9.91297 6.10303 9.46816C5.82343 8.87084 5.53114 8.28623 5.22612 7.70161C4.89569 7.06616 4.37462 6.85011 3.82814 7.117C3.25623 7.38389 3.09102 7.95579 3.39603 8.62937C3.40874 8.65478 3.40873 8.66749 3.42144 8.69291C4.31107 9.9511 4.60338 11.2347 3.65021 12.62C3.38332 13.014 3.51041 13.3317 3.90439 13.624C4.88298 14.3738 5.82344 15.1491 6.76391 15.9497C7.0435 16.1912 7.29768 16.5089 7.41206 16.8521C8.00938 18.6186 8.55587 20.3852 9.10236 22.1644C9.31841 22.8888 9.05151 23.4989 8.45419 23.7657C7.9077 24.0072 7.27225 23.8547 6.92911 23.3591C6.78931 23.1557 6.70036 22.9015 6.62411 22.6601C6.16659 21.2367 5.73448 19.7878 5.25154 18.3644C5.13716 18.034 4.90839 17.6909 4.6415 17.4621C3.39602 16.4073 2.13784 15.3778 0.854238 14.3738C0.0917003 13.7765 -0.111649 13.0394 0.0535672 12.1243C0.396709 10.2942 1.14653 8.6675 2.29034 7.20596C2.82412 6.53239 3.47228 5.9859 4.37461 6.08757C4.83214 6.13841 5.36592 6.36717 5.69635 6.67219C6.39534 7.33305 6.99267 8.12101 7.64083 8.84542C7.83146 9.07418 8.08563 9.22669 8.30169 9.3919Z"
                    fill="blue-200"
                    fill-opacity="0.87"
                  />
                  <path
                    d="M1.7311 15.3651C2.59531 16.0641 3.45951 16.7631 4.32372 17.4875C4.42539 17.5765 4.47624 17.7925 4.46353 17.9323C4.39998 19.9149 3.70098 21.6942 2.5953 23.3082C2.18861 23.9055 1.40067 24.0072 0.841474 23.6132C0.294989 23.2193 0.155184 22.5076 0.549162 21.8594C1.28628 20.6775 1.88361 19.432 1.92174 18.0213C1.95986 17.1571 1.80736 16.2802 1.7311 15.3651Z"
                    fill="blue-200"
                    fill-opacity="0.87"
                  />
                  <path
                    d="M7.31012 4.13039C7.98369 4.47354 8.65727 4.80397 9.34355 5.14711C9.08937 6.17654 7.92015 6.8374 6.78906 6.55781C5.55629 6.25279 4.80647 5.04544 5.09877 3.83809C5.49275 2.19863 7.50077 1.55048 8.78437 2.63074C9.1021 2.89763 9.52148 3.06284 9.90275 3.25348C10.2459 3.41869 10.6144 3.54578 10.9322 3.73642C11.0847 3.82538 11.1482 4.06685 11.2499 4.23207C11.0593 4.34645 10.8813 4.53708 10.678 4.5625C9.6994 4.7023 8.74624 4.53708 7.8312 4.15581C7.67869 4.09227 7.53889 4.01601 7.39909 3.93976C7.37367 4.0033 7.34825 4.06685 7.31012 4.13039Z"
                    fill="blue-200"
                    fill-opacity="0.87"
                  />
                  <path
                    d="M6.30641 10.3705C7.45022 9.9511 8.51776 9.55712 9.57261 9.16314C10.0683 8.97251 10.4495 9.08689 10.691 9.55712C10.8943 9.97652 10.7037 10.4467 10.2208 10.6374C8.88632 11.1585 7.52647 11.6414 6.17932 12.137C5.7218 12.3023 5.37865 12.1116 5.17531 11.7049C4.62882 10.6374 4.09504 9.55712 3.56126 8.46415C3.3325 7.99392 3.40877 7.57452 3.89171 7.33305C4.36194 7.09158 4.75591 7.28222 4.99738 7.73974C5.42948 8.59124 5.84889 9.45545 6.30641 10.3705Z"
                    fill="blue-200"
                    fill-opacity="0.87"
                  />
                  <path
                    d="M16.9437 7.98121C16.537 7.98121 16.1303 7.99392 15.7236 7.98121C14.8086 7.94308 13.919 8.09559 13.1056 8.51499C12.9023 8.62937 12.6735 9.04876 12.737 9.2394C12.9023 9.70963 12.9022 10.1163 12.7116 10.5738C12.6481 10.7391 12.737 10.9678 12.7497 11.1966C12.5337 11.1966 12.3049 11.1966 12.0762 11.1966C12.0889 11.0441 12.1016 10.9043 12.127 10.7136C11.6695 10.7136 11.2501 10.7136 10.8815 10.7136C10.9069 10.2053 10.9451 9.72234 10.9705 9.17585C11.2882 9.13773 11.7076 9.07418 12.127 9.02334C12.127 8.94709 12.1143 8.87084 12.1143 8.79458C11.6949 8.79458 11.2501 8.69291 10.8688 8.82C10.2207 9.03605 9.67418 8.93438 9.22937 8.47686C9.03873 8.28623 8.87351 7.91766 8.92435 7.6889C8.96247 7.48556 9.33103 7.23138 9.5598 7.21867C10.6528 7.16784 11.822 6.9772 12.8387 7.24409C14.2113 7.61265 15.5457 7.85412 16.9691 7.75245C16.9564 7.81599 16.9437 7.89225 16.9437 7.98121Z"
                    fill="blue-200"
                    fill-opacity="0.87"
                  />
                </svg>
              </span>{" "}
              <span className="text-start text-sm sm:text-base">
                Basement Renovation
              </span>
            </button>
            <button
              className={`flex items-center  space-x-3  p-3  rounded-full ${getTagClass(
                "faq2"
              )}`}
              onClick={() => handleTagClick("faq2")}
            >
              <span>
                <svg
                  className={`w-6 h-6 ${getSvgClass("faq2")}`}
                  viewBox="0 0 25 24"
                  fill="blue-200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.56848 3.172C3.39648 4.343 3.39648 6.229 3.39648 10V14C3.39648 17.771 3.39648 19.657 4.56848 20.828C5.74048 21.999 7.62548 22 11.3965 22H13.3965C17.1675 22 19.0535 22 20.2245 20.828C21.3955 19.656 21.3965 17.771 21.3965 14V10C21.3965 6.229 21.3965 4.343 20.2245 3.172C19.0525 2.001 17.1675 2 13.3965 2H11.3965C7.62548 2 5.73948 2 4.56848 3.172ZM7.64648 8C7.64648 7.80109 7.7255 7.61032 7.86615 7.46967C8.00681 7.32902 8.19757 7.25 8.39648 7.25H16.3965C16.5954 7.25 16.7862 7.32902 16.9268 7.46967C17.0675 7.61032 17.1465 7.80109 17.1465 8C17.1465 8.19891 17.0675 8.38968 16.9268 8.53033C16.7862 8.67098 16.5954 8.75 16.3965 8.75H8.39648C8.19757 8.75 8.00681 8.67098 7.86615 8.53033C7.7255 8.38968 7.64648 8.19891 7.64648 8ZM7.64648 12C7.64648 11.8011 7.7255 11.6103 7.86615 11.4697C8.00681 11.329 8.19757 11.25 8.39648 11.25H16.3965C16.5954 11.25 16.7862 11.329 16.9268 11.4697C17.0675 11.6103 17.1465 11.8011 17.1465 12C17.1465 12.1989 17.0675 12.3897 16.9268 12.5303C16.7862 12.671 16.5954 12.75 16.3965 12.75H8.39648C8.19757 12.75 8.00681 12.671 7.86615 12.5303C7.7255 12.3897 7.64648 12.1989 7.64648 12ZM8.39648 15.25C8.19757 15.25 8.00681 15.329 7.86615 15.4697C7.7255 15.6103 7.64648 15.8011 7.64648 16C7.64648 16.1989 7.7255 16.3897 7.86615 16.5303C8.00681 16.671 8.19757 16.75 8.39648 16.75H13.3965C13.5954 16.75 13.7862 16.671 13.9268 16.5303C14.0675 16.3897 14.1465 16.1989 14.1465 16C14.1465 15.8011 14.0675 15.6103 13.9268 15.4697C13.7862 15.329 13.5954 15.25 13.3965 15.25H8.39648Z"
                    fill="blue-200"
                  />
                </svg>
              </span>
              <span className="text-start text-sm sm:text-base">
                {" "}
                Legal Basement
              </span>
            </button>
            <button
              className={`flex items-center  space-x-3  p-3  rounded-full ${getTagClass(
                "faq3"
              )}`}
              onClick={() => handleTagClick("faq3")}
            >
              <span>
                <svg
                  className={`w-6 h-6 ${getSvgClass("faq3")}`}
                  viewBox="0 0 26 24"
                  fill="blue-200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.289 23.612C22.4107 23.612 19.5706 23.612 16.6924 23.612C16.6924 21.2049 16.6924 18.8106 16.6924 16.3527C17.3419 16.3527 18.0169 16.3527 18.7938 16.3527C18.7938 15.8305 18.781 15.372 18.7938 14.9135C18.7938 14.748 18.8447 14.455 18.8829 14.455C19.5707 14.3914 19.3032 13.8692 19.3159 13.5381C19.3414 12.5447 19.3287 11.5513 19.3287 10.456C19.9273 10.456 20.5131 10.456 21.1499 10.456C21.1499 8.67304 21.1499 6.99193 21.1499 5.22167C21.914 5.22167 22.6272 5.22167 23.4041 5.22167C23.4041 3.43867 23.4041 1.73209 23.4041 3.8147e-05C24.0663 3.8147e-05 24.6522 3.8147e-05 25.3017 3.8147e-05C25.289 7.85795 25.289 15.7031 25.289 23.612Z"
                    fill="blue-200"
                  />
                  <path
                    d="M11.4962 9.94661C11.1269 11.3093 10.7703 12.6084 10.4519 13.9201C10.4137 14.0857 10.5792 14.3531 10.7193 14.4805C11.4453 15.1682 12.2221 15.7923 12.9353 16.4927C13.2155 16.7729 13.4702 17.155 13.5721 17.5498C13.9924 19.0653 14.3617 20.5809 14.7311 22.1092C14.9731 23.0771 14.6547 23.7648 13.9033 23.9559C13.1264 24.1469 12.5405 23.7139 12.2985 22.746C11.9674 21.4342 11.649 20.1097 11.2924 18.8106C11.2033 18.505 11.0123 18.1993 10.783 17.9701C10.0826 17.2951 9.34388 16.6583 8.61795 16.0088C8.45239 15.8687 8.28682 15.7286 8.10852 15.5885C8.07031 15.6395 8.01937 15.6904 7.98117 15.7286C8.59248 16.2762 9.17832 16.8748 9.84057 17.3715C10.3755 17.779 10.541 18.1866 10.35 18.8743C9.9934 20.1988 9.76415 21.5615 9.47123 22.9115C9.34388 23.4719 9.01275 23.8667 8.42691 23.9686C7.89202 24.0577 7.42079 23.8794 7.17881 23.3955C7.02598 23.0771 6.97504 22.6568 7.03872 22.3002C7.25523 21.0649 7.53541 19.855 7.8156 18.6323C7.91748 18.2121 7.82833 17.9319 7.48447 17.6517C6.72033 17.0149 5.9944 16.3272 5.24299 15.6649C4.72083 15.2064 4.50432 14.6843 4.77176 14.022C5.29393 12.6848 5.34487 11.3603 4.75903 10.0358C4.49158 9.44991 4.66989 9.00416 5.12837 8.57115C7.14061 6.64806 6.24911 6.89004 8.87266 7.55229C10.4392 7.9471 11.9802 8.39285 13.5212 8.86407C13.9287 8.99143 14.107 8.90228 14.349 8.57115C14.7565 7.97257 15.266 7.43767 15.699 6.85183C15.8009 6.71174 15.8391 6.49523 15.8391 6.3042C15.8391 5.79477 16.1065 5.5528 16.5777 5.43817C16.9089 5.36176 17.2145 5.18346 17.5329 5.10705C18.2843 4.91601 18.8702 4.63583 18.8065 3.70613C18.7938 3.5915 18.9975 3.45141 19.0994 3.32405C19.1631 3.47688 19.2268 3.64244 19.2777 3.79527C19.2777 3.808 19.265 3.83348 19.265 3.85895C19.3287 4.77592 18.9338 5.32356 18.0041 5.48912C17.6348 5.5528 17.2909 5.74383 16.9216 5.87119C16.2721 6.11317 16.1447 6.57165 16.4376 7.18296C16.565 7.46315 16.6032 7.9089 16.4631 8.16361C16.0683 8.91502 15.5716 9.60274 15.1131 10.3159C14.8202 10.7744 14.4254 10.8254 13.9415 10.6853C13.1518 10.4433 12.3495 10.2013 11.4962 9.94661Z"
                    fill="blue-200"
                  />
                  <path
                    d="M0.00897301 21.2559C0.00897301 20.4535 -0.016489 19.6894 0.0344537 18.9252C0.0471894 18.7597 0.289161 18.4922 0.441989 18.4922C1.42264 18.454 2.41603 18.4413 3.40941 18.4922C3.56224 18.505 3.81694 18.8488 3.81694 19.0399C3.85515 20.4153 3.82969 21.7908 3.84242 23.179C3.84242 23.5483 3.72779 23.7903 3.3712 23.7903C2.40328 23.8157 1.43538 23.8157 0.46747 23.7648C0.301906 23.7521 0.123603 23.4337 0.0344537 23.2172C-0.0419604 23.0516 0.0344568 22.8351 0.0217211 22.6568C-0.0164859 21.9945 -0.0929031 21.4214 0.862273 21.2304C1.58821 21.0903 1.86839 20.3262 2.09763 19.6512C2.13583 19.5493 2.04669 19.4219 2.02122 19.2946C1.9448 19.3965 1.81745 19.4729 1.80472 19.5875C1.62642 20.5936 1.16792 21.0648 0.00897301 21.2559ZM2.97639 21.2559C3.05281 21.2559 3.12922 21.2559 3.21837 21.2559C3.21837 20.4281 3.21837 19.613 3.21837 18.6833C2.39055 18.6833 1.43538 18.6833 0.46747 18.6833C0.46747 18.7597 0.454722 18.8488 0.454722 18.9252C1.15518 18.9762 1.84291 19.0271 2.55611 19.0653C2.59432 19.2436 2.63253 19.4219 2.70895 19.7531C2.78536 19.4601 2.82356 19.3328 2.84904 19.2054C2.88724 19.2054 2.92545 19.2054 2.97639 19.2182C2.97639 19.9059 2.97639 20.5809 2.97639 21.2559Z"
                    fill="blue-200"
                  />
                  <path
                    d="M11.5601 5.84571C11.9804 5.92212 12.2606 5.97306 12.5789 6.024C12.7063 6.81362 12.3624 7.41219 11.7893 7.89615C11.6874 7.9853 11.4709 7.99804 11.3308 7.97257C10.4521 7.75606 9.56059 7.55229 8.7073 7.25937C8.47806 7.18295 8.22334 6.85182 8.15966 6.59711C7.79032 4.916 9.40775 3.43866 11.0252 4.01177C11.5856 4.2028 12.1077 4.25375 12.6681 4.25375C13.1775 4.26649 13.7506 4.1646 14.0563 4.75044C13.6615 5.01789 13.2794 5.34901 12.8464 5.54005C12.5153 5.70561 12.095 5.73109 11.5601 5.84571Z"
                    fill="blue-200"
                  />
                  <path
                    d="M18.5394 4.24102C16.8965 4.06272 15.3045 3.88442 13.6616 3.70613C13.7126 3.23491 13.7508 2.82736 13.789 2.3052C15.4319 2.4835 17.0366 2.66179 18.6922 2.84009C18.6413 3.31131 18.6031 3.71885 18.5394 4.24102Z"
                    fill="blue-200"
                  />
                </svg>
              </span>{" "}
              <span className="text-start text-sm sm:text-base">
                {" "}
                Design & Customization
              </span>
            </button>
            <button
              className={`flex items-center  space-x-3  p-3 rounded-full ${getTagClass(
                "faq4"
              )}`}
              onClick={() => handleTagClick("faq4")}
            >
              <span>
                <svg
                  className={`w-6 h-6 ${getSvgClass("faq4")}`}
                  viewBox="0 0 29 24"
                  fill="blue-200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2489 7.28095C14.0881 7.64268 13.9408 7.93742 13.7264 8.41973C13.646 7.95082 13.6058 7.66948 13.5522 7.37473C13.4317 6.78524 12.9627 6.42351 12.4135 6.46371C11.8508 6.5039 11.3685 6.99961 11.422 7.60249C11.5158 8.95563 11.6632 10.3088 11.7838 11.6619C11.7972 11.7959 11.8776 11.9567 11.824 12.037C11.3953 12.7203 11.9044 13.0285 12.3331 13.3768C13.2173 14.0868 14.1283 14.7835 14.9724 15.5338C15.3341 15.8553 15.669 16.2974 15.8298 16.7529C16.4595 18.5616 17.0222 20.397 17.5715 22.2325C17.8662 23.1971 17.2097 24.0545 16.2585 23.9876C15.5619 23.934 15.2001 23.4919 14.9992 22.8622C14.5035 21.2947 14.0211 19.7138 13.4986 18.1463C13.3915 17.8113 13.1503 17.463 12.8824 17.2353C11.5828 16.1367 10.2833 15.0515 8.93012 14.0333C8.05928 13.3768 7.85832 12.5327 8.03249 11.5547C8.40761 9.57191 9.22486 7.76326 10.5646 6.23595C10.9397 5.80723 11.5158 5.51249 12.0517 5.28473C12.3197 5.17755 12.7216 5.35172 13.0565 5.40531C13.6594 5.52588 14.2489 5.65986 14.8518 5.76704C15.0929 5.80723 15.3609 5.72685 15.5753 5.79384C16.1245 5.968 16.5667 5.9948 16.7676 5.29813C16.7944 5.20435 17.0088 5.11056 17.1427 5.09717C17.6251 5.07037 18.1074 5.08377 18.7237 5.08377C18.3351 5.91441 18.0538 6.69146 17.6117 7.37473C17.4509 7.61589 16.915 7.74986 16.5801 7.70967C15.803 7.68287 15.0527 7.45511 14.2489 7.28095Z"
                    fill="blue-200"
                  />
                  <path
                    d="M16.5664 4.86942C16.8745 4.14595 17.1425 3.46269 17.4506 2.80621C17.5176 2.67224 17.7588 2.55166 17.9196 2.55166C21.4833 2.53826 25.047 2.55166 28.6241 2.55166C28.6643 2.55166 28.7045 2.57845 28.7849 2.61864C28.7849 3.34211 28.7849 4.09236 28.7849 4.86942C24.7121 4.86942 20.6794 4.86942 16.5664 4.86942Z"
                    fill="blue-200"
                  />
                  <path
                    d="M12.2394 4.86942C8.28712 4.86942 4.32148 4.86942 0.302246 4.86942C0.302246 4.10576 0.302246 3.3823 0.302246 2.57845C0.516605 2.56505 0.730963 2.53826 0.945322 2.53826C4.33487 2.53826 7.71103 2.55166 11.1006 2.53826C11.6231 2.53826 11.9044 2.59185 11.8776 3.26172C11.8642 3.77083 12.1054 4.30672 12.2394 4.86942Z"
                    fill="blue-200"
                  />
                  <path
                    d="M9.6939 14.9845C10.6317 15.7347 11.5428 16.4582 12.4136 17.2085C12.5744 17.3558 12.6815 17.6774 12.6547 17.9051C12.5208 19.9147 11.8375 21.7368 10.7121 23.3847C10.27 24.0412 9.50634 24.1751 8.89006 23.7732C8.28717 23.3713 8.09961 22.621 8.51493 21.9511C9.42596 20.4774 10.0958 18.9367 10.002 17.1683C9.97525 16.4582 9.81448 15.7615 9.6939 14.9845Z"
                    fill="blue-200"
                  />
                  <path
                    d="M12.6008 6.71827C13.0831 6.75846 13.3243 7.10679 13.3645 7.64268C13.4449 8.58051 13.4851 9.50493 13.619 10.4294C13.6592 10.7375 13.8602 11.0992 14.088 11.3136C14.9454 12.0906 15.843 12.8275 16.7272 13.5777C17.2497 14.0333 17.3435 14.4888 17.022 14.9041C16.6871 15.3328 16.1646 15.3194 15.6153 14.8639C14.5569 13.9797 13.4985 13.0954 12.4669 12.171C12.2257 11.9567 11.998 11.5949 11.9578 11.2868C11.8104 10.1212 11.73 8.94224 11.6496 7.76326C11.6094 7.09339 11.9578 6.71827 12.6008 6.71827Z"
                    fill="blue-200"
                  />
                  <path
                    d="M16.2989 2.8464C14.986 2.73922 13.6864 2.63204 12.3735 2.49807C12.1725 2.48467 11.9849 2.3373 11.7974 2.25692C11.9179 2.10955 12.0385 1.94878 12.1457 1.80141C12.2395 1.66743 12.3467 1.52006 12.4136 1.37269C12.8692 0.421468 13.6998 -0.060842 14.7314 0.00614521C15.6826 0.0731324 16.4597 0.729608 16.741 1.69422C16.7946 1.86839 16.8482 2.02916 16.9152 2.18993C16.9956 2.3641 17.1161 2.52486 17.2233 2.69903C17.009 2.75262 16.7812 2.81961 16.5668 2.8598C16.4865 2.8732 16.3927 2.8464 16.2989 2.8464Z"
                    fill="blue-200"
                  />
                  <path
                    d="M12.1988 2.72582C13.7128 2.85979 15.2401 2.99377 16.7674 3.12774C16.8879 4.02537 16.4592 4.84262 15.642 5.31153C14.7846 5.80723 13.7128 5.71345 12.9491 5.09717C12.2524 4.52108 11.9443 3.59665 12.1988 2.72582Z"
                    fill="blue-200"
                  />
                </svg>
              </span>{" "}
              <span className="text-start text-sm sm:text-base">
                {" "}
                Construction & Materials
              </span>
            </button>
          </div>
          <div className=" flex flex-col sm:flex-row sm:flex   justify-between items-center">
            {/* accordian */}
            <div className=" w-[100%] sm:w-[60%] ">
              <Accordian
                title="What is included in a basement renovation?"
                answer=""
              />
              <Accordian
                title="How long does a basement renovation take?"
                answer=""
              />
              <Accordian
                title="Do I need a permit for a basement renovation?"
                answer=""
              />
              <Accordian
                title="Can I make my basement a legal apartment?"
                answer=""
              />
              <Accordian
                title="Can I still use my basement during renovation?"
                answer=""
              />
            </div>
            <div className="  w-[100%] sm:w-[30%] h-[490px] ">
              <img
                src={Womansmile}
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
