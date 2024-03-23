import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";

import * as Collapsible from '@radix-ui/react-collapsible';

interface IModuleProps {
    title: string;
    amountOfLesson: number;
    moduleIndex: number
}

export function Module({ amountOfLesson, moduleIndex, title }: IModuleProps) {
    return (
        <Collapsible.Root>
            <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">{moduleIndex + 1}</span>
                <div className="flex flex-col">
                    <span className="font-sm">{title}</span>
                    <span className="text-xs text-zinc-400 mr-auto">{amountOfLesson} aulas</span>
                </div>

                <ChevronDown size={16} className="ml-auto" />
            </Collapsible.Trigger>
            <Collapsible.Content>
                <nav className="relative flex flex-col gap-4 p-6">
                    <Lesson title='Fundamentos do redux' duration="09:13" />
                    <Lesson title='Fundamentos do redux' duration="09:13" />
                    <Lesson title='Fundamentos do redux' duration="09:13" />
                </nav>
            </Collapsible.Content>

        </Collapsible.Root>
    )
}