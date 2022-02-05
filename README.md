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

# Code Explanation
#### Processes.h
```
class Process {
private:
    int pid, arrival_time, burst_time, completion_time, turnaround_time, waiting_time, response_time;
    int first_schedule, remaining_time;
public:
    Process() {}
    Process(int, int, int);
    int get_pid();
    int get_arrival_time();
    int get_burst_time();
    int get_RemTm();


    void set_complete_time(int);
    int get_complete_time();
    
    void set_turnaround_time(int);
    int get_turnaround_time();

    void set_waiting_time(int);
    int get_waiting_time();

    void set_response_time(int);
    int get_response_time();

    void set_first_schedule(int);
    int get_first_schedule();

    string getInfo();
    string getTotalInfo();
    void decrement_RemTm();
    ~Process() {}
};
```

#### Process_Creator.h
```
class Process_Creator {
private:
    int num_processes;
    Process *processes;
public:
    Process_Creator();
    int get_num_processes();
    Process *get_processes();
    ~Process_Creator();
};
```
#### Process_Creator.cpp
```
Process_Creator::Process_Creator() {
    srand(time(NULL));
    num_processes = 1 + (rand() % MAX_PROCESSES);
    processes = new Process[num_processes];
    // cout << "Number of processes: " << num_processes << endl;
    for(int i=0; i<num_processes; i++) {
        int id = i;
        int at = rand() % MAX_ARRIVAL_TIME;
        int bt = 1 + (rand() % MAX_ARRIVAL_TIME);
        // cout << "Process " << id << ": " << at << " " << bt << endl;
        processes[i] = Process(id, at, bt);
    }
    sort(processes, processes + num_processes, cmpAT);
}
```
#### Scheduler.h
```
bool cmpAT(Process p1, Process p2);

struct cmpRemTm
{
    bool operator()(Process p1, Process p2)
    {
        if (p1.get_RemTm() == p2.get_RemTm())
        {
            if (p1.get_arrival_time() == p2.get_arrival_time())
                return p1.get_pid() > p2.get_pid();
            return p1.get_arrival_time() > p2.get_arrival_time();
        }
        return p1.get_RemTm() > p2.get_RemTm();
    }
};

class Scheduler
{
public:
    vector<Process> FCFS_ready_queue;
    priority_queue<Process, vector<Process>, cmpRemTm> SRTF_ready_queue;
    queue<Process> RR_ready_queue;
    int tq;
    Process *processes;
    Scheduler() {}
    Scheduler(int, Process_Creator *, int = -1);
    ~Scheduler() {}
};
```

#### Simulator.h
```
class Simulator {
private:
    int simTime;
    int algorithm;
    int quantum;
    Process_Creator *pc;
    Scheduler *scheduler;
public:
    Simulator() {}
    Simulator(int, int, int=-1);
    void simulate();
    
private:
    void check_arrival(int &, int, ofstream &);
};
```

##### The above codes are of the header files of all the classes. 
The paremeterised constructor of Process class ` Process(int, int, int) ` has 3 paratermeters ` process_id, arrival time, burst time `.
` Process_Creator() ` The constructor of Process_Creator class creates random number of processes with random arrival time and burst time. And sort the process according to arrival time.
The paremeterised constructor of Scheduler class ` Scheduler(int, Process_Creator *, int = -1); ` has 3 paratermeters of which one is default for FCFS and SRTF as it has no use in these algorithms. The first parameter is algorithm type, 2nd parameter is Process_Creator so that processes can be accessed from scheduler class and 3rd is time quantum for round robin algorithm.
Simulator class has five data member 
```
    int simTime;
    int algorithm;
    int quantum;
    Process_Creator *pc;
    Scheduler *scheduler;
 ```
 
 Simulation time, algorithm, time qunatum and process_creator and scheduler. 
 The paremeterised constructor of Simulator class ` Simulator(int, int, int = -1); ` has 3 paratermeters of which one is default for FCFS and SRTF as it has no use in these algorithms. The first parameter is simulation time, 2nd parameter is algorithm type and 3rd is time quantum for round robin algorithm.
