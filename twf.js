import { createApp } from 'https://unpkg.com/petite-vue?module'
function mobile(){
  	if(window.innerWidth < window.innerHeight){return true;}
    else{return false;}
}
createApp({
	mobile
}).mount()
