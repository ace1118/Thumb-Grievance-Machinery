gdjs.Thank_32youCode = {};
gdjs.Thank_32youCode.GDbackgroundObjects1= [];
gdjs.Thank_32youCode.GDbackgroundObjects2= [];
gdjs.Thank_32youCode.GDVoteObjects1= [];
gdjs.Thank_32youCode.GDVoteObjects2= [];
gdjs.Thank_32youCode.GDVote2Objects1= [];
gdjs.Thank_32youCode.GDVote2Objects2= [];
gdjs.Thank_32youCode.GDVote3Objects1= [];
gdjs.Thank_32youCode.GDVote3Objects2= [];
gdjs.Thank_32youCode.GDThankyouObjects1= [];
gdjs.Thank_32youCode.GDThankyouObjects2= [];


gdjs.Thank_32youCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Vote"), gdjs.Thank_32youCode.GDVoteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Thank_32youCode.GDVoteObjects1.length;i<l;++i) {
    if ( gdjs.Thank_32youCode.GDVoteObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Thank_32youCode.GDVoteObjects1[k] = gdjs.Thank_32youCode.GDVoteObjects1[i];
        ++k;
    }
}
gdjs.Thank_32youCode.GDVoteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "c62a2711-6408-4e13-bba3-f493dcc968da", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vote2"), gdjs.Thank_32youCode.GDVote2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Thank_32youCode.GDVote2Objects1.length;i<l;++i) {
    if ( gdjs.Thank_32youCode.GDVote2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Thank_32youCode.GDVote2Objects1[k] = gdjs.Thank_32youCode.GDVote2Objects1[i];
        ++k;
    }
}
gdjs.Thank_32youCode.GDVote2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "25b430b1-f6dd-4321-83b1-9e55baa38ed8", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vote3"), gdjs.Thank_32youCode.GDVote3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Thank_32youCode.GDVote3Objects1.length;i<l;++i) {
    if ( gdjs.Thank_32youCode.GDVote3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Thank_32youCode.GDVote3Objects1[k] = gdjs.Thank_32youCode.GDVote3Objects1[i];
        ++k;
    }
}
gdjs.Thank_32youCode.GDVote3Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "b2929acd-ac86-44e5-9fd8-3c400d381475", true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Thankyou"), gdjs.Thank_32youCode.GDThankyouObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vote"), gdjs.Thank_32youCode.GDVoteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vote2"), gdjs.Thank_32youCode.GDVote2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Vote3"), gdjs.Thank_32youCode.GDVote3Objects1);
{for(var i = 0, len = gdjs.Thank_32youCode.GDVoteObjects1.length ;i < len;++i) {
    gdjs.Thank_32youCode.GDVoteObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Thank_32youCode.GDVote3Objects1.length ;i < len;++i) {
    gdjs.Thank_32youCode.GDVote3Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Thank_32youCode.GDVote2Objects1.length ;i < len;++i) {
    gdjs.Thank_32youCode.GDVote2Objects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.Thank_32youCode.GDThankyouObjects1.length ;i < len;++i) {
    gdjs.Thank_32youCode.GDThankyouObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};

gdjs.Thank_32youCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Thank_32youCode.GDbackgroundObjects1.length = 0;
gdjs.Thank_32youCode.GDbackgroundObjects2.length = 0;
gdjs.Thank_32youCode.GDVoteObjects1.length = 0;
gdjs.Thank_32youCode.GDVoteObjects2.length = 0;
gdjs.Thank_32youCode.GDVote2Objects1.length = 0;
gdjs.Thank_32youCode.GDVote2Objects2.length = 0;
gdjs.Thank_32youCode.GDVote3Objects1.length = 0;
gdjs.Thank_32youCode.GDVote3Objects2.length = 0;
gdjs.Thank_32youCode.GDThankyouObjects1.length = 0;
gdjs.Thank_32youCode.GDThankyouObjects2.length = 0;

gdjs.Thank_32youCode.eventsList0(runtimeScene);

return;

}

gdjs['Thank_32youCode'] = gdjs.Thank_32youCode;
