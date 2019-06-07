// Pišem u js tak da mogu pisat komentare
const struktura = {
    users: {
        id: "int",
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        occupation: "string",
        hash: "string",
        date: "timestamp"
    },
    exercises: {
        id: "int",
        name: "string",
        user: "int",
        group: "int", // ID grupe kojoj vježba pripada,
        date: "timestamp",
        data: {
            reps: "int", // ili Boolen, true false
            repRange: "int", // ili Boolen, true false
            rpe: "int", // ili Boolen, true false
            time: "int", // ili Boolen, true false
            weight: "int" // ili Boolen, true false
        }
    },
    groups: {
        id: "int",
        name: "string",
        parent: "id", // Parent grupa kojoj grupa pripada
        date: "timestamp"
    },
    userExercises: {
        // Tablica sa vježbama korisnika, pošto korisnici mogu kreirati svoje vježbe, sve vježbe ne smiju biti dostupne svim korisnicima
        // Imao bih neke globalne vježbe, koje bi kod kreiranja korisnika ubacio u ovu tablicu i povezao za određenog korisnika.
        // Na taj način korisnik ima neke default vježbe, ali ih može obrisati i to će se odnositi samo na njega
        // Možemo napraviti ili ovako, ili u tablicu users spremati array sa id-evima vježbi
        // ista stvar vrijedi i za userGroups
        user: "int",
        exercise: "int"
    },
    userGroups: {
        user: "int",
        group: "int"
    },
    workouts: {
        id: "int",
        date: "timestamp",
        note: "string",
        workoutFinished: "int" // ili Boolen, true false
    },
    workoutExercises: {
        id: "int",
        workoutID: "int",
        exerciseID: "int",
        date: "timestamp",
        note: "string",
        exerciseFinished: "int" // ili Boolen, true false
    },
    exerciseSets: {
        id: "int",
        workoutExerciseID: "int",
        date: "timestamp",
        data: {
            reps: "int",
            time: "string",
            weight: "float",
            rpe: "float",
            note: "string",
            restBetweenSets: "string", // tu ćemo zapisat vrijeme od prethodno unešene serije do trenutka kad je ova serija unešena
            video: "string" // nećemo sad radit ali stavljam samo
        }
    }
};
