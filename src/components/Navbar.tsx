import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:px-16 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          MH
        </Link>
      </div>
      <div className="flex items-center gap-8">
        <Link href="/" className="text-sm md:text-base hover:text-white/80 transition-colors">
          HOME
        </Link>
        <Link href="#about" className="text-sm md:text-base hover:text-white/80 transition-colors">
          ABOUT
        </Link>
        <Link href="#projects" className="text-sm md:text-base hover:text-white/80 transition-colors">
          PROJECTS
        </Link>
        <Link href="#contact" className="text-sm md:text-base hover:text-white/80 transition-colors">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
