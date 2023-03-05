import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="bg-gray-800 p-8">
      <div className="mt-2 md:flex md:items-center md:justify-between container m-auto">
        <div className="min-w-0 flex gap-3 flex-1">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200"
          >
            <ChevronLeftIcon
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-500"
              aria-hidden="true"
            />
          </a>
          <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
            Back End Developer
          </h2>
        </div>
      </div>
    </div>
  );
}
