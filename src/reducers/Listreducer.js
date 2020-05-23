

const initialstate = {};

export default function (state = initialstate, action) {
    switch (action.type) {
        case "COVID_LIST":
            return action.payload;

        default:
            return state;
    }
}