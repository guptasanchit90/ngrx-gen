export interface NgrxDemoState {
    loading: boolean;
    result: string[];
}

export const initialNgrxDemoState: NgrxDemoState = {
    loading: false,
    result: []
}