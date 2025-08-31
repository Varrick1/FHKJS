ServerEvents.recipes(event => {
    event.shaped(
        Item.of('verdance:silkworm_eggs'),
        [
            'DSD',
            'SES',
            'YSY'
        ],
        {
            D: 'minecraft:white_dye',
            S: 'crittersandcompanions:silk',
            E: 'minecraft:egg',
            Y: 'minecraft:yellow_dye'

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
            D: 'minecraft:red_dye',
            S: 'crittersandcompanions:silk',
            E: 'minecraft:egg',
            Y: 'minecraft:lime_dye'

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

            S: 'create:cogwheel',
            E: 'minecraft:crossbow'

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

            S: 'hybrid-aquatic:coral_chunk',
            K: 'mcdw:dagger_dagger',
            G: 'minecraft:gold_ingot'

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

            S: 'hybrid-aquatic:coral_chunk',
            K: 'mcdw:sword_coral_blade',
            G: 'minecraft:gold_ingot',
            P: 'minecraft:sponge'

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

            S: 'minecraft:netherite_scrap',
            O: 'minecraft:obsidian',
            B: 'minecraft:blaze_rod',
            P: 'minecraft:crimson_planks',
            C: 'minecraft:crossbow'

        }
    )

    event.shapeless(
        Item.of('mcdw:bow_ancient_bow'),
        ['minecraft:skeleton_skull',
            'minecraft:bow'
        ]
    )

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "minecraft:coal"
            },
            {
                "item": "minecraft:coal"
            },
            {
                "item": "minecraft:basalt"
            },
            {
                "amount": 8100,
                "fluid": "minecraft:lava",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": "minecraft:blackstone"
            }
        ]
    })

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "twigs:cobblestone_bricks"
            },
            {
                "item": "minecraft:flint"
            },
            {
                "item": "minecraft:flint"
            },
            {
                "amount": 8100,
                "fluid": "minecraft:lava",
                "nbt": {}
            }
        ],
        "results": [
            {
                "item": "minecraft:deepslate"
            }
        ]
    })

    function wood(output, ruwood) {
    event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [
                {
                    "item": ruwood
                }
            ],
            "result": [
                {
                    "item": output
                },
                {
                    "item": "farmersdelight:tree_bark"
                }
            ],
            "sound": "minecraft:item.axe.strip",
            "tool": {
                "fabric:type": "farmersdelight:tool_action",
                "action": "axe_strip"
            }       
    })}

    wood('regions_unexplored:stripped_bamboo_log', "regions_unexplored:bamboo_log")
    wood('regions_unexplored:stripped_small_oak_log', "regions_unexplored:small_oak_log")
    wood('regions_unexplored:stripped_baobab_log', "regions_unexplored:baobab_log")
    wood('regions_unexplored:stripped_baobab_wood', "regions_unexplored:baobab_wood")
    wood('regions_unexplored:stripped_blackwood_log', "regions_unexplored:blackwood_log")
    wood('regions_unexplored:stripped_blackwood_wood', "regions_unexplored:blackwood_wood")
    wood('regions_unexplored:stripped_blue_bioshroom_stem', "regions_unexplored:blue_bioshroom_stem")
    wood('regions_unexplored:stripped_blue_bioshroom_hyphae', "regions_unexplored:blue_bioshroom_hyphae")
    wood('regions_unexplored:stripped_green_bioshroom_stem', "regions_unexplored:green_bioshroom_stem")
    wood('regions_unexplored:stripped_green_bioshroom_hyphae', "regions_unexplored:green_bioshroom_hyphae")
    wood('regions_unexplored:stripped_yellow_bioshroom_stem', "regions_unexplored:yellow_bioshroom_stem")
    wood('regions_unexplored:stripped_yellow_bioshroom_hyphae', "regions_unexplored:yellow_bioshroom_hyphae")
    wood('regions_unexplored:stripped_brimwood_log', "regions_unexplored:brimwood_log")
    wood('regions_unexplored:stripped_brimwood_wood', "regions_unexplored:brimwood_wood")
    wood('regions_unexplored:stripped_cobalt_log', "regions_unexplored:cobalt_log")
    wood('regions_unexplored:stripped_cobalt_wood', "regions_unexplored:cobalt_wood")
    wood('regions_unexplored:stripped_cypress_log', "regions_unexplored:cypress_log")
    wood('regions_unexplored:stripped_cypress_wood', "regions_unexplored:cypress_wood")
    wood('regions_unexplored:stripped_redwood_log', "regions_unexplored:redwood_log")
})