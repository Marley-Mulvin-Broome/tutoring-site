export enum Platform {
    HighschoolTutors = "HighschoolTutors",
    GitHub = "GitHub",
    Superprof = "Superprof",
    LinkedIn = "LinkedIn",
    Gmail = "Gmail",
}

export interface ExternalLink {
    platform: Platform;
    url: string;
}