namespace SpriteKind {
    export const shooter = SpriteKind.create()
    export const ghost = SpriteKind.create()
    export const zombie = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.zombie, SpriteKind.shooter, function (sprite, otherSprite) {
    music.bigCrash.play()
    sprite.setPosition(sprite.x + 30, sprite.y)
    otherSprite.destroy(effects.fire, 1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (FlowerPower == 1 && planting == 0) {
        planting = 1
        FlowerPower = 0
        mySprite.setImage(img`
            . . . 5 . . . 5 . . . 5 . . . . 
            . . . 5 5 . . 5 . . 5 5 . . . . 
            . . . . 5 . . 5 . . 5 . . . . . 
            . . . . . e e e e e . . . . . . 
            . 5 5 5 e e e e e e e 5 5 5 . . 
            . . . . e e e f e f e . . . . . 
            . 5 5 5 e e e e e e e 5 5 5 . . 
            . . . . e f e e e e e . . . . . 
            . 5 5 5 e e f f f e e 5 5 5 . . 
            . . . . . e e e e e . . . . . . 
            . . . . 5 . . 7 . . 5 . . . . . 
            . . . 5 5 . 7 7 . . 5 5 . . . . 
            . . . 5 . . 7 7 7 . . 5 . . . . 
            . . . . . . . 7 7 . . . . . . . 
            . . . . . . 7 7 . . . . . . . . 
            . . . . . . 7 . . . . . . . . . 
            `)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . 7 7 . . 7 7 7 7 7 . . . . 
            . . 7 7 7 . . 7 f f f 7 7 . 7 . 
            . . 7 7 . . . 7 7 f f 7 7 7 7 . 
            . . 7 7 . . . . 7 7 f 7 . . . . 
            . . 7 7 . . . . . 7 7 7 . . . . 
            . . 7 7 . . . . . . . 7 . . . . 
            . . 7 7 . . . . . . . 7 7 7 7 . 
            . . 7 7 7 . . . . . 7 7 7 . 7 . 
            . . . 7 7 7 7 7 7 7 7 7 . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . 7 7 7 7 . . . . . . . . . 
            . . 7 . 7 7 . 7 . . . . . . . . 
            . . . . 7 7 . . . . . . . . . . 
            . . . . 7 7 . . . . . . . . . . 
            `, SpriteKind.ghost)
        mySprite2.setPosition(20, 60)
        controller.moveSprite(mySprite2)
        mySprite2.setStayInScreen(true)
    } else {
        if (planting == 1) {
            mySprite3 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . 7 7 7 7 7 7 7 7 7 . . . . 
                . . 7 7 7 7 7 7 f f f 7 7 . 7 . 
                . . 7 7 7 7 7 7 7 f f 7 7 7 7 . 
                . . 7 7 7 7 7 7 7 7 f 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 . . 7 . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
                . . 7 7 7 7 7 7 7 7 7 7 7 . 7 . 
                . . . 7 7 7 7 7 7 7 7 7 . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . 7 7 7 7 . . . . . . . . . 
                . . 7 . 7 7 . 7 . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                . . . . 7 7 . . . . . . . . . . 
                `, SpriteKind.shooter)
            mySprite3.setPosition(mySprite2.x, mySprite2.y)
            music.thump.play()
            mySprite2.destroy()
            planting = 0
        }
    }
})
sprites.onOverlap(SpriteKind.zombie, SpriteKind.Player, function (sprite, otherSprite) {
    music.zapped.play()
    sprite.destroy()
    otherSprite.destroy(effects.smiles, 1000)
    deadflower = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.zombie, function (sprite, otherSprite) {
    music.smallCrash.play()
    sprite.destroy()
    otherSprite.destroy(effects.ashes, 500)
    info.changeScoreBy(10)
})
let mySprite4: Sprite = null
let projectile: Sprite = null
let list: Sprite[] = []
let list2: Sprite[] = []
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let FlowerPower = 0
let planting = 0
let deadflower = 0
info.setScore(0)
deadflower = 0
let repeat = 0
let rate = 10000
planting = 0
FlowerPower = -1
scene.setBackgroundColor(7)
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd......................................................................................................
    `)
mySprite = sprites.create(img`
    . . . 5 . . . 5 . . . 5 . . . . 
    . . . 5 5 . . 5 . . 5 5 . . . . 
    . . . . 5 . . 5 . . 5 . . . . . 
    . . . . . e e e e e . . . . . . 
    . 5 5 5 e e e e e e e 5 5 5 . . 
    . . . . e e e f e f e . . . . . 
    . 5 5 5 e e e e e e e 5 5 5 . . 
    . . . . e f e e e e e . . . . . 
    . 5 5 5 e e f f f e e 5 5 5 . . 
    . . . . . e e e e e . . . . . . 
    . . . . 5 . . 7 . . 5 . . . . . 
    . . . 5 5 . 7 7 . . 5 5 . . . . 
    . . . 5 . . 7 7 7 . . 5 . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . 7 7 . . . . . . . . 
    . . . . . . 7 . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(10, 60)
game.onUpdate(function () {
    list2 = sprites.allOfKind(SpriteKind.zombie)
    for (let value of list2) {
        if (value.x <= 0) {
            game.over(false, effects.splatter)
        }
    }
})
game.onUpdate(function () {
    if (planting == 1) {
        if (mySprite2.x > 50) {
            mySprite2.x = 50
        }
    }
})
game.onUpdateInterval(5000, function () {
    list = sprites.allOfKind(SpriteKind.shooter)
    for (let value of list) {
        music.knock.play()
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . f 6 6 f . . . . . . 
            . . . . . f 6 6 6 6 f . . . . . 
            . . . . . f 6 6 6 6 f . . . . . 
            . . . . . . f 6 6 f . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value, 50, 0)
    }
})
game.onUpdateInterval(100, function () {
    repeat += 100
    if (repeat > rate) {
        repeat = 0
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f . f f . . 
            . . . . . . . . . c c c c f . . 
            . . . . . . . . c f c c c . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . . . c c c c . . . 
            . . . c c b b b b b b b . . . . 
            . . . c c . b b b b b b . . . . 
            . . . . . . . . . b b b . . . . 
            . . . . . . . . . e e e . . . . 
            . . . . . . . . 8 8 8 8 . . . . 
            . . . . . . . 8 8 8 8 8 . . . . 
            . . . . . . 8 8 8 . 8 8 . . . . 
            . . . . b b 8 8 . . 8 8 . . . . 
            . . . . . b b . . . . 8 b b . . 
            . . . . . . . . . . . b b . . . 
            `, SpriteKind.zombie)
        mySprite4.setPosition(160, randint(10, 110))
        animation.runImageAnimation(
        mySprite4,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f . f f . . 
            . . . . . . . . . c c c c f . . 
            . . . . . . . . c f c c c . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . . . c c c c . . . 
            . . . c c b b b b b b b . . . . 
            . . . c c . b b b b b b . . . . 
            . . . . . . . . . b b b . . . . 
            . . . . . . . . . e e e . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . 8 8 8 8 . . . . 
            . . . . . . . . 8 8 . 8 8 . . . 
            . . . . . . . b b . . b b . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f . f f . . 
            . . . . . . . . . c c c c f . . 
            . . . . . . . . c f c c c . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . . . c c c c . . . 
            . . . c c b b b b b b b . . . . 
            . . . c c . b b b b b b . . . . 
            . . . . . . . . . b b b . . . . 
            . . . . . . . . . e e e . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . b b b b . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f . f f . . 
            . . . . . . . . . c c c c f . . 
            . . . . . . . . c f c c c . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . . . c c c c . . . 
            . . . c c b b b b b b b . . . . 
            . . . c c . b b b b b b . . . . 
            . . . . . . . . . b b b . . . . 
            . . . . . . . . . e e e . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . . 8 8 8 . . . . 
            . . . . . . . . 8 8 8 8 . . . . 
            . . . . . . . . 8 8 . 8 8 . . . 
            . . . . . . . b b . . b b . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . f f . f f . . 
            . . . . . . . . . c c c c f . . 
            . . . . . . . . c f c c c . . . 
            . . . . . . . . . c c c c . . . 
            . . . . . . . . . c c c c . . . 
            . . . c c b b b b b b b . . . . 
            . . . c c . b b b b b b . . . . 
            . . . . . . . . . b b b . . . . 
            . . . . . . . . . e e e . . . . 
            . . . . . . . . 8 8 8 8 . . . . 
            . . . . . . . 8 8 8 8 8 . . . . 
            . . . . . . 8 8 8 . 8 8 . . . . 
            . . . . b b 8 8 . . 8 8 . . . . 
            . . . . . b b . . . . 8 b b . . 
            . . . . . . . . . . . b b . . . 
            `],
        500,
        true
        )
        mySprite4.setVelocity(-10, 0)
    }
})
game.onUpdateInterval(10000, function () {
    if (deadflower == 1) {
        FlowerPower = -99
    }
    if (FlowerPower < 1) {
        FlowerPower += 1
    }
    if (FlowerPower > 1) {
        FlowerPower = 1
    }
    if (FlowerPower == 1) {
        mySprite.setImage(img`
            . 5 5 . . 5 . . 5 . . 5 . . 5 5 
            . . 5 5 . 5 5 5 5 5 5 5 . 5 5 . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            5 5 5 5 5 5 5 5 f 5 5 f 5 5 5 5 
            . . 5 5 5 5 5 5 f 5 5 f 5 5 5 . 
            . . 5 5 5 5 5 5 f 5 5 f 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . . 5 5 f f f f f f f 5 5 5 5 . 
            . . 5 5 f f f f f f f f 5 5 5 . 
            5 5 5 5 5 f 2 2 2 f f f 5 5 5 5 
            . . . 5 5 5 f f f f 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 . 5 5 5 5 5 5 5 . 5 5 . 
            . 5 5 . . 5 . . 5 . . 5 . . 5 5 
            . 5 . . . 5 . . 5 . . 5 . . . 5 
            `)
        music.baDing.play()
    }
    rate += -600
    if (rate < 100) {
        rate = 100
    }
})
