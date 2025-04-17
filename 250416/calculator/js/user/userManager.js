export let userState = false; // false면 활성화x, true 활성화

export function changeUserState(newState) { 
    userState = newState;
    return userState;
}