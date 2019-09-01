import { CreateUser } from '../../types/auth.types';

export interface DispatchProps {
    createAccount: (user: CreateUser) => Promise<void>
};

export type Props = DispatchProps;