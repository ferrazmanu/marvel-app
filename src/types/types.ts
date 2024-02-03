export interface RootState {
    auth: boolean;
    characters: CharactersProps;
    comics: ComicsProps;
    creators: CreatorsProps;
    theme?: string;
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
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    series: {
        items: [
            {
                name: string;
            },
        ];
    };
    stories: {
        items: [
            {
                name: string;
            },
        ];
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
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    series: {
        items: [
            {
                name: string;
            },
        ];
    };
    stories: {
        items: [
            {
                name: string;
            },
        ];
    };
    characters: {
        items: [
            {
                name: string;
            },
        ];
    };
    creators: {
        items: [
            {
                name: string;
                role: string;
            },
        ];
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
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    series: {
        items: [
            {
                name: string;
            },
        ];
    };
    stories: {
        items: [
            {
                name: string;
            },
        ];
    };
    comics: {
        items: [
            {
                name: string;
            },
        ];
    };
    events: {
        items: [
            {
                name: string;
            },
        ];
    };
}

export interface FiltersProps {
    filtersIds?: string[];
    search?: string;
    selectedFilterType?: string;
}

export interface OptionProps {
    id: number;
    value: string;
    title?: string;
    name?: string;
    fullName?: string;
    selected?: boolean;
    parameter?: string;
    default?: boolean;
    originalIssue?: {
        name: string;
    };
}

export interface FormProps {
    publicKey: string;
    privateKey: string;
    [key: string]: unknown;
}
