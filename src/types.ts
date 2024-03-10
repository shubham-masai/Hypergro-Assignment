

export interface MovieData {
    postId: string;
    creator: {
        name: string;
        id: string;
        handle: string;
        pic: string;
    };
    comment: {
        count: number;
        commentingAllowed: boolean;
    };
    reaction: {
        count: number;
        voted: boolean;
    };
    submission: {
        title: string;
        description: string;
        mediaUrl: string;
        thumbnail: string;
        hyperlink: string;
        placeholderUrl: string;
    };
}

type ActionPayload = string | any[] | null;
type ActionType = String;


export interface Action {
    type: ActionType;
    payload?: ActionPayload;
}

interface FooterLink {
    title: string;
    links: string[];
}

interface SocialMediaLink {
    id: string;
    icon: string;
    link: string;
}

export interface FooterProps {
    footerLinks: FooterLink[];
    socialMedia: SocialMediaLink[];
}

export interface RootState {
    moviesData: MovieData[];
    isLoading: boolean;
}

export interface Comment {
    text: string;
    timestamp: string;
}