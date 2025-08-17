console.info('Hello, World! (Loaded blood script)')

StartupEvents.registry('item', event => {
  event.create('fh:blood_bottle')
    .unstackable()
    .rarity('rare')
    .texture('kubejs:item/blood_bottle')

  event.create('fh:bloodberry_tea')
  .texture('kubejs:item/bloodberry')
  .unstackable()
  .tag('fh:blood')
  .rarity('rare')
  .useAnimation('drink')
  .food(food => {
    food
      .hunger(1)
      .saturation(1)
      .alwaysEdible()
  })
})

MoreJSEvents.registerPotionBrewing(event => {
    event.removeByPotion(null, null, 'galosphere:astral');
})
