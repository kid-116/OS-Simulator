# OS-Simulator
Developed as a coursework project. Basically, a website with simulations for different OS concepts.

## Deployed Website
[https://os-simulator.mehultodi.repl.co/](https://os-simulator.mehultodi.repl.co/)

## Running the Website
### Setting Up
- `cd` into `app`
- Execute `python -m venv venv` to setup a virtual environment
- Start the virtual environment by executing `venv/Scripts/activate`
- Install pip dependencies using `pip install -r ./requirements.txt`
### Running
- `cd` into `app`
- Start the virtual environment by executing `venv/Scripts/activate`
- Execute `flask run`
- Open `localhost:5000` in your browser (the port may be different for your system)

## Concepts Covered
- System Calls
- Process Scheduling
    - FCFC
    - SJF
    - SRTF
    - Priority
    - Round Robin
    - LJF
- Process Synchronization
    - Dining Philosopher
    - Producer Consumer
    - Reader Writer
    - Sleeping Barber
- Disk Scheduling
    - FCFC
    - SCAN
    - CSCAN
    - LOOK
    - CLOOK
    - SSTF
- Memory Management
    - MVT
        - Best Fit
        - Worst Fit
        - First Fit
    - MFT
        - Best Fit
        - Worst Fit
        - First Fit
- Page Replacement Algorithms
    - LRU
    - Optimal
    - FIFO
- File Allocation
    - Linked
    - Sequential
    - Indexed
- Deadlock
    - Banker's Algorithm