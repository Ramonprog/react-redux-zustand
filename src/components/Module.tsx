import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

export function Module() {
    return (
        <div className="">
            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">1</span>
                <div className="flex flex-col">
                    <span className="font-sm">Aula 01</span>
                    <span className="text-xs text-zinc-400">12 aulash</span>
                </div>

                <ChevronDown size={16} className="ml-auto" />
            </button>

            <nav className="relative flex flex-col gap-4 p-6">
                <Lesson />
                <Lesson />
                <Lesson />
            </nav>
        </div>
    )
}