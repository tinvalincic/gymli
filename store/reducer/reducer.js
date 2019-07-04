import initState from "../initState";

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "PROBNA_AKCIJA_ZAPISI":
            return Object.assign({}, state, {
                vrijednost: action.vrijednost
            });
        default:
            return state;
    }
};

export default reducer;
