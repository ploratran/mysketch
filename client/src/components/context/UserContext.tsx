import { createContext } from 'react';

// @ts-ignore
export const UserContext = createContext(null);

/**
 * Sample user data: 
 * {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibWltaXRyYW4wMTI5QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibWltaXRyYW4iLCJwYXNzd29yZCI6IiQyYiQxMCRLTWk3d05UNmR5M0QydndmVjVYbTQuMTRKMXplQWpQWTRjNm1lU2lwM0ZVbnZsbjdpQ2hhZSIsIl9pZCI6IjYyMTJjMTY3YmZjZDJhOWUzNmM5MTM2NiIsIl9fdiI6MH0sImlhdCI6MTY0NTM5NjMyN30.GGqKPKXbQjABfm6D5Tj4zKbtPNgOYuASOipJpusImaQ",
    "user": {
        "email": "mimitran0129@gmail.com",
        "username": "mimitran",
        "password": "$2b$10$KMi7wNT6dy3D2vwfV5Xm4.14J1zeAjPY4c6meSip3FUnvln7iChae",
        "_id": "6212c167bfcd2a9e36c91366",
        "__v": 0
    }
}
*/