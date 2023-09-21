gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDYellowBackgroundObjects1= [];
gdjs.Game_32OverCode.GDYellowBackgroundObjects2= [];
gdjs.Game_32OverCode.GDgameOverObjects1= [];
gdjs.Game_32OverCode.GDgameOverObjects2= [];
gdjs.Game_32OverCode.GDZombieBoyObjects1= [];
gdjs.Game_32OverCode.GDZombieBoyObjects2= [];
gdjs.Game_32OverCode.GDRetryObjects1= [];
gdjs.Game_32OverCode.GDRetryObjects2= [];


gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.Game_32OverCode.GDRetryObjects1});
gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ZombieBoy"), gdjs.Game_32OverCode.GDZombieBoyObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDZombieBoyObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDZombieBoyObjects1[i].setAnimationName("Dead");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.Game_32OverCode.GDRetryObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_9546Game_959532OverCode_9546GDRetryObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start Menu", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDYellowBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDYellowBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDgameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDgameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDZombieBoyObjects1.length = 0;
gdjs.Game_32OverCode.GDZombieBoyObjects2.length = 0;
gdjs.Game_32OverCode.GDRetryObjects1.length = 0;
gdjs.Game_32OverCode.GDRetryObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
