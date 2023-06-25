import { User } from "../types/posts.types";

export interface UserInput {
	userName: string;
  }

let allUsers: User[] = [
	{
		id: "1",
		userName: "Spicy Hotfish",
		creationDate: new Date(),
	},
	{
		id: "2",
		userName: "Sally-Anne Writerperson",
		creationDate: new Date(),
	},
	{
		id: "3",
		userName: "Jimmy Alias",
		creationDate: new Date(),
	},
	{
		id: "4",
		userName: 'Steve "The Hoop" Hooper',
		creationDate: new Date(),
	},
];

export function getAllUsers(): User[] {
	return allUsers;
}

let currentId = 5;
export function addUser(userData: UserInput) {
    const newId = (currentId++).toString();
    const newName = userData.userName;

    let saveUser = { id: newId, userName: newName, creationDate: new Date() };

    allUsers.push(saveUser);
    return saveUser;
}
