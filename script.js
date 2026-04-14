const timeElement = document.getElementById("dueDate");
const countdown = document.getElementById("countDown");
const todoStatus = document.getElementById("status")
const checkbox = document.getElementById("checkbox-input")


checkbox.addEventListener("change", () => {
  todoStatus.textContent = checkbox.checked ? "Done" : "Pending";

  checkbox.checked
    ? todoStatus.classList.add("done")
    : todoStatus.classList.remove("done");
});


function updateCountdown() {
  const targetDate = new Date(timeElement.dateTime);
  const now = new Date();

  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.textContent = "Overdue";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  
  let remainder;

  if (days > 0) {
  remainder = `${days} day${days !== 1 ? "s" : ""}`;
} else if (hours > 0) {
  remainder = `${hours} hour${hours !== 1 ? "s" : ""}`;
} else if (minutes > 0) {
  remainder = `${minutes} minute${minutes !== 1 ? "s" : ""}`;
} else {
  remainder = "less than a minute";
}

countdown.textContent = `Due in ${remainder}`;
}
updateCountdown();

setInterval(updateCountdown, 60000);