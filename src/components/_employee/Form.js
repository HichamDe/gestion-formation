export default function Form() {
  return (
    <div class="max-w-screen-xl m-auto py-6 border-2 border-white dark:border-gray-800">
      <div class="w-full md:w-10/12">
        <div class="flex flex-wrap -m-3 justify-center items-center">
          <div class="w-full p-3 md:w-1/3">
            <input
              class="w-full dark:bg-gray-700 dark:border-gray-800 px-4 dark:placeholder-gray-500 dark:text-gray-400 py-2.5 text-base text-gray-900 rounded-lg font-normal border border-gray-200"
              type="text"
              placeholder="Adam"
            />
          </div>
          <div class="w-full p-3 md:w-1/3">
            <input
              class="w-full px-4 py-2.5 dark:bg-gray-700 dark:border-gray-800 dark:placeholder-gray-500 dark:text-gray-400  text-base text-gray-900 rounded-lg font-normal border border-gray-200"
              type="text"
              placeholder="Smith"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
