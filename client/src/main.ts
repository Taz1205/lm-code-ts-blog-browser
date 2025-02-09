import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { addUser } from "./menu/options/add_user/add_user";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { addUserToServer } from "./api/add_user_to_server";
import { State } from "./states/state";
import { states } from "./states/states";
import { clear, print, printNewLine, prompt } from "./ui/console";

async function begin() {
	clear(true.toString());
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

const stateHandlers = {
	"MENU": showMenu,
	"SEND_MESSAGE": sendMessage,
	
	"SHOW_POSTS": async function() {
	  clear("");
	  await showAllPosts();
	  return states.MENU;
	},
	"SHOW_USERS": async function() {
	  clear("");
	  await showAllUsers();
	  return states.MENU;
	},
	"BROWSE_POSTS": async function() {
	  clear("");
	  await browsePosts();
	  return states.MENU;
	},
	"ADD_USER": async function() {
		clear("");
		const user = await addUser();
		const response = await addUserToServer(user);
		if (response) {
		  print("User added successfully!");
		} else {
		  print("Something went wrong when adding the user. Please try again.");
		}
		await prompt("Press [ENTER] to return to the main menu!");
		return states.MENU;
	  },
	"UNKNOWN": async function() {
	  clear("");
	  print("😵 We have entered an unknown state.");
	  await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
	  return states.MENU;
	},
	"CABBAGE": async function() {
	  clear("");
	  print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
	  print("🥬      CABBAGE MODE UNLOCKED     🥬", false);
	  print("🥬     Why did you want this?     🥬", false);
	  print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
	  await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
	  return states.MENU;
	},
  };
  
  async function main() {
	let state = new State();
  
	while (true) {
	  let handler = stateHandlers[state.get()];
  
	  if (!handler) {
		clear("");
		print(`🌋 😱 Uh-oh, we've entered an invalid state: "${state.get()}"`);
		print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
		print("💥 Crashing the program now...  💥", false);
		print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
		printNewLine();
		exit(99);
	  }
  
	  state.set(await handler());
	}
  }
  
  begin();
