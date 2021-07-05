<div style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

## Object Rearrangement

## Optimal Multi-Agent Coverage 

## Multi-Robot Motion Planning (MRMP)

### Optimal Solutions 

#### Multi-Robot Motion Planning on Graphs and Network Flow

<table border="0"  style="border: none!important; vertical-align:top;">
  <tr style="border: none!important;">
    <td width="200px" style="border: none!important;  vertical-align:top;">
      {% include fig.html url="/media/wafr-12.png" description="" %} 
    </td>
    <td style="border: none!important; vertical-align:top;">
       We show that there is an intimate relation between the problem of multi-robot motion/formation planning and network flow. Using the time expansion technique (illustrated on the left), we can convert the problem of finding collision-free paths for multiple robots to a problem of flowing commodities through a network (we call this the time-expanded network). In retrospect, this is not very surprising: Robots traveling on a graph, when looked from both space and time, are just like commodities traveling on a network. Applying results from network flow literature, we obtain efficient algorithms for planning time optimal and distance optimal paths for indistinguishable robots (i.e. the goals are  permutation invariant). For the permutation invariant case, we also looked at the compatibility of multiple objectives. It turns out that three common objectives, last arrival time, average arrival time, and total distance, have a pairwise Pareto optimal structure. . 
    </td>
  </tr>
</table>

Equivalence between MRMP and network flow: 
```
Multi-agent Path Planning and Network Flow. J. Yu and S. M. LaValle. Algorithmic 
Foundations of Robotics X, Springer Tracts in Advanced Robotics (STAR), Springer 
Berlin/Heidelberg, vol 86, page(s): 157-173, 2013
```

Algorithms and heuristics for labeled MRMP on graphs:
```
Optimal Multi-Robot Path Planning on Graphs: Complete Algorithms and Effective 
Heuristics. J. Yu and S. M. LaValle. IEEE Transactions on Robotics, 32(5), 
page(s): 1163 - 1177, 2016.
```

<hr>

#### Fast Heuristics for Multi-Robot Motion Planning


<table border="0"  style="border: none!important; vertical-align:top;">
  <tr style="border: none!important;">
    <td width="200px" style="border: none!important;  vertical-align:top;">
      <a href="https://youtu.be/0MUGrg5CphM" target="youtube">
        {% include fig.html url="https://img.youtube.com/vi/0MUGrg5CphM/0.jpg" description="" %} 
      </a> 
    </td>
    <td style="border: none!important; vertical-align:top;">
       We propose a novel centralized and decoupled algorithm, DDM, for solving multi-robot path planning problems in grid graphs, targeting on-demand and automated warehouselike settings. Two settings are studied: a traditional one whose objective is to move a set of robots from their respective initial vertices to the goal vertices as quickly as possible, and a dynamic one which requires frequent re-planning to accommodate for goal configuration adjustments. DDM is enabled through two innovative heuristics, path diversification and optimal sub-problem solution databases, targeting two distinct phases of a decoupling-based planner. Path diversification allows the more effective use of the entire workspace for robot travel, sub-problem solution databases facilitate the fast resolution of local path conflicts. 
    </td>
  </tr>
</table>

<hr>

### Complexity 

<table border="0"  style="border: none!important; vertical-align:top;">
  <tr style="border: none!important;">
    <td width="200px" style="border: none!important;  vertical-align:top;">
      {% include fig.html url="/media/ral-16.png" description="" %} 
    </td>
    <td style="border: none!important; vertical-align:top;">
       In this line of work, we show that optimal multi-robot path/motion planning on graphs demonstrats a Pareto structure for different minimum time and minimum distance constraints. We further show that all these problems are NP-hard to solve, for both general graphs and planar graphs (the later implies the former). The figure on the left illustrates of a reduction from planar monotone 3-SAT to minimum-makespan multi-robot motion planning on planar graphs. 
    </td>
  </tr>
</table>

Results for general graphs:

```
Structure and Intractability of Optimal Multi-robot Path Planning on Graphs. J. Yu 
and S. M. LaValle. The Twenty-Seventh AAAI Conference on Artificial Intelligence, 2013.
```

```
Optimal Multi-Robot Path Planning on Graphs: Structure and Computational Complexity. 
J. Yu and S. M. LaValle. arXiv, 2015.
```

Results for planar graphs:

```
Intractability of Optimal Multi-Robot Path Planning on Planar Graphs. J. Yu. IEEE 
Robotics and Automation Letters, 1(1), page(s): 33-40, 2016.
```

<hr>

### Feasibility 

#### Feasbility via Group Theoretic Methods

{% include image.html url="/media/mrmp-feasibility.png" description="Our algorithm converts a pebble motion on graphs problem to a pebble motion on trees problem (well, almost) by doing the following: For each maximally 2-edge-connected component of the graph $G$, we contract it to a single edge $(v_1, v_2)$. All vertices adjacent to this component are now connected to $v_1$. This contracts $G$ into a tree. " %}

<br />Let $G$ be a simple connected graph with $n$ vertices and let there be $p < n$ labeled pebbles. In a configuration, the pebbles occupy $p$ distinct vertices of $G$. From a configuration, a pebble may move to a nearby unoccupied vertex in one step. Now given two configurations $S$ and $D$, a natural question is whether $S$, $D$ are reachable from each other. Kornhauser, Miller, and Spirakis (FOCS 1984) showed that this problem can be decided in polynomial time but a solution may require $\Theta(n^3)$ moves. This suggests that no algorithm can solve all instances of the problem under cubic time. Therefore, deciding whether such a problem is feasible using less time helps avoiding unnecessary computations on infeasible instances. Auletta et al. (SWAT, 1996) worked on pebble motion on trees and provided a linear time algorithm for testing the feasibility of this problem. Observing that pebbles on a 2-edge-connected component are almost always equivalent, we reducethe pebble motion on graphs to the pebble motion on trees in linear time by contracting these components intoa single edge. We obtained this result independently of Goraly and Hassin, whose work imply a similar result. 

Manuscript on arXiv: 
```
A Linear Time Algorithm for the Feasibility of Pebble Motion on Graphs. J. Yu, 2013
```

<hr />

#### Synchronous Pebble Motion on Graphs and Permutation Groups from Cyclic Rotations of Pebbles

<table border="0"  style="border: none!important; vertical-align:top;">
  <tr style="border: none!important;">
    <td width="200px" style="border: none!important;  vertical-align:top;">
      {% include fig.html url="/media/fig-8.png" description="Using $a_1$ and $a_2$ on the left cycle as swap pebbles, it is possible to switch any two pebbles on the right cycle (in this case $c_2$ and $c_5$). This implies that the group generated by $n$ pebbles on a figure eight graph is isomorphic to $A_n$ or $S_n$, the alternating group and symmetric group on $n$ letters, respectively. The group is $S_n$ when one of the cycles is an even cycle." %} 
    </td>
    <td style="border: none!important; vertical-align:top;">
       Let $G$ be a simple connected graph with $n$ vertices and let there be $n$ labeled pebbles occupying these $n$ vertices. In each step, pebbles on disjoint cycles may rotate to occupy neighboring vertices (all pebbles on a cycle must rotate in the same direction). This allows the pebbles to be reconfigured. The reachable configurations form a group depending only on the graph $G$. We show that such a group has a diameter no more than $O(n^2)$. Using this intermediate result, we can also extend results on the pebble motion problem (which may have unoccupied vertices but does not allow rotations) to this synchronous pebble motion formulation. Synchronous pebble motion is a more natural model for multi-robot path planning on graphs since robots should be able to move synchronously without a swap space. Synchronous problem can be solved in polynomial time. In particular, similar to the pebble motion problem, feasibility test of this problem can be done in linear time. 
    </td>
  </tr>
</table>

```
Pebble Motion on Graphs with Rotations: Efficient Feasibility Tests and Planning 
Algorithms. J. Yu and Daniela Rus. Algorithmic Foundations of Robotics XI, 
Springer Tracts in Advanced Robotics (STAR), vol 107, page(s): 729-746, 2015.
```

<hr>

## Information Spaces

#### Shadow Information Space for Multi-Target Tracking (2008-2012)  

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

#### Cyber Detectives (2008-2011)  

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

