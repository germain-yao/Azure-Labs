import sc300 from "./questions/sc-300.json";

export function getQuestions(certificationId: string) {

    switch (certificationId) {

        case "sc-300":

            return sc300;

        default:

            return [];

    }

}