import { Component } from 'yuzu'

import { Citrus } from '../themes/Citrus'

export class Button extends Component implements Button.Options {

    public color = Citrus.Colors.Primary
    public shape = Button.Shape.Rounded
    public size = Citrus.Size.Medium
    public variant = Button.Variant.Contained

    public render(): Component.Template {
        const attributes = {
            color: this.color,
            shape: this.shape,
            size: this.size,
            variant: this.variant
        }

        return [
            <HTMLButtonElement attributes={ attributes }>
                <HTMLSlotElement/>
            </HTMLButtonElement>
        ]
    }

    public theme(): Component.StyleSheet {
        const citrus = this.getContext(Citrus)

        return `
            :host {
                display: contents;
            }

            .${ HTMLButtonElement.name } {
                background-color: transparent;
                border: none;
                color: inherit;
                font: inherit;
            }

            [color = ${ Citrus.Palette.Primary }] {
                color: ${ citrus.palette[ Citrus.Palette.Primary ] };
            }

            [color = ${ Citrus.Palette.Secondary }] {
                color: ${ citrus.palette[ Citrus.Palette.Secondary ] };
            }

            [color = ${ Citrus.Palette.Tertiary }] {
                color: ${ citrus.palette[ Citrus.Palette.Tertiary ] };
            }

            [color = ${ Citrus.Palette.Quaternary }] {
                color: ${ citrus.palette[ Citrus.Palette.Quaternary ] };
            }
            
            [shape = ${ Button.Shape.Circle }] {
                border-radius: 100%;
            }

            [shape = ${ Button.Shape.Pill }] {
                border-radius: 100vh;
            }

            [shape = ${ Button.Shape.Rounded }] {
                border-radius: 4px;
            }

            [shape = ${ Button.Shape.Sharp }] {
                border-radius: 0;
            }

            [size = ${ Citrus.Size.Small }] {
                font-size: 1em;
                padding: 0.5em 1.25em;
            }

            [size = ${ Citrus.Size.Medium }] {
                font-size: 1.25em;
                padding: 0.75em 1.5em;
            }

            [size = ${ Citrus.Size.Large }] {
                font-size: 1.5em;
                padding: 1em 1.75em;
            }

            [variant = ${ Button.Variant.Contained }] {
                background-color: currentcolor;
                color: white;
            }

            [variant = ${ Button.Variant.Inverted }] {
                color: currentcolor;
            }

            [variant = ${ Button.Variant.Outlined }] {
                box-shadow: inset 0 0 0 3px currentcolor;
            }
        `
    }
}

export namespace Button {

    export interface Options {
        color: Citrus.Palette
        shape: Shape
        size: Citrus.Size
        variant: Variant
    }

    export enum Shape {
        Circle,
        Pill,
        Rounded,
        Sharp
    }

    export enum Variant {
        Contained,
        Inverted,
        Outlined,
    }
}