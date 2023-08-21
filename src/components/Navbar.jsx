import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";


const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute w-full z-10'>
      <nav className="flex justify-between items-center mx-container">
        <a href="/">
          <img src={headerLogo} width={130} height={29} />
        </a>
        <ul className="flex justify-center items-center flex-1 gap-16 max-lg:hidden">
          {
            navLinks.map((item) => (
              <li key={item.label} className="font-montserrat leading-normal text-lg text-slate-gray">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar