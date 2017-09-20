//var BG = require(require('.../images/background2.png');


//所有游戏需要加载的外部资源
const gameSourceUrl = {
    imageList: {
        //背景
        icon: require('../images/ico/favicon.ico'),
        BG: require('../images/background2.png'),
        wall: require('../images/wall/wall.png'),
        flower: require('../images/flower/4.png'),
        badflower: require('../images/badflower/img.png'),
        mushroom: require('../images/mushroom/4.png'),
        pipe: require('../images/pipe.png'),
        money: require('../images/money.png'),
        star: require('../images/star.png'),
        bullet: require('../images/fire/fireL/0.png'),
        hole: require('../images/hole.png'),
        tower: require('../images/tower.png'),
        monster: require('../images/monster/1/img.png'),
        monsterDie: require('../images/monster/1/dead.png'),
        tortoise: require('../images/tortoise/img.png'),
        shell: require('../images/tortoise/roll/img.png'),
        life: require('../images/life/img.png'),
        gameOver: require('../images/over.png'),
        gameSuccess: require('../images/end.png'),
        flag: require('../images/flag.png'),
        final: require('../images/final.png'),
        //马里奥
        mario: {
            commonMairo: {
                run: require("../images/mario/smallmario/marioR/spritesrun.png"),
                jump: require("../images/mario/smallmario/marioR/jump.png"),
                stand: require("../images/mario/smallmario/marioR/stand.png"),
                laqi: require("../images/winS.png"),
            },
            fireMairo: {
                run: require("../images/mario/smallmario/marioR/spritesrun2.png"),
                jump: require("../images/mario/smallmario/marioR/jump2.png"),
                laqi: require("../images/winS2.png"),
                stand: require("../images/mario/smallmario/marioR/stand2.png"),
            },
            invinciblefireMairo: {
                run: require("../images/mario/smallmario/marioR/spritesrun3.png"),
                jump: require("../images/mario/smallmario/marioR/jump3.png"),
                laqi: require("../images/winS3.png"),
                stand: require("../images/mario/smallmario/marioR/stand3.png"),
            },
        }
    },
    audioList: {
        GameOver: require("../sounds/mario/GameOver.mp3"),
        BGM: require("../sounds/mario/bag.mp3"),
        gamesuccess: require("../sounds/mario/gamesuccess.mp3"),
        WD: require("../sounds/mario/wudi.mp3"),
        jumpAll: require("../sounds/mario/jumpAll.mp3"), //
        collision: require("../sounds/mario/mariocollision.mp3"), //子弹打在其他物体上
        die: require("../sounds/mario/die.mp3"),
        music: require("../sounds/mario/music2.mp3"), //顶到藤蔓 顶碎砖块 1up 拉旗杆 过关时时间清零
    }
}
export default gameSourceUrl;