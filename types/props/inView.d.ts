export type InViewOnChange = ( inView: boolean ) => void;

export interface InViewProps {
    onChange: InViewOnChange;
    threshold: number;
}