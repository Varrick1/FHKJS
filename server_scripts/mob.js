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

event.shaped(
        Item.of('mcdw:crossbow_cog_crossbow'),
        [
            ' S ',
            'SES',
            ' S '
        ],
        {

            S:'create:cogwheel',
            E:'minecraft:crossbow'

        }
    )

    event.shaped(
        Item.of('mcdw:sword_coral_blade'),
        [
            ' SS',
            ' KS',
            'G  '
        ],
        {

            S:'hybrid-aquatic:coral_chunk',
            K:'mcdw:dagger_dagger',
            G:'minecraft:gold_ingot'

        }
    )

    event.shaped(
        Item.of('mcdw:sword_sponge_striker'),
        [
            ' SP',
            ' KS',
            'G  '
        ],
        {

            S:'hybrid-aquatic:coral_chunk',
            K:'mcdw:sword_coral_blade',
            G:'minecraft:gold_ingot',
            P:'minecraft:sponge'

        }
    )

    event.shaped(
        Item.of('mcdw:sword_sponge_striker'),
        [
            'OSO',
            'PCS',
            'BPO'
        ],
        {

            S:'minecraft:netherite_scrap',
            O:'minecraft:obsidian',
            B:'minecraft:blaze_rod',
            P:'minecraft:crimson_planks',
            C:'minecraft:crossbow'

        }
    )

    event.shapeless(
        Item.of('mcdw:bow_ancient_bow'),
        ['minecraft:skeleton_skull',
         'minecraft:bow'
        ]
    )
})