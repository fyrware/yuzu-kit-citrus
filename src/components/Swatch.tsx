import { Component, Theme } from 'yuzu'

export class Swatch extends Component implements Swatch.Options {

    public value: Theme.Color

    protected render(): Component.Template {
        return []
    }

    protected theme(): Component.StyleSheet {
        return `
            :host {
                display: contents;
            }
        `
    }
}

export namespace Swatch {

    export interface Options {
        value: Theme.Color
    }
}