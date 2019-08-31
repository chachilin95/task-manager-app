import { User } from '../../types/auth.types';

export interface DispatchProps {
    login: (user: User) => Promise<void>
};

export type Props = DispatchProps;