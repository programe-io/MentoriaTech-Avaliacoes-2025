// app.js - Lógica do TaskApp

// ========== Storage ========== 
class TaskStorage {
    constructor(key = 'tasks') {
        this.key = key;
    }

    getTasks() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    }

    saveTasks(tasks) {
        localStorage.setItem(this.key, JSON.stringify(tasks));
    }

    addTask(task) {
        const tasks = this.getTasks();
        const newTask = {
            id: Date.now(),
            text: task,
            completed: false,
            createdAt: new Date().toLocaleString('pt-BR')
        };
        tasks.push(newTask);
        this.saveTasks(tasks);
        return newTask;
    }

    deleteTask(id) {
        let tasks = this.getTasks();
        tasks = tasks.filter(t => t.id !== id);
        this.saveTasks(tasks);
    }

    toggleTask(id) {
        let tasks = this.getTasks();
        tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
        this.saveTasks(tasks);
    }
}

// ========== UI Manager ========== 
class UIManager {
    constructor() {
        this.taskInput = document.getElementById('taskInput');
        this.tasksList = document.getElementById('tasksList');
        this.btnAddTask = document.getElementById('btnAddTask');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.taskStats = document.getElementById('taskStats');
        this.currentFilter = 'todas';
    }

    renderTasks(tasks) {
        this.tasksList.innerHTML = '';
        
        const filtered = this.filterTasks(tasks);
        
        if (filtered.length === 0) {
            this.tasksList.innerHTML = '<li class="empty-state">Nenhuma tarefa encontrada</li>';
            return;
        }

        filtered.forEach(task => {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.innerHTML = `
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} 
                       data-id="${task.id}">
                <span class="task-text">${this.escapeHtml(task.text)}</span>
                <button class="task-delete" data-id="${task.id}">Deletar</button>
            `;
            this.tasksList.appendChild(li);
        });
    }

    filterTasks(tasks) {
        switch(this.currentFilter) {
            case 'ativas':
                return tasks.filter(t => !t.completed);
            case 'completas':
                return tasks.filter(t => t.completed);
            default:
                return tasks;
        }
    }

    updateStats(tasks) {
        const total = tasks.length;
        const completed = tasks.filter(t => t.completed).length;
        const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

        if (total === 0) {
            this.taskStats.style.display = 'none';
            return;
        }

        this.taskStats.style.display = 'block';
        document.getElementById('totalTasks').textContent = total;
        document.getElementById('completedTasks').textContent = completed;
        document.getElementById('progressPercent').textContent = percent;
        document.getElementById('progressFill').style.width = percent + '%';
    }

    updateFilterCounts(tasks) {
        const total = tasks.length;
        const active = tasks.filter(t => !t.completed).length;
        const completed = tasks.filter(t => t.completed).length;

        document.querySelectorAll('.filter-btn').forEach(btn => {
            const filter = btn.getAttribute('data-filter');
            let count = total;
            if (filter === 'ativas') count = active;
            if (filter === 'completas') count = completed;
            btn.textContent = `${filter.charAt(0).toUpperCase() + filter.slice(1)} (${count})`;
        });
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    clearInput() {
        this.taskInput.value = '';
        this.taskInput.focus();
    }

    getInputValue() {
        return this.taskInput.value.trim();
    }
}

// ========== Toast Notificações ========== 
class Toast {
    static show(message, type = 'success', duration = 3000) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.className = `toast show ${type}`;
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }
}

// ========== App Main ========== 
class TaskApp {
    constructor() {
        this.storage = new TaskStorage();
        this.ui = new UIManager();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadTasks();
        this.setupNavigation();
        this.setupBackToTop();
        this.setupContactForm();
    }

    setupEventListeners() {
        // Adicionar tarefa
        this.ui.btnAddTask.addEventListener('click', () => this.addTask());
        this.ui.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });

        // Filtros
        this.ui.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.ui.filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.ui.currentFilter = e.target.getAttribute('data-filter');
                this.loadTasks();
            });
        });

        // Deletar e Toggle tarefas (delegação)
        this.ui.tasksList.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            if (e.target.classList.contains('task-checkbox')) {
                this.toggleTask(id);
            } else if (e.target.classList.contains('task-delete')) {
                this.deleteTask(id);
            }
        });
    }

    setupNavigation() {
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove active de todos
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                e.target.classList.add('active');
                // Fecha menu em mobile
                navMenu.classList.remove('active');
            });
        });

        // Atualizar link ativo ao fazer scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section, header');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });
    }

    setupBackToTop() {
        const backToTop = document.getElementById('backToTop');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    setupContactForm() {
        const form = document.getElementById('contactForm');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simulando envio
            console.log('Enviando:', { name, email, message });
            Toast.show(`Obrigado ${name}! Sua mensagem foi enviada.`, 'success');
            form.reset();
        });
    }

    addTask() {
        const taskText = this.ui.getInputValue();

        if (taskText === '') {
            Toast.show('Digite uma tarefa!', 'error');
            return;
        }

        if (taskText.length > 100) {
            Toast.show('Tarefa muito longa (máx. 100 caracteres)', 'error');
            return;
        }

        this.storage.addTask(taskText);
        this.ui.clearInput();
        this.loadTasks();
        Toast.show('Tarefa adicionada!', 'success');
    }

    deleteTask(id) {
        if (confirm('Deseja deletar esta tarefa?')) {
            this.storage.deleteTask(id);
            this.loadTasks();
            Toast.show('Tarefa deletada!', 'success');
        }
    }

    toggleTask(id) {
        this.storage.toggleTask(id);
        this.loadTasks();
    }

    loadTasks() {
        const tasks = this.storage.getTasks();
        this.ui.renderTasks(tasks);
        this.ui.updateStats(tasks);
        this.ui.updateFilterCounts(tasks);
    }
}

// ========== Inicialização ========== 
document.addEventListener('DOMContentLoaded', () => {
    new TaskApp();
    console.log('TaskApp inicializado com sucesso!');
});
