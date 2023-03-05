<div id="#object-manipulation" style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

This page hosts selected videos highlighting excutions of robot tasks, as planned by our algorithms. For a more comprehensive set of videos, please check our <a id="links" href="https://www.youtube.com/channel/UCqotGxFUtMOgY9aIkDxW0fw">YouTube</a> channel. 


<a class="anchor" id="topa"></a>
## Application Domains 
<br/>
<a id="links" href="#manipulation-in-clutter">Manipulation in Clutter</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#multi-object-rearrangement">Multi-Object Rearrangement</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#multi-robot-systems">Multi-Robot Systems</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#surveillance-and-monitoring">Surveillance and Monitoring</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#end-to-end-systems">End-to-End Systems</a>

## Manipulation in Clutter
<br/>
<a id="links" href="#parallel-mcts-for-object-retrieval-in-clutter">Parallel MCTS for Object Retrieval in Clutter</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#self-supervised-learning-guided-mcts">Self-Supervised Learning-Guided MCTS</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#visual-foresight-trees-for-object-retrieval">Visual Foresight Trees for Object Retrieval</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#declutter-with-deep-interaction-prediction-network-dipn">Declutter with Deep Interaction Prediction Network (DIPN)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#topa">Back to Top</a>
<br>

### Parallel MCTS for Object Retrieval in Clutter
<a name="parallel-mcts"></a>
<p>
We propose a novel Parallel Monte Carlo tree
search with Batched Simulations (PMBS) algorithm for accelerating long-horizon, episodic robotic planning tasks. Monte
Carlo tree search (MCTS) is an effective heuristic search
algorithm for solving episodic decision-making problems whose
underlying search spaces are expansive. Leveraging a GPU-based large-scale simulator, PMBS introduces massive parallelism into MCTS for solving planning tasks through the
batched execution of a large number of concurrent simulations,
which allows for more efficient and accurate evaluations of
the expected cost-to-go over large action spaces. When applied to the challenging manipulation tasks of object retrieval
from clutter, PMBS achieves a speedup of over 30x with an
improved solution quality, in comparison to a serial MCTS
implementation. We show that PMBS can be directly applied
to a real robot hardware with negligible sim-to-real differences.
  <br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/-Br2IBjArgY"></iframe>
  </div>
</center>
<br>
</p>

### Self-Supervised Learning-Guided MCTS

<a name="guided-mcts"></a>
<p>
Working with the task of object retrieval in clutter, we developed a robot learning framework
in which Monte Carlo Tree Search (MCTS) is first applied to
enable a Deep Neural Network (DNN) to learn the intricate interactions between a robot arm and a complex scene containing
many objects, allowing the DNN to partially clone the behavior
of MCTS. In turn, the trained DNN is integrated into MCTS
to help guide its search effort. We call this approach learning-guided Monte Carlo tree search for Object REtrieval (MORE),
which delivers significant computational efficiency gains and
added solution optimality. MORE is a self-supervised robotics
framework/pipeline capable of working in the real world that
successfully embodies the System 2 to System 1 learning
philosophy proposed by Kahneman, where learned knowledge,
used properly, can help greatly speed up a time-consuming
decision process over time.<br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/hLYKq8JMDqE"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Visual Foresight Trees for Object Retrieval

<a name="vft"></a>
<p>
We consider the problem of retrieving an object from many tightly packed objects using a 
combination of robotic pushing and grasping actions. Object retrieval in dense clutter is 
an important skill for robots to operate in households and everyday environments effectively. 
The proposed solution, Visual Foresight Trees (VFT), intelligently rearranges the clutter
surrounding a target object so that it can be grasped easily.
Rearrangement with nested nonprehensile actions is challenging as it requires predicting 
complex object interactions in a combinatorially large configuration space of multiple objects. 
We first show that a deep neural network can be trained to accurately predict the poses of 
the packed objects when the robot pushes one of them. The predictive network provides visual 
foresight and is used in a tree search as a state transition function in the space of scene 
images. The tree search returns a sequence of consecutive push actions yielding the best 
arrangement of the clutter for grasping the target object. Experiments show that the proposed
approach outperforms model-free techniques as well as model-based myopic methods both in 
terms of success rates and the number of executed actions, on several challenging tasks. <br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/7cL-hmgvyec"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Declutter with Deep Interaction Prediction Network (DIPN)

<a name="dipn"></a>
<p>
We propose a Deep Interaction Prediction Network (DIPN) for learning to predict complex 
interactions that ensue as a robot end-effector pushes multiple objects, whose physical 
properties, including size, shape, mass, and friction coefficients may be unknown a priori. 
DIPN "imagines" the effect of a push action and generates an accurate synthetic image of 
the predicted outcome. DIPN is shown to be sample efficient when trained in simulation 
or with a real robotic system. The high accuracy of DIPN allows direct integration with 
a grasp network, yielding a robotic manipulation system capable of executing challenging 
clutter removal tasks while being trained in a fully self-supervised manner. The overall 
network demonstrates intelligent behavior in selecting proper actions between push and 
grasp for completing clutter removal tasks and significantly outperforms the previous 
state-of-the-art. Remarkably, DIPN achieves even better performance on the real robotic 
hardware system than in simulation. <br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/CNkZfZ-0Du8"></iframe>
  </div>
</center>
<br>
</p>

<hr>

## Multi-Object Rearrangement
<br/>
<a id="links" href="#"></a>&nbsp;&#9679;&nbsp;
<a id="links" href="#top">Back to Top</a>
<br>




###  Rendezvous without Coordinates

<a name="rendezvous"></a>
<p><strong>Rendezvous Without Coordinates</strong> - This research establishes a sufficient condition for an arbitrary 
(known) number of Dubins-car vehicles to rendezvous in finite time. The sensing model of the vehicle is extremely coarse 
with only three quantized values. The feedback control law is similarly quantized with three total control input. In particular, 
the vehicles do not perform any state estimation, i.e., no coordinate data is needed. Our result generalizes to distributed 
systems without central coordination as well as in-homogeneous vehicles. <br>

The video below demonstrates the sufficient condition for rendezvous, 
which depends solely on the sensor quantization (windshield size). We show two cases of rendezvous and two cases of divergence. 
Time evolutions of both the system and the Lyapunov certificate are shown. The simulation program is fully accessible 
<a href='http://people.csail.mit.edu/jingjin/code/rendezvous.html'>here</a>. 
[<a href="http://arc.cs.rutgers.edu/files/rendezvous.mp4">download the video</a>].<br><br>

<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/nat7PF0uuK0"></iframe>
  </div>
</center>
<br>
</p>
