<div id="#object-manipulation" style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

{% include research-topics.html %}

<br />
## Page Under Construction - Check Back Later!

### Running Buffer Minimization for Tabletop Rearrangement

<table border="0"  style="border: none!important; vertical-align:top;">
  <tr style="border: none!important;">
    <td width="200px" style="border: none!important;  vertical-align:top;">
      {% include fig.html url="/media/kai-rss-21.png" description="" %}  
    </td>
    <td style="border: none!important; vertical-align:top;">
       For tabletop rearrangement problems with overhand grasps, storage space outside the tabletop workspace, or buffers, can temporarily hold objects which greatly facilitates
the resolution of a given rearrangement task. This brings forth the natural question of how many running buffers are required so that certain classes of tabletop rearrangement problems are feasible. We examine the problem for both the labeled and the unlabeledsettings. We observe that finding the minimum number of running buffers (MRB) can be carried out on a dependency graph abstracted from a problem instance, and show that computing MRB on dependency graphs is NP-hard. The number of required running buffers may grow unbounded as the number of objects to be rearranged increases even for uniform cylinders. On the algorithmic side, we develop highly effective algorithms for finding MRB for
both labeled and unlabeled tabletop rearrangement problems, scalable to over a hundred objects under very high object density. Employing these algorithms, empirical evaluations
show that random labeled and unlabeled instances, which more closely mimics real-world setups, have much smaller MRBs.
    </td>
  </tr>
</table>

### Rearrangement on Lattices with Pick-n-Swaps

<table border="0"  style="border: none!important; vertical-align:top;">
  <tr style="border: none!important;">
    <td width="200px" style="border: none!important;  vertical-align:top;">
      {% include fig.html url="/media/rss-21.png" description="" %}  
    </td>
    <td style="border: none!important; vertical-align:top;">
       We propose and study a class of rearrangement
problems under a novel pick-n-swap prehensile manipulation
model, in which a robotic manipulator, capable of carrying an
item and making item swaps, is tasked to sort items stored
in lattices of variable dimensions in a time-optimal manner.
We systematically analyze the intrinsic optimality structure,
which is fairly rich and intriguing, under different levels of
item distinguishability (fully labeled, where each item has a
unique label, or partially labeled, where multiple items may
be of the same type) and different lattice dimensions. Focusing
on the most practical setting of one and two dimensions, we
develop low polynomial time cycle-following based algorithms
that optimally perform rearrangements on 1D lattices under
both fully- and partially-labeled settings. On the other hand, we
show that rearrangement on 2D and higher dimensional lattices
becomes computationally intractable to optimally solve. Despite
their NP-hardness, we prove that efficient cycle-following based
algorithms remain asymptotically optimal for 2D fully- and
partially-labeled settings, in expectation, using the interesting
fact that random permutations induce only a small number
of cycles. We further improve these algorithms to provide
1.x-optimality when the number of items is small. Simulation
studies corroborate the effectiveness of our algorithms.
    </td>
  </tr>
</table>
