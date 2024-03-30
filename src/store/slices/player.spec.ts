import { describe, expect, it } from "vitest";
import {
  PlayerState,
  next,
  play,
  playerSlice,
  playerReducer as reducer,
} from "./player";

const exampleState: PlayerState = {
  courses: {
    id: 1,
    modules: [
      {
        id: 1,
        title: "Iniciando com React",
        lessons: [
          { id: "Jai8w6K_GnY", title: "CSS Modules", duration: "13:45" },
          {
            id: "w-DW4DhDfcw",
            title: "Estilização do Post",
            duration: "10:05",
          },
        ],
      },
      {
        id: 2,
        title: "Estrutura da aplicação",
        lessons: [
          {
            id: "gE48FQXRZ_o",
            title: "Componente: Comment",
            duration: "13:45",
          },
          { id: "Ng_Vk4tBl0g", title: "Responsividade", duration: "10:05" },
        ],
      },
    ],
  },
  currentLessonIndex: 0,
  currentModuleIndex: 0,
};

describe("player slice", () => {
  it("should be able to play", () => {
    const initialState = playerSlice.getInitialState();
    const state = reducer(initialState, play([1, 2]));

    expect(state.currentModuleIndex).equal(1);
    expect(state.currentLessonIndex).equal(2);
  });

  it("should be able to play next video automatically", () => {
    const state = reducer(exampleState, next());

    expect(state.currentModuleIndex).equal(0);
    expect(state.currentLessonIndex).equal(1);
  });

  it("should be able to jump to the next module automatically", () => {
    const state = reducer({ ...exampleState, currentLessonIndex: 1 }, next());

    expect(state.currentModuleIndex).equal(1);
    expect(state.currentLessonIndex).equal(0);
  });

  it("should not update tha current module and lesson index if there is no next lesson avilable", () => {
    const state = reducer(
      { ...exampleState, currentLessonIndex: 1, currentModuleIndex: 1 },
      next()
    );

    expect(state.currentModuleIndex).equal(1);
    expect(state.currentLessonIndex).equal(1);
  });
});
