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
    if (!response.ok) {
        if(response.status === 400){
            throw new Error('Невозможно войти с предоставленными учетными данными.')
        }
        throw new Error('Что то пошло не так!');
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

    if (!response.ok) {
        if(response.status === 400){
            throw new Error('Невозможно зарегистрироваться с предоставленными учетными данными.')
        }
        throw new Error('Что то пошло не так!')
    }
    return response.json();
}
