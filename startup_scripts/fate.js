StartupEvents.registry('item', event => {
//alcohol
    event.create('fh:bourbon')
        .maxStackSize(16)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/bourbon.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 14400, 4, 1)
        })
    event.create('fh:shot_of_bourbon')
        .maxStackSize(64)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/bourbon_shot.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 720, 1, 1)
        })

        event.create('fh:shot_of_rum')
        .maxStackSize(64)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/rum_shot.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 720, 1, 1)
        })

    event.create('fh:gin')
        .maxStackSize(16)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/gin.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 14400, 4, 1)
        })
        event.create('fh:shot_of_gin')
        .maxStackSize(64)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/gin_shot.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 720, 1, 1)
        })

    event.create('fh:sake')
        .maxStackSize(16)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/sake.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 14400, 4, 1)
        })
    event.create('fh:shot_of_sake')
        .maxStackSize(64)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/sake_shot.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 720, 1, 1)
        })

    event.create('fh:tequila')
        .maxStackSize(16)
        .useAnimation('drink')
        .texture('kubejs:item/tequila.png')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 14400, 4, 1)
        })
    event.create('fh:shot_of_tequila')
        .maxStackSize(64)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/tequila_shot.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 720, 1, 1)
        })

    event.create('fh:vermouth')
        .maxStackSize(16)
        .texture('kubejs:item/vermouth.png')
        .useAnimation('drink')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 14400, 4, 1)
        })
    event.create('fh:shot_of_vermouth')
        .maxStackSize(64)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/vermouth_shot.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 720, 1, 1)
        })

    event.create('fh:vodka')
        .maxStackSize(16)
        .texture('kubejs:item/vodka.png')
        .useAnimation('drink')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 14400, 4, 1)
        })
    event.create('fh:shot_of_vodka')
        .maxStackSize(64)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/vodka_shot.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 720, 1, 1)
        })

    event.create('fh:whiskey')
        .maxStackSize(16)
        .texture('kubejs:item/whiskey.png')
        .useAnimation('drink')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 14400, 4, 1)
        })
        event.create('fh:shot_of_whiskey')
        .maxStackSize(64)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/whiskey_shot.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 720, 1, 1)
        })

    event.create('fh:absinthe')
        .maxStackSize(16)
        .texture('kubejs:item/absinthe.png')
        .useAnimation('drink')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 14400, 6, 1)
                .effect('frightsdelight:hysteria', 10000, 3, 1)
                .effect('frightsdelight:chills', 10000, 3, 1)
                .effect('more_rpg_classes:stun', 20, 2, 1)
        })
    event.create('fh:shot_of_absinthe')
        .maxStackSize(64)
        .useAnimation('drink')
        .tag('fh:drink')
        .texture('kubejs:item/absinthe_shot.png')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 720, 2, 1)
                .effect('frightsdelight:hysteria', 5000, 1, 1)
                .effect('frightsdelight:chills', 5000, 1, 1)
                .effect('more_rpg_classes:stun', 1, 1, 1)
        })
//materials
    event.create('fh:cola')
        .texture('kubejs:item/coke.png')
        .useAnimation('drink')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(1)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })
    
    event.create('fh:cocktail_shaker')
        .texture('kubejs:item/shaker.png')
        .tag('fh:drink')

    event.create('fh:tapioca_pearls')
        .texture('kubejs:item/tapioca_pearls')
        .tag('fh:drink')

    event.create('fh:soda_water')
        .useAnimation('drink')
        .texture('kubejs:item/soda_water')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(2)
                .alwaysEdible()
        })
//boba
    event.create('fh:soul_berry_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/soul_berry')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })

    event.create('fh:coffee_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/coffee')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })

    event.create('fh:mango_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/mango')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })

    event.create('fh:dragonfruit_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/dragonfruit')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })
        
    event.create('fh:thai_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/thai_tea')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })
        
    event.create('fh:wither_berry_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/wither_berry')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('frightsdelight:hysteria', 2000, 0, 1)
        })
        
    event.create('fh:taro_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/taro')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })
        
    event.create('fh:matcha_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/matcha')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })
        
    event.create('fh:honey_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/honey')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })
        
    event.create('fh:vanilla_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/vanilla')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })
        
    event.create('fh:brown_sugar_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/brown_sugar')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })
        
    event.create('fh:strawberry_boba_tea')
        .useAnimation('drink')
        .texture('kubejs:item/strawberry')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(2)
                .saturation(2)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
        })
//mixed drinks
    event.create('fh:oni_coffee')
    .useAnimation('drink')
        .texture('kubejs:item/irish_coffee')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })
    
    event.create('fh:gimlet')
    .useAnimation('drink')
        .texture('kubejs:item/gimlet')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 1000, 0, 1)
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:mauve_stinger')
    .useAnimation('drink')
        .texture('kubejs:item/oak')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('farmersdelight:comfort', 2000, 0, 1)
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:bloody_mary')
    .useAnimation('drink')
        .texture('kubejs:item/bloody_mary')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:martini')
    .useAnimation('drink')
        .texture('kubejs:item/martini')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })
    
    event.create('fh:paloma')
    .useAnimation('drink')
        .texture('kubejs:item/paloma')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:screwdriver')
    .useAnimation('drink')
        .texture('kubejs:item/screwdriver')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:margarita')
    .useAnimation('drink')
        .texture('kubejs:item/margarita')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 3000, 1, 1)
        })

    event.create('fh:sazerac')
    .useAnimation('drink')
        .texture('kubejs:item/sazerac')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 4000, 2, 1)
        })

    event.create('fh:pina_colada')
    .useAnimation('drink')
        .texture('kubejs:item/pina_colada')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })
    
    event.create('fh:penis_collider')
    .useAnimation('drink')
        .texture('kubejs:item/penis_collider')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 8000, 9, 1)
                .effect('nirvana:peace', 8000, 3, 1)
        })
    
    event.create('fh:mimosa')
    .useAnimation('drink')
        .texture('kubejs:item/mimosa')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:sex_on_the_beach')
    .useAnimation('drink')
        .texture('kubejs:item/sex_on_the_beach')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })
    
    event.create('fh:frozen_daquiri')
    .useAnimation('drink')
        .texture('kubejs:item/frozen_daquiri')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:frozen_strawberry_daquiri')
    .useAnimation('drink')
        .texture('kubejs:item/frozen_strawberry_daquiri')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:frozen_banana_daquiri')
    .useAnimation('drink')
        .texture('kubejs:item/frozen_banana_daquiri')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:cane_cola')
    .useAnimation('drink')
        .texture('kubejs:item/cuba_libre')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:old_fashioned')
    .useAnimation('drink')
        .texture('kubejs:item/old_fashioned')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:daquiri')
    .useAnimation('drink')
        .texture('kubejs:item/daquiri')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:tamagozake')
    .useAnimation('drink')
        .texture('kubejs:item/tamagozake')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:florian_mule')
    .useAnimation('drink')
        .texture('kubejs:item/moscow_mule')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:whiskey_sour')
    .useAnimation('drink')
        .texture('kubejs:item/whiskey_sour')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:sake_bomb')
    .useAnimation('drink')
        .texture('kubejs:item/sake_bomb')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:cascade')
    .useAnimation('drink')
        .texture('kubejs:item/manhattan')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:mai_tai')
    .useAnimation('drink')
        .texture('kubejs:item/mai_tai')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:eggnog')
    .useAnimation('drink')
        .texture('kubejs:item/eggnog')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
                .effect('farmersdelight:comfort', 4000, 3, 1)
        })

    event.create('fh:mojito')
    .useAnimation('drink')
        .texture('kubejs:item/mojito')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:cosmopolitan')
    .useAnimation('drink')
        .texture('kubejs:item/cosmopolitan')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

    event.create('fh:hot_toddy')
    .useAnimation('drink')
        .texture('kubejs:item/hot_toddy')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 1000, 1, 1)
        })

    event.create('fh:green_tea_shot')
    .useAnimation('drink')
        .texture('kubejs:item/green_tea_shot')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 3000, 1, 1)
        })

    event.create('fh:bog_tea')
    .useAnimation('drink')
        .texture('kubejs:item/long_island_iced_tea')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 3000, 1, 1)
        })

    event.create('fh:fruit_cup')
    .useAnimation('drink')
        .texture('kubejs:item/fruit_cup')
        .tag('fh:drink')
        .food(food => {
            food
                .hunger(0)
                .saturation(0)
                .alwaysEdible()
                .effect('brewinandchewin:tipsy', 2000, 1, 1)
        })

//Daifuku
        event.create('fh:anko_daifuku')
        .texture('kubejs:item/anko_daifuku.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:anko_strawberry_daifuku')
        .texture('kubejs:item/anko_strawberry_daifuku.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:coffee_daifuku')
        .texture('kubejs:item/coffee_daifuku.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(2)
                .saturation(4)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:creme_caramel_daifuku')
        .texture('kubejs:item/creme_caramel_daifuku.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:green_tea_daifuku')
        .texture('kubejs:item/green_tea_daifuku.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:mame_daifuku')
        .texture('kubejs:item/mame_daifuku.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:sesame_daifuku')
        .texture('kubejs:item/sesame_daifuku.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:strawberry_daifuku')
        .texture('kubejs:item/strawberry_daifuku.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:taro_daifuku')
        .texture('kubejs:item/taro_daifuku.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:ume_daifuku')
        .texture('kubejs:item/ume_daifuku.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

//Dango
        event.create('fh:anko_dango')
        .texture('kubejs:item/anko_dango.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)

        })

        event.create('fh:botchan_dango')
        .texture('kubejs:item/botchan_dango.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:cha_dango')
        .texture('kubejs:item/cha_dango.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:hanami_dango')
        .texture('kubejs:item/hanami_dango.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:kinaka_dango')
        .texture('kubejs:item/kinaka_dango.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:kusa_dango')
        .texture('kubejs:item/kusa_dango.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:mitarashi_dango')
        .texture('kubejs:item/mitarashi_dango.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:plain_dango')
        .texture('kubejs:item/plain_dango.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

        event.create('fh:yomogi_dango')
        .texture('kubejs:item/yomogi_dango.png')
        .tag('fh:food')
        .food(food => {
            food
                .hunger(4)
                .saturation(2)
                .effect('farmersdelight:comfort', 2000, 1, 1)
        })

})