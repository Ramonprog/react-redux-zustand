import Player from "react-player";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { next, useCurrentLesson } from "../store/slices/player";

export function VideoPlayer() {
    const dispatch = useDispatch()

    const { currentLesson } = useCurrentLesson()

    function hendlePlayNext() {
        dispatch(next())
        console.log('chamou')
    }

    return (
        <div className="w-full bg-zinc-950 aspect-video">
            <Player
                width='100%'
                height='100%'
                controls
                playing
                onEnded={hendlePlayNext}
                url={`https://www.youtube.com/watch?v=${currentLesson.id}`}
            />
        </div>
    )

}