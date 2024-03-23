import Player from "react-player";

export function VideoPlayer() {
    return (
        <div className="w-full bg-zinc-950 aspect-video">
            <Player
                width='100%'
                height='100%'
                controls
                url={'https://www.youtube.com/watch?v=3wWzcunjIcc'}
            />
        </div>
    )

}