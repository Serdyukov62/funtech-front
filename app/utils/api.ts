import { ZAnketaForm } from "contracts/anketa/anketa";
import { BASE_URL } from "~/constants/api";

interface credentials {
    email: string;
    password: string;
}

interface activationCredentials{
    uid: string | null;
    token: string | null;
}


export async function postAnketa(data: ZAnketaForm, id: number, tokenValue: string) {
    const response = await fetch(`${BASE_URL}/users/${id}/`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Token ${tokenValue}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response;
}


 export async function signin (data: credentials) { {
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

    return dataUser;
}}

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
    return dataUser;
}

export async function getUser(tokenValue: string) {

    const response = await fetch(`${BASE_URL}/users/me/`, {
        headers: {
            'Authorization': `Token ${tokenValue}`
        }
    });
    const data = await response.json();
    return data;
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

export async function activate(data:activationCredentials) {
    const response = await fetch(`${BASE_URL}/users/activation/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const dataUser = await response.json();
    const errors = Object.values(dataUser);

    if(!response.ok) {
      throw new Error(errors.join(', '));
    }
  }

  export async function getEvent (id:string | undefined) {
    const res = await fetch(`${BASE_URL}/events/${id}/`)
    const data = await res.json()
    return data;
  }
