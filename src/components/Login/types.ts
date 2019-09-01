import { LoginUser } from '../../types/auth.types';

export interface DispatchProps {
    login: (user: LoginUser) => Promise<void>
};

export type Props = DispatchProps;