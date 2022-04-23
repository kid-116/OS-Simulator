$(document).ready(function () {
    var canv = document.getElementById("can");
    var ctx = canv.getContext("2d");
    var used, next, remaining, allocations;
    var colors = new Array(200);
    var file_sizes = new Array(200);
    var file_names = new Array(200);
    var starts = new Array(200);
    var ends = new Array(200);
    var count = 0;
    var point = -1;
    var allocated;
    var memSize;
    var a = 0, b = 0;
    
    $('#find').click(function getSize() {
        memSize = document.getElementById("nof").value;
        if (memSize != "") {
            allocated = Array(memSize).fill(false);
            remaining = memSize;
            vis2 = document.getElementById("vis2");
            vis2.style.display = "block";
        }
        else {
            alert("Please enter valid size!");
        }
    });
    
    $('#add').click(function addFile() {
        var name = document.getElementById("file_name").value;
        var size = document.getElementById("file_size").value;
        size = parseInt(size);
        if (name != "" && size != "") {
            if (size > remaining) {
                alert("Cannot allocate!");
            }
            else {
                const allocations = []
                for (let i = 0; i < size; i++) {
                    while(true) {
                        const b = Math.floor(Math.random() * memSize)
                        if(allocated[b]) {
                            continue;
                        }
                        allocated[b] = true;
                        allocations.push(b);
                        break;
                    }
                }
                remaining -= size;
                showOutput(name, allocations);
            }
        }
        else {
            alert("Please enter all details!!");
        }
    });
    
    function showOutput(name, allocations) {
        const file = document.createElement('div');
        const fileName = document.createElement('p');
        fileName.textContent = name;
        file.append(fileName);
        const indexList = document.createElement('ul');
        for (var i = 0; i < allocations.length; i++) {
            const block = document.createElement('li');
            block.textContent = `${i} -> ${allocations[i]}`;
            indexList.append(block);
        }
        file.append(indexList);
        document.getElementById("idxd").append(file);
    }
});