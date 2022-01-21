var videoSource = new Array();
videoSource[0]="https://user-images.githubusercontent.com/23622170/150433205-858a88ed-31bd-4df4-8aba-6a0be30a385b.mp4";
videoSource[1]="https://user-images.githubusercontent.com/23622170/150441666-9b21ea32-efa5-42b3-ba50-8aad288ee643.mp4";
videoSource[2]="https://user-images.githubusercontent.com/23622170/150441651-0dd00912-8e6a-4cb0-adfc-75d7fa76e49f.mp4";
videoSource[3]="https://user-images.githubusercontent.com/23622170/150441654-182c76fe-1478-4099-bfd4-ae5e30501599.mp4";
videoSource[4]="https://user-images.githubusercontent.com/23622170/150441655-e3558b2a-adfe-4da6-9ab6-4e43c6a37bc7.mp4";
videoSource[5]="https://user-images.githubusercontent.com/23622170/150441656-44b8ac8e-de70-41e9-a8d1-6e938e88bae8.mp4";
videoSource[6]="https://user-images.githubusercontent.com/23622170/150441660-3a73cf10-7210-49d6-86bc-e24c35c32078.mp4";
videoSource[7]="https://user-images.githubusercontent.com/23622170/150441662-ae3f4b18-9721-4cd7-b991-25c94a7c30e0.mp4";
var videoCount = videoSource.length;


function videoPlay(videoNum){
  document.getElementById("myVideo").setAttribute("src",videoSource[videoNum]);
  document.getElementById("myVideo").load();
  document.getElementById("myVideo").play();
}

function videoCycleHandler(){
  i++;
  if(i == (videoCount-1)){
    i = 0;
    videoPlay(i);
  }
  else{
    videoPlay(i);
  }
}
