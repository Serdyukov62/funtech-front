import { BASE_URL } from "~/constants/api";

interface credentials {
    email: string;
    password: string;
}

 export async function signin (data: credentials)  {
    const response = await fetch(`${BASE_URL}/auth/token/login/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const dataUser = await response.json();
    const errors: string[] = Object.values(dataUser);


    if (!response.ok) {
        throw new Error(errors.join(', '));
    }

    return response.json();
}

export async function signUp (data: credentials)  {
    const response = await fetch(`${BASE_URL}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const dataUser = await response.json()
    const errors: string[] = Object.values(dataUser);

    if (!response.ok) {
        throw new Error(errors.join(', '));
    }
    return response.json();
}

export async function getFutureEvents(){
    const response = await fetch(`${BASE_URL}/events/?status=upcoming`);
    const events = await response.json();
    return events.results;
}

export async function getPastEvents(){
    const response = await fetch(`${BASE_URL}/events/?status=past`);
    const events = await response.json();
    return events.results;
}
