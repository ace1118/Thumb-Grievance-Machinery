gdjs.case_322Code = {};
gdjs.case_322Code.GDbackgroundObjects1= [];
gdjs.case_322Code.GDbackgroundObjects2= [];
gdjs.case_322Code.GDCase_95951Objects1= [];
gdjs.case_322Code.GDCase_95951Objects2= [];
gdjs.case_322Code.GDguiltyObjects1= [];
gdjs.case_322Code.GDguiltyObjects2= [];
gdjs.case_322Code.GDnot_9595guiltyObjects1= [];
gdjs.case_322Code.GDnot_9595guiltyObjects2= [];
gdjs.case_322Code.GDVoteObjects1= [];
gdjs.case_322Code.GDVoteObjects2= [];
gdjs.case_322Code.GDdebehaviorObjects1= [];
gdjs.case_322Code.GDdebehaviorObjects2= [];


gdjs.case_322Code.mapOfGDgdjs_9546case_9595322Code_9546GDguiltyObjects1Objects = Hashtable.newFrom({"guilty": gdjs.case_322Code.GDguiltyObjects1});
gdjs.case_322Code.mapOfGDgdjs_9546case_9595322Code_9546GDdebehaviorObjects1Objects = Hashtable.newFrom({"debehavior": gdjs.case_322Code.GDdebehaviorObjects1});
gdjs.case_322Code.mapOfGDgdjs_9546case_9595322Code_9546GDguiltyObjects1Objects = Hashtable.newFrom({"guilty": gdjs.case_322Code.GDguiltyObjects1});
gdjs.case_322Code.mapOfGDgdjs_9546case_9595322Code_9546GDdebehaviorObjects1Objects = Hashtable.newFrom({"debehavior": gdjs.case_322Code.GDdebehaviorObjects1});
gdjs.case_322Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("guilty"), gdjs.case_322Code.GDguiltyObjects1);
gdjs.copyArray(runtimeScene.getObjects("not_guilty"), gdjs.case_322Code.GDnot_9595guiltyObjects1);
{for(var i = 0, len = gdjs.case_322Code.GDguiltyObjects1.length ;i < len;++i) {
    gdjs.case_322Code.GDguiltyObjects1[i].setPosition(-(608),1152);
}
}{for(var i = 0, len = gdjs.case_322Code.GDnot_9595guiltyObjects1.length ;i < len;++i) {
    gdjs.case_322Code.GDnot_9595guiltyObjects1[i].setPosition(-(608),1152);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Case_1"), gdjs.case_322Code.GDCase_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Vote"), gdjs.case_322Code.GDVoteObjects1);
{for(var i = 0, len = gdjs.case_322Code.GDCase_95951Objects1.length ;i < len;++i) {
    gdjs.case_322Code.GDCase_95951Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.case_322Code.GDVoteObjects1.length ;i < len;++i) {
    gdjs.case_322Code.GDVoteObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("debehavior"), gdjs.case_322Code.GDdebehaviorObjects1);
gdjs.copyArray(runtimeScene.getObjects("guilty"), gdjs.case_322Code.GDguiltyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.case_322Code.mapOfGDgdjs_9546case_9595322Code_9546GDguiltyObjects1Objects, gdjs.case_322Code.mapOfGDgdjs_9546case_9595322Code_9546GDdebehaviorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.case_322Code.GDguiltyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("not_guilty"), gdjs.case_322Code.GDnot_9595guiltyObjects1);
{for(var i = 0, len = gdjs.case_322Code.GDguiltyObjects1.length ;i < len;++i) {
    gdjs.case_322Code.GDguiltyObjects1[i].activateBehavior("Anchor", false);
}
}{for(var i = 0, len = gdjs.case_322Code.GDnot_9595guiltyObjects1.length ;i < len;++i) {
    gdjs.case_322Code.GDnot_9595guiltyObjects1[i].activateBehavior("Anchor", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("debehavior"), gdjs.case_322Code.GDdebehaviorObjects1);
gdjs.copyArray(runtimeScene.getObjects("guilty"), gdjs.case_322Code.GDguiltyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.case_322Code.mapOfGDgdjs_9546case_9595322Code_9546GDguiltyObjects1Objects, gdjs.case_322Code.mapOfGDgdjs_9546case_9595322Code_9546GDdebehaviorObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.case_322Code.GDguiltyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("not_guilty"), gdjs.case_322Code.GDnot_9595guiltyObjects1);
{for(var i = 0, len = gdjs.case_322Code.GDguiltyObjects1.length ;i < len;++i) {
    gdjs.case_322Code.GDguiltyObjects1[i].activateBehavior("Anchor", true);
}
}{for(var i = 0, len = gdjs.case_322Code.GDnot_9595guiltyObjects1.length ;i < len;++i) {
    gdjs.case_322Code.GDnot_9595guiltyObjects1[i].activateBehavior("Anchor", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vote"), gdjs.case_322Code.GDVoteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.case_322Code.GDVoteObjects1.length;i<l;++i) {
    if ( gdjs.case_322Code.GDVoteObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.case_322Code.GDVoteObjects1[k] = gdjs.case_322Code.GDVoteObjects1[i];
        ++k;
    }
}
gdjs.case_322Code.GDVoteObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.case_322Code.GDVoteObjects1 */
gdjs.copyArray(runtimeScene.getObjects("guilty"), gdjs.case_322Code.GDguiltyObjects1);
gdjs.copyArray(runtimeScene.getObjects("not_guilty"), gdjs.case_322Code.GDnot_9595guiltyObjects1);
{for(var i = 0, len = gdjs.case_322Code.GDguiltyObjects1.length ;i < len;++i) {
    gdjs.case_322Code.GDguiltyObjects1[i].setPosition(32,1152);
}
}{for(var i = 0, len = gdjs.case_322Code.GDnot_9595guiltyObjects1.length ;i < len;++i) {
    gdjs.case_322Code.GDnot_9595guiltyObjects1[i].setPosition(465,1152);
}
}{for(var i = 0, len = gdjs.case_322Code.GDVoteObjects1.length ;i < len;++i) {
    gdjs.case_322Code.GDVoteObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("guilty"), gdjs.case_322Code.GDguiltyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.case_322Code.GDguiltyObjects1.length;i<l;++i) {
    if ( gdjs.case_322Code.GDguiltyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.case_322Code.GDguiltyObjects1[k] = gdjs.case_322Code.GDguiltyObjects1[i];
        ++k;
    }
}
gdjs.case_322Code.GDguiltyObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "25b430b1-f6dd-4321-83b1-9e55baa38ed8", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "case 3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("not_guilty"), gdjs.case_322Code.GDnot_9595guiltyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.case_322Code.GDnot_9595guiltyObjects1.length;i<l;++i) {
    if ( gdjs.case_322Code.GDnot_9595guiltyObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.case_322Code.GDnot_9595guiltyObjects1[k] = gdjs.case_322Code.GDnot_9595guiltyObjects1[i];
        ++k;
    }
}
gdjs.case_322Code.GDnot_9595guiltyObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "25b430b1-f6dd-4321-83b1-9e55baa38ed8", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "case 3", false);
}}

}


};

gdjs.case_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.case_322Code.GDbackgroundObjects1.length = 0;
gdjs.case_322Code.GDbackgroundObjects2.length = 0;
gdjs.case_322Code.GDCase_95951Objects1.length = 0;
gdjs.case_322Code.GDCase_95951Objects2.length = 0;
gdjs.case_322Code.GDguiltyObjects1.length = 0;
gdjs.case_322Code.GDguiltyObjects2.length = 0;
gdjs.case_322Code.GDnot_9595guiltyObjects1.length = 0;
gdjs.case_322Code.GDnot_9595guiltyObjects2.length = 0;
gdjs.case_322Code.GDVoteObjects1.length = 0;
gdjs.case_322Code.GDVoteObjects2.length = 0;
gdjs.case_322Code.GDdebehaviorObjects1.length = 0;
gdjs.case_322Code.GDdebehaviorObjects2.length = 0;

gdjs.case_322Code.eventsList0(runtimeScene);

return;

}

gdjs['case_322Code'] = gdjs.case_322Code;
