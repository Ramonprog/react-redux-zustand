import { Video } from "lucide-react";


interface ILessonProps {
    title: string;
    duration: string;
    onPlay: () => void;
}
export function Lesson({ title, duration, onPlay }: ILessonProps) {


    return (
        <button onClick={onPlay} className="flex items-center text-sm text-zinc-400 gap-2">
            <Video size={16} className="text-zinc-500" />
            <span>{title}</span>
            <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
        </button>
    )
}