import { createContext, useContext } from "react";
import { ExamEngine } from "../engine/ExamEngine";

export const ExamContext = createContext<ExamEngine | null>(null);

export function useExam() {

    const engine = useContext(ExamContext);

    if (!engine) {

        throw new Error("ExamContext introuvable.");

    }

    return engine;

}