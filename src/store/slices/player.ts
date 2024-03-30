import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "..";
import { api } from "../../lib/axios";

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

//thunk é uma reducer que é async

export const loadCourses = createAsyncThunk("player/load", async () => {
  const response = await api.get("/courses");

  return response.data;
});

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
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
  extraReducers(builder) {
    builder.addCase(loadCourses.fulfilled, (state, action) => {
      state.courses = action.payload;
    });
  },
});

export const playerReducer = playerSlice.reducer;
export const { play, next } = playerSlice.actions;

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
