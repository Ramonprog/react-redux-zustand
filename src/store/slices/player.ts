import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

interface Course {
  id: number;
  modules: Array<{
    id: number;
    title: string;
    lessons: Array<{
      id: string;
      title: string;
      duration: string;
    }>;
  }>;
}

export interface PlayerState {
  courses: Course | null;
  currentModuleIndex: number;
  currentLessonIndex: number;
}

const initialState: PlayerState = {
  courses: null,
  currentLessonIndex: 0,
  currentModuleIndex: 0,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    start: (state, action: PayloadAction<Course>) => {
      state.courses = action.payload; // Ajustado para 'courses'
    },
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
    next: (state) => {
      const currentModule = state.courses?.modules[state.currentModuleIndex];

      if (!currentModule) return;

      const nextLessonIndex = state.currentLessonIndex + 1;

      if (nextLessonIndex < currentModule.lessons.length) {
        state.currentLessonIndex = nextLessonIndex;
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1;
        if (nextModuleIndex < state.courses?.modules?.length) {
          state.currentModuleIndex = nextModuleIndex;
          state.currentLessonIndex = 0;
        } else {
          console.log("Não há mais lições para avançar.");
        }
      }
    },
  },
});

export const playerReducer = playerSlice.reducer;
export const { play, next, start } = playerSlice.actions;

export const useCurrentLesson = () => {
  return useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player;

    const currentModule = state.player.courses?.modules[currentModuleIndex];
    const currentLesson = currentModule?.lessons[currentLessonIndex];

    return {
      currentLesson,
      currentModule,
    };
  });
};
