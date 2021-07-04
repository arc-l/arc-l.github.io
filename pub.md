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
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

Publications


{% 
include cite.html p_title="Tracking hidden agents through shadow information spaces" 
p_author="J. Yu and S. M. LaValle" 
p_venue="The 2008 IEEE International Conference on Robotics and Automation (ICRA 2008)" 
p_pdf="files/YuLav08ICRA.pdf" 
p_bib="@INPROCEEDINGS{YuLav08ICRA,<br> 
author={Jingjin Yu and LaValle, Steven M.},<br> 
booktitle={2008 IEEE International Conference on Robotics and Automation},<br> 
title={Tracking hidden agents through shadow information spaces},<br> 
year={2008},<br> 
volume={},<br> 
number={},<br> 
pages={2331-2338},<br> 
doi={10.1109/ROBOT.2008.4543562}}<br>" 
%}
