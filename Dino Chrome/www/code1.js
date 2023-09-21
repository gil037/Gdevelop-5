gdjs.GameCode = {};
gdjs.GameCode.GDDesertBackgroundObjects1= [];
gdjs.GameCode.GDDesertBackgroundObjects2= [];
gdjs.GameCode.GDZombieBoyObjects1= [];
gdjs.GameCode.GDZombieBoyObjects2= [];
gdjs.GameCode.GDCactus1Objects1= [];
gdjs.GameCode.GDCactus1Objects2= [];
gdjs.GameCode.GDCactus2Objects1= [];
gdjs.GameCode.GDCactus2Objects2= [];
gdjs.GameCode.GDCactus3Objects1= [];
gdjs.GameCode.GDCactus3Objects2= [];
gdjs.GameCode.GDYellowBackgroundObjects1= [];
gdjs.GameCode.GDYellowBackgroundObjects2= [];
gdjs.GameCode.GDscoreObjects1= [];
gdjs.GameCode.GDscoreObjects2= [];
gdjs.GameCode.GDborderblackObjects1= [];
gdjs.GameCode.GDborderblackObjects2= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactus1Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus2Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus3Objects1Objects = Hashtable.newFrom({"Cactus1": gdjs.GameCode.GDCactus1Objects1, "Cactus2": gdjs.GameCode.GDCactus2Objects1, "Cactus3": gdjs.GameCode.GDCactus3Objects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactus1Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus2Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus3Objects1Objects = Hashtable.newFrom({"Cactus1": gdjs.GameCode.GDCactus1Objects1, "Cactus2": gdjs.GameCode.GDCactus2Objects1, "Cactus3": gdjs.GameCode.GDCactus3Objects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDborderblackObjects1Objects = Hashtable.newFrom({"borderblack": gdjs.GameCode.GDborderblackObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDZombieBoyObjects1Objects = Hashtable.newFrom({"ZombieBoy": gdjs.GameCode.GDZombieBoyObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactus1Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus2Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus3Objects1Objects = Hashtable.newFrom({"Cactus1": gdjs.GameCode.GDCactus1Objects1, "Cactus2": gdjs.GameCode.GDCactus2Objects1, "Cactus3": gdjs.GameCode.GDCactus3Objects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDZombieBoyObjects1Objects = Hashtable.newFrom({"ZombieBoy": gdjs.GameCode.GDZombieBoyObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ZombieBoy"), gdjs.GameCode.GDZombieBoyObjects1);
{for(var i = 0, len = gdjs.GameCode.GDZombieBoyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDZombieBoyObjects1[i].setAnimationName("Walk");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ZombieBoy"), gdjs.GameCode.GDZombieBoyObjects1);
{for(var i = 0, len = gdjs.GameCode.GDZombieBoyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDZombieBoyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__RepeatXTimes.func(runtimeScene, "createCactus", 3, -(1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.GameCode.GDCactus1Objects1.length = 0;

gdjs.GameCode.GDCactus2Objects1.length = 0;

gdjs.GameCode.GDCactus3Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactus1Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus2Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus3Objects1Objects, "Cactus" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), 1047, 1620, "cactus");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "createCactus");
}{for(var i = 0, len = gdjs.GameCode.GDCactus1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCactus1Objects1[i].setSize(209, 284);
}
}{for(var i = 0, len = gdjs.GameCode.GDCactus2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCactus2Objects1[i].setSize(212, 206);
}
}{for(var i = 0, len = gdjs.GameCode.GDCactus3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCactus3Objects1[i].setSize(209, 284);
}
}{for(var i = 0, len = gdjs.GameCode.GDCactus1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCactus1Objects1[i].setY(1508);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cactus1"), gdjs.GameCode.GDCactus1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cactus2"), gdjs.GameCode.GDCactus2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cactus3"), gdjs.GameCode.GDCactus3Objects1);
{for(var i = 0, len = gdjs.GameCode.GDCactus1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCactus1Objects1[i].addPolarForce(180, 300, 0);
}
for(var i = 0, len = gdjs.GameCode.GDCactus2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCactus2Objects1[i].addPolarForce(180, 300, 0);
}
for(var i = 0, len = gdjs.GameCode.GDCactus3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCactus3Objects1[i].addPolarForce(180, 300, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus1"), gdjs.GameCode.GDCactus1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cactus2"), gdjs.GameCode.GDCactus2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cactus3"), gdjs.GameCode.GDCactus3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCactus1Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCactus1Objects1[i].getY() == 1508 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCactus1Objects1[k] = gdjs.GameCode.GDCactus1Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCactus1Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCactus2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCactus2Objects1[i].getY() == 1508 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCactus2Objects1[k] = gdjs.GameCode.GDCactus2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCactus2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCactus3Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDCactus3Objects1[i].getY() == 1505 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCactus3Objects1[k] = gdjs.GameCode.GDCactus3Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDCactus3Objects1.length = k;
}
}
if (isConditionTrue_0) {
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus1"), gdjs.GameCode.GDCactus1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cactus2"), gdjs.GameCode.GDCactus2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cactus3"), gdjs.GameCode.GDCactus3Objects1);
gdjs.copyArray(runtimeScene.getObjects("borderblack"), gdjs.GameCode.GDborderblackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactus1Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus2Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus3Objects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDborderblackObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCactus1Objects1 */
/* Reuse gdjs.GameCode.GDCactus2Objects1 */
/* Reuse gdjs.GameCode.GDCactus3Objects1 */
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GameCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.GameCode.GDCactus1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCactus1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCactus2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCactus2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDCactus3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDCactus3Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().get("score").add(10);
}{for(var i = 0, len = gdjs.GameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.GameCode.GDscoreObjects1);
{runtimeScene.getScene().getVariables().get("score").setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("score")));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Cactus1"), gdjs.GameCode.GDCactus1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cactus2"), gdjs.GameCode.GDCactus2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cactus3"), gdjs.GameCode.GDCactus3Objects1);
gdjs.copyArray(runtimeScene.getObjects("ZombieBoy"), gdjs.GameCode.GDZombieBoyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDZombieBoyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCactus1Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus2Objects1ObjectsGDgdjs_9546GameCode_9546GDCactus3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("ZombieBoy"), gdjs.GameCode.GDZombieBoyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDZombieBoyObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10353140);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDZombieBoyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDZombieBoyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDZombieBoyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDDesertBackgroundObjects1.length = 0;
gdjs.GameCode.GDDesertBackgroundObjects2.length = 0;
gdjs.GameCode.GDZombieBoyObjects1.length = 0;
gdjs.GameCode.GDZombieBoyObjects2.length = 0;
gdjs.GameCode.GDCactus1Objects1.length = 0;
gdjs.GameCode.GDCactus1Objects2.length = 0;
gdjs.GameCode.GDCactus2Objects1.length = 0;
gdjs.GameCode.GDCactus2Objects2.length = 0;
gdjs.GameCode.GDCactus3Objects1.length = 0;
gdjs.GameCode.GDCactus3Objects2.length = 0;
gdjs.GameCode.GDYellowBackgroundObjects1.length = 0;
gdjs.GameCode.GDYellowBackgroundObjects2.length = 0;
gdjs.GameCode.GDscoreObjects1.length = 0;
gdjs.GameCode.GDscoreObjects2.length = 0;
gdjs.GameCode.GDborderblackObjects1.length = 0;
gdjs.GameCode.GDborderblackObjects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
