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
is a tight bound. The resulting algorithm is fast enough to plan distance <a href="/media/assign.png" target="_"><img src="media/assign.png" width="150" border="0" align="right" title="click for a more readable version"/></a> optimal paths for hundreds of robots in near real time, as we demonstrated 
with a <a href="https://arc.cs.rutgers.edu/434F4445.html" target="_">java applet application</a>. 
In a <a href="/files/YuLav13CDC.pdf" target="_">followup work</a>, we show that after initial paths are planned, path execution can be achieved using only local,  distance two communication between the robots. Recently, the graph-based 
results are extended to <a href="/files/SolYuZamHal15RSS.pdf" target="_">continuous domain</a> with similar optimality guarantees. A typical example here is illustrated in the figure to the right, in which many robots must move from the blue 
locations to the red locations with optimality assurance. More recently, we have further extended the work to <a href="/files/YuChuVou15TAC.pdf" target="_">continuous domains under a stochastic setting</a>, 
establishing that locally optimal behavior can give rise to near-optimal global behavior.

## Topics 

### Distance Optimal Target Assignment in Robotic Networks

{% include r-item.html 
   url="/media/tac-15.png" 
   paperurl="/files/YuChuVou15TAC.pdf" 
   description="We study the problem of multi-robot target assignment to minimize the total distance traveled by the robots until they all reach an equal number of static targets. In the first half of the paper, we present a necessary and sufficient condition under which true distance optimality can be achieved for robots with limited communication and target-sensing ranges. Moreover, we provide an explicit, non-asymptotic formula for computing the number of robots needed to achieve distance optimality in terms of the robots’ communication and target-sensing ranges with arbitrary guaranteed probabilities. The same bounds are also shown to be asymptotically tight. In the second half of the paper, we present suboptimal strategies for use when the number of robots cannot be chosen freely. Assuming first that all targets are known to all robots, we employ a hierarchical communication model in which robots communicate only with other robots in the same partitioned region. This hierarchical communication model leads to constant approximations of true distance-optimal solutions under mild assumptions. We then revisit the limited communication and sensing models. By combining simple rendezvous-based strategies with a hierarchical communication model, we obtain decentralized hierarchical strategies that achieve constant approximation ratios with respect to true distance optimality. Results of simulation show that the approximation ratio is as low as 1.4." %}

```
Target Assignment in Robotic Networks: Distance Optimality Guarantees and Hierarchical 
Strategies. J. Yu, S.-J. Chung, and P. G. Voulgaris. IEEE Transactions on Automatic 
Control, 60(2), page(s): 327-341, 2015.
```

<hr>

### Optimal Unlabled Multi-Robot Motion Planning in Continuous Domains

{% include r-item.html 
   url="/media/rss-15.png" 
   paperurl="/files/SolYuZamHal15RSS.pdf" 
   description="We study the problem of path planning for unlabeled (indistinguishable) unit-disc robots in a planar environment cluttered with polygonal obstacles. We introduce an algorithm which minimizes the total path length, i.e., the sum of lengths of the individual paths. Our algorithm is guaranteed to find a solution if one exists, or report that none exists otherwise. It runs in time $\tilde{O}(m^4 + m^2n^2)$, where $m$ is the number of robots and $n$ is the total complexity of the workspace. Moreover, the total length of the returned solution is at most $OPT+4m$, where $OPT$ is the optimal solution cost. To the best of our knowledge this is the first algorithm for the problem that has such guarantees. The algorithm has been implemented in an exact manner and we present experimental results that attest to its efficienc" %}

```
Motion Planning for Unlabeled Discs with Optimality Guarantees. K. Solovey, J. Yu, O. 
Zamir, and D. Halperin. 2015 Robotics: Science and Systems (RSS 2015). 
```

<hr>

### Optimal Unlabled Multi-Robot Motion Planning on Graphs

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

