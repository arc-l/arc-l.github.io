<div style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

{% include research-topics.html %} 

<br />

## Multi-Robot Motion Planning: Overview 

<iframe width="250" height="141" src="https://www.youtube.com/embed/vsEto_2E6eo" frameborder="0" allowfullscreen align="left" style="padding-right:4px;"></iframe>
Effectively coordinating the motion for a large number of robots or vehicles in crowded spaces is an important problem with applications to <a href="https://www.youtube.com/watch?v=3UxZDJ1HiPE" target="_">warehouse automation</a>, traffic routing, among others. Adapting a graph-theoretical approach, one can  show that feasibility tests can be completed in linear time and computing complete feasible solutions can be done in cubic time. The analysis boils down to the study of the structure of the <a href="https://en.wikipedia.org/wiki/Permutation_group" target="_">permutation groups</a> 
<a href="/media/fig-8.png" target="_"><img src="/media/fig-8.png" width="250" border="0" align="right" title="click for a more readable version"/></a>
induced by synchronous robot motions. For example, the figure to the right illustrates how the locations of two robots ($c_2$ and $c_5$) may be exchanged on a cycle using a limited number of moves. For more details, see <a href="/files/YuRus15STAR.pdf" target="_">this paper</a>. <br/>
However, computing optimal or near-optimal solutions for such problems, in terms of minimizing task completion time or traveled distance, proves to be highly challenging as a computational problem. This is due to the curse of dimensionality: each robot introduces at least a few degrees of freedom. For $n$ robots, the search space is then $O(n)$ dimensional, which quickly becomes prohibitive to explore. Indeed, we could readily establish that common time- and distance-based objectives are <a href="https://en.wikipedia.org/wiki/NP-hardness">NP-hard</a> to optimize on <a href="files/YuLav13AAAI.pdf" target="_">general graphs</a>, even <a href="files/Yu16RAL.pdf" target="_">planar ones</a>. Different objectives generally <a href="https://arxiv.org/pdf/1507.03289v1.pdf" target="_">cannot be optimized simultaneously</a>.    

On the other hand, because each robot mainly interacts with robots that are close by, decoupling of the search space is generally possible to some extent, unless the density of robots approaches the limit. Given the very high 
<a href="/media/network.png" target="_"><img src="/media/networks.png" width="250" border="0" align="left" title="click for a more readable version"/></a> 
dimensional search space, we take the approach of early discretization and work with an extracted graph structure. By 
<a href="files/YuLav13STAR.pdf" target="_">converting the problem into a multi-flow one</a> 
(see the figure to the left) and adapting a novel integer programming (ILP) based <a href="files/YuLav16TOR.pdf" target="_">solution scheme</a>, we are able to handle a broad spectrum of difficult problems, providing a leap in computational performance on multi-robot coordination problems. Using the graph-based method and an 
<a href="files/YuRus15ISRR.pdf" target="_">efficient discretization of continuous domains</a>, we allow extremely dense setups with up to 30+% of free space occupied by 
robots-our algorithms are capable of solving such instances within seconds for up to hundreds of robots while often ensuring 1.x-optimality (see the video). The source code of all current results can be found <a href="https://github.com/arc-l/optimal-mrpp-continuous" target="_">here</a>.  
<br>

## Topics

### Computing Optimal Solutions 

#### Solving Dense Continuous Problem with Provable Guarantees

{% include r-item.html 
   url="/media/chinta-wafr-18.png" 
   video="https://www.youtube.com/watch?v=2-QHESZ_p3E"
   paperurl="https://arxiv.org/pdf/1807.03347.pdf" 
   description="We push the limit in planning collision-free motions for routing uniform labeled discs in two dimensions. First, from a theoretical perspective, we show that the constant-factor time-optimal routing of labeled discs can be achieved using a polynomial-time algorithm with robot density over 50% in the limit (i.e., over half of the workspace may be occupied by the discs). Second, from a more practical standpoint, we provide a high performance algorithm that computes near-optimal (e.g., $1.x$) solutions under the same density setting." %}

```
Coordinating the Motion of Labeled Discs with Optimality Guarantees under Extreme 
Density. R. Chinta, S. D. Han and J. Yu. Algorithmic Foundations of Robotics XIII, 
Springer Proceedings in Advanced Robotics (SPAR), page(s): 817-834, 2020. 
```

<hr>

#### Toward Optimally Solving Continuous Problems

{% include r-item.html 
   url="/media/isrr-15.png" 
   code="https://github.com/arc-l/optimal-mrpp-continuous"
   paperurl="/files/YuRus15ISRR.pdf" 
   description="We present a centralized algorithmic framework for solving multirobot path planning problems in general, two-dimensional, continuous environments while minimizing globally the task completion time. The framework obtains high levels of effectiveness through the composition of an optimal discretization of the continuous environment and the subsequent fast, near-optimal resolution of the resulting discrete planning problem. This principled approach achieves orders of magnitudes better performance with respect to both speed and the supported robot density. For a wide variety of environments, our method is shown to compute globally near-optimal solutions for 50 robots in seconds with robots packed close to each other. In the extreme, the method can consistently solve problems with hundreds of robots that occupy over 30% of the free space. " %}

```
An Effective Algorithmic Framework for Near Optimal Multi-Robot Path Planning. J. Yu 
and D. Rus. Bicchi A., Burgard W. (eds), Robotics Research, vol 1, pp 495-511, 2018.
```

<hr>

#### Integer Programming Models and Heuristics


{% include r-item.html 
   url="/media/mrmp-tor-13.png" 
   code="https://github.com/arc-l/optimal-mrppg-journal"
   paperurl="/files/YuLav16TOR.pdf" 
   description="We study optimal multirobot path planning on graphs (MPP) over four minimization objectives: the makespan (last arrival time), the maximum (single-robot traveled) distance, the total arrival time, and the total distance. Having established previously that these objectives are distinct and NP-hard to optimize, in this paper, we focus on efficient algorithmic solutions for solving these optimal MPP problems. Toward this goal, we first establish a one-to-one solution mapping between MPP and a special type of multiflow network. Based on this equivalence and integer linear programming (ILP), we design novel and complete algorithms for optimizing over each of the four objectives. In particular, our exact algorithm for computing optimal makespan solutions is a first that is capable of solving extremely challenging problems with robot-vertex ratios as high as 100%. Then, we further improve the computational performance of these exact algorithms through the introduction of principled heuristics, at the expense of slight optimality loss. The combination of ILP model based algorithms and the heuristics proves to be highly effective, allowing the computation of $1.x$-optimal solutions for problems containing hundreds of robots, densely populated in the environment, often in just seconds. " %}

```
Optimal Multi-Robot Path Planning on Graphs: Complete Algorithms and Effective 
Heuristics. J. Yu and S. M. LaValle. IEEE Transactions on Robotics, 32(5), 
page(s): 1163 - 1177, 2016.
```

<hr>

#### Multi-Robot Motion Planning on Graphs and Network Flow

{% include r-item.html 
   url="/media/wafr-12.png" 
   paperurl="/files/YuLav13STAR.pdf" 
   description="We show that there is an intimate relation between the problem of multi-robot motion/formation planning and network flow. Using the time expansion technique (illustrated above), we can convert the problem of finding collision-free paths for multiple robots to a problem of flowing commodities through a network (we call this the time-expanded network). In retrospect, this is not very surprising: Robots traveling on a graph, when looked from both space and time, are just like commodities traveling on a network. Applying results from network flow literature, we obtain efficient algorithms for planning time optimal and distance optimal paths for indistinguishable robots (i.e. the goals are  permutation invariant). For the permutation invariant case, we also looked at the compatibility of multiple objectives. It turns out that three common objectives, last arrival time, average arrival time, and total distance, have a pairwise Pareto optimal structure." %}

```
Multi-agent Path Planning and Network Flow. J. Yu and S. M. LaValle. Algorithmic 
Foundations of Robotics X, Springer Tracts in Advanced Robotics (STAR), Springer 
Berlin/Heidelberg, vol 86, page(s): 157-173, 2013
```

<hr>

#### Spatio-Temporal Splitting Heuristics for Speeding up MRMP Algorithms

{% include r-item.html 
   url="/media/teng-icra-21.png" 
   video="https://youtu.be/w8wqnmuBKwU" 
   paperurl="https://arxiv.org/pdf/2103.14111.pdf" 
   description="We examine the application of spatio-temporal splitting heuristics to the MRMP problem in a graph-theoretic setting. Following the divide-and-conquer principle, we design multiple spatial and temporal splitting schemes that can be applied to any existing MRMP algorithm, in an orthogonal manner. The combination of a good baseline MRMP algorithm with a proper splitting heuristic proves highly effective, allowing the resolution of problems 10+ times than what is possible previously, as corroborated by extensive numerical evaluations. 5-15 times speedups are usually observed with little degradation to solution optimality." %}

```
Spatial and Temporal Splitting Heuristics for Multi-Robot Motion Planning. T. Guo, 
S. D. Han, and J. Yu. 2021 IEEE International Conference on Robotics and Automation 
(ICRA 2021).
```

<hr>

#### Path Diversification and Database-Driven Conflict Resolution Heuristics


{% include r-item.html 
   url="/media/ddm-ral-20.png" 
   video="https://youtu.be/0MUGrg5CphM" 
   paperurl="https://arxiv.org/pdf/1904.02598.pdf" 
   description="We propose a novel centralized and decoupled algorithm, DDM, for solving multi-robot path planning problems in grid graphs, targeting on-demand and automated warehouselike settings. Two settings are studied: a traditional one whose objective is to move a set of robots from their respective initial vertices to the goal vertices as quickly as possible, and a dynamic one which requires frequent re-planning to accommodate for goal configuration adjustments. DDM is enabled through two innovative heuristics, path diversification and optimal sub-problem solution databases, targeting two distinct phases of a decoupling-based planner. Path diversification allows the more effective use of the entire workspace for robot travel, solution databases facilitate the fast resolution of local path conflicts. " %}

```
DDM: Fast Near-Optimal Multi-Robot Path Planning using Diversified-Path and 
Optimal Sub-Problem Solution Database Heuristics. S. D. Han and J. Yu. IEEE 
Robotics and Automation Letters 5, no. 2 (2020): 1350-1357. 
```

<hr>

### Computational Complexity 

#### NP-Hardness on Planar Graphs 

{% include r-item.html 
   url="/media/hard-ral-16.png" 
   paperurl="/files/Yu16RAL.pdf" 
   description="—We study the computational complexity of optimally solving multirobot path planning problems on planar graphs. For four common time- and distance-based objectives, we show that the associated path optimization problems for multiple robots are all NP-complete, even when the underlying graph is planar. Establishing the computational intractability of optimal multirobot path planning problems on planar graphs has important practical implications. In particular, our result suggests the preferred approach toward solving such problems, when the number of robots is large, is to augment the planar environment to reduce the sharing of paths among robots traveling in opposite directions on those paths. Indeed, such efficiency boosting structures, such as highways and elevated intersections, are ubiquitous in robotics and transportation applications." %}

```
Intractability of Optimal Multi-Robot Path Planning on Planar Graphs. J. Yu. IEEE 
Robotics and Automation Letters, 1(1), page(s): 33-40, 2016.
```

#### NP-Hardness on General Graphs 

{% include r-item.html 
   url="/media/hard-aaai-13.png" 
   paperurl="https://arxiv.org/pdf/1507.03289.pdf" 
   description="We study the problem of optimal multi-robot path planning on graphs (MPP) over four distinct minimization objectives:
the total arrival time, the makespan (last arrival time), the total distance, and the maximum (single-robot traveled) distance.
On the structure side, we show that each pair of these four objectives induces a Pareto front and cannot always be optimized
simultaneously. Then, through reductions from 3SAT, we further establish that computation over each objective is an NP-hard task,
providing evidence that solving MPP optimally is generally intractable. " %}

```
Optimal Multi-Robot Path Planning on Graphs: Structure and Computational Complexity. 
J. Yu and S. M. LaValle. arXiv, 2015.
```

Initial AAAI-13 conference <a id="links" href="/files/YuLav13AAAI.pdf" target="_">paper</a>

```
Structure and Intractability of Optimal Multi-robot Path Planning on Graphs. J. Yu 
and S. M. LaValle. The Twenty-Seventh AAAI Conference on Artificial Intelligence, 2013.
```

<hr>

### Feasibility Issues

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

