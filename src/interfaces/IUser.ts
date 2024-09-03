interface IUser {
    id: string;
    name: string;
    email: string;
   posts?: IPost[];
}