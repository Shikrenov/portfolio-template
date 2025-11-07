import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react"; // ✅ Lucide icons

const footerLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Services", href: "#services" },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
          <svg
            id="logo-7"
            width="124"
            height="32"
            viewBox="0 0 124 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.87 10.07H39.87V22.2H36.87V10.07ZM41.06 17.62C41.06 14.62 42.9 12.83 45.74 12.83C48.58 12.83 50.42 14.62 50.42 17.62C50.42 20.62 48.62 22.42 45.74 22.42C42.86 22.42 41.06 20.67 41.06 17.62ZM47.41 17.62C47.41 15.97 46.76 15 45.74 15C44.72 15 44.08 16 44.08 17.62C44.08 19.24 44.71 20.22 45.74 20.22C46.77 20.22 47.41 19.3 47.41 17.63V17.62ZM51.55 22.79H54.43C54.5671 23.0945 54.7988 23.3466 55.0907 23.5088C55.3826 23.6709 55.7191 23.7345 56.05 23.69C57.19 23.69 57.79 23.07 57.79 22.17V20.49H57.73C57.491 21.0049 57.1031 21.4363 56.6165 21.7287C56.1299 22.021 55.5668 22.1608 55 22.13C52.81 22.13 51.36 20.46 51.36 17.59C51.36 14.72 52.74 12.91 55.04 12.91C55.6246 12.8871 56.2022 13.0434 56.6955 13.3579C57.1888 13.6725 57.5742 14.1303 57.8 14.67V14.67V13H60.8V22.1C60.8 24.29 58.87 25.65 56.02 25.65C53.37 25.65 51.72 24.46 51.55 22.8V22.79ZM57.8 17.61C57.8 16.15 57.13 15.23 56.07 15.23C55.01 15.23 54.36 16.14 54.36 17.61C54.36 19.08 55 19.91 56.07 19.91C57.14 19.91 57.8 19.1 57.8 17.62V17.61ZM61.93 17.61C61.93 14.61 63.77 12.82 66.61 12.82C69.45 12.82 71.3 14.61 71.3 17.61C71.3 20.61 69.5 22.41 66.61 22.41C63.72 22.41 61.93 20.67 61.93 17.62V17.61ZM68.28 17.61C68.28 15.96 67.63 14.99 66.61 14.99C65.59 14.99 65 16 65 17.63C65 19.26 65.63 20.23 66.65 20.23C67.67 20.23 68.28 19.3 68.28 17.63V17.61Z"
              className="fill-foreground"
            />
          </svg>

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Made by SinceSeven
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
