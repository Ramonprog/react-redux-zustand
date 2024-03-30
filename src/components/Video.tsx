import Player from "react-player";
import { next, useCurrentLesson } from "../store/slices/player";
import { useAppDispatch, useAppSelector } from "../store";
import { Loader } from "lucide-react";

export function VideoPlayer() {
    const dispatch = useAppDispatch()

    const { currentLesson } = useCurrentLesson()
    const isCouseLoading = useAppSelector(state => state.player.isLoading)

    function hendlePlayNext() {
        dispatch(next())
        console.log('chamou')
    }

    return (
        <div className="w-full bg-zinc-950 aspect-video">
            {isCouseLoading ? (
                <div className="flex h-full items-center justify-center">
                    <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
                </div>
            ) : (
                <Player
                    width='100%'
                    height='100%'
                    controls
                    playing
                    onEnded={hendlePlayNext}
                    url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
                />)}

        </div>
    )

}