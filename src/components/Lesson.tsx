import { PlayCircle, Video } from "lucide-react";


interface ILessonProps {
    title: string;
    duration: string;
    onPlay: () => void;
    isCurrent: boolean
}
export function Lesson({ title, duration, onPlay, isCurrent = false }: ILessonProps) {

    return (
        <button data-active={isCurrent} onClick={onPlay} className="flex items-center text-sm text-zinc-400 gap-2 data-[active=true]:text-emerald-400 hover:text-zinc-100">
            {isCurrent ? (<PlayCircle className="w-4 h-4 text-emerald-400" />) : (<Video size={16} className="text-zinc-500" />)}
            <span>{title}</span>
            <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
        </button>
    )
}