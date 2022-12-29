import type { Dispatch, SetStateAction } from 'react';

export type SetState<T extends any = any> = Dispatch<SetStateAction<T>>;