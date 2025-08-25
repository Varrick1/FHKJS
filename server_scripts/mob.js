ServerEvents.recipes(event => {
event.shaped(
        Item.of('verdance:silkworm_eggs'),
        [
            'DSD',
            'SES',
            'YSY'
        ],
        {
            D:'minecraft:white_dye',
            S:'crittersandcompanions:silk',
            E:'minecraft:egg',
            Y:'minecraft:yellow_dye'

        }
    )

event.shaped(
        Item.of('naturalist:caterpillar'),
        [
            'DSD',
            'SES',
            'YSY'
        ],
        {
            D:'minecraft:red_dye',
            S:'crittersandcompanions:silk',
            E:'minecraft:egg',
            Y:'minecraft:lime_dye'

        }
    )
})