import { Component } from 'yuzu'

import { Button } from '../components/Button'

import { Citrus } from '../themes/Citrus'

class Blueprint<Pattern extends Component = Component> extends Component {

}

namespace Blueprint {

    export interface Parameters {}
}

export class ButtonBlueprint extends Blueprint {
    
    public pattern = Button

    protected configure(): Blueprint.Parameters {
        const citrus = this.getContext(Citrus)

        return {
            color: {
                heading: 'Button Color',
                default: Citrus.Colors.Primary,
                options: [
                    {
                        label: 'Primary', 
                        glyph: citrus.colors[ Citrus.Colors.Primary ],
                        value: Citrus.Colors.Primary
                    },
                    {
                        label: 'Secondary',
                        glyph: citrus.colors[ Citrus.Colors.Secondary ],
                        value: Citrus.Colors.Secondary
                    },
                    {
                        label: 'Tertiary',
                        glyph: citrus.colors[ Citrus.Colors.Tertiary ],
                        value: Citrus.Colors.Tertiary
                    },
                    {
                        label: 'Quaternary',
                        glyph: citrus.colors[ Citrus.Colors.Quaternary ],
                        value: Citrus.Colors.Quaternary
                    },
                    {
                        label: 'Success',
                        glyph: citrus.colors[ Citrus.Colors.Success ],
                        value: Citrus.Colors.Success
                    },
                    {
                        label: 'Info',
                        glyph: citrus.colors[ Citrus.Colors.Information ],
                        value: Citrus.Colors.Information
                    },
                    {
                        label: 'Warn',
                        glyph: citrus.colors[ Citrus.Colors.Warning ],
                        value: Citrus.Colors.Warning
                    },
                    {
                        label: 'Error',
                        glyph: citrus.colors[ Citrus.Colors.Error ],
                        value: Citrus.Colors.Error
                    }
                ]
            }
        }
    }
}

export const ButtonBlueprint2 = {
    metadata: {
        description: 'Element which is intentionally clickable',
        label: 'Button'
    },
    options: {
        color: {
            label: 'Button Color',
            default: Citrus.Colors.Primary,
            options: [
                {
                    label: 'Primary',
                    value: Citrus.Colors.Primary
                },
                {
                    label: 'Secondary',
                    value: Citrus.Colors.Secondary
                },
                {
                    label: 'Tertiary',
                    value: Citrus.Colors.Tertiary
                },
                {
                    label: 'Quaternary',
                    value: Citrus.Colors.Quaternary
                },
                {
                    label: 'Success',
                    value: Citrus.Colors.Success
                },
                {
                    label: 'Info',
                    value: Citrus.Colors.Information
                },
                {
                    label: 'Warn',
                    value: Citrus.Colors.Warning
                },
                {
                    label: 'Error',
                    value: Citrus.Colors.Error
                }
            ]
        },
        shape: {
            label: 'Button Shape',
            default: Button.Shape.Rounded,
            options: [
                { 
                    label: 'Circle', 
                    value: Button.Shape.Circle
                },
                { 
                    label: 'Pill', 
                    value: Button.Shape.Pill
                },
                { 
                    label: 'Rounded', 
                    value: Button.Shape.Rounded
                },
                { 
                    label: 'Sharp', 
                    value: Button.Shape.Sharp
                }
            ]
        },
        size: {
            label: 'Button Size',
            default: Citrus.Size.Medium,
            options: [
                {
                    label: 'Small',
                    value: Citrus.Size.Small
                },
                {
                    label: 'Medium',
                    value: Citrus.Size.Medium
                },
                {
                    label: 'Large',
                    value: Citrus.Size.Large
                }
            ]
        },
        variant: {
            label: 'Button Variant',
            default: Button.Variant.Contained,
            options: [
                { 
                    label: 'Contained', 
                    value: Button.Variant.Contained
                },
                { 
                    label: 'Inverted', 
                    value: Button.Variant.Inverted
                },
                { 
                    label: 'Outlined', 
                    value: Button.Variant.Outlined
                }
            ]
        }
    }
}
