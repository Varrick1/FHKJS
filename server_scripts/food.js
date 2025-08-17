ServerEvents.recipes(event => {
//DAIFUKU
function daiFlavor(output, flavorInput, flavorInput2) {
        event.shaped(output, [
            ' F ',
            'RGR',
            'SWS'
        ], {
            F: flavorInput,
            S: 'minecraft:sugar',
            G: flavorInput2,
            R: '#c:crops/rice',
            W: '#c:water_bottles'
        })
    }

    daiFlavor('fh:anko_daifuku', 'minecraft:red_dye', 'croptopia:blackbean')
    daiFlavor('fh:anko_strawberry_daifuku', 'croptopia:strawberry', 'croptopia:blackbean')
    daiFlavor('fh:coffee_daifuku','#fh:coffee_beans','minecraft:air')
    daiFlavor('fh:creme_caramel_daifuku','#fh:milk','croptopia:caramel')
    daiFlavor('fh:green_tea_daifuku','herbalbrews:dried_green_tea','herbalbrews:green_tea_leaf')
    daiFlavor('fh:mame_daifuku','croptopia:blackbean','vegandelight:soybean')
    daiFlavor('fh:sesame_daifuku','supplimentaries:flax_seeds','supplimentaries:flax_seeds')
    daiFlavor('fh:strawberry_daifuku','croptopia:strawberry','minecraft:air')
    daiFlavor('fh:taro_daifuku','trailandtales_delight:pitcher_taro','minecraft:air')
    daiFlavor('fh:ume_daifuku','croptopia:plum','minecraft:air')


//DANGO

function danFlavor(output, flavorInput, flavorInput2, flavorInput3) {
      event.shaped(output, [
            'FRS',
            'GPW',
            'T  ' 
        ], {
            F: flavorInput,
            S: 'minecraft:sugar',
            G: flavorInput2,
            R: flavorInput3,
            W: '#c:water_bottles',
            P: 'croptopia:rice',
            T: 'minecraft:stick'
        })
    }

    danFlavor('fh:kinaka_dango', 'vegandelight:soybean', 'minecraft:air', 'minecraft:air')
    danFlavor('fh:anko_dango','minecraft:red_dye', 'minecraft:air', 'croptopia:blackbean')
    danFlavor('fh:yomogi_dango','minecraft:red_dye','croptopia:basil','croptopia:blackbean')
    danFlavor('fh:kusa_dango','minecraft:air','croptopia:basil', 'minecraft:air')
    danFlavor('fh:mitarashi_dango','minecraft:air','minecraft:sugar', 'croptopia:soy_sauce')
    danFlavor('fh:plain_dango','minecraft:air','minecraft:air','minecraft:air')
    danFlavor('fh:cha_dango','herbalbrews:dried_green_tea','minecraft:air','herbalbrews:dried_green_tea')
    danFlavor('fh:botchan_dango','croptopia:blackbean','minecraft:egg','herbalbrews:dried_green_tea')
    danFlavor('fh:hanami_dango','minecraft:pink_dye','minecraft:air','herbalbrews:dried_green_tea')


})