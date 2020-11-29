var id = 0;

function TableCreator(selector) {
    var table = this.table = document.querySelector(selector);

    function rowCreator(student, allowDeleting) {
        var tr = document.createElement("tr");
        tr.appendChild(cellCreator(student.name));
        tr.appendChild(cellCreator(student.surname));
        tr.appendChild(cellCreator(student.age));
        tr.appendChild(cellCreator(student.average, "average"));
        if (allowDeleting) {
            tr.appendChild(removeButtonCreator(tr));
        }
        else
            tr.appendChild(cellCreator(""));
        return tr;
    }

    function cellCreator(data, className) {
        var td = document.createElement("td");
        td.innerText = data;
        if (className) {
            td.className = className;
        }
        return td;
    }

    function removeButtonCreator(tr) {
        var button = document.createElement("button");
        var td = cellCreator("");
        button.type = submit;
        button.className = "deleteButton";
        button.innerHTML = "DELETE";
        button.id = `${id}`;
        id++;
        button.onclick = function() {
            tr.remove();
            student.splice(this.id, 1);
            averageCompute();
        };
        td.appendChild(button);
        return td;
    }

    return {
        addRow: function(student, allowDeleting) {
            table.appendChild(rowCreator(student, allowDeleting));
        },
        lastRowRemover: function() {
            table.removeChild(table.lastChild);
        }
    }
}