export interface RootState {
    keys: KeysProps;
    characters: CharactersProps;
    comics: ComicsProps;
    creators: CreatorsProps;
}

export interface KeysProps {
    publicKey: string;
    privateKey: string;
}

export interface CharactersProps {
    count: number;
    limit: number;
    offset: number;
    results: CharacterProps[];
    total: number;
}

export interface CharacterProps {
    name: string;
    id: string | number;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export interface ComicsProps {
    count: number;
    limit: number;
    offset: number;
    results: ComicProps[];
    total: number;
}
export interface ComicProps {
    id: string | number;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export interface CreatorsProps {
    count: number;
    limit: number;
    offset: number;
    results: CreatorProps[];
    total: number;
}
export interface CreatorProps {
    id: string | number;
    fullName: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

export interface InputsProps {
    publicKey: string;
    privateKey: string;
    [key: string]: unknown;
}
