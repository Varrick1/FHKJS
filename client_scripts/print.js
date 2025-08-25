ItemEvents.tooltip(event => {
    event.addAdvanced('numismatics:cog', (item, advanced, text) => {
        text.add(1, Text.of('TEST'))
    })
})