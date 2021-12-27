function catchLoad(){
if(vm.assets.length > 0){

for (var i = 0; i < document.getElementsByClassName('monitor-value').length; i++) {
try{
document.getElementsByClassName('monitor-value')[i].style.height = '0.75rem'
}catch(e){}
}

}
setTimeout(catchLoad, 10)
}
catchLoad()
