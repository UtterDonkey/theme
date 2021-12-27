function catchLoad(){
if(vm.assets.length > 0){

for (var i = 0; i < document.getElementsByClassName('monitor-value').length; i++) {
document.getElementsByClassName('monitor-value')[i].style.height = '0.75rem'
}

}
setTimeout(catchLoad, 10)
}
catchLoad()
