export default function SpecialityCard(props: {title: string, description: string}) {
    const {title, description} = props
  return (
    <div className="relative sm:w-full shadow-lg dark:shadow-gray-800 dark:shadow-inner hover:border border-solid border-primary rounded-2xl p-2 transition-all duration-500 col-span-12 xl:p-5 lg:col-span-3 md:col-span-6 ">
      <div className=" mb-6 ">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.66699 12.8162L11.3501 15.4993C11.5616 15.7107 11.9043 15.7109 12.1158 15.4997L17.8753 9.75033M13.0003 23.8337C7.01724 23.8337 2.16699 18.9834 2.16699 13.0003C2.16699 7.01724 7.01724 2.16699 13.0003 2.16699C18.9834 2.16699 23.8337 7.01724 23.8337 13.0003C23.8337 18.9834 18.9834 23.8337 13.0003 23.8337Z"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <h4 className="text-base font-semibold text-primary mb-2 capitalize transition-all duration-500 ">
        {title}
      </h4>
      <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-4">
        {" "}
        {description}
      </p>
      <a
        href="javascript:;"
        className="group flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-all duration-500 "
      >
        Read More{" "}
        <svg
          className="transition-all duration-500  group-hover:translate-x-1"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.25 9L14.25 9M10.5 13.5L14.4697 9.53033C14.7197 9.28033 14.8447 9.15533 14.8447 9C14.8447 8.84467 14.7197 8.71967 14.4697 8.46967L10.5 4.5"
            stroke="#4F46E5"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  );
}
