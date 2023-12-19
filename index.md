<script>
function sv(id) {
                    if (document.getElementById(id).value == '-') {
                        document.getElementById(id).value = '+';
                        document.getElementById(id).style.display = 'none';
                    } else {
                        document.getElementById(id).value = '-';
                        document.getElementById(id).style.display = 'inline';
                    }
                }
</script>

<div style="text-align: right">
  <a id="links" href="https://www.youtube.com/channel/UCqotGxFUtMOgY9aIkDxW0fw" target="_">YouTube</a>&nbsp;&nbsp;&nbsp;
  <a id="links" href="https://github.com/arc-l" target="_">Code on Github</a>&nbsp;&nbsp;&nbsp;
  <a id="links" href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en" target="_">Google Scholar</a>&nbsp;&nbsp;&nbsp;
  <a id="links" href="/videos.html">Video Highlights</a>
</div>
<img src="media/bar.png" width="400" height="1"><br>
<video style="border-style:hidden;border-width:10px 0px;" width="592" height="276" style="background-color: #000;" controls id="myVideo" autoplay muted></video>
<script>

var videoSource = new Array();
videoSource[0]="https://user-images.githubusercontent.com/23622170/150448620-5553ea53-8d8a-4f86-b1d7-d91098454212.mp4";  // TORI
videoSource[1]="https://user-images.githubusercontent.com/23622170/150448628-383acd7f-714e-4637-98c0-a4cc578d536e.mp4";  // DDM
videoSource[2]="https://user-images.githubusercontent.com/23622170/150448627-704dc206-6e47-41d3-bb37-202f15f28aad.mp4";  // DIPN-VFT
videoSource[3]="https://user-images.githubusercontent.com/23622170/150448631-64ce4d8c-9d6e-4008-8a8f-5389c8a6264b.mp4";  // MVP
videoSource[4]="https://user-images.githubusercontent.com/23622170/150448636-5dd07dbf-c4b3-447b-9acd-05598e80e33a.mp4";  // OPG
videoSource[5]="https://user-images.githubusercontent.com/23622170/150448634-ab4490f9-2556-49d3-a6d7-c73d0406fa9c.mp4";  // MRPP
videoSource[6]="https://user-images.githubusercontent.com/23622170/150448641-a0e9a94e-73c4-4c57-a8f8-38929a586aec.mp4";  // RECYCLE
videoSource[7]="https://user-images.githubusercontent.com/23622170/150448638-43051da0-d8b4-4fd8-8ccb-0e404a8fc1da.mp4";  // PNS
  
var videoCount = videoSource.length;
  
var currentVideo = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
 
currentVideo = getRandomInt(videoCount)
 
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function videoPlay(videoNum){
  document.getElementById("myVideo").setAttribute("src",videoSource[videoNum]);
  document.getElementById("myVideo").load();
  document.getElementById("myVideo").play();
}

function videoCycleHandler(){
  sleep(1000);
  currentVideo ++;
  if(currentVideo == videoCount){
    currentVideo = 0;
    videoPlay(currentVideo);
  }
  else{
    videoPlay(currentVideo);
  }
}  
  
document.getElementById("myVideo").setAttribute("src",videoSource[currentVideo]);
document.getElementById('myVideo').addEventListener('ended',videoCycleHandler,false);
                                              
var videoS = new Array();
videoS[0]="https://user-images.githubusercontent.com/23622170/150445624-87f3f643-761c-4ae1-acda-66d0e7262e07.mp4"; 
videoS[1]="https://user-images.githubusercontent.com/23622170/150433205-858a88ed-31bd-4df4-8aba-6a0be30a385b.mp4";
videoS[2]="https://user-images.githubusercontent.com/23622170/150441666-9b21ea32-efa5-42b3-ba50-8aad288ee643.mp4";
videoS[3]="https://user-images.githubusercontent.com/23622170/150441651-0dd00912-8e6a-4cb0-adfc-75d7fa76e49f.mp4";
videoS[4]="https://user-images.githubusercontent.com/23622170/150441655-e3558b2a-adfe-4da6-9ab6-4e43c6a37bc7.mp4";
videoS[5]="https://user-images.githubusercontent.com/23622170/150441656-44b8ac8e-de70-41e9-a8d1-6e938e88bae8.mp4";
videoS[6]="https://user-images.githubusercontent.com/23622170/150441660-3a73cf10-7210-49d6-86bc-e24c35c32078.mp4";
videoS[7]="https://user-images.githubusercontent.com/23622170/150441654-182c76fe-1478-4099-bfd4-ae5e30501599.mp4";
                                                            
</script>
 
<br>
  At the <b>Algorithmic Robotics and Control Lab</b> (ARC-L), led by Dr. Jingjin Yu, we are broadly interested in understanding the optimality structures induced by practical problems in robotics/control, and exploiting the gained insight to develop efficient algorithms for tackling these problems with provable guarantees, e.g., on solution optimality. The tools we use/develop include classical combinatorial algorithms and data-driven AI/ML methods. Currently, research at ARC-L explores domains spanning multi-robot path/motion planning, object rearrangement/manipulation, multi-sensor deployment, and sensor fusion. 
   
<b>Dr. Jingjin Yu</b> is an Associate Professor in the Department of Computer Science at Rutgers University at New Brunswick. He obtained my Ph.D. in Electrical and Computer Engineering at the University of Illinois working with [Steven M. LaValle](http://lavalle.pl/).
Prior to joining Rutgers, Dr. Yu spent two years as a postdoctoral researcher at MIT working [Daniela Rus](https://www.csail.mit.edu/user/876) with the first year split at Boston University with [Mac Schwager](https://web.stanford.edu/~schwager/). 
Dr. Yu also stayed briefly at the Coordinated Science Laboratory at the University of Illinois as a postdoctoral researcher, working with 
[Soon-Jo Chung](http://www.eas.caltech.edu/people/sjchung) and [Petros G. Voulgaris](https://www.unr.edu/me/people/petros-voulgaris).
He completed his undergraduate study at the University of Science and Technology of China (USTC).

Dr. Yu is a recipient of the NSF CAREER Award and the Amazon Research Award in Robotics. 
His Erd&#337;s number is at its limit of 2.   
  
## Updates

<b>12/2023</b> - <a href="https://arxiv.org/pdf/2312.10887.pdf" target="_">One paper</a> accepted by AAAI 2024. The technical work is done mostly by a DIMACS REU, Marcus Gozon, when he was a rising junior. <br>
<b>08/2023</b> - Dr. Yu will serve as an editor for ICRA 2024. <br>
<b>07/2023</b> - Dr. Yu gave an invited talk, "Multi-Robot Path Planning on Grids: Computing O(1)-Optimal Solutions in Polynomial Time", at the University of Science and Technology of China. <br>
<b>06/2023</b> - Five papers accepted by IROS 2023. <br>
<b>03/2023</b> - A puzzle game app based on our multi-robot path planning research is now available for <a href="https://apps.apple.com/app/pebbler/id6446487371" target="_">iOS</a> and <a href="https://play.google.com/store/apps/details?id=edu.rutgers.cs.arc.pebbles" target="_">Android</a>.   <br>
<b>02/2023</b> - Dr. Yu gave a keynote talk, "Stack Rearrangement, Rubik Tables, and Multi-Robot Routing", in the 2023 AAAI Workshop on Multi-Agent Path Finding (online). <br>
<b>02/2023</b> - An extension to our RSS 2021 paper on the <a href="https://arxiv.org/pdf/2105.05366.pdf" target="_">pick-n-swap</a> manipulation primitive is accpted by IJRR. The online version is available at this <a href="https://doi.org/10.1177/02783649231153901" target="_">permanent link</a>.   <br>
<b>01/2023</b> - Four papers accepted by ICRA 2023 (3 ICRA + 1 RA-L). <br>
<b>01/2023</b> - Dr. Yu will serve as an associated editor for the International Journal of Robotics Research. <br>
<b>12/2022</b> - Dr. Yu will serve as an <a href="https://www.ieee-ras.org/educational-resources-outreach/distinguished-lecturer-program/distinguished-lecturers-list">RAS Distinguished Lecture</a> starting from January 2023. A multi-part lecture on multi-robot path planning is planned for the first half of 2023. Stay tuned!<br>
<b>11/2022</b> - Dr. Yu gave an invited talk, "Rubik Tables, Stack Rearrangement, and Multi-Robot Routing", in the <a href="http://acg.cs.tau.ac.il/cg-seminar   ">TAU CG/Robotics Seminar</a> series (online). <br>
<b>10/2022</b> - Dr. Yu gave an invited talk, "Planning for Many Robots and Objects", at MBZUAI (online). <br>
<b>09/2022</b> - Dr. Yu gave an invited talk, "Rubik Tables, Stack Rearrangement, and Multi-Robot Routing", at the 2022 Allerton Conference. <br>
<b>08/2022</b> - Rutgers CS hit #1 in robotics in the entire world, according to CSRankings <a href="https://user-images.githubusercontent.com/23622170/184647258-8eaa2526-b671-437e-b3b5-e61ebc79983d.PNG" target="_">1-year ranking</a>. <br>
<b>06/2022</b> - Four papers accepted by IROS 2022. <br>
<b>06/2022</b> - One paper accepted by CCCG 2022. <br>
<b>06/2022</b> - Dr. Yu gave an invited talk, titled "Multi-Robot Path Planning on Graphs", at the Nankai International AI and Robotics forum. <br>
<b>04/2022</b> - One <a href="https://arxiv.org/pdf/2201.08976.pdf" target="_">paper</a> accepted by RSS 2022. <br>
<b>03/2022</b> - Dr. Yu gave an invited talk at the Rutgers ECE Efficient AI (EFAI) seminar series. <br>
<b>03/2022</b> - One paper accepted by ICAPS 2022. <br>
<b>02/2022</b> - Six papers accepted by ICRA 2022. <br>

<a href="javascript:void(0)" onclick="sv('updatess');">earlier updates</a>
<div id='updatess' style='display:none;' value='+'>
<b>10/2021</b> - Our work on <a href="https://arxiv.org/pdf/2105.02857.pdf" target="_">Visual Foresight Trees</a> will appear in RA-L. <br>
<b>10/2021</b> - Our work extending our WAFR 2020 <a href="https://arxiv.org/pdf/2002.04979.pdf" target="_">Rubik Table</a> results will appear in IJRR. <br>
<b>09/2021</b> - Dr. Yu will be starting a <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2132972&HistoricalAwards=false" target="_"> 4-year NSF National Robotics Initiative 3.0 project</a> with his colleagues Abdeslam Boularias and Mridul Aanjaneya, working on enabling mobile robots to carry out sophisticated search-n-rescue efforts in degraded environments.<br>
<b>09/2021</b> - Dr. Yu is serving as an associated editor for IEEE Robotics and Automation Letters. <br>
<b>07/2021</b> - Dr. Yu is a tenured Associate Professor at Rutgers CS as of 07/2021. <br>
<b>07/2021</b> - One paper accepted by IROS 2021. <br>
<b>06/2021</b> - Our AI/ML/CV based metal recycling system paper is accepted by CASE 2021. <br>
<b>05/2021</b> - Two papers accepted by RSS 2021. <br>
<b>04/2021</b> - Dr. Yu gave an invited talk at the NYU ECE seminar series. <br>
<b>03/2021</b> - Dr. Yu received an Amazon gift supporting our multi-robot research. <br>
<b>02/2021</b> - Four papers accepted by ICRA 2021. <br>
<b>11/2020</b> - We are releasing an android game, <a href="https://play.google.com/store/apps/details?id=edu.rutgers.cs.arc.pebbles" target="PS">Pebbles</a>, 
based on motion models from our research on multi-robot motion planning and the 15-puzzle. You can directly download the <a href="http://arc.cs.rutgers.edu/files/pebbles.apk" target="_M">apk</a>.<br>
<b>10/2020</b> - Joining the dark side :D here is our lab's first deep learning based work, focusing on <a href="https://youtu.be/CNkZfZ-0Du8" target="_TT">de-cluttering</a>, as a joint work with Abdeslam Boularias. Submitted to ICRA 2021 [<a href="https://arxiv.org/pdf/2011.04692.pdf" target="_M">manuscript</a>].<br>
<b>09/2020</b> - Dr. Yu gave his tenure talk to the department. Here is a <a href="https://youtu.be/hk4Wh2oMAaA" target="_TT">recorded version</a>. <br>
<b>07/2020</b> - One paper accepted by IROS 2020. <br>
<b>06/2020</b> - Dr. Yu gave an invited talk to the Multi-Agent Systems Group of the China Computer Federation. <br>
<b>06/2020</b> - Our lab's team, RuBot by Siwei Feng and Teng Guo, made to top 3 of <a href="https://www.nist.gov/el/intelligent-systems-division-73500/agile-robotics-industrial-automation-competition/ariac-results" target="_NIST">NIST's 2020 ARIAC Robot Challenge</a>, with a 2.5K cash award. Congratulations!<br>
<b>05/2020</b> - One paper accepted by RSS 2020. <br>
<b>04/2020</b> - One paper accepted by WAFR 2020. <br>
<b>01/2020</b> - Three papers accepted by RA-L and will be presented at ICRA 2020. <br>
<b>12/2019</b> - Dr. Yu gave a talk at the University of Maryland. <br>
<b>11/2019</b> - Our IROS 2019 paper was a finalist for the Best Student Paper Award as well as the Best Application Paper Award. <br>
<b>09/2019</b> - Dr. Yu is serving as a co-chair of WAFR 2020. Please send us your best work! <br>
<b>08/2019</b> - One paper accepted by ISRR 2019. <br>
<b>06/2019</b> - One paper accepted by IROS 2019. <br> 
<b>05/2019</b> - Rutgers team lead by Siwei Feng was placed second at the <a href="https://www.nist.gov/el/intelligent-systems-division-73500/agile-robotics-industrial-automation-competition" target="_NIST">NIST's ARIAC Robot Challenge</a>, with a 5K cash award.<br> 
<b>05/2019</b> - Our ICRA 2019 paper was a finalist for the Best Automation Paper Award.<br>
<b>04/2019</b> - One paper accepted by RSS 2019. <br> 
<b>03/2019</b> - Dr. Yu gave a talk at the University of Illinois. <br>
<b>03/2019</b> - Dr. Yu received the NSF CAREER Award.<br> 
<b>01/2019</b> - One paper accepted by ICRA 2019.<br> 
<b>10/2018</b> - Dr. Yu started an exciting project on recycling automation with a large recycling company with his colleague Abdeslam Boularias.<br>
<b>09/2018</b> - Two papers accepted by WAFR 2018.<br>
<b>07/2018</b> - New version of our open-source <a href="https://arc.cs.rutgers.edu/mvp" target="_">microMVP</a> multi-vehicle platform is now available. <br>
<b>06/2018</b> - One paper accepted by IROS 2018.<br>
<b>05/2018</b> - Our extended RSS 2017 work is accepted by IJRR.<br>
<b>04/2018</b> - One paper accepted by RSS 2018.<br>
<b>01/2018</b> - Dr. Yu started working on a warehouse automation project (sponsored by JD.com) with colleagues  Kostas Bekris and Abdeslam Boularias.<br>
<b>01/2018</b> - One paper accepted by RAL/ICRA 2018.<br>
<b>09/2017</b> - Dr. Yu started an NSF NRI project on demand-driven multi-robot path and motion planning.<br>
<b>09/2017</b> - One paper accepted by MRS 2017.<br>
<b>06/2017</b> - Our RSS 2017 paper was a finalist for the Best Student Paper Award.<br>
<b>06/2017</b> - Dr. Yu gave a talk at the University of Science and Technology of China. <br>
<b>04/2017</b> - One paper accepted by RSS 2017.<br>
<b>12/2016</b> - One paper accepted by ICRA 2017.<br>
  <b>04/2016</b> - Dr. Yu started an NSF RI project on taming combinatorial challenges in manipulation with his colleague Kostas Bekris.<br><br>
</div> 

  
  
## Legacy Group Website

If you are looking for <a id="links" href="https://arc.cs.rutgers.edu/434F4445.html" target="_">old code</a> and/or the <a id="links" href="https://arc.cs.rutgers.edu/mvp/" target="_">microMVP micro-vehicle platform</a>, you may check out our old webpage <a id="links" href="https://arc.cs.rutgers.edu" target="_">arc.cs.rutgers.edu</a>, no longer updated after 07/2021. 

## Prospective Students

We always look to working with motivated prospective students interested in fundamental and/or applied research in robotics. If you are interested in joining the ARC Lab, please read some of our recent papers and let Dr. Yu know **why** you find them interesting, what are some of the limitations, and how you would go about doing the work better. Generic inquries about "positions" at the lab will not be answered; in particular, saying some of our work is interesting without providing details is a red flag. 



