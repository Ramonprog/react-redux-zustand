import { Video } from "lucide-react";

export function Lesson() {
    return (
        <button className="flex items-center ga
                                 text-sm text-zinc-400">
            <Video size={16} className="text-zinc-500 ml-2" />
            <span>Fundamentos do Redux</span>
            <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
        </button>
    )
}