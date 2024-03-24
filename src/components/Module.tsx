import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

import * as Collapsible from '@radix-ui/react-collapsible';
import { useAppSelector } from "../store";

import { useDispatch } from "react-redux";
import { play } from "../store/slices/player";

interface IModuleProps {
    title: string;
    amountOfLesson: number;
    moduleIndex: number
}

export function Module({ amountOfLesson, moduleIndex, title }: IModuleProps) {

    const lessons = useAppSelector(state => state.player.courses.modules[moduleIndex].lessons)
    const { currentLessonIndex, currentModuleIndex } = useAppSelector(state => state.player)

    const dispatch = useDispatch()



    return (
        <Collapsible.Root className="group">
            <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">{moduleIndex + 1}</span>
                <div className="flex flex-col">
                    <span className="font-sm">{title}</span>
                    <span className="text-xs text-zinc-400 mr-auto">{amountOfLesson} aulas</span>
                </div>

                <ChevronDown size={16} className="ml-auto  group-data-[state=open]:rotate-180 transition-transform" />
            </Collapsible.Trigger>
            <Collapsible.Content>
                <nav className="relative flex flex-col gap-4 p-6">
                    {lessons.map((item, lessonIndex) => {
                        return (
                            <Lesson
                                onPlay={() => dispatch(play([moduleIndex, lessonIndex]))}
                                key={item.id}
                                title={item.title}
                                duration={item.duration}
                                isCurrent={moduleIndex === currentModuleIndex && lessonIndex === currentLessonIndex}
                            />
                        )
                    })}

                </nav>
            </Collapsible.Content>

        </Collapsible.Root>
    )
}