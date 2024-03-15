import Image from "next/image";
import Link from "next/link";
import React from "react";

type IProps = { children?: any };

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <section className="w-full h-screen flex bg-primary-content">
      {/* sidebar */}
      <aside className="lg:w-64 h-screen overflow-y-auto border-r border-line-content border-opacity-20">
        {/* Logo */}
        <div className="px-3 mb-[5rem] pt-10 flex justify-center">
          <Image
            src={"/tailwindcss-logotype-white.svg"}
            alt="logo"
            width={200}
            height={30}
          />
        </div>

        {/* list menu */}
        <ul className="pl-7 text-neutral-content">
          <li className="border-r py-2 text-sky-300 mb-3">
            <Link href={"/admin/dashboard"}>Dashboard</Link>
          </li>
          <li className="py-2 mb-3 cursor-pointer hover:border-r hover:text-white transition-custom">
            <Link href={"/admin/articles"}>Articles</Link>
          </li>
          <li className="py-2 mb-3 cursor-pointer hover:border-r hover:text-white transition-custom">
            <Link href={"/admin/comments"}>Comments</Link>
          </li>
          <li className="py-2 mb-3 cursor-pointer hover:border-r hover:text-white transition-custom">
            <Link href={"/admin/users"}>Users</Link>
          </li>
          <li className="py-2 mb-3 cursor-pointer hover:border-r hover:text-white transition-custom">
            <Link href={"/admin/tags"}>Tags</Link>
          </li>
          <li className="py-2 mb-3 cursor-pointer hover:border-r hover:text-white transition-custom">
            <Link href={"/admin/categories"}>Categories</Link>
          </li>
          <li className="py-2 mb-3 cursor-pointer hover:border-r hover:text-white transition-custom">
            <Link href={"/admin/bookmark"}>Bookmark</Link>
          </li>
          <li className="py-2 mb-3 cursor-pointer hover:border-r hover:text-white transition-custom">
            <Link href={"/admin/articles"}>Signout</Link>
          </li>
        </ul>
      </aside>

      <main className="py-8 px-16 w-full">
        <header className="flex mb-16 justify-end items-center gap-3 w-full">
          {/* theme */}
          <div className="flex justify-center items-center">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input className="hidden" type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-9 h-9"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>

          {/* profile */}
          <div className="w-9 h-9 rounded-full bg-slate-500"></div>
        </header>
        {/* content */}
        <section>{children}</section>
      </main>
    </section>
  );
};

export default Layout;
