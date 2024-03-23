
import { Header } from "../components/Header"
import { VideoPlayer } from "../components/Video"
import { Module } from "../components/Module"
import { useAppSelector } from "../store"


export function Player() {
    //na context api quando usamos o dado do contexto em um componente, independente de qual dado ele atualizar
    //o componente vai atualizar
    //no redux extrai apenas a informação que eu quero, o selector só renderiza o componente se mudar essa informação
    //especifica

    const { modules } = useAppSelector(state => state.player.courses)
    return (
        <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
            <div className="flex w-[1100px] flex-col gap-6">
                <Header />
                <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
                    <div className="flex-1">
                        <VideoPlayer />
                    </div>

                    <aside className="w-80 border-l border-zinc-800 bg-zinc-900 absolute top-0 bottom-0 right-0 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 divide-y-2 divide-zinc-900">
                        {modules.map((module, index) => <Module key={module.id} moduleIndex={index} title={module.title} amountOfLesson={module.lessons.length} />)}

                    </aside>
                </main>
            </div>
        </div>
    )
}