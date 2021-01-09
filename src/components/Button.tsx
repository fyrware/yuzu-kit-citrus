import { Component } from 'yuzu'

import { CitrusTheme } from '../themes/CitrusTheme'

export class Button extends Component implements Button.Options {

    public color = CitrusTheme.Colors.Primary
    public line = CitrusTheme.Lines.Medium
    public padding = CitrusTheme.Paddings.Medium
    public radius = CitrusTheme.Radii.Small
    public shape = Button.Shapes.Round
    public variant = Button.Variants.Contained

    protected render(): Component.Template {
        return [
            <HTMLButtonElement>
                <HTMLSlotElement/>
            </HTMLButtonElement>
        ]
    }

    protected theme(): Component.StyleSheet {
        const theme = this.getContext(CitrusTheme)

        return Component.createStyleSheet(this, css => {
            const color = theme.colors[ this.color ]
            const line = theme.lines[ this.line ]
            const padding = theme.paddings[ this.padding ]
            const radius = theme.radii[ this.radius ]

            css.define('color', color)

            css.selectHost(css => {
                css.write(`
                    display: contents
                `)
            })

            css.selectClass(HTMLButtonElement, css => {
                css.write(`
                    background-color: transparent;
                    border: none;
                    border-radius: 0;
                    color: ${ css.var('color') };
                    font: inherit;
                    padding: ${ padding / 2 }rem ${ padding }rem;
                `)

                if (this.shape === Button.Shapes.Disc) css.write(`
                    border-radius: 100%;
                `)
                else if (this.shape === Button.Shapes.Pill) css.write(`
                    border-radius: 100vh;
                `)
                else if (this.shape === Button.Shapes.Round) css.write(`
                    border-radius: ${ radius }px;
                `)

                if (this.variant === Button.Variants.Contained) css.write(`
                    background-color: ${ css.var('color') };
                `)
                else if (this.variant === Button.Variants.Outlined) css.write(`
                    border: ${ line }px solid ${ css.var('color') };
                `)

                css.selectHover(css => {
                    css.write(`
                        opacity: 0.8;
                    `)
                })
            })
        })
    }
}

export namespace Button {

    export enum Shapes {
        Disc = 'disc',
        Pill = 'pill',
        Round = 'round',
        Sharp = 'sharp'
    }

    export enum Variants {
        Contained = 'contained',
        Inverted = 'inverted',
        Outlined = 'outlined'
    }

    export interface Options {
        color: CitrusTheme.Colors
        line: CitrusTheme.Lines
        padding: CitrusTheme.Paddings
        radius: CitrusTheme.Radii
        shape: Shapes
        variant: Variants
    }
}
