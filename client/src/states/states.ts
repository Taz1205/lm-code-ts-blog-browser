export type StateType  = "MENU" | "SEND_MESSAGE" | "SHOW_POSTS" | "SHOW_USERS" | "BROWSE_POSTS" | "ADD_USER" | "UNKNOWN";

export const states = {
    "MENU": "MENU" as StateType,
    "SEND_MESSAGE": "SEND_MESSAGE" as StateType,
    "SHOW_POSTS": "SHOW_POSTS" as StateType,
    "SHOW_USERS": "SHOW_USERS" as StateType,
    "BROWSE_POSTS": "BROWSE_POSTS" as StateType,
    "ADD_USER": "ADD_USER" as StateType,
    "UNKNOWN": "UNKNOWN" as StateType
  } as const;