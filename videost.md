<div id="#object-manipulation" style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

This page hosts selected videos highlighting excutions of robot tasks, as planned by our algorithms. For a more comprehensive set of videos, please check our <a id="links" href="https://www.youtube.com/channel/UCqotGxFUtMOgY9aIkDxW0fw">YouTube</a> channel. 


## Application Domains 
<a class="anchor" id="topa"></a>
<br/>
<a id="links" href="#d1">Manipulation in Clutter</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#d2">Multi-Object Rearrangement</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#d3">Multi-Robot Systems</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#d4">Surveillance and Monitoring</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#d5">End-to-End Systems</a>

## Manipulation in Clutter
<a class="anchor" id="d1"></a>
<br/>
<a id="links" href="#pmbs">Parallel MCTS for Object Retrieval in Clutter</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#more">Self-Supervised Learning-Guided MCTS</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#vft">Visual Foresight Trees for Object Retrieval</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#dipn">Declutter with Deep Interaction Prediction Network (DIPN)</a>&nbsp;&#9679;&nbsp;
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

### Declutter with Deep Interaction Prediction Network (DIPN)
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
<a id="links" href="#"></a>&nbsp;&#9679;&nbsp;
<a id="links" href="#datoro">Optimal Dual-Arm Tabletop Object Rearrangement</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#tori">Tabletop Rearrangement in Bounded Workspace</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#pnswap">Rearrangement on Lattices with Pick-n-Swaps</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#rbm">Running Buffer Minimization for Tabletop Rearrangement</a>&nbsp;&#9679;&nbsp;
<a id="links" href="#toro">Tabletop Object Rearrangement with Overhand Grasps</a>&nbsp;&#9679;&nbsp;
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

## Multi-Robot Systems
<a class="anchor" id="d3"></a>
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

## Surveillance and Monitoring
<a class="anchor" id="d4"></a>
<br/>
<a id="links" href="#"></a>&nbsp;&#9679;&nbsp;
<a id="links" href="#top">Back to Top</a>
<br>

## End-to-End Systems
<a class="anchor" id="d5"></a>
<br/>
<a id="links" href="#"></a>&nbsp;&#9679;&nbsp;
<a id="links" href="#top">Back to Top</a>
<br>

