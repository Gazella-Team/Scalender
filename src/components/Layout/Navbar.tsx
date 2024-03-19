import Link from "next/link";

const links = [
    {name: "Resultater", path: "/"},
    {name: "Cases", path: "/"},
    {name: "Team", path: "/"},
    {name: "Kontakt", path: "/"},
]

export default function Navbar() {
    return (
        <nav className="h-[80px] flex items-center">
            <div className="w-[94%] mx-auto max-w-[1400px] text-white flex items-center justify-between">
                <h1 className="text-[20px] font-semibold uppercase">scalender</h1>
                <div className="flex items-center gap-6 font-medium">
                    {links.map((v, index) => <Link className="text-white" href={v.path}>{v.name}</Link>)}
                </div>
                <div>
                    <Link className="px-7 py-3 rounded-full text-sm font-semibold bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700" href={"/"}>Book møde</Link>
                </div>
            </div>
        </nav>
    )
}