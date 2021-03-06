import * as requester from 'requester';

export function getUsers() {
    // Add authentication
    return requester.get('api/users');
}

export function getClients() {
    return requester.get('api/clients');
}


export function login(username, passHash) {
    const body = {
        username,
        passHash
    };

    return requester.put('api/auth', body);
}

export function register(username, passHash) {
    const body = {
        username,
        passHash
    };

    return requester.post('api/users', body);
}
export function addClient(name, profession, age, trainings, endDate, price, picture) {
    const body = {
        name,
        profession,
        age,
        trainings,
        endDate,
        price,
        picture
    };

    return requester.post('api/clients', body);
}
export function addTrainingDay(date, id) {
    const body = {
        date,
        id
    };

    return requester.post('api/profile', body);
}


export function addExercise(exercise, series, reps, kg, dayId, profileId) {
    const body = {
        exercise,
        series,
        reps,
        kg,
        dayId,
        profileId
    };

    return requester.post('api/day', body);
}