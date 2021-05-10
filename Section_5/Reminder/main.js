// Khai báo các biến
    let information = [];

// Các function cơ bản
    // Function kiểm tra
    function searchByInfo (info) {
        for (let i = 0; i < information.length; i++) {
          if (information[i].info === info) {
            return i;
          }
        }
      
        return -1;
      }

    // Function create
    function create (info, time) {
        if (searchByInfo(info) === -1) {
          information.push({
            info: info,
            time: time,
          });
        }
      }

    // Function remove
    function remove (info) {
        let informationIndex = searchByInfo(info);
      
        if (informationIndex !== -1) {
          information.splice(informationIndex, 1);
        }
      }

    // Function delete cho HTML
    function handleDelete (info) {
        remove(info.toString());
        printReminder(information);
      }

    // Function In thông tin
    function printReminder(information) {
        document.getElementById("information").innerHTML = "";
      
        for (let i = 0; i < information.length; i++) {
          document.getElementById("information").innerHTML += 
          `<li>
            <span>${information[i].info}: ${information[i].time}</span>
            <input type="checkbox" class="btn btn-dark">
            <button onclick="handleDelete(${information[i].info}) class="btn btn-secondary">Delete</button>
          </li>`;
        }
      }

// Chạy thực tế
function main() {
  // Create
  document.getElementById("create-button").addEventListener('click', function() {
    let info = document.getElementById("create-info").value;
    let time = document.getElementById("create-time").value;

    create(info, time);
    printReminder(information);
  });

}

main();