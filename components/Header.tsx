import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://links.zvapor.xyz/1m1"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Vapor's Blog</h1>
      </div>

      <div>
        <Link
          href="https://www.zvapor.xyz"
          className="px-5 py-3 text-sm md:text-base border-3 bg-[#9e0fdb] text-white flex items-center rounded-full text-center"
        >
          Go and visit my main site!
        </Link>
      </div>
    </header>
  );
}

export default Header;
