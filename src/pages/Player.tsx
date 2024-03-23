import { ChevronDown, MessageCircle, Video } from "lucide-react"
import ReactPlayer from "react-player"

export function Player() {
    return (
        <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
            <div className="flex w-[1100px] flex-col gap-6">
                <header className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
                        <span className="text-sm text-zinc-400">Módulo "Desvendando o Redux"</span>
                    </div>

                    <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 font-medium text-white hover:bg-violet-600 "><MessageCircle size={16} /> Deixar feedback</button>
                </header>
                <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
                    <div className="flex-1">
                        <div className="w-full bg-zinc-950 aspect-video">
                            <ReactPlayer
                                width='100%'
                                height='100%'
                                controls
                                url={'https://www.youtube.com/watch?v=3wWzcunjIcc'}
                            />
                        </div>
                    </div>

                    <aside className="w-80 border-l border-zinc-800 bg-zinc-900 absolute top-0 bottom-0 right-0 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 divide-y-2 divide-zinc-900">
                        <div className="">
                            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                                <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">1</span>
                                <div className="flex flex-col">
                                    <span className="font-sm">Aula 01</span>
                                    <span className="text-xs text-zinc-400">12 aulash</span>
                                </div>

                                <ChevronDown size={16} className="ml-auto" />
                            </button>


                        </div>
                        <div className="">
                            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                                <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">1</span>
                                <div className="flex flex-col">
                                    <span className="font-sm">Aula 01</span>
                                    <span className="text-xs text-zinc-400">12 aulash</span>
                                </div>

                                <ChevronDown size={16} className="ml-auto" />
                            </button>

                            <nav className="relative flex flex-col gap-4 p-6">
                                <button className="flex items-center ga
                                 text-sm text-zinc-400">
                                    <Video size={16} className="text-zinc-500 ml-2" />
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                                </button>
                            </nav>
                        </div>
                        <div className="">
                            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                                <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">1</span>
                                <div className="flex flex-col">
                                    <span className="font-sm">Aula 01</span>
                                    <span className="text-xs text-zinc-400">12 aulash</span>
                                </div>

                                <ChevronDown size={16} className="ml-auto" />
                            </button>

                            <nav className="relative flex flex-col gap-4 p-6">
                                <button className="flex items-center ga
                                 text-sm text-zinc-400">
                                    <Video size={16} className="text-zinc-500 ml-2" />
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                                </button>
                            </nav>
                        </div>
                        <div className="">
                            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                                <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">1</span>
                                <div className="flex flex-col">
                                    <span className="font-sm">Aula 01</span>
                                    <span className="text-xs text-zinc-400">12 aulash</span>
                                </div>

                                <ChevronDown size={16} className="ml-auto" />
                            </button>

                            <nav className="relative flex flex-col gap-4 p-6">
                                <button className="flex items-center ga
                                 text-sm text-zinc-400">
                                    <Video size={16} className="text-zinc-500 ml-2" />
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                                </button>
                            </nav>
                        </div>
                        <div className="">
                            <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                                <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">1</span>
                                <div className="flex flex-col">
                                    <span className="font-sm">Aula 01</span>
                                    <span className="text-xs text-zinc-400">12 aulash</span>
                                </div>

                                <ChevronDown size={16} className="ml-auto" />
                            </button>

                            <nav className="relative flex flex-col gap-4 p-6">
                                <button className="flex items-center ga
                                 text-sm text-zinc-400">
                                    <Video size={16} className="text-zinc-500 ml-2" />
                                    <span>Fundamentos do Redux</span>
                                    <span className="ml-auto font-mono text-xs text-zinc-500">09:13</span>
                                </button>
                            </nav>
                        </div>
                    </aside>
                </main>
            </div>
        </div>
    )
}