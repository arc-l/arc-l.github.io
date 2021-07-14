<div style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

{% include research-topics.html %} 

<br />
## Manipulating Many Objects

### Running Buffer Minimization

{% include r-item.html 
   url="/media/kai-rss-21.png" 
   readmore="/pages/kai-rss-21.html" 
   video="https://youtu.be/hbD-cumF_H4" 
   code="https://github.com/arc-l/running-buffer" 
   paperurl="https://arxiv.org/pdf/2105.06357.pdf" 
   description="For tabletop rearrangement problems with overhand grasps, storage space outside the tabletop workspace, or buffers, can temporarily hold objects which greatly facilitates the resolution of a given rearrangement task. This brings forth the natural question of how many running buffers are required so that certain classes of tabletop rearrangement problems are feasible. We examine the problem for both the labeled and the unlabeledsettings. We observe that finding the minimum number of running buffers (MRB) can be carried out on a dependency graph abstracted from a problem instance, and show that computing MRB on dependency graphs is NP-hard. The number of required running buffers may grow unbounded as the number of objects to be rearranged increases even for uniform cylinders. On the algorithmic side, we develop highly effective algorithms for finding MRB for both labeled and unlabeled tabletop rearrangement problems, scalable to over a hundred objects under very high object density. Employing these algorithms, empirical evaluations show that random labeled and unlabeled instances, which more closely mimics real-world setups, have much smaller MRBs." %}

```
On Minimizing the Number of Running Buffers for Tabletop Rearrangement. K. Gao,
S. W. Feng, and J Yu. 2021 Robotics: Science and Systems (RSS 2021).
```

<hr />

### Rearrangement on Lattices

{% include r-item.html 
   url="/media/rss-21.png" 
   readmore="/pages/rss-21.html" 
   video="https://youtu.be/LcI-Es5w5HI" 
   code="https://github.com/arc-l/lattice-rearrangement" 
   poster="/files/YU21RSS-P.pdf" 
   paperurl="https://arxiv.org/pdf/2105.05366.pdf" 
   description="We propose and study a class of rearrangement problems under a novel pick-n-swap prehensile manipulation model, in which a robotic manipulator, capable of carrying an item and making item swaps, is tasked to sort items stored in lattices of variable dimensions in a time-optimal manner. We systematically analyze the intrinsic optimality structure, which is fairly rich and intriguing, under different levels of item distinguishability (fully labeled, where each item has a unique label, or partially labeled, where multiple items may be of the same type) and different lattice dimensions. Focusing on the most practical setting of one and two dimensions, we develop low polynomial time cycle-following based algorithms that optimally perform rearrangements on 1D lattices under both fully- and partially-labeled settings. On the other hand, we show that rearrangement on 2D and higher dimensional lattices becomes computationally intractable to optimally solve. Despite their NP-hardness, we prove that efficient cycle-following based algorithms remain asymptotically optimal for 2D fully- and partially-labeled settings, in expectation, using the interesting fact that random permutations induce only a small number of cycles. We further improve these algorithms to provide 1.x-optimality when the number of items is small. Simulation studies corroborate the effectiveness of our algorithms." %}

```
Rearrangement on Lattices with Pick-n-Swaps: Optimality Structures and Efficient 
Algorithms. J. Yu. 2021 Robotics: Science and Systems (RSS 2021). 
```

<hr />

### Deep Interaction Prediction

{% include r-item.html 
   url="/media/dipn-icra-21.png"
   readmore="https://github.com/arc-l/dipn" 
   video="https://youtu.be/k_6B1iYS-_U" 
   code="https://github.com/arc-l/dipn" 
   paperurl="https://arxiv.org/pdf/2011.04692.pdf" 
   description="We propose a Deep Interaction Prediction Network (DIPN) for learning to predict complex interactions that ensue as a robot end-effector pushes multiple objects, whose physical properties, including size, shape, mass, and friction coefficients may be unknown a priori. DIPN “imagines” the effect of a push action and generates an accurate synthetic image of the predicted outcome. DIPN is shown to be sample efficient when trained in simulation or with a real robotic system. The high accuracy of DIPN allows direct integration with a grasp network, yielding a robotic manipulation system capable of executing challenging clutter removal tasks while being trained in a fully self-supervised manner. The overall network demonstrates intelligent behavior in selecting proper actions between push and grasp for completing clutter removal tasks and significantly outperforms the previous state-of-the-art. Remarkably, DIPN achieves even better performance on the real robotic hardware system than in simulation. " %}

```
DIPN: Deep Interaction Prediction Network with Application to Clutter Removal. 
B. Huang, S. D. Han, A. Boularias, and J. Yu. 2021 IEEE International Conference 
on Robotics and Automation (ICRA 2021).
```

<hr />

### Rubik Table and Stack Rearrangement 

{% include r-item.html 
   url="/media/rubik.png" 
   video="https://www.youtube.com/watch?v=-FSZBJegAPc" 
   paperurl="https://arxiv.org/pdf/2002.04979.pdf" 
   description="There are $n \ge 2$ stacks, each filled with $d$ items, and one empty stack. Every stack has capacity $d > 0$. A robot arm, in one stack operation (step), may pop one item from the top of a non-empty stack and subsequently push it onto a stack not at capacity. In a labeled problem, all $nd$ items are distinguishable and are initially randomly scattered in the $n$ stacks. The items must be rearranged using  pop-and-pushs so that in the end, the  $k^{\rm th}$ stack holds items $(k-1)d +1, \ldots, kd$, in that order, from the top to the bottom for all $1 \le k \le n$. In an unlabeled problem, the $nd$ items are of $n$ types of $d$ each. The goal is to rearrange items so that items 
of type $k$ are located in the $k^{\rm th}$ stack for all $1 \le k \le n$. In carrying out the rearrangement, a natural question is to find the least number of required pop-and-pushes.<br/><br/>
Our main contributions are: (1) an algorithm for restoring the order of $n^2$ items stored in an $n \times n$ table using only $2n$  column and row permutations, and its generalization, and (2) an algorithm with a guaranteed upper bound of $O(nd)$ steps for solving both versions of the stack rearrangement problem when $d \le \lceil cn \rceil$ for arbitrary fixed positive number $c$. In terms of the required number of steps, the labeled and unlabeled version have lower bounds $\Omega(nd + nd{\frac{\log d}{\log n}})$ and $\Omega(nd)$, respectively. " %}

```
On Rearrangement of Items Stored in Stacks. M. Szegedy and J. Yu. Algorithmic 
Foundations of Robotics XIV, Springer Proceedings in Advanced Robotics (SPAR), 
page(s): 518-833, 2021. Presented at WAFR 2020.
```

<hr />

### Stack Rearrangement

{% include r-item.html 
   url="/media/stack-ral-2018.png" 
   video="https://youtu.be/qOIT-lq5S6w" 
   paperurl="/files/HanStiBekYu18RAL.pdf" 
   description="This work studies rearrangement problems involving the sorting of robots or objects in stack-like containers, which can be accessed only from one side. Two scenarios are considered: one where every robot or object needs to reach a particular stack, and a setting in which each robot has a distinct position within a stack. In both cases, the goal is to minimize the number of stack removals that need to be performed. Stack rearrangement is shown to be intimately connected to pebble motion problems, a useful abstraction in multi-robot path planning. Through this connection, feasibility of stack rearrangement can be readily addressed. The paper continues to establish lower and upper bounds on optimality, which differ only by a logarithmic factor, in terms of stack removals. An algorithmic solution is then developed that produces suboptimal paths much quicker than a pebble motion solver. Furthermore, informed search-based methods are proposed for finding highquality solutions. The efficiency and desirable scalability of the
methods is demonstrated in simulation.
" %}

```
Efficient, High-Quality Stack Rearrangement. S. D. Han, N. Stiffler, K. Bekris, 
and J. Yu. IEEE Robotics and Automation Letters, 3(3), page(s): 1608-1615, 2018. 
```

<hr />

### Optimal Tabletop Rearrangement with Overhand Grasps

{% include r-item.html 
   url="/media/han-ijrr-2018.png" 
   video="https://youtu.be/Ub7QSDQz0Qk" 
   paperurl="/files/HanStiKonBekYu18IJRR.pdf" 
   description="This paper studies the underlying combinatorial structure of a class of object rearrangement problems, which appear frequently in applications. The problems involve multiple, similar-geometry objects placed on a flat, horizontal surface, where a robot can approach them from above and perform pickand-place operations to rearrange them. The paper considers both the case where the start and goal object poses overlap, and where they do not. For overlapping poses, the primary objective is to minimize the number of pick-and-place actions and then to minimize the distance traveled by the end-effector. For the non-overlapping case, the objective is solely to minimize the travel distance of the end-effector. While such problems do not involve all the complexities of general rearrangement, they remain computationally hard in both cases. This is shown through reductions from well-understood, hard combinatorial challenges to these rearrangement problems. The reductions are also shown to hold in the reverse direction, which enables the convenient application on rearrangement of well studied algorithms. These algorithms can be very efficient in practice despite the hardness results. The paper builds on these reduction results to propose an algorithmic pipeline for dealing with the rearrangement problems. Experimental evaluation, including hardware-based trials, shows that the proposed pipeline computes high-quality paths with regards to the optimization objectives. Furthermore, it exhibits highly desirable scalability as the number of objects increases in both the overlapping and non-overlapping setup" %}

```
Complexity Results and Fast Methods for Optimal Tabletop Rearrangement with 
Overhand Grasps. S. D. Han, N. Stiffler, A. Krontiris, K. Bekris, and J. Yu. 
The International Journal of Robotics Research 37, no. 13-14 (2018): 1775-1795.
```



