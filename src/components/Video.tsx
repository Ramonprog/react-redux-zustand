import Player from "react-player";
import { useAppSelector } from "../store";

export function VideoPlayer() {
    const video = useAppSelector(state => {
        const { currentLessonIndex, currentModuleIndex } = state.player

        return state.player.courses.modules[currentModuleIndex].lessons[currentLessonIndex]
    })

    return (
        <div className="w-full bg-zinc-950 aspect-video">
            <Player
                width='100%'
                height='100%'
                controls
                url={`https://www.youtube.com/watch?v=${video.id}`}
            />
        </div>
    )

}