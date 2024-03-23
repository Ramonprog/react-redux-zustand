import { Video } from "lucide-react";

interface ILessonProps {
    title: string;
    duration: string
}
export function Lesson({ title, duration }: ILessonProps) {
    return (
        <button className="flex items-center ga
                                 text-sm text-zinc-400">
            <Video size={16} className="text-zinc-500 ml-2" />
            <span>{title}</span>
            <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
        </button>
    )
}