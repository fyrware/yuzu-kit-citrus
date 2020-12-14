import { Theme } from 'yuzu'

// <link rel="stylesheet" href="https://use.typekit.net/fzk8fid.css">

export class Citrus extends Theme {

    public value = {
        colors: [
            new Theme.Color(Theme.Color.RGB, 32, 37, 56),
            new Theme.Color(Theme.Color.RGB, 255, 255, 255),
            new Theme.Color(Theme.Color.RGB, 94, 64, 211),
            new Theme.Color(Theme.Color.RGB, 254, 145, 0),
            new Theme.Color(Theme.Color.RGB, 88, 184, 127),
            new Theme.Color(Theme.Color.RGB, 15, 139, 221),
            new Theme.Color(Theme.Color.RGB, 94, 64, 211),
            new Theme.Color(Theme.Color.RGB, 254, 145, 0),
            new Theme.Color(Theme.Color.RGB, 88, 184, 127),
            new Theme.Color(Theme.Color.RGB, 15, 139, 221)
        ],
        fonts: [
            new Theme.Font('sofia-pro')
        ],
        gradients: [],
        shadows: []
    }
}

export namespace Citrus {

    export enum Fonts {
        Default
    }

    export enum Colors {
        Background,
        Foreground,
        Primary,
        Secondary,
        Tertiary,
        Quaternary,
        Success,
        Information,
        Warning,
        Error
    }

    export enum Size {
        Small,
        Medium,
        Large,
    }
}
