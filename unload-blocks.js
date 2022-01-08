// functions for getting translate property
function getTranslateX(myElement) {
  var style = window.getComputedStyle(myElement);
  var matrix = new WebKitCSSMatrix(style.transform);
 return matrix.m41

}

function getTranslateY(myElement) {
  var style = window.getComputedStyle(myElement);
  var matrix = new WebKitCSSMatrix(style.transform);
 return matrix.m42

}
// list of default block IDs for detecting weather the block is in the palette or workspace
const blocks = ["looks_nextbackdrop","looks_changeeffectby","looks_seteffectto","looks_cleargraphiceffects","backdropnumbername","sound_stopallsounds","sound_changeeffectby","sound_seteffectto","sound_cleareffects","sound_changevolumeby","sound_setvolumeto","event_whenflagclicked","event_whenkeypressed","event_whengreaterthan","control_wait","control_repeat","forever","control_if","control_if_else","wait_until","repeat_until","answer","sensing_keypressed","sensing_mousedown","sensing_mousex","sensing_mousey","loudness","timer","sensing_resettimer","current","sensing_dayssince2000","sensing_username","operator_add","operator_subtract","operator_multiply","operator_divide","operator_random","operator_gt","operator_lt","operator_equals","operator_and","operator_or","operator_not","operator_mod","operator_round","operator_mathop","motion_movesteps","motion_turnright","motion_turnleft","motion_goto","motion_gotoxy","motion_glideto","motion_glidesecstoxy","motion_pointindirection","motion_pointtowards","motion_changexby","motion_setx","motion_changeyby","motion_sety","motion_ifonedgebounce","motion_setrotationstyle","wB[T(l0cto|_/)nu!`H5_xposition","wB[T(l0cto|_/)nu!`H5_yposition","wB[T(l0cto|_/)nu!`H5_direction","looks_sayforsecs","looks_say","looks_thinkforsecs","looks_think","wB[T(l0cto|_/)nu!`H5_switchcostumeto","looks_nextcostume","looks_switchbackdropto","looks_changesizeby","looks_setsizeto","looks_show","looks_hide","looks_gotofrontback","looks_goforwardbackwardlayers","wB[T(l0cto|_/)nu!`H5_costumenumbername","wB[T(l0cto|_/)nu!`H5_size","wB[T(l0cto|_/)nu!`H5_sound_playuntildone","wB[T(l0cto|_/)nu!`H5_sound_play","wB[T(l0cto|_/)nu!`H5_volume","event_whenthisspriteclicked","event_whenbackdropswitchesto","event_whenbroadcastreceived","event_broadcast","event_broadcastandwait","control_stop","control_start_as_clone","control_create_clone_of","control_delete_this_clone","sensing_touchingobject","sensing_touchingcolor","sensing_coloristouchingcolor","sensing_distanceto","askandwait","sensing_setdragmode","of","operator_join","operator_letter_of","operator_length","operator_contains","`jEk@4|i[#Fk?(8x)AV.-my variable","data_setvariableto","data_changevariableby","data_showvariable","data_hidevariable"]



function check(){

let x = document.getElementsByClassName("blocklyDraggable");
let i;
// get workspace scrolling
let scrollX = getTranslateX(document.getElementsByClassName('blocklyBlockCanvas')[0])
let scrollY = getTranslateY(document.getElementsByClassName('blocklyBlockCanvas')[0])
for (i = 0; i < x.length; i++) {
// reset display
x[i].style.display = ''
// make sure it's on the workspace
if(blocks.indexOf(x[i].dataset.id) < 0 && !x[i].dataset.id.includes('_')){
// get it's position
let blockX = getTranslateX(x[i]) + scrollX
let blockY = getTranslateY(x[i]) + scrollY
// check for being invisible on X axis
if(blockX < 0){
x[i].style.display = 'none'

}
if(blockX > 1500){
x[i].style.display = 'none'

}


// check for being invisible on Y axis
if(blockY < 0){
x[i].style.display = 'none'

}
if(blockY > 1500){
x[i].style.display = 'none'

}
document.getElementsByClassName('blocklyDraggable blocklySelected')[0].style.display = ''

}
}
// restart
setTimeout(check, 100)
}

check()
