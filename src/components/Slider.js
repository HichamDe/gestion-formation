import { Link } from "react-router-dom";
export default function Slider() {
  return (
    <div class="relative block navbar-menu">
      <nav
        class="fixed top-14 bottom-0 transition-all   left-0 dark:bg-gray-900 flex flex-col w-[280px] shadow  overflow-hidden z-50"
        id="sidenav"
      >
        <div class="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-300 dark:border-gray-700">
          <a href="#">
            <h2 class="ml-3 text-lg font-bold text-gray-700 dark:text-gray-400 whitespace-nowrap">
              EG-FORMATIONS
            </h2>
          </a>
        </div>
        <div class="pb-6 mt-4 overflow-x-hidden overflow-y-auto">
          <ul class="mb-8 text-sm ">
            <li>
              <Link
                to="/"
                class="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100"
              >
                <span
                  class="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                 text-center xl:p-2.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="w-5 h-5 dark:group-hover:text-gray-300 bi bi-people"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                </span>
                <span> Employee </span>
              </Link>
            </li>
            {/* Formation */}
            <li>
              <Link
                to="/formation"
                class="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100"
              >
                <span
                  class="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                 text-center xl:p-2.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="w-5 h-5 dark:group-hover:text-gray-300 bi bi-info-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </span>
                <span> Formation </span>
              </Link>
            </li>
            {/* Assigne */}
            <li>
              <Link
                to="#"
                class="flex items-center px-6 py-4 text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 group hover:text-gray-600 hover:bg-gray-100"
              >
                <span
                  class="drop-shadow-lg mr-2 flex h-8 w-8 items-center 
                                justify-center rounded-lg bg-white dark:bg-gray-800 dark:text-gray-100 bg-center 
                                 text-center xl:p-2.5"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="w-5 h-5 dark:group-hover:text-gray-300 bi bi-toggles"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.5 9a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7zm7 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm-7-14a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm2.45 0A3.49 3.49 0 0 1 8 3.5 3.49 3.49 0 0 1 6.95 6h4.55a2.5 2.5 0 0 0 0-5H6.95zM4.5 0h7a3.5 3.5 0 1 1 0 7h-7a3.5 3.5 0 1 1 0-7z" />
                  </svg>
                </span>
                <span> Assigne </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
