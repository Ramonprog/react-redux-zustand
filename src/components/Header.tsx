import { MessageCircle } from "lucide-react";
import { useAppSelector } from "../store";

export function Header() {
    const { currentLesson, currentModule } = useAppSelector(state => {
        const { currentLessonIndex, currentModuleIndex } = state.player

        const currentModule = state.player.courses.modules[currentModuleIndex]
        const currentLesson = currentModule.lessons[currentLessonIndex]

        return {
            currentLesson, currentModule
        }
    })

    return (
        <header className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
                <span className="text-sm text-zinc-400">{currentModule.title}</span>
            </div>

            <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 font-medium text-white hover:bg-violet-600 "><MessageCircle size={16} /> Deixar feedback</button>
        </header>
    )

}