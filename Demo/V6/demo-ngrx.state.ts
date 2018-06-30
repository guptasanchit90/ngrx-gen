export interface DemoNgrxState {
    loading: boolean;
    result: string[];
}

export const initialDemoNgrxState: DemoNgrxState = {
    loading: false,
    result: []
};
