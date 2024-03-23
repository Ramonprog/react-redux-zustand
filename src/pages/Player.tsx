
import { Header } from "../components/Header"
import { VideoPlayer } from "../components/Video"
import { Module } from "../components/Module"

export function Player() {
    return (
        <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
            <div className="flex w-[1100px] flex-col gap-6">
                <Header />
                <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
                    <div className="flex-1">
                        <VideoPlayer />
                    </div>

                    <aside className="w-80 border-l border-zinc-800 bg-zinc-900 absolute top-0 bottom-0 right-0 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 divide-y-2 divide-zinc-900">
                        <Module />
                        <Module />
                        <Module />
                    </aside>
                </main>
            </div>
        </div>
    )
}