# My-Website
This is my personal portfolio and is my first project on web development.

# PROCESS SCHEDULING IMPLEMENTATION

## Introduction
This is a project based on both OS and  OOPs. Process Scheduling Algorithms of OS are implentated using OOPs concepts.
C++ language is used for the implementation.

## Algorithm
The process scheduling algorithms that are implemented are -

1.    First-Come-First-Serve (FCFS) - First come first serve (FCFS) scheduling algorithm simply schedules the jobs according to their arrival time. The job which comes first in the ready queue will get the CPU first. 
2.    Shortest-Remaining-Time-First (SRTF) - In this, at the arrival of every process, the short term scheduler schedules the process with the least remaining burst time among the list of available processes and the running process.
3.    Round-Robin (RR) - Round Robin scheduling algorithm is one of the most popular scheduling algorithm which can actually be implemented in most of the operating systems. This is the preemptive version of first come first serve scheduling. The Algorithm focuses on Time Sharing. In this algorithm, every process gets executed in a cyclic way. A certain time slice is defined in the system which is called time quantum. Each process present in the ready queue is assigned the CPU for that time quantum, if the execution of the process is completed during that time then the process will terminate else the process will go back to the ready queue and waits for the next turn to complete the execution.
