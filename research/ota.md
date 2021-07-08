<div style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

{% include research-topics.html %} 

<br />

## Optimal Target Assignement: Overview

<iframe width="250" height="141" src="https://www.youtube.com/embed/ldelQkjzPwA" frameborder="0" allowfullscreen align="left" style="padding-right:4px;"></iframe>
A special but rather important case in multi-robot coordination is when all robots are interchangeable. For example, consider the case of dispatching servicing robots with the same functionality. It does not matter which robot 
serves which request. In such cases, the coordination problem appear to become  more difficult at a first glance because it is not immediately clear which  robot should handle which task. As it turns out, the problem is in fact 
simpler because the 
<a href="/files/YuLav12CDC.pdf" target="_">existence of a natural ordering</a> which induces a <a href="https://en.wikipedia.org/wiki/Directed_acyclic_graph">DAG structure</a> in the planning domain. Starting with a graph-based problem, we 
<a href="files/YuLav12CDC.pdf" target="_">provide algorithmic solutions</a> that, through separating goal assignment and path planning/coordination, solving the assignemnt and coordination problem with a total running time of 
$O(n^2V)$, in which $n$ is the number of robots and $V$ is the number of vertices of the graph. We further show that distance optimal paths can also be scheduled with a completion (convergence) time of no more than $n + V - 1$, which 
is a tight bound. The resulting algorithm is fast enough to plan distance <a href="img/assign.png" target="_"><img src="img/assign.png" width="150" border="0" align="right" title="click for a more readable version"/></a> optimal paths for hundreds of robots in near real time, as we demonstrated 
with a <a href="https://arc.cs.rutgers.edu/434F4445.html" target="_">java applet application</a>. 
In a <a href="/files/YuLav13CDC.pdf" target="_">followup work</a>, we show that after initial paths are planned, path execution can be achieved using only local,  distance two communication between the robots. Recently, the graph-based 
results are extended to <a href="/files/SolYuZamHal15RSS.pdf" target="_">continuous domain</a> with similar optimality guarantees. A typical example here is illustrated in the figure to the right, in which many robots must move from the blue 
locations to the red locations with optimality assurance. More recently, we have further extended the work to <a href="/files/YuChuVol15TAC.pdf" target="_">continuous domains under a stochastic setting</a>, 
establishing that locally optimal behavior can give rise to near-optimal global behavior.

## Topics 

#### Optimally Solving Unlabled Multi-Robot Motion Planning Problems 

{% include r-item.html 
   url="/media/cdc-12.png" 
   video="https://www.youtube.com/watch?v=ldelQkjzPwA" 
   paperurl="/files/YuLav12CDC.pdf" 
   description="For multi-robot formation reconfiguration (i.e., permutation invariant multi-robot path planning), we observe that by separating goal assignment and path planning/coordination, we can obtain a faster algorithm for distance optimal multi-robot formation planning with a total running time of $O(n2V)$, in which $n$ is the number of robots and $V$ is the number of vertices of the graph. We show that distance optimal paths can also be scheduled with a completion (convergence) time of no more than $n + V - 1$, which is a tight bound. The resulting algorithm is fast enough to plan distance optimal paths for hundreds of robots in real time. " %}

```
Distance Optimal Formation Control on Graphs with a Tight Convergence Time Guarantee. 
J. Yu and S. M. LaValle. The 51st IEEE Conference on Decision and Control (CDC 2012).
```

<a id="links" href="/files/YuLav13CDC.pdf" target="_">paper</a>

```
Shortest Path Set Induced Vertex Ordering and its Application to Distributed Distance 
Optimal Formation Planning and Control on Graphs. J. Yu and S. M. LaValle. 52nd IEEE 
Conference on Decision and Control (CDC 2013).
```

<hr>

