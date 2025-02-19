import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ setIsMenuOpen, setIsDropdownOpen }) {
    const pathname = usePathname();
    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Drug Store", href: "/shop" },
    ];

    return (
        <>
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => { setIsMenuOpen(false); setIsDropdownOpen(false) }} // Close menu on click
                    className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm md:text-lg font-medium md:flex-none md:justify-start md:p-2 md:px-3 ${pathname === link.href ? 'text-[#724EE2]' : ''}`}
                >
                    <p className="md:block hover:text-[#724EE2]">{link.name}</p>
                </Link>
            ))}
        </>
    );
}
