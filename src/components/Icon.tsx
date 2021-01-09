import { Component } from 'yuzu'

import { CitrusTheme } from '../themes/CitrusTheme'

export class Icon extends Component implements Icon.Options {

    public glyph = 'checkbox-blank-circle-fill'

    protected render(): Component.Template {
        return [
            <HTMLLinkElement href={ CitrusTheme.Urls.IconFont } rel='stylesheet'/>,
            <HTMLElement is='i' className={ `ri-${ this.glyph }` }/>
        ]
    }

    protected theme(): Component.StyleSheet {
        return `
            :host {
                display: contents;
            }
        `
    }
}

export namespace Icon {

    export interface Options {
        glyph: string
    }
}