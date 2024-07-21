import ModeToggle from "./theme-toggle";

export default function Navbar() {
    return (
        <nav className="flex justify-between border border-blue-600">
            <div>
                {/* should be the mmu tech logo */}
                <p>MMU</p>
            </div>
            <div className="hidden md:inline-block">
                <ul className="flex list-none">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <ModeToggle />
            <div className="md:hidden">
                {/* humberger */}
                <p>humberger</p>
            </div>
        </nav>
    )
};