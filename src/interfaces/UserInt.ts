
export interface UserInt {
    id?: string | number | null;
    auth: boolean;
    username: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
}

export interface UpdateUserInt {
    username?: string;
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
}
