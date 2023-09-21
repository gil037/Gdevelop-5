gdjs.Start_32MenuCode = {};
gdjs.Start_32MenuCode.GDDesertBackgroundObjects1= [];
gdjs.Start_32MenuCode.GDDesertBackgroundObjects2= [];
gdjs.Start_32MenuCode.GDButtonPlayObjects1= [];
gdjs.Start_32MenuCode.GDButtonPlayObjects2= [];
gdjs.Start_32MenuCode.GDLogoObjects1= [];
gdjs.Start_32MenuCode.GDLogoObjects2= [];
gdjs.Start_32MenuCode.GDZombieBoyObjects1= [];
gdjs.Start_32MenuCode.GDZombieBoyObjects2= [];
gdjs.Start_32MenuCode.GDCactus1Objects1= [];
gdjs.Start_32MenuCode.GDCactus1Objects2= [];


gdjs.Start_32MenuCode.mapOfGDgdjs_9546Start_959532MenuCode_9546GDButtonPlayObjects1Objects = Hashtable.newFrom({"ButtonPlay": gdjs.Start_32MenuCode.GDButtonPlayObjects1});
gdjs.Start_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ZombieBoy"), gdjs.Start_32MenuCode.GDZombieBoyObjects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{for(var i = 0, len = gdjs.Start_32MenuCode.GDZombieBoyObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDZombieBoyObjects1[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonPlay"), gdjs.Start_32MenuCode.GDButtonPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32MenuCode.mapOfGDgdjs_9546Start_959532MenuCode_9546GDButtonPlayObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.Start_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32MenuCode.GDDesertBackgroundObjects1.length = 0;
gdjs.Start_32MenuCode.GDDesertBackgroundObjects2.length = 0;
gdjs.Start_32MenuCode.GDButtonPlayObjects1.length = 0;
gdjs.Start_32MenuCode.GDButtonPlayObjects2.length = 0;
gdjs.Start_32MenuCode.GDLogoObjects1.length = 0;
gdjs.Start_32MenuCode.GDLogoObjects2.length = 0;
gdjs.Start_32MenuCode.GDZombieBoyObjects1.length = 0;
gdjs.Start_32MenuCode.GDZombieBoyObjects2.length = 0;
gdjs.Start_32MenuCode.GDCactus1Objects1.length = 0;
gdjs.Start_32MenuCode.GDCactus1Objects2.length = 0;

gdjs.Start_32MenuCode.eventsList0(runtimeScene);

return;

}

gdjs['Start_32MenuCode'] = gdjs.Start_32MenuCode;
