import { Action as AuthAction, State as AuthState } from './auth.types';
import { Action as TaskAction, State as TaskState } from './tasks.types';

export type Actions = AuthAction | TaskAction;

export type State = {
    auth: AuthState,
    tasks: TaskState
};

export type Dispatch = (action: Actions) => void;