export interface Admin {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface AdminRequest {
    name: string;
    email: string;
    password: string;
}