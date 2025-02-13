import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks({ setIsMenuOpen }) {
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
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                    className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3 ${pathname === link.href ? 'text-amber-400' : ''}`}
                >
                    <p className="md:block">{link.name}</p>
                </Link>
            ))}
        </>
    );
}
