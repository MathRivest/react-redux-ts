import { Action } from 'redux';

export type AppAction<A = Action, P = any> = A & { payload: P };

export function makeActionCreator<P, T extends string = string>(type: T) {
    function actionCreator(payload?: P): AppAction<Action<typeof type>, P> {
        return {
            type,
            payload: payload ? payload : ({} as any)
        };
    }

    return actionCreator;
}
