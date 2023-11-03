gdjs.disclaimerCode = {};
gdjs.disclaimerCode.GDbackgroundObjects1= [];
gdjs.disclaimerCode.GDbackgroundObjects2= [];
gdjs.disclaimerCode.GDdisclaimerObjects1= [];
gdjs.disclaimerCode.GDdisclaimerObjects2= [];
gdjs.disclaimerCode.GDlogoObjects1= [];
gdjs.disclaimerCode.GDlogoObjects2= [];
gdjs.disclaimerCode.GDstartObjects1= [];
gdjs.disclaimerCode.GDstartObjects2= [];
gdjs.disclaimerCode.GDNameObjects1= [];
gdjs.disclaimerCode.GDNameObjects2= [];


gdjs.disclaimerCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.disclaimerCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.disclaimerCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.disclaimerCode.GDstartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.disclaimerCode.GDstartObjects1[k] = gdjs.disclaimerCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.disclaimerCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "case 1", false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Name"), gdjs.disclaimerCode.GDNameObjects1);
gdjs.copyArray(runtimeScene.getObjects("disclaimer"), gdjs.disclaimerCode.GDdisclaimerObjects1);
gdjs.copyArray(runtimeScene.getObjects("logo"), gdjs.disclaimerCode.GDlogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.disclaimerCode.GDstartObjects1);
{for(var i = 0, len = gdjs.disclaimerCode.GDdisclaimerObjects1.length ;i < len;++i) {
    gdjs.disclaimerCode.GDdisclaimerObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.disclaimerCode.GDlogoObjects1.length ;i < len;++i) {
    gdjs.disclaimerCode.GDlogoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.disclaimerCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.disclaimerCode.GDstartObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.disclaimerCode.GDNameObjects1.length ;i < len;++i) {
    gdjs.disclaimerCode.GDNameObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.disclaimerCode.GDNameObjects1.length === 0 ) ? "" :gdjs.disclaimerCode.GDNameObjects1[0].getBehavior("Text").getText()));
}}

}


};

gdjs.disclaimerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.disclaimerCode.GDbackgroundObjects1.length = 0;
gdjs.disclaimerCode.GDbackgroundObjects2.length = 0;
gdjs.disclaimerCode.GDdisclaimerObjects1.length = 0;
gdjs.disclaimerCode.GDdisclaimerObjects2.length = 0;
gdjs.disclaimerCode.GDlogoObjects1.length = 0;
gdjs.disclaimerCode.GDlogoObjects2.length = 0;
gdjs.disclaimerCode.GDstartObjects1.length = 0;
gdjs.disclaimerCode.GDstartObjects2.length = 0;
gdjs.disclaimerCode.GDNameObjects1.length = 0;
gdjs.disclaimerCode.GDNameObjects2.length = 0;

gdjs.disclaimerCode.eventsList0(runtimeScene);

return;

}

gdjs['disclaimerCode'] = gdjs.disclaimerCode;
