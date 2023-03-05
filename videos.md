<div id="#object-manipulation" style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

For a more comprehensive set of videos, please check our <a id="links" href="https://www.youtube.com/channel/UCqotGxFUtMOgY9aIkDxW0fw">YouTube</a> channel. 


## Application Domains 
<a class="anchor" id="topa"></a>
<br/>
<a id="links" href="#d1">Manipulation in Clutter</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#d2">Multi-Object Rearrangement</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#d3">Multi-Robot Path and Motion Planning</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#d4">Surveillance and Monitoring</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#d5">Industrial Collaboration: End-to-End Systems</a>

## Manipulation in Clutter
<a class="anchor" id="d1"></a>
<br/>
<a id="links" href="#pmbs">Parallel MCTS for Object Retrieval in Clutter (IROS 22)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#more">Self-Supervised Learning-Guided MCTS (ICRA 22)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#vft">Visual Foresight Trees for Object Retrieval (RA-L 22)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#dipn">Declutter with Deep Interaction Prediction Network (ICRA 21)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#topa">Back to Top</a>
<br>

### Parallel MCTS for Object Retrieval in Clutter 
<a class="anchor" id="pmbs"></a>
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
<a class="anchor" id="more"></a>
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
<a class="anchor" id="vft"></a>
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

### Declutter with Deep Interaction Prediction Network
<a class="anchor" id="dipn"></a>
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


## Multi-Object Rearrangement
<a class="anchor" id="d2"></a>
<br/>
<a id="links" href="#datoro">Optimal Dual-Arm Tabletop Object Rearrangement (IROS 22)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#tori">Tabletop Rearrangement in Bounded Workspace (ICRA 21)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#pnswap">Rearrangement on Lattices with Pick-n-Swaps (RSS 21)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#rbm">Running Buffer Minimization for Tabletop Rearrangement (RSS 21)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#conveyor">Optimal Robotic Pick-and-Place on a Moving Conveyor (RA-L 20)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#stackrearr">Efficient High Quality Stack Rearrangement (ICRA 18)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#toro">Tabletop Object Rearrangement with Overhand Grasps (RSS 17, IJRR 18)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#top">Back to Top</a>
<br>

### Toward Optimal Dual-Arm Tabletop Object Rearrangement
<a class="anchor" id="datoro"></a>
<p>
We investigate the problem of coordinating two
robot arms to solve non-monotone tabletop multi-object rearrangement tasks. In a non-monotone rearrangement task,
complex object-object dependencies exist that require moving
some objects multiple times to solve an instance. In working
with two arms in a large workspace, some objects must be
handed off between the robots, which further complicates
the planning process. For the challenging dual-arm tabletop
rearrangement problem, we develop effective task planning
algorithms for scheduling the pick-n-place sequence that can
be properly distributed between the two arms. We show that,
even without using a sophisticated motion planner, our method
achieves significant time savings in comparison to greedy
approaches and naive parallelization of single-robot plans.
<br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/ksjKV25cbG4"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Tabletop Rearrangement in Bounded Workspace
<a class="anchor" id="tori"></a>
<p>
We examine the problem of
rearranging many objects on a tabletop in a cluttered
setting using overhand grasps. Efficient solutions for the
problem, which capture a common task that we solve on a
daily basis, are essential in enabling truly intelligent robotic
manipulation. In a given instance, objects may need to be
placed at temporary positions (“buffers”) to complete the
rearrangement, but allocating these buffer locations can be
highly challenging in a cluttered environment. To tackle the
challenge, a two-step baseline planner is first developed, which
generates a primitive plan based on inherent combinatorial
constraints induced by start and goal poses of the objects and
then selects buffer locations assisted by the primitive plan. We
then employ the “lazy” planner in a tree search framework
which is further sped up by adapting a novel preprocessing
routine. Simulation experiments show our methods can quickly
generate high-quality solutions and are more robust in solving
large-scale instances than existing state-of-the-art approaches.<br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/hegO3JenKjo"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Rearrangement on Lattices with Pick-n-Swaps
<a class="anchor" id="pnswap"></a>
<p>
We study a class of rearrangement problems under a novel pick-n-swap prehensile manipulation model, in which a robotic manipulator, capable of carrying
an item and making item swaps, is tasked to sort items stored in lattices of variable dimensions in a time-optimal manner. We systematically analyze the intrinsic
optimality structure, which is fairly rich and intriguing, under different levels of
item distinguishability (fully labeled, where each item has a unique label, or partially labeled, where multiple items may be of the same type) and different lattice
dimensions. Focusing on the most practical setting of one and two dimensions, we
develop low polynomial time cycle-following-based algorithms that optimally perform rearrangements on 1D lattices under both fully- and partially-labeled settings.
On the other hand, we show that rearrangement on 2D and higher-dimensional
lattices become computationally intractable to optimally solve. Despite their NP-hardness, we prove that efficient cycle-following-based algorithms remain optimal
in the asymptotic sense for 2D fully- and partially-labeled settings, in expectation,
using the interesting fact that random permutations induce only a small number of
cycles. We further improve these algorithms to provide
1.x-optimality when the
number of items is small. Simulation studies corroborate the effectiveness of our
algorithms.<br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/LcI-Es5w5HI"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Running Buffer Minimization for Tabletop Rearrangement
<a class="anchor" id="rbm"></a>
<p>
For tabletop rearrangement problems with overhand grasps, storage space outside the tabletop workspace, or
buffers, can temporarily hold objects which greatly facilitates
the resolution of a given rearrangement task. This brings forth
the natural question of how many running buffers are required
so that certain classes of tabletop rearrangement problems are
feasible. In this work, we examine the problem for both the
labeled (where each object has a specific goal pose) and the
unlabeled (where goal poses of objects are interchangeable)
settings. On the structural side, we observe that finding the
minimum number of running buffers (MRB) can be carried
out on a dependency graph abstracted from a problem instance,
and show that computing MRB on dependency graphs is NP-hard. We then prove that under both labeled and unlabeled
settings, even for uniform cylindrical objects, the number of
required running buffers may grow unbounded as the number
of objects to be rearranged increases; we further show that the
bound for the unlabeled case is tight. On the algorithmic side,
we develop highly effective algorithms for finding MRB for
both labeled and unlabeled tabletop rearrangement problems,
scalable to over a hundred objects under very high object
density. Employing these algorithms, empirical evaluations
show that random labeled and unlabeled instances, which more
closely mimics real-world setups, have much smaller MRBs.<br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/hbD-cumF_H4"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Optimal Robotic Pick-and-Place on a Moving Conveyor 
<a class="anchor" id="conveyor"></a>
<p>
Robotic pick-and-place (PnP) operations on moving conveyors find a wide range of industrial applications. In practice, simple greedy heuristics (e.g., prioritization based on the time to process a single
object) are applied that achieve reasonable efficiency. We show analytically that, under a simplified
telescoping robot model, these greedy approaches do not ensure time optimality of PnP operations.
To address the shortcomings of classical solutions, we develop algorithms that compute optimal object
picking sequences for a predetermined finite horizon. Employing dynamic programming techniques and
additional heuristics, our methods scale to up to tens to hundreds of objects. In particular, the fast
algorithms we develop come with running time guarantees, making them suitable for real-time PnP applications demanding high throughput. Extensive evaluation of our algorithmic solution over dominant
industrial PnP robots used in real-world applications, i.e., Delta robots and Selective Compliance Assembly Robot Arm (SCARA) robots, shows that a typical efficiency gain of around 10-40% over greedy
approaches can be realized.<br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/bIomJzjKXyc"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Efficient High Quality Stack Rearrangement 
<a class="anchor" id="stackrearr"></a>
<p>
<strong>
Efficient High Quality Stack Rearrangement
</strong> - Video highlight of our RA-L/ICRA 2018 work with the same name. 
Abstract:  We study a variant of rearrangement problems that appear frequently 
in applications, which involves sorting objects or robots in stack-like 
containers that can be accessed only from one side. We provide efficient 
algorithms that could generate high quality rearrangement sequence. <br><br>
  <center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/-yDTXM9zASE"></iframe>
  </div>
</center>
<br>
<br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/DRkm9-rQeQk"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Tabletop Object Rearrangement with Overhand Grasps
<a class="anchor" id="toro"></a>
<p>
<strong>
Optimal Tabletop Object Rearrangement with Overhand Grasps
</strong> - Video highlight of our RSS 2017 work on optimal tabletop object 
rearrangement and subsequent extended version. Our hardware experiments 
confirm our hypothesis that (1) grasping/releasing is generally much more
time consuming and (2) our proposed algorithm provide significant benefit 
when compared with a greedy algorithm. <br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/Ub7QSDQz0Qk"></iframe>
  </div>
</center>
<br>
</p>

## Multi-Robot Path and Motion Planning
<a class="anchor" id="d3"></a>
<br/>
<a id="links" href="#sub15"> 1.x Time-Optimal Multi-Robot Path Planning in 2D and 3D (RSS 22, IROS 22)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#ddm">Path-Diversification and Database-Driven Multi-Robot Path Planning (RA-L 20)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#wafr18">Multi-Robot Motion Planning in Continuous Domain under Extreme Density (WAFR 2018)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#micromvp">Open-Source micro-Multi-Vehicle Platform (ICRA 2017)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#mppcisrr">Fast Near-Optimal Multi-Robot Path Planning in Continuous Domain (ISRR 15)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#reconfiguration">Optimal Formation Reconfiguration (CDC 12, CDC 13)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#rendezvous">Rendezvous without Coordinates (CDC 08, TAC 12)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#top">Back to Top</a>
<br>

###  1.x Time-Optimal Multi-Robot Path Planning in 2D and 3D
<a class="anchor" id="sub15"></a>
<p>
Multi-robot path planning (MRPP) is NP-hard to optimally solve on graphs, suggesting no polynomial-time algorithms can compute exact optimal solutions for them. 
This raises a natural question: How optimal can polynomial-time algorithms reach? 
In this work, among other breakthroughs, we propose the first low-polynomial-time MRPP algorithms delivering 1-1.5 (resp., 1-1.67)  asymptotic makespan optimality guarantees for 2D (resp., 3D) grids  for random instances at a very high 1/3 robot density, with high probability. Moreover, our methods experience no performance degradation when regularly distributed obstacles are introduced. These methods generalize to support 100% robot density.  
Simple Python-based implementations of our RTA-based algorithms are shown to be highly effective in extensive numerical evaluations, demonstrating unprecedented scalability as compared with methods including ECBS and DDM. For example, in 3D settings, RTA-based algorithms readily scale to grids with over $370,000$ vertices and over $120,000$ robots and consistently achieves conservative makespan optimality approaching $1.5$, as predicted by our theoretical analysis. <br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/9h8-MbQGj1I"></iframe>
  </div>
</center>
<br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/v8WMkX0qxXg"></iframe>
  </div>
</center>
<br>
</p>

<hr>

###  Path-Diversification and Database-Driven Multi-Robot Path Planning 
<a class="anchor" id="ddm"></a>
<p>
<strong>
DDM
</strong> - DDM solves one-shot and dynamic optimal multi-robot path 
planning problems in a graph-based setting. DDM 
is mainly enabled through exploiting two innovative heuristics: path 
diversification and optimal sub-problem solution databases. The two 
heuristics attack two distinct phases of a decoupling-based planning 
planner: while path diversification allows more effective use of the 
entire workspace for robot travel, optimal sub-problem solution databases 
facilitate the fast resolution of local path conflicts. <br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/0MUGrg5CphM"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Open-Source micro-Multi-Vehicle Platform
<a class="anchor" id="wafr18"></a>
<p><We push the limit in planning collision-free motions for routing uniform labeled discs in two dimensions. First, from a theoretical perspective, we show that the constant-factor time-optimal routing of
labeled discs can be achieved using a polynomial-time algorithm with robot density over 50% in the
limit (i.e., over half of the workspace may be occupied by the discs). Second, from a more practical
standpoint, we provide a high performance algorithm that computes near-optimal (e.g., 1.x) solutions
under the same density setting.
<br><br>
<center>
  <div style="position:relative;padding-bottom:75%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/2-QHESZ_p3E"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Open-Source micro-Multi-Vehicle Platform
<a class="anchor" id="micromvp"></a>
<p><strong>A Portable, 3D-Printing Enabled Multi-Vehicle Platform for Robotics Research and Education
</strong> - Video highlight of our microMVP platform for all! See <a href="https://arc.cs.rutgers.edu/mvp/">https://arc.cs.rutgers.edu/mvp/</a>
for more details or read more <a href="https://arxiv.org/pdf/1609.04745v1.pdf">here</a>.<br><br>
<center>
  <div style="position:relative;padding-bottom:75%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/n9DOtgHHyGY"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Fast Near-Optimal Multi-Robot Path Planning in Continuous Domain
<a class="anchor" id="mppcisrr"></a>
<p><strong>Near-Optimal Multi-Robot Path Planning in Continuous Domain</strong> - Video highlights accompanying 
our ISRR work. You may also [<a href="http://arc.cs.rutgers.edu/files/multi-robot.mp4">download the video</a>].<br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/HfL7LO8i8CI"></iframe>
  </div>
</center>
<br>
</p>

<hr>
### Optimal Formation Reconfiguration
<a class="anchor" id="reconfiguration"></a>
<p><strong>Optimal Reconfiguration of Multi-Robot Formations</strong> - In two 
(<a href="files/YuLav12CDC.pdf" target="_">CDC'12</a>, <a href="files/YuLav13CDC.pdf" target="_">CDC'13</a>) recent works, 
we developed efficient algorithm for the distance optimal reconfiguration of multi-robot formations. The video below demonstrates
effectiveness of the algorithm. We note that the examples in the video take less than 0.1 second to solve when 
implemented in Java and running on a MacBook Air (2013). 
[<a href="http://arc.cs.rutgers.edu/files/reconfiguration.mp4">download the video].</a><br><br>

<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/ldelQkjzPwA"></iframe>
  </div>
</center>
<br>
</p>

<hr>
###  Rendezvous without Coordinates
<a class="anchor" id="rendezvous"></a>
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

## Surveillance and Monitoring
<a class="anchor" id="d4"></a>
<br/>
<a id="links" href="#barrier">Barrier Forming: Separating Polygonal Sets with Minimum Number of Lines (ICRA 22)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#org3d">Globally Optimal Coverage of 3D-Embedded Surfaces (ICRA 21)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#org">Optimal Perimeter and Region Guarding with Range Sensors (RSS 20)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#heteopg">Optimal Perimeter Guarding w Heterogeneous Robots (RA-L 20)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#opg">Optimal Perimeter Guarding (RSS 19)</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#top">Back to Top</a>
<br>


### Barrier Forming: Separating Polygonal Sets with Minimum Number of Lines
<a class="anchor" id="barrier"></a>
<p>In this work, we carry out structural and algorithmic studies of a problem of barrier forming: selecting
the minimum number of straight line segments (barriers) that
separate several sets of mutually disjoint objects in the plane.
The problem models the optimal placement of line sensors (e.g.,
infrared laser beams) for isolating many types of regions in a
pair-wise manner for practical purposes (e.g., guarding against
intrusions). The problem is NP-hard even if we want to find
the minimum number of lines to separate two sets of points in
the plane. Under the umbrella problem of barrier forming with
minimum number of line segments, three settings are examined:
barrier forming for point sets, point sets with polygonal
obstacles, polygonal sets with polygonal obstacles. We describe
methods for computing the optimal solution for the first two
settings with the assistance of mathematical programming, and
provide a 2-OPT solution for the third. We demonstrate the
effectiveness of our methods through extensive simulations.<br><br>

<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/rln8M-7M9EI"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Globally Optimal Coverage of 3D-Embedded Surfaces
<a class="anchor" id="org3d"></a>
<p>We carry out a structural and algorithmic study
of a mobile sensor coverage optimization problem targeting 2D
surfaces embedded in a 3D workspace. The investigated settings
model multiple important applications including camera network deployment for surveillance, geological monitoring/survey
of 3D terrains, and UVC-based surface disinfection for the
prevention of the spread of disease agents (e.g., SARS-CoV2). Under a unified general “sensor coverage” problem, three
concrete formulations are examined, focusing on optimizing
visibility, single-best coverage quality, and cumulative quality,
respectively. After demonstrating the computational intractability of all these formulations, we describe approximation schemes
and mathematical programming models for near-optimally
solving them. The effectiveness of our methods is thoroughly
evaluated under realistic and practical scenarios.
<br><br>

<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/i5D-rCRcCpc"></iframe>
  </div>
</center>
<br>
</p>

<hr>


### Optimal Perimeter and Region Guarding with Range Sensors
<a class="anchor" id="org"></a>
<p>We investigate the problem of using mobile robots
equipped with 2D range sensors to optimally guard perimeters
or regions. Given a bounded set in R^2 to be guarded, and
k mobile sensors where the i-th sensor can cover a circular
region with a variable radius ri, we seek the optimal strategy
to deploy the k sensors to fully cover the set such that max ri
is minimized. On the side of computational complexity, we
show that computing a 1.152-optimal solution for guarding
a perimeter or a region is NP-hard even when the set is
a simple polygon or the boundary of a simple polygon, i.e.,
the problem is hard to approximate. The hardness result on
perimeter guarding holds when each sensor may guard at most
two disjoint perimeter segments. On the side of computational
methods, for the guarding perimeters, we develop a fully
polynomial time approximation scheme (FPTAS) for the special
setting where each sensor may only guard a single continuous
perimeter segment, suggesting that the aforementioned hard-to-approximate result on the two-disjoint-segment sensing model is
tight. For the general problem, we first describe a polynomial-time (2 + ε)-approximation algorithm as an upper bound,
applicable to both perimeter guarding and region guarding.
This is followed by a high-performance integer linear programming (ILP) based method that computes near-optimal solutions.
Thorough computational benchmarks as well as evaluation on
potential application scenarios demonstrate the effectiveness of
these algorithmic solutions.
<br><br>

<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/1-PsAmQlVw8"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Optimal Perimeter Guarding w Heterogeneous Robots
<a class="anchor" id="heteopg"></a>
<p>We perform structural and algorithmic studies of significantly generalized versions of the optimal
perimeter guarding (OPG) problem [1]. As compared with the original OPG where robots are uniform,
in this paper, many mobile robots with heterogeneous sensing capabilities are to be deployed to optimally
guard a set of one-dimensional segments. Two complimentary formulations are investigated where one
limits the number of available robots (OPGLR) and the other seeks to minimize the total deployment
cost (OPGMC). In contrast to the original OPG which admits low-polynomial time solutions, both
OPGLR and OPGMC are computationally intractable with OPGLR being strongly NP-hard. Nevertheless, we develop fairly scalable pseudo-polynomial time algorithms for practical, fixed-parameter subcase
of OPGLR; we also develop pseudo-polynomial time algorithm for general OPGMC and polynomial
time algorithm for the fixed-parameter OPGMC case. The applicability and effectiveness of selected
algorithms are demonstrated through extensive numerical experiments.<br><br>

<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/6gYL0_B3YTk"></iframe>
  </div>
</center>
<br>
</p>

<hr>
###  Optimal Perimeter Guarding
<a class="anchor" id="opg"></a>
<p>We investigate the problem of optimally assigning a
large number of robots (or other types of autonomous agents) to
guard the perimeters of closed 2D regions, where the perimeter of
each region to be guarded may contain multiple disjoint polygonal
chains. Each robot is responsible for guarding a subset of a
perimeter and any point on a perimeter must be guarded by
some robot. In allocating the robots, the main objective is to
minimize the maximum 1D distance to be covered by any robot
along the boundary of the regions. For this optimization problem
which we call optimal perimeter guarding (OPG), thorough
structural analysis is performed, which is then exploited to develop
fast exact algorithms that run in guaranteed low polynomial
time. In addition to formal analysis and proofs, experimental
evaluations and simulations are performed that further validate
the correctness and effectiveness of our algorithmic results.<br><br>

<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/KwuMhI1dA3U"></iframe>
  </div>
</center>
<br>
</p>


## Industrial Collaboration: End-to-End Systems
<a class="anchor" id="d5"></a>
<br/>
<a id="links" href="#recycle">Automated ML-Enabled Scrap Al-Cu Recycling</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#packing">Tight Robot Packing in the Real World</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#top">Back to Top</a>
<br>

### Automated ML-Enabled Scrap Al-Cu Recycling 
<a class="anchor" id="recycle"></a>
<p>
<strong>
Computer Vision and Robotic System for Recycling Automation
</strong> - We are working with a large recycling company to help it modernizing its 
product lines to increase levels of automation as an early prototype, we build a demo
system for the separation of scrap metals based on color that is robust to lighting 
condition changes. The video shows a real-time demo of a run that separates pure copper 
pieces from mixed aluminum-copper pieces. We expect to report more exciting results 
as the project progresses. <br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/araxYgLCrpM"></iframe>
  </div>
</center>
<br>
</p>

<hr>

### Tight Robot Packing in the Real World 
<a class="anchor" id="packing"></a>
<p>
Many order fulfillment applications in logistics, such as packing, involve picking objects from unstructured piles before tightly arranging them in bins or shipping containers. Desirable robotic solutions in this space need to be lowcost, robust, easily deployable and simple to control. The current work proposes a complete pipeline for solving packing tasks for cuboid objects, given access only to RGB-D data and a single robot arm with a vacuum-based end-effector, which is also used as a pushing or dragging finger. The pipeline integrates perception for detecting the objects and planning so as to properly pick and place objects. The key challenges correspond to sensing noise and failures in execution, which appear at multiple steps of the process. To achieve robustness, three uncertainty-reducing manipulation primitives are proposed, which take advantage of the end-effector’s and the workspace’s compliance, to successfully and tightly pack multiple cuboid objects. The overall solution is demonstrated to be robust to execution and perception errors. The impact of each manipulation primitive is evaluated in extensive realworld experiments by considering different versions of the pipeline. Furthermore, an open-source simulation framework is provided for modeling such packing operations. Ablation studies are performed within this simulation environment to evaluate features of the proposed primitives.<br><br>
<center>
  <div style="position:relative;padding-bottom:56.25%;">
  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allowfullscreen src="https://www.youtube.com/embed/PsSdZ2Yzx5E"></iframe>
  </div>
</center>
<br>
</p>

<hr>

