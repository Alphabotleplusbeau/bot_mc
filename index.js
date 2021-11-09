const minecraft=require('mineflayer')
const bot =minecraft.createBot({
    host: 'localhost',
    port: 51752,
    username:'bloupl'
})

function plus_proche_joueur() {
    const Filtre = (entity) => entity.type ==='player'
    const playerEntity=bot.nearestEntity(Filtre)

    if (!playerEntity) return
    
    const pos = playerEntity.position
    bot.lookAt(pos)
}

bot.on('physicTick',plus_proche_joueur)