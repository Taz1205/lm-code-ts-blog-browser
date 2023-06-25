import { addUserToServer } from "../../../api/add_user_to_server";
import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";
export type User = {
	id: string;
	name: string;
	creationDate: Date;
};

export async function addUser(){
	clear("");
	let userName: string = await prompt("Please enter user name: ");
	printNewLine();
	print(`📨 Sending user details for ${userName}...`);

	return userName;
}
