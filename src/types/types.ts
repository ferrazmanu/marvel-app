export interface RootState {
    keys: KeysProps;
    characters: CharactersProps[];
    comics: ComicsProps[];
    creators: CreatorsProps[];
}

export interface KeysProps {
    publicKey: string;
    privateKey: string;
}

export interface CharactersProps {
    name: string;
    id: string | number;
}

export interface ComicsProps {
    id: string | number;
    title: string;
}

export interface CreatorsProps {
    id: string | number;
    fullName: string;
}

export interface InputsProps {
    publicKey: string;
    privateKey: string;
    [key: string]: unknown;
}
