function catchLoad(){
if(vm.assets.length > 0){
document.getElementsByClassName('monitor-value')[0].style.height = '0.75rem'
}
setTimeout(catchLoad, 10)
}
catchLoad()
