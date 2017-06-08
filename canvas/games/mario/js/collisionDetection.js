//碰撞检测
var CD = {
    //马里奥和金币
    judgeMM: function(mario, money, callback) {
        if (money.visible == false) {
            return;
        }
        // 两个矩形检测
        if ((mario.left + mario.width) < money.left || (money.left + money.width) < mario.left || (mario.top + mario.height) < money.top || (money.top + money.height) < mario.top) {
            return true
        } else {
            callback();
        }

    },
    //马里奥和普通墙
    judgeMNormalWall: function(mario, normalwall, callback) {
        if (normalwall.visible == false) {
            return;
        }
        // 两个矩形检测
        if ((mario.left + mario.width) < normalwall.left || (normalwall.left + normalwall.width) < mario.left || (mario.top + mario.height) < normalwall.top || (normalwall.top + normalwall.height) < mario.top) {
            gameConfig.setSpeedDefault();
            mario.initialTop = element.mycanvas.height - mario.height -gameConfig.roadHeight;
            return true
        } else {
            var standardChangeX = mario.width + normalwall.width;
            var standardChangeY = mario.height + normalwall.height;
            var standardChangeSinNum = standardChangeY / Math.sqrt(standardChangeX * standardChangeX + standardChangeY * standardChangeY);

            var changeX = (mario.left + mario.width / 2) - (normalwall.left + normalwall.width / 2);
            var changeY = (mario.top + mario.height / 2) - (normalwall.top + normalwall.height / 2);
            var sinNum = changeY / Math.sqrt(changeX * changeX + changeY * changeY);

            if (changeX > 0) {              
                if(Math.abs(sinNum)< standardChangeSinNum)
                 {
                    console.log("mario在墙的右侧");
                    mario.left = normalwall.left + normalwall.width;
                    gameConfig.setSpeedZero();
                } else if (sinNum > 0) {
                    console.log("mario在墙的下侧");

                } else {
                    console.log("mario在墙的上侧");
                      mario.initialTop = normalwall.top - mario.height;
                }

            } else {
                if(Math.abs(sinNum)< standardChangeSinNum){
                    console.log("mario在墙的左侧");
                     mario.left = normalwall.left - mario.width;
                     gameConfig.setSpeedZero();
                
                } else if (sinNum > 0) {
                    console.log("mario在墙的下侧");
                } else {
                    console.log("mario在墙的上侧");
                     mario.initialTop = normalwall.top - mario.height;
                }

            }



            // var topChange = mario.velocityY / this.marioSprite.fpsNum;
            // var leftChange = normalwall.velocityY / this.marioSprite.fpsNum;
            // if (topChange < leftChange) {

            // } else {

            // }
            // if ((mario.left + mario.width) > normalwall.left) {

            // }

            // //马里奥在墙的左侧
            // if ((((mario.left + mario.width) > normalwall.left) && mario.left < normalwall.left) && (mario.height + mario.top > normalwall.top) && (mario.top < normalwall.top + normalwall.height)) {
            //     mario.left = normalwall.left - mario.width;
            //     gameConfig.setSpeedZero();
            //     // normalwall.
            // }
            // if ((normalwall.left + normalwall.width > mario.left && mario.left > normalwall.left) && (mario.height + mario.top > normalwall.top) && (mario.top < normalwall.top + normalwall.height)) {
            //     mario.left = normalwall.left + normalwall.width;
            //     gameConfig.setSpeedZero();
            // }
            // if ((normalwall.top + normalwall.height > mario.top && mario.top > normalwall.top) && (mario.left + mario.width > normalwall.left) && (mario.left < normalwall.left + normalwall.width)) {
            //     mario.top = normalwall.top + normalwall.height;
            //     gameConfig.setSpeedZero();
            // }
            // callback();
        }

    }
}
