ServerEvents.tags('item', event => {
    event.add('fh:absinthegreen', 'nirvana:weed')
    event.add('fh:absinthegreen', 'twigs:bamboo_leaves')
    event.add('fh:absinthegreen', 'croptopia:kale')
    event.add('fh:absinthegreen', 'croptopia:spinach')
    event.add('fh:absinthegreen', 'croptopia:tea_leaves')
    event.add('fh:absinthegreen', 'herbal_brews:green_tea_leaf')
    event.add('fh:absinthegreen', 'croptopia:sea_lettuce')
    event.add('fh:absinthegreen', 'ubesdelight:lemongrass')

    event.add('fh:grain', 'minecraft:wheat')
    event.add('fh:grain', 'croptopia:barley')

    event.add('fh:brown_sugar', 'createfood:brown_sugar')
    event.add('fh:brown_sugar', 'ubesdelight:sugar_brown')

    event.add('fh:coffee_beans', 'herbalbrews:coffee_beans')
    event.add('fh:coffee_beans', 'croptopia:coffee_beans')
    event.add('fh:coffee_beans', 'ravencoffee:coffee_beans_roasted')

    event.add('fh:milk', 'splash_milk:milk_bottle')
    event.add('fh:milk', 'splash_milk:splash_milk_bottle')
    event.add('fh:milk', 'splash_milk:lingering_milk_bottle')
    event.add('fh:milk', 'farmersdelight:milk_bottle')
    event.add('fh:milk', 'croptopia:milk_bottle')
    event.add('fh:milk', 'vegandelight:soymilk_bottle')
    event.add('fh:milk', 'croptopia:soy_milk')

    event.add('fh:molasses', 'createfood:blackstrap_molasses')
    event.add('fh:molasses', 'createfood:molasses')
    event.add('fh:molasses', 'croptopia:molasses')

    event.add('c:crops/grape', '#vinery:grapes')

    event.add('c:coconuts', 'natures_spirit:coconut_half')
})

ServerEvents.recipes(event => {

    event.shaped(
        Item.of('sophisticatedbackpacks:backpack'),
        [
            'LNL',
            'LSL',
            'LLL'
        ],
        {
            N: 'minecraft:iron_nugget',
            S: 'minecraft:string',
            L: '#c:leather'
        }
    )
    
    event.remove({ output: 'ravencoffee:coffee_beans_magma_block' })
    event.remove({ output: 'ravencoffee:coffee_plates' })
    event.remove({ output: 'ravencoffee:coffee_ingot' })
    event.remove({ input: 'ravencoffee:coffee_ingot' })
    event.remove({ id: 'croptopia:beer' })
    event.remove({ output: 'minecraft:wither_skeleton_skull' })
    event.remove({ id: 'croptopia:wine' })
    event.remove({ output: '#numismatics:cards' })

    event.shapeless(
        Item.of('fh:shot_of_bourbon', 4),
        ['fh:bourbon']

    ).replaceIngredient('fh:bourbon', 'minecraft:glass_bottle')

    event.shapeless(
        Item.of('fh:shot_of_whiskey', 4),
        ['fh:whiskey']

    ).replaceIngredient('fh:whiskey', 'minecraft:glass_bottle')

    event.shapeless(
        Item.of('fh:shot_of_sake', 4),
        ['fh:sake']

    ).replaceIngredient('fh:sake', 'minecraft:glass_bottle')

    event.shapeless(
        Item.of('fh:shot_of_gin', 4),
        ['fh:gin']

    ).replaceIngredient('fh:gin', 'minecraft:glass_bottle')

    event.shapeless(
        Item.of('fh:shot_of_vermouth', 4),
        ['fh:vermouth']

    ).replaceIngredient('fh:vermouth', 'minecraft:glass_bottle')

    event.shapeless(
        Item.of('fh:shot_of_tequila', 4),
        ['fh:tequila']

    ).replaceIngredient('fh:tequila', 'minecraft:glass_bottle')

    event.shapeless(
        Item.of('fh:shot_of_absinthe', 4),
        ['fh:absinthe']

    ).replaceIngredient('fh:absinthe', 'minecraft:glass_bottle')

    event.shapeless(
        Item.of('fh:shot_of_vodka', 4),
        ['fh:vodka']

    ).replaceIngredient('fh:vodka', 'minecraft:glass_bottle')

    event.shapeless(
        Item.of('fh:shot_of_rum', 4),
        ['croptopia:rum']

    ).replaceIngredient('croptopia:rum', 'minecraft:glass_bottle')

    event.shapeless(
        Item.of('fh:tapioca_pearls'),
        ['croptopia:yam']
    )

    event.shaped(
        Item.of('fh:soda_water'),
        [
            'CWP'
        ],
        {
            C: 'natures_spirit:calcite_shard',
            W: 'croptopia:water_bottle',
            P: 'croptopia:food_press'
        }
    )

    event.shaped(
        Item.of('fh:cocktail_shaker'),
        [
            ' N ',
            'N N',
            ' B '
        ],
        {
            N: 'minecraft:iron_nugget',
            B: 'minecraft:bucket'
        }
    )
    //mixed drinks
    event.shaped(
        Item.of('fh:oni_coffee'),
        [
            ' S ',
            'WCR'
        ],
        {
            S: 'fh:cocktail_shaker',
            W: 'fh:shot_of_whiskey',
            C: 'croptopia:coffee',
            R: 'croptopia:whipping_cream'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:gimlet'),
        [
            ' S ',
            'L G'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'croptopia:limeade',
            G: 'fh:shot_of_gin'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:mauve_stinger'),
        [
            ' S ',
            'L G'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'herbalbrews:hibiscus_tea',
            G: 'fh:shot_of_sake'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:bloody_mary'),
        [
            ' S ',
            'L G'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'croptopia:tomato_juice',
            G: 'fh:shot_of_vodka'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:paloma'),
        [
            ' S ',
            'LOG'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'croptopia:orange',
            O: 'fh:shot_of_tequila',
            G: 'croptopia:limeade'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:martini'),
        [
            ' S ',
            'LOG'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'fh:shot_of_vermouth',
            O: 'croptopia:olive',
            G: 'fh:shot_of_vodka'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:screwdriver'),
        [
            ' S ',
            'LO ',
            ' G '
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'croptopia:orange_juice',
            O: 'fh:shot_of_vodka',
            G: 'ravencoffee:cup_medium'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:margarita'),
        [
            ' S ',
            'LOG'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'fh:shot_of_tequila',
            O: 'croptopia:limeade',
            G: 'croptopia:orange_juice'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:sazerac'),
        [
            ' S ',
            'LOG'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'fh:shot_of_absinthe',
            O: 'minecraft:sugar',
            G: 'fh:whiskey'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:pina_colada'),
        [
            ' SG',
            'LOG'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'fh:shot_of_rum',
            O: 'croptopia:pineapple_juice',
            G: '#c:coconut'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:mimosa'),
        [
            ' S ',
            'L G'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'croptopia:wine',
            G: 'croptopia:orange_juice'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:sex_on_the_beach'),
        [
            ' S ',
            'LOG',
            ' V '
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'croptopia:cranberry_juice',
            O: 'croptopia:peach',
            G: 'croptopia:orange_juice',
            V: 'fh:shot_of_vodka'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:frozen_daquiri'),
        [
            ' S ',
            'LOG',
            ' V '
        ],
        {
            S: 'croptopia:food_press',
            L: 'fh:shot_of_rum',
            O: 'minecraft:ice',
            G: 'minecraft:sugar',
            V: 'croptopia:limeade'
        }
    )

    event.shaped(
        Item.of('fh:frozen_strawberry_daquiri'),
        [
            ' S ',
            'LOG',
            'V B'
        ],
        {
            S: 'croptopia:food_press',
            L: 'fh:shot_of_rum',
            O: 'minecraft:ice',
            G: 'minecraft:sugar',
            V: 'croptopia:limeade',
            B: 'croptopia:strawberry'
        }
    )

    event.shaped(
        Item.of('fh:frozen_banana_daquiri'),
        [
            ' S ',
            'LOG',
            'V B'
        ],
        {
            S: 'croptopia:food_press',
            L: 'fh:shot_of_rum',
            O: 'minecraft:ice',
            G: 'minecraft:sugar',
            V: 'croptopia:limeade',
            B: 'croptopia:banana'
        }
    )

    event.shaped(
        Item.of('fh:cane_cola'),
        [
            ' S ',
            'L G'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'fh:shot_of_rum',
            G: 'fh:cola'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:old_fashioned'),
        [
            'LG'
        ],
        {
            L:'fh:shot_of_whiskey',
            G:'minecraft:ice'
        }
    )

    event.shaped(
        Item.of('fh:daquiri'),
        [
            ' S ',
            'LOG'
        ],
        {
            S:'fh:cocktail_shaker',
            L:'fh:shot_of_rum',
            O:'croptopia:limeade',
            G:'minecraft:sugar'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:tamagozake'),
        [
            ' S ',
            'LOG'
        ],
        {
            S:'fh:cocktail_shaker',
            L:'fh:shot_of_sake',
            O:'minecraft:egg',
            G:'minecraft:sugar'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:daquiri'),
        [
            ' S ',
            'LOG'
        ],
        {
            S:'fh:cocktail_shaker',
            L:'fh:shot_of_rum',
            O:'croptopia:limeade',
            G:'minecraft:sugar'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:florian_mule'),
        [
            ' S ',
            'LOG'
        ],
        {
            S:'fh:cocktail_shaker',
            L:'fh:shot_of_vodka',
            O:'croptopia:limeade',
            G:'croptopia:ginger'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:whiskey_sour'),
        [
            ' S ',
            'LOG'
        ],
        {
            S:'fh:cocktail_shaker',
            L:'fh:shot_of_whiskey',
            O:'croptopia:lemonade',
            G:'minecraft:egg'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:cascade'),
        [
            ' S ',
            'LOG'
        ],
        {
            S:'fh:cocktail_shaker',
            L:'fh:shot_of_whiskey',
            O:'fh:shot_of_vermouth',
            G:'croptopia:cherry'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

        event.shaped(
        Item.of('fh:mai_tai'),
        [
            ' S ',
            'LOG',
            ' V '
        ],
        {
            S:'fh:cocktail_shaker',
            L:'fh:shot_of_rum',
            O:'croptopia:limeade',
            G:'croptopia:almond',
            V:'croptopia:orange_juice'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')
    
    event.shaped(
        Item.of('fh:eggnog'),
        [
            ' S ',
            'LOG',
            'EUH'
        ],
        {
            S:'fh:cocktail_shaker',
            L:'#fh:milk',
            O:'minecraft:sugar',
            G:'minecraft:egg',
            E:'fh:shot_of_whiskey',
            U:'fh:shot_of_rum',
            H:'fh:shot_of_bourbon'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:mojito'),
        [
            ' S ',
            'LOG'
        ],
        {
            S:'fh:cocktail_shaker',
            L:'croptopia:basil',
            O:'croptopia:limeade',
            G:'fh:shot_of_rum'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:cosmopolitan'),
        [
            ' S ',
            'LOG'
        ],
        {
            S:'fh:cocktail_shaker',
            L:'fh:shot_of_vodka',
            O:'croptopia:cranberry_juice',
            G:'croptopia:limeade'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:hot_toddy'),
        [
            ' S ',
            'LOG',
            ' V '
        ],
        {
            S:'fh:cocktail_shaker',
            L:'minecraft:honey_bottle',
            O:'croptopia:lemonade',
            G:'expandeddelight:ground_cinnamon',
            V:'fh:shot_of_whiskey'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:green_tea_shot'),
        [
            'SMP',
            'LOG'
        ],
        {
            S:'fh:cocktail_shaker',
            M:'croptopia:lemon',
            P:'croptopia:peach',
            L:'fh:soda_water',
            O:'croptopia:lime',
            G:'fh:shot_of_whiskey'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:fruit_cup'),
        [
            ' S ',
            'LOG',
            ' V '
        ],
        {
            S:'fh:cocktail_shaker',
            L:'fh:shot_of_vermouth',
            O:'fh:shot_of_bourbon',
            G:'fh:cola',
            V:'croptopia:orange'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')

    event.shaped(
        Item.of('fh:bog_tea'),
        [
            ' S ',
            'LOG',
            'ICE'
        ],
        {
            S:'fh:cocktail_shaker',
            L:'fh:shot_of_vodka',
            O:'fh:shot_of_tequila',
            G:'fh:shot_of_rum',
            I:'fh:cola',
            C:'fh:shot_of_gin',
            E:'croptopia:lemonade'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')
 

    event.shaped(
        Item.of('fh:penis_collider'),
        [
            ' S ',
            'LOL',
            ' S '
        ],
        {
            S:'regions_unexplored:prismaglass',
            L:'nirvana:weed',
            O:'fh:pina_colada'
        }
    )

    event.shaped(
        Item.of('fh:sake_bomb'),
        [
            ' S ',
            'L G'
        ],
        {
            S: 'fh:cocktail_shaker',
            L: 'fh:shot_of_sake',
            G: 'croptopia:beer'
        }
    )
        .replaceIngredient('fh:cocktail_shaker', 'fh:cocktail_shaker')
})

//BOBA

ServerEvents.recipes(event => {
    function flavor(output, flavorInput) {
        event.shaped(output, [
            ' M ',
            'SFP'
        ], {
            M: '#fh:milk',
            S: 'minecraft:sugar',
            F: flavorInput,
            P: 'fh:tapioca_pearls'
        })
    }

    flavor('fh:soul_berry_boba_tea', 'frightsdelight:soul_berry')
    flavor('fh:coffee_boba_tea', '#fh:coffee_beans')
    flavor('fh:mango_boba_tea', 'croptopia:mango')
    flavor('fh:dragonfruit_boba_tea', 'croptopia:dragonfruit')
    flavor('fh:thai_boba_tea', 'herbalbrews:dried_black_tea')
    flavor('fh:wither_berry_boba_tea', 'frightsdelight:wither_berry')
    flavor('fh:taro_boba_tea', 'trailandtales_delight:pitcher_taro')
    flavor('fh:matcha_boba_tea', 'herbalbrews:dried_green_tea')
    flavor('fh:honey_boba_tea', 'minecraft:honey_bottle')
    flavor('fh:vanilla_boba_tea', 'croptopia:vanilla')
    flavor('fh:brown_sugar_boba_tea', '#fh:brown_sugar')
    flavor('fh:strawberry_boba_tea', 'croptopia:strawberry')
})
