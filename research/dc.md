<div style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

{% include research-topics.html %} 

<br />
## Distributed Consensus

### Consensus under Minimal Sensing and Quantized Control

<table border="0"  style="border: none!important; vertical-align:top;">
  <tr style="border: none!important;">
    <td width="200px" style="border: none!important;  vertical-align:top;">
      {% include fig.html url="/media/tac-12.png" description="Simulation showing that the rendezvous behavior of the 16 Dubins car vehicles depends on a single 'windshield' angle. Note that this simulation only deals with the key case of cyclic pursuit. Our work, on the other hand, handles arbitrary pursuit graph topology." %}  
    </td>
    <td style="border: none!important; vertical-align:top;">
       In this work, we study minimalism in sensing and control by considering a multi-vehicle system in which each vehicle is a Dubins car with a limited sensor that reports only the presence of another vehicle within some sector of its windshield. Using a simple quantized control law with three values, each vehicle tracks another vehicle (its target) assigned to it by maintaining that vehicle within this windshield sector. We use Lyapunov analysis to show that by acting autonomously in this way, the vehicles will achieve rendezvous given a connected initial assignment graph and the assumption that a vehicle and its target will merge into a single vehicle when they are sufficiently close. We then proceed to show that, by making the quantized control law slightly stronger, a connected initial assignment graph is not required and the sensing model can be weakened further. A distinguishing feature of our approach is that it does not involve state estimation or reconstruction. Our scenario thus provides an example in which an interesting task is performed with extremely coarse sensing and control, and without state estimation.
    </td>
  </tr>
</table>

```
Rendezvous without Coordinates. J. Yu, S. M. LaValle, and D. Liberzon. IEEE 
Transactions on Automatic Control, 57(2), page(s): 421-434, Feb 2012. 
```
