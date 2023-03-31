const INITIAL_STATE = {
    name: "Mert C#n",
    age: 23
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload }
        case "SET_AGE":
            return { ...state, age: action.payload }
        default:
            break;
    }
}