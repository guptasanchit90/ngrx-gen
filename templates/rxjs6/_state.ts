export interface {{ properCase name }}State {
    loading: boolean;
    result: string[];
}

export const initial{{ properCase name }}State: {{ properCase name }}State = {
    loading: false,
    result: []
};
