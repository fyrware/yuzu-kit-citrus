import { Blueprint, Component } from 'yuzu'

import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Swatch } from '../components/Swatch'

import { CitrusTheme } from '../themes/CitrusTheme'

export class ButtonBlueprint extends Blueprint.Plan(Button, 'Intentionally clickable element') {

    protected configure() {
        const theme = this.getContext(CitrusTheme)

        return {
            color: {
                heading: 'Button Color',
                variant: Blueprint.Parameters.Variants.Color,
                default: CitrusTheme.Colors.Primary,
                options: [
                    {
                        label: 'Primary', 
                        glyph: [
                            <Swatch value={ theme.colors.primary }/>
                        ],
                        value: CitrusTheme.Colors.Primary
                    },
                    {
                        label: 'Secondary',
                        glyph: [
                            <Swatch value={ theme.colors.secondary }/>
                        ],
                        value: CitrusTheme.Colors.Secondary
                    },
                    {
                        label: 'Tertiary',
                        glyph: [
                            <Swatch value={ theme.colors.tertiary }/>
                        ],
                        value: CitrusTheme.Colors.Tertiary
                    },
                    {
                        label: 'Quaternary',
                        glyph: [
                            <Swatch value={ theme.colors.quaternary }/>
                        ],
                        value: CitrusTheme.Colors.Quaternary
                    },
                    {
                        label: 'Success',
                        glyph: [
                            <Swatch value={ theme.colors.success }/>
                        ],
                        value: CitrusTheme.Colors.Success
                    },
                    {
                        label: 'Info',
                        glyph: [
                            <Swatch value={ theme.colors.information }/>
                        ],
                        value: CitrusTheme.Colors.Information
                    },
                    {
                        label: 'Warn',
                        glyph: [
                            <Swatch value={ theme.colors.warning }/>
                        ],
                        value: CitrusTheme.Colors.Warning
                    },
                    {
                        label: 'Error',
                        glyph: [
                            <Swatch value={ theme.colors.error }/>
                        ],
                        value: CitrusTheme.Colors.Error
                    }
                ]
            },
            shape: {
                heading: 'Button Shape',
                variant: Blueprint.Parameters.Variants.Text,
                default: Button.Shapes.Round,
                options: [
                    { 
                        label: 'Disc', 
                        glyph: [],
                        value: Button.Shapes.Disc
                    },
                    { 
                        label: 'Pill', 
                        glyph: [],
                        value: Button.Shapes.Pill
                    },
                    { 
                        label: 'Round', 
                        glyph: [],
                        value: Button.Shapes.Round
                    },
                    { 
                        label: 'Sharp', 
                        glyph: [],
                        value: Button.Shapes.Sharp
                    }
                ]
            },
            variant: {
                label: 'Button Variant',
                default: Button.Variants.Contained,
                options: [
                    { 
                        label: 'Contained', 
                        glyph: [],
                        value: Button.Variants.Contained
                    },
                    { 
                        label: 'Inverted', 
                        glyph: [],
                        value: Button.Variants.Inverted
                    },
                    { 
                        label: 'Outlined', 
                        glyph: [],
                        value: Button.Variants.Outlined
                    }
                ]
            }
        }
    }
}
