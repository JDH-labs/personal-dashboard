const TASKS_KEY = "dashboard.tasks";
const NOTES_KEY = "dashboard.notes";

const greetingEl = document.querySelector("#greeting");
const dateEl = document.querySelector("#date");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const empty = document.querySelector("#task-empty");
const summary = document.querySelector("#task-summary");
const progress = document.querySelector("#progress");
const progressBar = document.querySelector("#progress-bar");
const notes = document.querySelector("#notes");
const notesStatus = document.querySelector("#notes-status");

let tasks = loadTasks();
let filter = "all";
let notesTimer = 0;

function loadTasks() {
  try {
    const parsed = JSON.parse(localStorage.getItem(TASKS_KEY) || "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((task) => task && typeof task.text === "string");
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function greetingFor(hour) {
  if (hour < 5) return "Доброй ночи";
  if (hour < 12) return "Доброе утро";
  if (hour < 18) return "Добрый день";
  return "Добрый вечер";
}

function tick() {
  const now = new Date();
  hoursEl.textContent = pad(now.getHours());
  minutesEl.textContent = pad(now.getMinutes());
  secondsEl.textContent = pad(now.getSeconds());
  greetingEl.textContent = greetingFor(now.getHours());
  const formatted = now.toLocaleDateString("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  dateEl.textContent = formatted.charAt(0).toLocaleUpperCase("ru-RU") + formatted.slice(1);
  document.title = `${pad(now.getHours())}:${pad(now.getMinutes())} — Личная панель`;
  setTimeout(tick, 1000 - now.getMilliseconds());
}

function visibleTasks() {
  if (filter === "active") return tasks.filter((task) => !task.done);
  if (filter === "done") return tasks.filter((task) => task.done);
  return tasks;
}

function emptyMessage() {
  if (tasks.length === 0) return "Список пуст. Добавьте первую задачу.";
  if (filter === "active") return "Активных задач нет.";
  if (filter === "done") return "Пока ничего не отмечено.";
  return "";
}

function renderTasks() {
  const shown = visibleTasks();
  list.replaceChildren();

  for (const task of shown) {
    const item = document.createElement("li");
    item.className = task.done ? "task is-done" : "task";

    const toggle = document.createElement("button");
    toggle.className = "check";
    toggle.type = "button";
    toggle.setAttribute("aria-pressed", String(task.done));
    toggle.setAttribute(
      "aria-label",
      task.done ? "Отметить как невыполненную" : "Отметить выполненной"
    );
    toggle.dataset.action = "toggle";
    toggle.dataset.id = task.id;

    const text = document.createElement("p");
    text.className = "task-text";
    text.textContent = task.text;

    const remove = document.createElement("button");
    remove.className = "delete";
    remove.type = "button";
    remove.dataset.action = "delete";
    remove.dataset.id = task.id;
    remove.setAttribute("aria-label", `Удалить «${task.text}»`);
    remove.textContent = "×";

    item.append(toggle, text, remove);
    list.append(item);
  }

  const doneCount = tasks.filter((task) => task.done).length;
  const total = tasks.length;
  const percent = total === 0 ? 0 : Math.round((doneCount / total) * 100);

  if (total === 0) {
    summary.textContent = "Пока пусто";
  } else if (doneCount === total) {
    summary.textContent = "Всё сделано";
  } else {
    summary.textContent = `${doneCount} из ${total} выполнено`;
  }

  progress.setAttribute("aria-valuenow", String(percent));
  progressBar.style.width = `${percent}%`;

  const message = emptyMessage();
  empty.hidden = shown.length > 0;
  empty.textContent = message;
}

function createId() {
  if (crypto.randomUUID) return crypto.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  tasks.unshift({ id: createId(), text, done: false });
  saveTasks();
  input.value = "";
  renderTasks();
  input.focus();
});

list.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const { action, id } = button.dataset;
  const task = tasks.find((item) => item.id === id);
  if (!task) return;

  if (action === "toggle") task.done = !task.done;
  if (action === "delete") tasks = tasks.filter((item) => item.id !== id);

  saveTasks();
  renderTasks();
});

document.querySelector(".filters").addEventListener("click", (event) => {
  const chip = event.target.closest("[data-filter]");
  if (!chip) return;

  filter = chip.dataset.filter;
  for (const button of document.querySelectorAll("[data-filter]")) {
    const active = button === chip;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  }
  renderTasks();
});

notes.value = localStorage.getItem(NOTES_KEY) || "";

notes.addEventListener("input", () => {
  notesStatus.textContent = "Сохранение…";
  clearTimeout(notesTimer);
  notesTimer = setTimeout(() => {
    localStorage.setItem(NOTES_KEY, notes.value);
    notesStatus.textContent = "Сохранено";
  }, 350);
});

tick();
renderTasks();
