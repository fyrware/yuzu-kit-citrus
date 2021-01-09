import { Theme } from 'yuzu'

export class CitrusTheme extends Theme {

    public value = {
        colors: {
            [ CitrusTheme.Colors.Background ]: new Theme.Color(Theme.Color.RGB, 32, 37, 56),
            [ CitrusTheme.Colors.Foreground ]: new Theme.Color(Theme.Color.RGB, 255, 255, 255),
            [ CitrusTheme.Colors.Primary ]: new Theme.Color(Theme.Color.RGB, 94, 64, 211),
            [ CitrusTheme.Colors.Secondary ]: new Theme.Color(Theme.Color.RGB, 254, 145, 0),
            [ CitrusTheme.Colors.Tertiary ]: new Theme.Color(Theme.Color.RGB, 88, 184, 127),
            [ CitrusTheme.Colors.Quaternary ]: new Theme.Color(Theme.Color.RGB, 15, 139, 221),
            [ CitrusTheme.Colors.Success ]: new Theme.Color(Theme.Color.RGB, 94, 64, 211),
            [ CitrusTheme.Colors.Information ]: new Theme.Color(Theme.Color.RGB, 254, 145, 0),
            [ CitrusTheme.Colors.Warning ]: new Theme.Color(Theme.Color.RGB, 88, 184, 127),
            [ CitrusTheme.Colors.Error ]: new Theme.Color(Theme.Color.RGB, 15, 139, 221)
        },
        fonts: {
            [ CitrusTheme.Fonts.Default ]: new Theme.Font('sofia-pro')
        },
        gradients: {},
        lines: {
            [ CitrusTheme.Lines.None ]: 0,
            [ CitrusTheme.Lines.Thin ]: 1,
            [ CitrusTheme.Lines.Medium ]: 2,
            [ CitrusTheme.Lines.Thick ]: 3
        },
        paddings: {
            [ CitrusTheme.Paddings.None ]: 0,
            [ CitrusTheme.Paddings.Small ]: 1,
            [ CitrusTheme.Paddings.Medium ]: 2,
            [ CitrusTheme.Paddings.Large ]: 3
        },
        radii: {
            [ CitrusTheme.Radii.None ]: 0,
            [ CitrusTheme.Radii.Small ]: 6,
            [ CitrusTheme.Radii.Medium ]: 12,
            [ CitrusTheme.Radii.Large ]: 24
        },
        shadows: {}
    }
}

export namespace CitrusTheme {

    export enum Fonts {
        Default = 'default'
    }

    export enum Colors {
        Background = 'background',
        Foreground = 'foreground',
        Primary = 'primary',
        Secondary = 'secondary',
        Tertiary = 'tertiary',
        Quaternary = 'quaternary',
        Success = 'success',
        Information = 'information',
        Warning = 'warning',
        Error = 'error'
    }

    export enum Lines {
        None = 'none',
        Thin = 'thin',
        Medium = 'medium',
        Thick = 'thick'
    }

    export enum Paddings {
        None = 'none',
        Small = 'small',
        Medium = 'medium',
        Large = 'large'
    }

    export enum Radii {
        None = 'none',
        Small = 'small',
        Medium = 'medium',
        Large = 'large'
    }

    export enum Size {
        Small = 'small',
        Medium = 'medium',
        Large = 'large',
    }

    export enum Urls {
        IconFont = 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
        TextFont = 'https://use.typekit.net/fzk8fid.css'
    }
}
