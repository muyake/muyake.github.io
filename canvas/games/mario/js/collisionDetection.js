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
            mario.initialTop = element.mycanvas.height - mario.height - gameConfig.roadHeight;
            //如果下方有墙且不是在蹦跳中，则从墙上走下，否则如果在蹦跳中，则 mario.velocityY =0，蹦不起来。
            if (mario.upColliding && !mario.isJump) {
                mario.jump(0);
                mario.isJump = true;
                mario.upColliding = null;
            }
            return true
        } else {
            var standardChangeX = mario.width + normalwall.width;
            var standardChangeY = mario.height + normalwall.height;
            var standardChangeSinNum = standardChangeY / Math.sqrt(standardChangeX * standardChangeX + standardChangeY * standardChangeY);

            var changeX = (mario.left + mario.width / 2) - (normalwall.left + normalwall.width / 2);
            var changeY = (mario.top + mario.height / 2) - (normalwall.top + normalwall.height / 2);
            var sinNum = changeY / Math.sqrt(changeX * changeX + changeY * changeY);

            if (changeX > 0) {
                if (Math.abs(sinNum) < standardChangeSinNum) {
                    mario.left = normalwall.left + normalwall.width;
                    gameConfig.setSpeedZero();
                } else if (sinNum > 0) {
                    // console.log("mario在墙的下侧");
                    // normalwall.visible=false;
                    mario.velocityY = -mario.velocityY;
                    if (!normalwall.isJump) {
                        normalwall.up(60);
                    }
                } else {
                    mario.initialTop = normalwall.top - mario.height;
                    mario.upColliding = normalwall;
                }

            } else {
                if (Math.abs(sinNum) < standardChangeSinNum) {

                    mario.left = normalwall.left - mario.width;
                    gameConfig.setSpeedZero();

                } else if (sinNum > 0) {
                    // console.log("mario在墙的下侧");
                    // normalwall.visible=false;
                    if (!normalwall.isJump) {
                        normalwall.up(60);
                    }
                    mario.velocityY = -mario.velocityY;
                } else {

                    mario.initialTop = normalwall.top - mario.height;
                    mario.upColliding = normalwall;
                }

            }

        }

    }
}
