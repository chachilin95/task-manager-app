export interface DispatchProps {
    logout: () => Promise<void>
}

export type Props = DispatchProps;