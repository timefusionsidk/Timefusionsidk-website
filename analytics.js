(() => {
 const key='timefusions-directory-analytics';
 const banner=document.getElementById('consent');
 let loaded=false;
 function read(){try{return localStorage.getItem(key)}catch{return null}}
 function start(){if(loaded)return;loaded=true;window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};window.gtag('js',new Date());window.gtag('config','G-F653VYXS68',{allow_google_signals:false,allow_ad_personalization_signals:false});const s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-F653VYXS68';document.head.appendChild(s)}
 function choose(value){try{localStorage.setItem(key,value)}catch{}banner.hidden=true;if(value==='accepted')start();else if(loaded){window['ga-disable-G-F653VYXS68']=true;location.reload()}}
 document.getElementById('accept').addEventListener('click',()=>choose('accepted'));
 document.getElementById('decline').addEventListener('click',()=>choose('declined'));
 document.getElementById('privacy-choice').addEventListener('click',()=>{banner.hidden=false;document.getElementById('decline').focus()});
 const preference=read();if(preference==='accepted')start();else if(preference!=='declined')banner.hidden=false;
})();
