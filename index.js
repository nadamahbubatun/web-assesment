function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
var total = 0;
function addToSidebar(button) {
  var sidebarList = document.getElementById("sidebarList");

  var cardBody = button.parentNode;
  var menu = cardBody.querySelector(".card-title").textContent;
  var hargaText = cardBody.querySelector(".card-text").textContent;
  var harga = parseInt(hargaText.replace("Rp.", "").replace(",", ""));

  var listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.textContent = menu + "- Rp." + harga.toLocaleString() + ".000";

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-light   btn-sm ms-2";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    deleteItem(this);
  };
  listItem.appendChild(deleteBtn);

  sidebarList.appendChild(listItem);

  total += harga;

  document.getElementById("totaldanpajak").textContent =
    "Total + Pajak Rp." + total.toLocaleString() + ".000";
}
function deleteItem(button) {
  var item = button.parentNode;
  var itemText = item.textContent;
  var harga = parseInt(itemText.match(/Rp\.(\d+)/)[1].replace(/\./g, ""));

  total -= harga;

  document.getElementById("totaldanpajak").textContent =
    "Total + Pajak Rp." + total.toLocaleString() + ".000";

  item.parentNode.removeChild(item);
}
function buy() {
  // Menghitung pajak 10%
  var pajak = 0.1 * total;

  // Menampilkan total dan pajak
  var totalWithTax = Math.floor(total + pajak);
  alert(
    "Total pembelian (termasuk pajak 10%): Rp." +
      totalWithTax.toLocaleString() +
      ".000"
  );

  // Reset total ke 0 setelah pembelian
  total = 0;

  // Menghapus semua item di sidebar
  var sidebarList = document.getElementById("sidebarList");
  sidebarList.innerHTML = "";

  // Memperbarui teks total
  document.getElementById("total").textContent = "Total : ";
}
