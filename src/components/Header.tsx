import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row p-4 border-b border-yellow-300/20 mb-5 shadow-xl shadow-lime-200/5">
      <nav className="container mx-auto w-full flex flex-row items-center justify-between">
        <span className="text-3xl text-lime-400 hover:text-lime-500 transition-colors font-semibold">
          <Link href="/">CryptoWatch</Link>
        </span>

        <div className="flex flex-row items-center justify-between space-x-16">
          <span>
            <select className="outline-none text-lg p-1 rounded-md border-none bg-lime-400 text-gray-950">
              <option>US</option>
              <option>EU</option>
            </select>
          </span>

          <span className="text-xl text-lime-400 hover:text-lime-500 transition-colors">
            <Link href="/">Login</Link>
          </span>
        </div>

      </nav>
    </div>
  )
}

export default Header;