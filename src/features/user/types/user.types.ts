export interface PayloadUpdateMe {
    email: string;
    userName: string;
    firstName?: string;
    lastName?: string;
    profilePicture?: string;
    dateOfBirth?: Date;
}

export interface UserState {
    email: string;
    userName: string;
    firstName: string;
    lastName: string;
    profilePicture: string;
    dateOfBirth: Date;
}
