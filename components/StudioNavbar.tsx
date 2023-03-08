import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#9e0fdb] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#9e0fdb] mr-2" />
          Go To Website
        </Link>

        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#9e0fdb]">
          <h1 className="font-bold text-white">
            Want to know all the projects that I worked on? Check out my
            portfolio! 👉
          </h1>
          <Link
            className="text-[#9e0fdb] font-bold ml-2"
            href="https://portfolio.zvapor.xyz"
          >
            https://portfolio.zvapor.xyz
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
