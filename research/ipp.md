<div style="text-align: right">
  <a href="https://scholar.google.com/citations?user=jkRa2LEAAAAJ&hl=en"><span style="color:blue">&nbsp;</span></a>
</div>

{% include research-topics.html %} 

<br />
## Informative Path Planning

### The Optimal Tourist Problem

{% include r-item.html 
   url="/media/otp-iros-15.png" 
   paperurl="/files/YuAslKarRus15IROS.pdf" 
   description="The Optimal Tourist Problem (OTP), named in the same spirit as the Traveling Salesperson Problem (TSP), formulates the problem in which a mobile sensing robot is tasked to travel among and gather intelligence at a set of spatially distributed point-of-interests (POIs). The quality of the information collected at each POI is characterized by some sensory (reward) function of time. With limited fuel, the robot must balance between spending time traveling to more POIs and performing time-consuming sensing activities at the visited POIs to maximize the overall reward. In a dual formulation, the robot may be required to acquire a minimum mount of reward with the least amount of time. We propose an anytime planning algorithm for solving these two NP-hard problems to arbitrary precision for arbitrary reward functions. Our algorithm is effective on large instances with tens to hundreds of POIs, as demonstrated with an extensive set of computational experiments. Besides mobile sensor scheduling, the algorithm also applies to automation scenarios such as intelligent and optimal itinerary planning, as the name implies. <br />
Note that OTP does not contain a stochastic element as the somewhat similar persistent monitoring formulation (stated below). It turns out that the non-stochastic nature actually makes OTP actually much harder. 
" %}

```
Anytime Planning of Optimal Schedules for a Mobile Sensing Robot. J. Yu, 
J. Aslam, S. Karaman, and D. Rus. 2015 IEEE/RSJ International Conference 
on Intelligent Robots and Systems (IROS 2015).
```

<hr />

### Optimal Patrolling Policy for Persistent Monitoring of Stochastic Events

{% include r-item.html 
   url="/media/persistent-icra-14.png" 
   paperurl="/files/YuKarRus15TOR.pdf" 
   description="We introduce a new mobile sensor scheduling problem involving a robot tasked to monitor several events occurring at spatially distributed locations. Of particular interest is the monitoring of transient events of stochastic nature, with applications ranging from natural phenomena (e.g., monitoring abnormal seismic activity around a volcano using a ground robot) to urban activities (e.g., monitoring early formations of traffic congestion using an aerial robot). Here, these stochastic arrival processes are modeled as an independent Poisson processes with various inter-arrival rates. <br/>

In monitoring such events, the robot seeks to: (i) maximize the number of events observed and (ii) minimize the delay between consecutive observations of events occurring at the same location. We are interested in finding a cyclic patrolling route that that optimizes these objectives in a balanced manner. To tackle the problem, first, assuming the cyclic ordering of stations is known, we prove the existence and uniqueness of the optimal solution, and show that the solution has desirable convergence rate and robustness. Our constructive proof also yields an efficient algorithm for computing the unique optimal solution with linear time complexity. The analysis remains valid when the cyclic order is unknown. We then provide a polynomial-time approximation scheme that computes for any $\varepsilon > 0$ a $(1+\varepsilon)$-optimal solution for the more general, NP-hard problem in which the order of the stations is unknown. " %}

```
Persistent Monitoring of Events with Stochastic Arrivals at Multiple Stations. 
J. Yu, S. Karaman, and D. Rus. IEEE Transactions on Robotics, 31(3), page(s): 
521-535, 2015.
```

<hr />
