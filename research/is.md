<div style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

{% include research-topics.html %} 

<br />
## Information Spaces

### Shadow Information Space for Multi-Target Tracking

<table border="0"  style="border: none!important; vertical-align:top;">
  <tr style="border: none!important;">
    <td width="200px" style="border: none!important;  vertical-align:top;">
      {% include fig.html url="/media/sis-1.png" description="Several environments to which this research applies. " %}<br />
      {% include fig.html url="/media/sis-2.png" description="a) A 2D environment and trajectory followed by a robot with omni-directional visibility. b) The graph encoding combinatorial changes in visibility. c) The bipartite graph, made by compressing information in (b). d) A resulting maximum-flow graph, used to answer questions about tracking or counting targets." %}  
    </td>
    <td style="border: none!important; vertical-align:top;">
Imagine a game of hide-and-seek (variations include tag, tick, Cops and Robbers) is being played. After the hiders conceal themselves (subsequent relocations are allowed), the seekers, usually having a map of the environment, start to search for the hiders. Most people who played the game as school children know that an effective search usually begins with the seekers checking places having high probabilities of containing a hider, from previous experience: a closet, an attic, a tall bush, and so on. After the most likely areas are exhausted, the next strategy is then to carry out a systematic search of the environment, possibly with some seekers guarding certain escape routes. Occasionally, during game play, some hiders may attempt to relocate themselves to avoid being found. While they succeed sometimes, they may end up being spotted by the seekers and instead getting found earlier.

      <strong>Shadow Information Spaces</strong> research builds a model that abstracts the above hide-and-seek problem. We reason around the evolution of information that's hidden from the robots' sensors. This applies to a wide variety of real world problems, some of which are illustrated in the top figure on the left. Calling a connected component of the environment that is out of the robot's sensor field-of-view as a shadow, we argue that given the transitions of shadows, the problem of estimating those hidden information can be transformed into a maximum flow problem on a bipartitie graph structure in the nondeterministic case (bottom figure on the right). When the targets move probabilistically and sensors are not reliable, Bayesian filter are engaged to solve the problem. Since our approach mimics Bayesian filters but always begins with a combinatorial structure, we call it a combinatorial filter. 
    </td>
  </tr>
</table>

The details are described in the following TOR paper:
```
Shadow Information Spaces: Combinatorial Filters for Tracking Targets. J. Yu and S. M. 
LaValle. IEEE Transactions on Robotics, 28(2), page(s): 440-456, Apr. 2012.
```

<hr />

### Verification with Cyber Detectives

<table border="0"  style="border: none!important; vertical-align:top;">
  <tr style="border: none!important;">
    <td width="200px" style="border: none!important;  vertical-align:top;">
      {% include fig.html url="/media/cd.png" description="Setup: rooms $A$-$C$, occupancy sensors $o_1$, $o_2$, and beam detectors $b_1$, $b_2$. The blue curve connecting the start (circle) and goal (corss) locations is a possible agent path for the story $ABAC$, which triggers the sensor recordings $b_2, o_2, o_1$, in that order." %}  
    </td>
    <td style="border: none!important; vertical-align:top;">
       In computer science, robotics, and control, a frequently encountered problem is verifying that an autonomous system is performing as designed. For example, a service robot may plan a path to clean office rooms one by one. Due to internal or external factors, the robot may mistaken one room for another and fail to accomplish its task without knowing that it has failed. In such cases, it is desirable if external means could automatically determine that a robot has faltered. In this research, we introduce realistic abstractions of above problems and show that such formulations are computationally tractable. In this work, we provide fast, dynamic programming based algorithms for verifying the path taken by an autonomous system by observing samples of the system's trajectory. Our algorithm applies to multiple robots as well. 
    </td>
  </tr>
</table>

Exact inference algorithm:
```
Cyber Detectives: Determining When Robots or People Misbehave. J. Yu and S. M. 
LaValle. Algorithmic Foundations of Robotics IX, Springer Tracts in Advanced 
Robotics (STAR), Springer Berlin/Heidelberg, vol 68, page(s): 391-407, 2011.
```

Approximate inference algorithm:
```
Story Validation and Approximate Path Inference with a Sparse Network of 
Heterogeneous Sensors. J. Yu and S. M. LaValle. 2011 IEEE International Conference 
on Robotics and Automation (ICRA 2011).
```