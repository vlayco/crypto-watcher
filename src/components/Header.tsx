import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row p-4 border-b border-yellow-300/10">
      <nav className="container mx-auto w-full flex flex-row items-center justify-between">
        <span className="text-3xl text-lime-400 hover:text-lime-500 transition-colors font-semibold">
          <Link href="/">CryptoWatch</Link></span>
        <span className="text-xl text-lime-400 hover:text-lime-500 transition-colors">
          <Link href="/">Login</Link></span>
      </nav>
    </div>
  )
}

export default Header;