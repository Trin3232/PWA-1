var d = new Date();
var update_year_text = document.getElementById("update-year-text");
if (update_year_text != null) {
  update_year_text.innerHTML = d.getFullYear();
}