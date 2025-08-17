ServerEvents.tags('item', event => {
    event.add('fh:blood', 'fh:blood_bottle')
    event.add('swordblockingmechanics:can_perform_sword_blocking', '#fh:twohanded')
    event.remove('swordblockingmechanics:can_perform_sword_blocking', '#minecraft:swords')
})